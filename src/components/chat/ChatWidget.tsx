import { useEffect, useRef, useState } from "react";
import {
  MessageCircle,
  X,
  Send,
  Plus,
  Trash2,
  ArrowLeft,
  Bot,
  User,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import {
  useChatThreads,
  type ChatMessage,
  type ChatThread,
} from "@/hooks/useChatThreads";

const CHAT_URL = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/chat`;

function titleFrom(text: string) {
  const t = text.trim().replace(/\s+/g, " ");
  return t.length > 40 ? `${t.slice(0, 40)}…` : t || "New chat";
}

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [view, setView] = useState<"list" | "chat">("chat");
  const [input, setInput] = useState("");
  const [streaming, setStreaming] = useState(false);
  const [draft, setDraft] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const {
    threads,
    activeThread,
    activeId,
    setActiveId,
    createThread,
    deleteThread,
    updateThread,
  } = useChatThreads();

  const messages = activeThread?.messages ?? [];

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, draft, open, view]);

  useEffect(() => {
    if (open && view === "chat") {
      inputRef.current?.focus();
    }
  }, [open, view, activeId]);

  const ensureThread = () => {
    if (activeId && activeThread) return activeId;
    return createThread();
  };

  const send = async () => {
    const text = input.trim();
    if (!text || streaming) return;

    const id = ensureThread();
    setInput("");

    const userMsg: ChatMessage = { role: "user", content: text };
    updateThread(id, (t) => ({
      ...t,
      title: t.messages.length === 0 ? titleFrom(text) : t.title,
      updatedAt: Date.now(),
      messages: [...t.messages, userMsg],
    }));

    const history = [
      ...(threads.find((t) => t.id === id)?.messages ?? []),
      userMsg,
    ].map((m) => ({ role: m.role, content: m.content }));

    setStreaming(true);
    setDraft("");

    try {
      const res = await fetch(CHAT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
        },
        body: JSON.stringify({ messages: history }),
      });

      if (!res.ok || !res.body) {
        const err = await res.json().catch(() => ({}));
        toast.error(err.error || "Couldn't reach the assistant. Try again.");
        setStreaming(false);
        return;
      }

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let assistant = "";
      let buffer = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split("\n");
        buffer = lines.pop() ?? "";
        for (const line of lines) {
          const trimmed = line.trim();
          if (!trimmed.startsWith("data:")) continue;
          const data = trimmed.slice(5).trim();
          if (data === "[DONE]") continue;
          try {
            const json = JSON.parse(data);
            const delta = json.choices?.[0]?.delta?.content;
            if (delta) {
              assistant += delta;
              setDraft(assistant);
            }
          } catch {
            // partial json, ignore
          }
        }
      }

      updateThread(id, (t) => ({
        ...t,
        updatedAt: Date.now(),
        messages: [...t.messages, { role: "assistant", content: assistant }],
      }));
    } catch {
      toast.error("Something went wrong talking to the assistant.");
    } finally {
      setDraft("");
      setStreaming(false);
      inputRef.current?.focus();
    }
  };

  const startNew = () => {
    createThread();
    setView("chat");
  };

  return (
    <>
      {/* Launcher */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          aria-label="Open assistant"
          className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-transform hover:scale-105"
        >
          <MessageCircle className="h-6 w-6" />
        </button>
      )}

      {open && (
        <div className="fixed bottom-5 right-5 z-50 flex h-[560px] max-h-[80vh] w-[min(380px,calc(100vw-2.5rem))] flex-col overflow-hidden rounded-2xl border bg-background shadow-2xl">
          {/* Header */}
          <div className="flex items-center gap-2 border-b bg-card px-4 py-3">
            {view === "chat" ? (
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8"
                onClick={() => setView("list")}
                aria-label="Show chats"
              >
                <ArrowLeft className="h-4 w-4" />
              </Button>
            ) : (
              <Bot className="ml-1 h-5 w-5 text-primary" />
            )}
            <div className="flex-1">
              <p className="text-sm font-semibold leading-none">KarmBot</p>
              <p className="text-xs text-muted-foreground">
                {view === "chat" ? "Here to help you navigate" : "Your chats"}
              </p>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8"
              onClick={() => setOpen(false)}
              aria-label="Close assistant"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          {view === "list" ? (
            <div className="flex flex-1 flex-col overflow-hidden">
              <div className="p-3">
                <Button onClick={startNew} className="w-full gap-2" size="sm">
                  <Plus className="h-4 w-4" /> New chat
                </Button>
              </div>
              <ScrollArea className="flex-1 px-3 pb-3">
                {threads.length === 0 && (
                  <p className="px-1 py-6 text-center text-sm text-muted-foreground">
                    No chats yet. Start a new one!
                  </p>
                )}
                <div className="flex flex-col gap-1">
                  {threads.map((t: ChatThread) => (
                    <div
                      key={t.id}
                      className={cn(
                        "group flex items-center gap-2 rounded-lg px-3 py-2 transition-colors hover:bg-accent",
                        t.id === activeId && "bg-accent",
                      )}
                    >
                      <button
                        className="flex-1 truncate text-left text-sm"
                        onClick={() => {
                          setActiveId(t.id);
                          setView("chat");
                        }}
                      >
                        {t.title}
                      </button>
                      <button
                        aria-label="Delete chat"
                        className="text-muted-foreground opacity-0 transition-opacity hover:text-destructive group-hover:opacity-100"
                        onClick={() => deleteThread(t.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </div>
          ) : (
            <>
              <div ref={scrollRef} className="flex-1 space-y-4 overflow-y-auto p-4">
                {messages.length === 0 && !draft && (
                  <div className="flex flex-col items-center gap-2 pt-8 text-center">
                    <Bot className="h-10 w-10 text-primary" />
                    <p className="text-sm font-medium">Hi, I'm KarmBot 👋</p>
                    <p className="text-xs text-muted-foreground">
                      Ask me how to find products, sign in, or get around KarmKosh.
                    </p>
                  </div>
                )}
                {messages.map((m, i) => (
                  <MessageBubble key={i} message={m} />
                ))}
                {draft && (
                  <MessageBubble message={{ role: "assistant", content: draft }} />
                )}
                {streaming && !draft && (
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Bot className="h-4 w-4" /> Thinking…
                  </div>
                )}
              </div>

              <div className="border-t p-3">
                <div className="flex items-end gap-2">
                  <textarea
                    ref={inputRef}
                    rows={1}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" && !e.shiftKey) {
                        e.preventDefault();
                        send();
                      }
                    }}
                    placeholder="Ask anything about the app…"
                    className="max-h-28 flex-1 resize-none rounded-lg border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
                  />
                  <Button
                    size="icon"
                    onClick={send}
                    disabled={streaming || !input.trim()}
                    aria-label="Send message"
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
}

function MessageBubble({ message }: { message: ChatMessage }) {
  const isUser = message.role === "user";
  return (
    <div className={cn("flex gap-2", isUser && "flex-row-reverse")}>
      <div
        className={cn(
          "flex h-7 w-7 shrink-0 items-center justify-center rounded-full",
          isUser ? "bg-primary text-primary-foreground" : "bg-muted text-foreground",
        )}
      >
        {isUser ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
      </div>
      <div
        className={cn(
          "max-w-[78%] whitespace-pre-wrap rounded-2xl px-3 py-2 text-sm",
          isUser
            ? "bg-primary text-primary-foreground"
            : "bg-muted text-foreground",
        )}
      >
        {message.content}
      </div>
    </div>
  );
}
