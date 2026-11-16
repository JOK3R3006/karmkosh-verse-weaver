import { useEffect, useRef, useState } from "react";
import {
  MessageCircle,
  X,
  Send,
  Plus,
  Trash2,
  ArrowLeft,
  Sparkles,
  Heart,
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

const QUICK_PROMPTS = [
  "How do I find products?",
  "How do I sign in?",
  "How do I become a creator?",
  "Tell me about pricing",
];

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

  const send = async (override?: string) => {
    const text = (override ?? input).trim();
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
          className="group fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-brand-rose to-brand-gold text-primary-foreground shadow-[0_12px_36px_-8px_hsl(var(--brand-rose)/0.6)] ring-1 ring-white/20 transition-transform hover:scale-110"
        >
          <MessageCircle className="h-6 w-6" />
          <span className="absolute right-0 top-0 flex h-3.5 w-3.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-rose opacity-75" />
            <span className="relative inline-flex h-3.5 w-3.5 rounded-full bg-white" />
          </span>
        </button>
      )}

      {open && (
        <div className="fixed bottom-5 right-5 z-50 flex h-[580px] max-h-[82vh] w-[min(390px,calc(100vw-2.5rem))] flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#120b0f]/95 text-foreground shadow-[0_20px_60px_rgba(0,0,0,0.6)] backdrop-blur-xl">
          {/* Header */}
          <div className="flex items-center gap-3 border-b border-white/[0.08] bg-gradient-to-r from-brand-rose/15 via-brand-gold/5 to-transparent px-4 py-3">
            {view === "chat" && threads.length > 0 ? (
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 text-foreground/70 hover:bg-white/10 hover:text-foreground"
                onClick={() => setView("list")}
                aria-label="Show chats"
              >
                <ArrowLeft className="h-4 w-4" />
              </Button>
            ) : (
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-brand-rose to-brand-gold shadow-md">
                <Heart className="h-4 w-4 fill-primary-foreground text-primary-foreground" />
              </div>
            )}
            <div className="flex-1">
              <p className="flex items-center gap-1 text-sm font-semibold leading-none">
                KarmBot
                <Sparkles className="h-3 w-3 text-brand-gold" />
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                {view === "chat" ? "Your KarmKosh guide" : "Your chats"}
              </p>
            </div>
            {view === "chat" && (
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 text-foreground/70 hover:bg-white/10 hover:text-foreground"
                onClick={startNew}
                aria-label="New chat"
              >
                <Plus className="h-4 w-4" />
              </Button>
            )}
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 text-foreground/70 hover:bg-white/10 hover:text-foreground"
              onClick={() => setOpen(false)}
              aria-label="Close assistant"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          {view === "list" ? (
            <div className="flex flex-1 flex-col overflow-hidden">
              <div className="p-3">
                <Button
                  onClick={startNew}
                  className="w-full gap-2 bg-gradient-to-r from-brand-rose to-brand-gold text-primary-foreground hover:opacity-90"
                  size="sm"
                >
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
                        "group flex items-center gap-2 rounded-xl px-3 py-2.5 transition-colors hover:bg-white/[0.05]",
                        t.id === activeId && "bg-white/[0.07] ring-1 ring-brand-rose/30",
                      )}
                    >
                      <button
                        className="flex-1 truncate text-left text-sm text-white/90"
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
                  <div className="flex flex-col items-center gap-3 pt-6 text-center">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-rose to-brand-gold shadow-lg">
                      <Heart className="h-7 w-7 fill-primary-foreground text-primary-foreground" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold">Hi, I'm KarmBot 👋</p>
                      <p className="mt-1 text-xs text-muted-foreground">
                        Ask me how to find products, sign in, or get around KarmKosh.
                      </p>
                    </div>
                    <div className="mt-2 flex flex-col gap-2">
                      {QUICK_PROMPTS.map((q) => (
                        <button
                          key={q}
                          onClick={() => send(q)}
                          className="rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-xs text-foreground/85 transition-colors hover:border-brand-rose/40 hover:text-foreground"
                        >
                          {q}
                        </button>
                      ))}
                    </div>
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
                    <span className="flex gap-1">
                      <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-brand-rose [animation-delay:-0.3s]" />
                      <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-brand-rose [animation-delay:-0.15s]" />
                      <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-brand-rose" />
                    </span>
                    KarmBot is thinking…
                  </div>
                )}
              </div>

              <div className="border-t border-white/[0.08] bg-black/20 p-3">
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
                    placeholder="Ask anything about KarmKosh…"
                    className="max-h-28 flex-1 resize-none rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/70 outline-none transition-colors focus:border-brand-rose/50 focus:ring-2 focus:ring-brand-rose/20"
                  />
                  <Button
                    size="icon"
                    onClick={() => send()}
                    disabled={streaming || !input.trim()}
                    aria-label="Send message"
                    className="h-10 w-10 shrink-0 rounded-xl bg-gradient-to-br from-brand-rose to-brand-gold text-primary-foreground hover:opacity-90 disabled:opacity-40"
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
          "flex h-8 w-8 shrink-0 items-center justify-center rounded-full shadow-sm",
          isUser
            ? "bg-gradient-to-br from-brand-rose to-brand-gold text-primary-foreground"
            : "bg-white/10 text-brand-rose",
        )}
      >
        {isUser ? <User className="h-4 w-4" /> : <Heart className="h-4 w-4 fill-brand-rose text-brand-rose" />}
      </div>
      <div
        className={cn(
          "max-w-[78%] whitespace-pre-wrap rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed",
          isUser
            ? "rounded-br-sm bg-gradient-to-br from-brand-rose to-brand-gold text-primary-foreground"
            : "rounded-bl-sm bg-white/[0.07] text-foreground/90",
        )}
      >
        {message.content}
      </div>
    </div>
  );
}
