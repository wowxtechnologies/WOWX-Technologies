import { useState, useRef, useEffect } from "react";
import { MessageSquare, Send, Sparkles, Bot, User, Loader2, ArrowRight } from "lucide-react";

interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: string;
}

export default function AIConsultantWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "welcome",
      role: "assistant",
      content: "Hello! I am **WOWX AI Consultant**. 🚀\n\nI can help you explore modern web development options, compare our pricing tiers, calculate project timelines, and outline the ideal digital solution to grow your business in Morena and globally! What are we crafting today?",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  // Auto scroll
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  const handleSendMessage = async (textToSend: string) => {
    const text = textToSend.trim();
    if (!text) return;

    const userMsg: ChatMessage = {
      id: `user_${Date.now()}`,
      role: "user",
      content: text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputMessage("");
    setIsLoading(true);

    try {
      const chatHistoryForBackend = messages.map((m) => ({
        role: m.role,
        content: m.content,
      }));

      const res = await fetch("/api/consult", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: text,
          chatHistory: [...chatHistoryForBackend, { role: "user", content: text }],
        }),
      });

      const data = await res.json();

      const assistantMsg: ChatMessage = {
        id: `assistant_${Date.now()}`,
        role: "assistant",
        content: data.reply || "I am here to assist you. What can I help you build next?",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages((prev) => [...prev, assistantMsg]);
    } catch (e) {
      console.error("AI consult fetch failure:", e);
      // Fallback response
      const fallbackMsg: ChatMessage = {
        id: `assistant_${Date.now()}`,
        role: "assistant",
        content: "Our servers are experiencing heavy traffic, but WOWX Technologies is ready to build your custom platform! You can reach our team instantly via phone or WhatsApp at **+91 9479627447** or email us at **wowxtechnologies@gmail.com** to receive a free professional calculation within 30 minutes! 🌐",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, fallbackMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const selectSuggestion = (option: string) => {
    handleSendMessage(option);
  };

  return (
    <>
      {/* Mini Floating Button */}
      {!isOpen && (
        <button
          id="ai-consultant-open-btn"
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white rounded-full shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] cursor-pointer group transition-all duration-300"
        >
          <div className="relative flex items-center justify-center">
            <Sparkles className="w-5 h-5 animate-pulse text-cyan-200" />
            <span className="absolute inline-flex h-2 w-2 rounded-full bg-cyan-100 opacity-75 -top-1 -right-1 animate-ping"></span>
          </div>
          <span className="font-semibold text-sm tracking-wide hidden sm:inline-block">
            WOWX AI Consultant
          </span>
        </button>
      )}

      {/* Chat Windows Portal */}
      {isOpen && (
        <div
          id="ai-consultant-chat-window"
          className="fixed bottom-6 right-6 z-50 w-[92vw] sm:w-[420px] h-[550px] bg-slate-900/90 backdrop-blur-xl border border-slate-700/80 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.6)] flex flex-col overflow-hidden"
        >
          {/* Active Gradient Border Effect at Top of Portal */}
          <div className="h-1 w-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600"></div>

          {/* Header */}
          <div className="flex items-center justify-between p-4 bg-slate-950/80 border-b border-slate-800">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center shadow-[0_0_10px_rgba(6,182,212,0.3)]">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-slate-100 flex items-center gap-1.5">
                  WOWX AI Core
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse block"></span>
                </h4>
                <p className="text-xs text-slate-400">Interactive Digital Scout</p>
              </div>
            </div>
            <button
              id="ai-consultant-close-btn"
              onClick={() => setIsOpen(false)}
              className="p-1.5 hover:bg-slate-850 rounded-lg text-slate-400 hover:text-slate-200 cursor-pointer transition-colors"
            >
              <span className="sr-only">Close Chat</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x w-5 h-5"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
            </button>
          </div>

          {/* Message List Grid */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-slate-800">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-3 max-w-[85%] ${
                  msg.role === "user" ? "ml-auto flex-row-reverse" : ""
                }`}
              >
                {/* Avatar Icon */}
                <div
                  className={`w-7 h-7 rounded-md flex items-center justify-center shrink-0 text-white ${
                    msg.role === "user"
                      ? "bg-purple-600 shadow-md"
                      : "bg-slate-800 border border-slate-700"
                  }`}
                >
                  {msg.role === "user" ? (
                    <User className="w-4 h-4" />
                  ) : (
                    <Bot className="w-4 h-4 text-cyan-400" />
                  )}
                </div>

                {/* Bubble Container */}
                <div className="space-y-1">
                  <div
                    className={`p-3 rounded-xl text-sm leading-relaxed whitespace-pre-line ${
                      msg.role === "user"
                        ? "bg-purple-600/95 text-white font-medium rounded-tr-none"
                        : "bg-slate-800/90 text-slate-200 border border-slate-750 rounded-tl-none font-sans"
                    }`}
                  >
                    {/* Render highlights if any */}
                    {msg.content}
                  </div>
                  <span className="text-[10px] text-slate-500 block px-1">
                    {msg.timestamp}
                  </span>
                </div>
              </div>
            ))}

            {/* Loading Indicator */}
            {isLoading && (
              <div className="flex gap-3 max-w-[80%]">
                <div className="w-7 h-7 rounded-md bg-slate-800 border border-slate-700 flex items-center justify-center shrink-0">
                  <Bot className="w-4 h-4 text-cyan-400 animate-pulse" />
                </div>
                <div className="bg-slate-800/50 p-3 rounded-xl border border-slate-750 rounded-tl-none flex items-center gap-2">
                  <Loader2 className="w-4 h-4 text-cyan-400 animate-spin" />
                  <span className="text-xs text-slate-400 italic">Formulating custom estimate...</span>
                </div>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          {/* Quick interactive suggestions */}
          {messages.length === 1 && !isLoading && (
            <div className="px-4 py-2 bg-slate-950/40 border-t border-slate-800/40 space-y-1.5 shrink-0">
              <span className="text-[11px] font-semibold text-slate-400 tracking-wider uppercase block mb-1">
                Scoping Shortcuts:
              </span>
              <div className="flex flex-wrap gap-1.5 max-h-[100px] overflow-y-auto">
                <button
                  onClick={() => selectSuggestion("What is included in Plan ₹1499?")}
                  className="px-2.5 py-1 text-xs bg-slate-800/80 hover:bg-slate-700 border border-slate-700 rounded-full text-cyan-200 text-left hover:text-white cursor-pointer transition-colors duration-200"
                >
                  Plan ₹1,499 Features
                </button>
                <button
                  onClick={() => selectSuggestion("I need an E-Commerce shop, which plan fits?")}
                  className="px-2.5 py-1 text-xs bg-slate-800/80 hover:bg-slate-700 border border-slate-700 rounded-full text-cyan-200 text-left hover:text-white cursor-pointer transition-colors duration-200"
                >
                  Best E-Commerce Setup
                </button>
                <button
                  onClick={() => selectSuggestion("Where is WOWX Technologies based?")}
                  className="px-2.5 py-1 text-xs bg-slate-800/80 hover:bg-slate-700 border border-slate-700 rounded-full text-purple-200 text-left hover:text-white cursor-pointer transition-colors duration-200"
                >
                  Office Location (Morena)
                </button>
              </div>
            </div>
          )}

          {/* Form Capture Scoping Submit */}
          <form
            id="ai-consultant-msg-form"
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage(inputMessage);
            }}
            className="p-3 bg-slate-950/80 border-t border-slate-800 flex items-center gap-2 shrink-0"
          >
            <input
              id="ai-consultant-chat-input"
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Ask anything about plans, design, or timeline..."
              className="flex-1 px-3 py-2 bg-slate-900 border border-slate-700 rounded-xl text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-500"
              disabled={isLoading}
            />
            <button
              id="ai-consultant-send-btn"
              type="submit"
              disabled={isLoading || !inputMessage.trim()}
              className="p-2.5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl hover:from-cyan-400 hover:to-blue-500 disabled:opacity-40 disabled:hover:from-cyan-500 disabled:hover:to-blue-600 cursor-pointer flex items-center justify-center transition-all duration-200 shadow-md"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
