import { useEffect, useRef, useState } from "react";
import { MessageCircle, Send, Sparkles, X } from "lucide-react";
import { Link } from "react-router-dom";

/**
 * Floating concierge chatbot — bottom-right.
 *
 * Visibility rules (per request):
 *   - Hidden during the hero on first load.
 *   - Reveals after 3s OR after the user has scrolled past 15% of the page,
 *     whichever happens first.
 *
 * The bubble exposes a small "hint" pill that fades in once on first reveal,
 * then collapses after a short interval or on user interaction.
 *
 * The actual AI backend is intentionally stubbed: a placeholder reply is
 * shown so the UI is shippable. When the user is ready, this component can
 * be wired to a Lovable AI edge function trained on the site's content.
 */

type Message = {
  role: "user" | "assistant";
  content: string;
  cta?: { label: string; to: string };
};

const CONTACT_REPLY: Message = {
  role: "assistant",
  content:
    "Grazie per il tuo messaggio. Per una risposta puntuale ti invitiamo a contattarci direttamente: un avvocato del team ti risponderà al più presto.",
  cta: { label: "Vai alla pagina Contatti", to: "/contatti" },
};

export const ChatWidget = () => {
  const [revealed, setRevealed] = useState(false);
  const [open, setOpen] = useState(false);
  const [hintVisible, setHintVisible] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Scrivi un messaggio",
    },
    {
      role: "assistant",
      content:
        "Benvenuto nello Studio Legale Accarino. Siamo qui per orientarti tra aree di pratica, procedure e contatti.",
    },
  ]);
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  // Reveal: 3s timer OR 15% scroll, whichever first.
  useEffect(() => {
    if (revealed) return;

    const timer = window.setTimeout(() => setRevealed(true), 3000);

    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (max <= 0) return;
      const ratio = window.scrollY / max;
      if (ratio >= 0.15) setRevealed(true);
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("scroll", onScroll);
    };
  }, [revealed]);

  // Show hint shortly after reveal; auto-dismiss after a few seconds.
  useEffect(() => {
    if (!revealed || open) return;
    const sessionShown = sessionStorage.getItem("studio.chat-hint-shown");
    if (sessionShown) return;
    const showT = window.setTimeout(() => setHintVisible(true), 400);
    const hideT = window.setTimeout(() => {
      setHintVisible(false);
      sessionStorage.setItem("studio.chat-hint-shown", "1");
    }, 9000);
    return () => {
      window.clearTimeout(showT);
      window.clearTimeout(hideT);
    };
  }, [revealed, open]);

  // Auto-scroll messages.
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, open]);

  const dismissHint = () => {
    setHintVisible(false);
    sessionStorage.setItem("studio.chat-hint-shown", "1");
  };

  const send = () => {
    const text = input.trim();
    if (!text) return;
    setMessages((m) => [...m, { role: "user", content: text }]);
    setInput("");
    window.setTimeout(() => {
      setMessages((m) => [...m, CONTACT_REPLY]);
    }, 600);
  };

  if (!revealed) return null;

  return (
    <div className="fixed bottom-5 right-5 z-[60] flex flex-col items-end gap-3">
      {/* Hint pill */}
      {hintVisible && !open && (
        <div className="relative max-w-[260px] bg-background border hairline shadow-xl px-4 py-3 animate-fade-in">
          <span aria-hidden className="absolute top-0 left-0 w-2.5 h-2.5 border-t border-l border-gold" />
          <span aria-hidden className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b border-r border-gold" />
          <button
            onClick={dismissHint}
            aria-label="Chiudi suggerimento"
            className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-primary text-primary-foreground flex items-center justify-center"
          >
            <X className="w-3 h-3" />
          </button>
          <p className="text-[10px] uppercase tracking-[0.22em] text-gold-deep font-semibold flex items-center gap-1.5">
            <Sparkles className="w-3 h-3" />
            Assistente
          </p>
          <p className="mt-1 text-[13px] text-primary leading-snug font-serif">
            Hai una domanda sul tuo caso? Sono qui per orientarti.
          </p>
          {/* Tail */}
          <span
            aria-hidden
            className="absolute -bottom-1.5 right-6 w-3 h-3 bg-background border-r border-b hairline rotate-45"
          />
        </div>
      )}

      {/* Floating launcher */}
      {!open && (
        <button
          onClick={() => {
            setOpen(true);
            dismissHint();
          }}
          aria-label="Apri chat con l'assistente dello studio"
          className="group relative w-14 h-14 rounded-full bg-primary text-gold flex items-center justify-center shadow-2xl hover:scale-105 transition-transform animate-fade-in"
        >
          {/* Gold ring */}
          <span aria-hidden className="absolute inset-0 rounded-full border border-gold/40 group-hover:border-gold transition-colors" />
          {/* Live pulse */}
          <span aria-hidden className="absolute -top-0.5 -right-0.5 w-3 h-3">
            <span className="absolute inline-flex w-full h-full rounded-full bg-live/50 animate-live-pulse" />
            <span className="relative inline-flex w-3 h-3 rounded-full bg-live border-2 border-primary" />
          </span>
          {/* Placeholder avatar — replace with uploaded image */}
          <MessageCircle className="w-5 h-5" strokeWidth={1.75} />
        </button>
      )}

      {/* Chat panel */}
      {open && (
        <div className="relative w-[340px] sm:w-[380px] h-[520px] bg-background border hairline shadow-2xl flex flex-col animate-fade-in">
          {/* Gold corners */}
          <span aria-hidden className="absolute top-0 left-0 w-3 h-3 border-t border-l border-gold" />
          <span aria-hidden className="absolute top-0 right-0 w-3 h-3 border-t border-r border-gold" />
          <span aria-hidden className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-gold" />
          <span aria-hidden className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-gold" />

          {/* Header */}
          <header className="flex items-center justify-between gap-3 px-5 py-4 border-b hairline bg-primary text-primary-foreground">
            <div className="flex items-center gap-3 min-w-0">
              <span className="relative flex items-center justify-center w-9 h-9 rounded-full bg-gold/15 text-gold flex-shrink-0">
                <MessageCircle className="w-4 h-4" strokeWidth={1.75} />
                <span aria-hidden className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5">
                  <span className="absolute inline-flex w-full h-full rounded-full bg-live/50 animate-live-pulse" />
                  <span className="relative inline-flex w-2.5 h-2.5 rounded-full bg-live border-2 border-primary" />
                </span>
              </span>
              <div className="min-w-0">
                <p className="text-[10px] uppercase tracking-[0.22em] text-gold font-semibold">
                  Assistente Studio
                </p>
                <p className="text-[11px] text-background/70 truncate">
                  Online · risposta in pochi secondi
                </p>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              aria-label="Chiudi chat"
              className="p-1.5 text-background/70 hover:text-gold transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </header>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto px-5 py-5 space-y-4">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] px-4 py-2.5 text-[13px] leading-relaxed ${
                    m.role === "user"
                      ? "bg-primary text-primary-foreground"
                      : "bg-surface-container-low text-primary border hairline font-serif"
                  }`}
                >
                  {m.content}
                  {m.cta && (
                    <Link
                      to={m.cta.to}
                      onClick={() => setOpen(false)}
                      className="mt-3 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-gold-deep font-semibold font-sans border-b border-gold/60 hover:border-gold-deep transition-colors"
                    >
                      {m.cta.label}
                      <span aria-hidden>→</span>
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              send();
            }}
            className="border-t hairline p-3 flex items-center gap-2"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Scrivi un messaggio…"
              className="flex-1 bg-transparent px-3 py-2.5 text-sm text-primary placeholder:text-muted-foreground focus:outline-none"
            />
            <button
              type="submit"
              disabled={!input.trim()}
              aria-label="Invia"
              className="w-9 h-9 flex items-center justify-center bg-primary text-gold hover:bg-primary-glow disabled:opacity-40 transition-colors"
            >
              <Send className="w-4 h-4" strokeWidth={1.75} />
            </button>
          </form>
        </div>
      )}
    </div>
  );
};