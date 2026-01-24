import React, { useState, useRef, useEffect } from "react";

type Msg = { from: "user" | "bot"; text: string };



export default function StickyLeadChat() {
    const [open, setOpen] = useState(false);

    // NEW messages + input

    const [messages, setMessages] = useState<Msg[]>([
        { from: "bot", text: "Hey! What can I help you with?" }
    ]);

    const [input, setInput] = useState("");

    // auto scroll to bottom

    const listRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!open) return;
        listRef.current?.scrollTo({ top: listRef.current.scrollHeight });
    }, [messages, open]);


    function send() {
        const text = input.trim();
        if (!text) return;

        setMessages((m) => [...m, { from: "user", text }]);
        setInput("");

        window.setTimeout(() => {
            setMessages((m) => [
                ...m,
                { from: "bot", text: "Got it." }
            ]);
        }, 250);
    }

    function onKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
        if (e.key === "Enter") send();
        if (e.key === "Escape") setOpen(false);
    }

    return (
        <div
            style={{
                position: "fixed",
                right: 18,
                bottom: 18,
                zIndex: 9999,
                fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, Arial",
            }}
        >
            {/* Floating button */}
            {!open && (
                <button
                    onClick={() => setOpen(true)}
                    aria-label="Open chat"
                    style={{
                        width: 52,
                        height: 52,
                        borderRadius: 999,
                        border: "1px solid rgba(0,0,0,0.12)",
                        background: "white",
                        boxShadow: "0 10px 30px rgba(0,0,0,0.12)",
                        cursor: "pointer",
                        display: "grid",
                        placeItems: "center",
                        userSelect: "none",
                    }}
                >
                    💬
                </button>
            )}

            {/* Panel */}
            {open && (
                <div
                    role="dialog"
                    aria-label="Chat"
                    style={{
                        width: 320,
                        height: 420,
                        borderRadius: 16,
                        border: "1px solid rgba(0,0,0,0.12)",
                        background: "white",
                        boxShadow: "0 16px 40px rgba(0,0,0,0.16)",
                        overflow: "hidden",
                        display: "flex",
                        flexDirection: "column",
                    }}
                >
                    {/* Header */}
                    <div
                        style={{
                            height: 56,
                            padding: "0 12px",
                            borderBottom: "1px solid rgba(0,0,0,0.08)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            gap: 10,
                        }}
                    >
                        <div style={{ fontWeight: 650, fontSize: 14 }}>Quick help</div>

                        <button
                            onClick={() => setOpen(false)}
                            aria-label="Close chat"
                            style={{
                                border: "1px solid rgba(0,0,0,0.10)",
                                background: "white",
                                borderRadius: 10,
                                padding: "6px 10px",
                                cursor: "pointer",
                                fontSize: 12,
                            }}
                        >
                            ✕
                        </button>
                    </div>

                    {/* Body (empty for now) */}
                    <div style={{ flex: 1, padding: 12, overflow: "auto" }}>
                        <div style={{ fontSize: 13, opacity: 0.7 }}>
                            (Messages will go here next.)
                        </div>
                    </div>

                    {/* Input (not wired yet) */}
                    <div style={{ padding: 12, borderTop: "1px solid rgba(0,0,0,0.08)" }}>
                        <div style={{ display: "flex", gap: 8 }}>
                            <input
                                value={input}
                                onChange={(e)=>setInput(e.target.value)}
                                placeholder="Type a message…"
                                style={{
                                    flex: 1,
                                    height: 40,
                                    borderRadius: 12,
                                    border: "1px solid rgba(0,0,0,0.14)",
                                    padding: "0 12px",
                                    fontSize: 13,
                                    outline: "none",
                                }}
                            />
                            <button
                                style={{
                                    height: 40,
                                    borderRadius: 12,
                                    border: "1px solid rgba(0,0,0,0.14)",
                                    background: "white",
                                    padding: "0 12px",
                                    cursor: "pointer",
                                    fontSize: 13,
                                    fontWeight: 650,
                                }}
                            >
                                Send
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
