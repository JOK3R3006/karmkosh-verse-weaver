import { useCallback, useEffect, useState } from "react";

export type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

export type ChatThread = {
  id: string;
  title: string;
  updatedAt: number;
  messages: ChatMessage[];
};

const STORAGE_KEY = "karmbot_threads_v1";

function newId() {
  return `t_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 8)}`;
}

function loadThreads(): ChatThread[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function useChatThreads() {
  const [threads, setThreads] = useState<ChatThread[]>(() => loadThreads());
  const [activeId, setActiveId] = useState<string | null>(() => {
    const initial = loadThreads();
    return initial.length > 0 ? initial[0].id : null;
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(threads));
    } catch {
      // ignore quota errors
    }
  }, [threads]);

  const createThread = useCallback(() => {
    const thread: ChatThread = {
      id: newId(),
      title: "New chat",
      updatedAt: Date.now(),
      messages: [],
    };
    setThreads((prev) => [thread, ...prev]);
    setActiveId(thread.id);
    return thread.id;
  }, []);

  const deleteThread = useCallback((id: string) => {
    setThreads((prev) => {
      const next = prev.filter((t) => t.id !== id);
      setActiveId((cur) => (cur === id ? (next[0]?.id ?? null) : cur));
      return next;
    });
  }, []);

  const updateThread = useCallback(
    (id: string, updater: (t: ChatThread) => ChatThread) => {
      setThreads((prev) =>
        prev
          .map((t) => (t.id === id ? updater(t) : t))
          .sort((a, b) => b.updatedAt - a.updatedAt),
      );
    },
    [],
  );

  const activeThread = threads.find((t) => t.id === activeId) ?? null;

  return {
    threads,
    activeThread,
    activeId,
    setActiveId,
    createThread,
    deleteThread,
    updateThread,
  };
}
