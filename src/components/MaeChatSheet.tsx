import { useState, useRef, useEffect } from 'react'
import maeLogo from '../assets/icons/mae-flower-icon.svg'

// ─── Tokens ───────────────────────────────────────────────────────────────────
const GREEN = '#29422a'
const BORDER = 'rgba(138,116,103,0.2)'
const INK = '#2d2d2a'
const MUTED = '#6b6660'
const BG = '#f8f6f2'

// ─── Types ────────────────────────────────────────────────────────────────────
type MessageRole = 'mae' | 'user'
type Message = { id: string; role: MessageRole; text: string; time: string }
type ChatSession = { id: string; date: string; preview: string; turns: number; topic: string }

// ─── Seed data ────────────────────────────────────────────────────────────────
const INITIAL_MESSAGES: Message[] = [
  {
    id: 'm1',
    role: 'mae',
    text: "Good morning, Clara. What's on your mind today? I'm here to help you reflect — on your roles, your habits, or anything you're trying to make sense of.",
    time: '9:02 am',
  },
]

const ARCHIVE: ChatSession[] = [
  {
    id: 'c1',
    date: 'Mon, Apr 28',
    preview: 'Which role have I been neglecting the most?',
    turns: 6,
    topic: 'Role balance',
  },
  {
    id: 'c2',
    date: 'Thu, Apr 24',
    preview: 'Am I getting enough sleep to be present in my roles?',
    turns: 4,
    topic: 'Lifestyle habits',
  },
  {
    id: 'c3',
    date: 'Tue, Apr 22',
    preview: 'Help me see how my week went as a parent.',
    turns: 8,
    topic: 'Parent role',
  },
  {
    id: 'c4',
    date: 'Fri, Apr 18',
    preview: 'I feel like I keep putting myself last. Is that showing in my data?',
    turns: 5,
    topic: 'Self role',
  },
]

const SUGGESTIONS = [
  'Which roles am I spending most time in?',
  'How have my habits been this week?',
  'Which role needs more attention right now?',
]

// ─── Mae typing indicator ─────────────────────────────────────────────────────
function TypingDots() {
  return (
    <div className="flex items-center gap-[5px]" style={{ padding: '4px 2px' }}>
      {[0, 1, 2].map(i => (
        <div
          key={i}
          style={{
            width: 6,
            height: 6,
            borderRadius: '50%',
            background: GREEN,
            animation: `dotPulse 1.4s ${i * 0.2}s infinite ease-in-out`,
          }}
        />
      ))}
    </div>
  )
}

// ─── Chat bubble ──────────────────────────────────────────────────────────────
function Bubble({ msg }: { msg: Message }) {
  const isMae = msg.role === 'mae'
  return (
    <div
      className="flex flex-col"
      style={{
        alignItems: isMae ? 'flex-start' : 'flex-end',
        animation: 'fadeUpIn 320ms cubic-bezier(0.22, 1, 0.36, 1) both',
      }}
    >
      {isMae && (
        <div className="flex items-center gap-[6px]" style={{ marginBottom: 6, marginLeft: 2 }}>
          <div
            className="flex items-center justify-center rounded-full"
            style={{ width: 20, height: 20, background: 'rgba(41,66,42,0.12)' }}
          >
            <img src={maeLogo} alt="" width={11} height={11} />
          </div>
          <span
            className="font-sans font-medium uppercase"
            style={{ fontSize: 9, letterSpacing: '1.3px', color: GREEN, opacity: 0.75 }}
          >
            Mae
          </span>
          {/* Apple Intelligence badge */}
          <div
            className="flex items-center gap-[3px] rounded-pill px-[6px]"
            style={{
              height: 16,
              background: 'rgba(0,0,0,0.04)',
              border: '1px solid rgba(0,0,0,0.07)',
            }}
          >
            <svg width="8" height="8" viewBox="0 0 10 10" fill="none">
              <circle cx="5" cy="5" r="4" stroke="rgba(107,102,96,0.5)" strokeWidth="1.2" />
              <path d="M3.5 5.5L4.5 6.5L6.5 3.5" stroke="rgba(107,102,96,0.5)" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span style={{ fontSize: 8, color: MUTED, fontFamily: 'DM Sans, sans-serif', letterSpacing: '0.3px' }}>
              Apple Intelligence
            </span>
          </div>
        </div>
      )}

      <div
        style={{
          maxWidth: '82%',
          padding: isMae ? '14px 16px' : '13px 16px',
          borderRadius: isMae ? '4px 20px 20px 20px' : '20px 4px 20px 20px',
          background: isMae ? 'rgba(41,66,42,0.07)' : '#fffffe',
          border: isMae ? '1px solid rgba(41,66,42,0.14)' : `1px solid ${BORDER}`,
        }}
      >
        <p
          className="font-lora"
          style={{
            fontSize: 15,
            lineHeight: '24px',
            color: INK,
            letterSpacing: '-0.1px',
          }}
        >
          {msg.text}
        </p>
      </div>

      <span
        className="font-mono"
        style={{ fontSize: 9, color: 'rgba(107,102,96,0.45)', marginTop: 5, letterSpacing: '0.3px', fontWeight: 300 }}
      >
        {msg.time}
      </span>
    </div>
  )
}

// ─── Archive session card ─────────────────────────────────────────────────────
function ArchiveCard({ session }: { session: ChatSession }) {
  return (
    <button
      className="flex items-center justify-between w-full rounded-[20px] text-left"
      style={{
        background: '#fffffe',
        border: `1px solid ${BORDER}`,
        padding: '16px 18px',
      }}
    >
      <div className="flex flex-col gap-[6px]" style={{ flex: 1, paddingRight: 12 }}>
        <div className="flex items-center gap-2">
          <span
            className="font-inter font-medium uppercase"
            style={{ fontSize: 8, letterSpacing: '1.1px', color: MUTED }}
          >
            {session.date}
          </span>
          <div
            className="rounded-pill px-[7px]"
            style={{
              height: 16,
              background: 'rgba(41,66,42,0.08)',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <span style={{ fontSize: 8, color: GREEN, fontFamily: 'DM Sans, sans-serif', fontWeight: 500, letterSpacing: '0.4px' }}>
              {session.topic}
            </span>
          </div>
        </div>
        <p
          className="font-lora"
          style={{ fontSize: 14, lineHeight: '21px', color: INK, letterSpacing: '-0.1px', fontStyle: 'italic' }}
        >
          "{session.preview}"
        </p>
        <span
          className="font-sans font-normal"
          style={{ fontSize: 11, color: MUTED, fontVariationSettings: "'opsz' 9" }}
        >
          {session.turns} exchanges
        </span>
      </div>
      <svg width="7" height="12" viewBox="0 0 7 12" fill="none">
        <path d="M1 1l5 5-5 5" stroke="rgba(138,116,103,0.45)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  )
}

// ─── Mae response logic ───────────────────────────────────────────────────────
function getMaeResponse(userText: string): string {
  const lower = userText.toLowerCase()

  if (lower.includes('role') && (lower.includes('most') || lower.includes('time') || lower.includes('spend'))) {
    return "Looking at your moments this week, you've been most present as a **Professional** (about 38% of captured moments), followed by **Parent** (29%) and **Self** (18%). Your Creative and Friend roles have had less attention. Does that feel true to how the week felt?"
  }
  if (lower.includes('habit') || lower.includes('lifestyle') || lower.includes('sleep') || lower.includes('exercise')) {
    return "Based on your moments, you've had 3 mornings with movement this week — that's up from last week. Sleep patterns are harder to read, but your late-evening moments often mention tiredness. Would you like to talk about what's making rest harder?"
  }
  if (lower.includes('neglect') || lower.includes('attention') || lower.includes('needs more')) {
    return "Your Creative role hasn't had a moment captured in 9 days, and your last intention there was marked incomplete. That gap often means something's being squeezed out by higher-urgency roles. What would even a small creative moment look like this week?"
  }
  if (lower.includes('intention') || lower.includes('progress')) {
    return "You have 7 active intentions across your roles. 3 are on track (Morning routine, Weekly one-on-one time, Sunday calls). Portfolio Redesign and Watercolor practice haven't had recent moments. Would you like to revisit those, or let them rest for now?"
  }
  if (lower.includes('pattern')) {
    return "One thing I notice: your most meaningful moments tend to happen on Sunday mornings and Wednesday evenings. They're rarely planned — they emerge. That's worth protecting. Is there anything that typically gets in the way of those windows?"
  }

  return "That's a good question to sit with. Tell me a bit more — what prompted it? I can look at your moments and intentions to help you see a pattern."
}

// ─── Main component ───────────────────────────────────────────────────────────
export default function MaeChatSheet({ onClose }: { onClose: () => void }) {
  const [tab, setTab] = useState<'chat' | 'archive'>('chat')
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES)
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, isTyping])

  function sendMessage(text: string) {
    if (!text.trim()) return
    const now = new Date()
    const timeStr = now.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true }).toLowerCase()

    const userMsg: Message = { id: `u${Date.now()}`, role: 'user', text: text.trim(), time: timeStr }
    setMessages(prev => [...prev, userMsg])
    setInput('')
    setIsTyping(true)

    setTimeout(() => {
      const response = getMaeResponse(text)
      const maeMsg: Message = {
        id: `m${Date.now()}`,
        role: 'mae',
        text: response,
        time: new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true }).toLowerCase(),
      }
      setMessages(prev => [...prev, maeMsg])
      setIsTyping(false)
    }, 1600)
  }

  return (
    <>
      <div
        className="absolute inset-0 flex flex-col"
        style={{
          background: BG,
          zIndex: 40,
          animation: 'slideInRight 360ms cubic-bezier(0.32, 0.72, 0, 1) both',
          willChange: 'transform',
        }}
      >
        {/* ── Header ── */}
        <div
          className="shrink-0 flex items-center justify-between"
          style={{
            padding: '52px 20px 0',
            paddingBottom: 0,
          }}
        >
          <button
            onClick={onClose}
            className="flex items-center justify-center rounded-full"
            style={{
              width: 36,
              height: 36,
              background: 'rgba(138,116,103,0.1)',
              border: `1px solid ${BORDER}`,
            }}
          >
            <svg width="8" height="14" viewBox="0 0 8 14" fill="none">
              <path d="M7 1L1 7l6 6" stroke={INK} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <div className="flex flex-col items-center gap-[4px]">
            <div
              className="flex items-center justify-center rounded-full"
              style={{ width: 32, height: 32, background: 'rgba(41,66,42,0.1)' }}
            >
              <img src={maeLogo} alt="" width={17} height={17} />
            </div>
            <span
              className="font-sans font-medium"
              style={{ fontSize: 13, color: INK, letterSpacing: '-0.1px', fontVariationSettings: "'opsz' 14" }}
            >
              Ask Mae
            </span>
          </div>

          {/* Spacer to balance back button */}
          <div style={{ width: 36 }} />
        </div>

        {/* ── Tab selector ── */}
        <div
          className="shrink-0 flex items-center"
          style={{ padding: '16px 20px 0' }}
        >
          <div
            className="flex rounded-pill overflow-hidden"
            style={{
              background: 'rgba(138,116,103,0.1)',
              padding: 3,
              gap: 2,
            }}
          >
            {(['chat', 'archive'] as const).map(t => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className="rounded-pill"
                style={{
                  padding: '6px 16px',
                  background: tab === t ? '#fffffe' : 'transparent',
                  boxShadow: tab === t ? '0 1px 3px rgba(0,0,0,0.08)' : 'none',
                  transition: 'background 180ms ease, box-shadow 180ms ease',
                }}
              >
                <span
                  className="font-sans font-medium"
                  style={{
                    fontSize: 13,
                    color: tab === t ? INK : MUTED,
                    fontVariationSettings: "'opsz' 14",
                    transition: 'color 180ms ease',
                    textTransform: 'capitalize',
                  }}
                >
                  {t === 'chat' ? 'Chat' : 'Archive'}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* ── Chat view ── */}
        {tab === 'chat' && (
          <>
            {/* Empty state — centered in the remaining frame */}
            {messages.length === 1 && (
              <div
                className="flex-1 flex flex-col items-center justify-center"
                style={{ padding: '0 20px', animation: 'fadeUpIn 380ms 80ms cubic-bezier(0.22, 1, 0.36, 1) both' }}
              >
                <span
                  className="font-sans font-normal uppercase"
                  style={{ fontSize: 9, letterSpacing: '1.3px', color: 'rgba(107,102,96,0.45)', marginBottom: 14 }}
                >
                  Try asking
                </span>
                <div className="flex flex-col gap-[8px] w-full">
                  {SUGGESTIONS.map((s, i) => (
                    <button
                      key={i}
                      onClick={() => sendMessage(s)}
                      className="flex items-center text-left rounded-[14px]"
                      style={{
                        background: '#fffffe',
                        border: `1px solid ${BORDER}`,
                        padding: '13px 14px',
                        gap: 10,
                      }}
                    >
                      <div
                        className="shrink-0 rounded-full flex items-center justify-center"
                        style={{ width: 22, height: 22, background: 'rgba(41,66,42,0.08)' }}
                      >
                        <img src={maeLogo} alt="" width={11} height={11} style={{ opacity: 0.6 }} />
                      </div>
                      <span
                        className="font-lora"
                        style={{ fontSize: 14, lineHeight: '20px', color: INK, letterSpacing: '-0.1px' }}
                      >
                        {s}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Messages area — only shown once conversation starts */}
            {messages.length > 1 && (
              <div
                className="flex-1 overflow-y-auto scrollbar-hide"
                style={{ padding: '20px 20px 0' }}
              >
                <div className="flex flex-col gap-[18px]">
                  {messages.map(msg => (
                    <Bubble key={msg.id} msg={msg} />
                  ))}

                  {isTyping && (
                    <div className="flex flex-col" style={{ alignItems: 'flex-start' }}>
                      <div className="flex items-center gap-[6px]" style={{ marginBottom: 6, marginLeft: 2 }}>
                        <div
                          className="flex items-center justify-center rounded-full"
                          style={{ width: 20, height: 20, background: 'rgba(41,66,42,0.12)' }}
                        >
                          <img src={maeLogo} alt="" width={11} height={11} />
                        </div>
                        <span
                          className="font-sans font-medium uppercase"
                          style={{ fontSize: 9, letterSpacing: '1.3px', color: GREEN, opacity: 0.75 }}
                        >
                          Mae
                        </span>
                      </div>
                      <div
                        style={{
                          padding: '14px 18px',
                          borderRadius: '4px 20px 20px 20px',
                          background: 'rgba(41,66,42,0.07)',
                          border: '1px solid rgba(41,66,42,0.14)',
                        }}
                      >
                        <TypingDots />
                      </div>
                    </div>
                  )}
                </div>

                <div ref={messagesEndRef} style={{ height: 24 }} />
              </div>
            )}

            {/* ── Input bar ── */}
            <div
              className="shrink-0"
              style={{
                padding: '12px 16px 32px',
                borderTop: `1px solid ${BORDER}`,
                background: BG,
              }}
            >
              <div
                className="flex items-end rounded-[20px]"
                style={{
                  background: '#fffffe',
                  border: `1px solid ${BORDER}`,
                  padding: '10px 10px 10px 16px',
                  gap: 8,
                }}
              >
                <textarea
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  onKeyDown={e => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault()
                      sendMessage(input)
                    }
                  }}
                  placeholder="Ask Mae anything…"
                  rows={1}
                  className="flex-1 resize-none bg-transparent outline-none font-lora"
                  style={{
                    fontSize: 15,
                    lineHeight: '22px',
                    color: INK,
                    letterSpacing: '-0.1px',
                    minHeight: 22,
                    maxHeight: 88,
                  }}
                />
                <button
                  onClick={() => sendMessage(input)}
                  disabled={!input.trim()}
                  className="shrink-0 flex items-center justify-center rounded-full"
                  style={{
                    width: 36,
                    height: 36,
                    background: input.trim() ? GREEN : 'rgba(138,116,103,0.15)',
                    transition: 'background 180ms ease',
                  }}
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path
                      d="M1 13L13 7 1 1v4.5l8 1.5-8 1.5V13z"
                      fill={input.trim() ? '#fffffe' : 'rgba(138,116,103,0.5)'}
                      style={{ transition: 'fill 180ms ease' }}
                    />
                  </svg>
                </button>
              </div>

              {/* Disclaimer */}
              <p
                className="font-sans font-normal text-center"
                style={{ fontSize: 10, color: 'rgba(107,102,96,0.45)', marginTop: 8, fontVariationSettings: "'opsz' 9", letterSpacing: '0.1px' }}
              >
                Your data stays on your device — private and local.
              </p>
            </div>
          </>
        )}

        {/* ── Archive view ── */}
        {tab === 'archive' && (
          <div
            className="flex-1 overflow-y-auto scrollbar-hide"
            style={{ padding: '20px 20px 32px' }}
          >
            <div
              className="flex flex-col gap-[4px]"
              style={{ marginBottom: 20, animation: 'fadeUpIn 320ms cubic-bezier(0.22, 1, 0.36, 1) both' }}
            >
              <p
                className="font-lora"
                style={{ fontSize: 19, color: INK, letterSpacing: '-0.2px', lineHeight: '28px' }}
              >
                Past conversations
              </p>
              <p
                className="font-sans font-normal"
                style={{ fontSize: 13, color: MUTED, fontVariationSettings: "'opsz' 9", lineHeight: '18px' }}
              >
                4 sessions with Mae
              </p>
            </div>

            <div
              className="flex flex-col gap-3"
              style={{ animation: 'fadeUpIn 360ms 60ms cubic-bezier(0.22, 1, 0.36, 1) both' }}
            >
              {ARCHIVE.map(session => (
                <ArchiveCard key={session.id} session={session} />
              ))}
            </div>

            {/* Empty state hint */}
            <div
              className="flex flex-col items-center text-center rounded-[20px]"
              style={{
                marginTop: 24,
                padding: '20px 16px',
                border: `1px dashed rgba(138,116,103,0.28)`,
              }}
            >
              <div
                className="flex items-center justify-center rounded-full"
                style={{ width: 36, height: 36, background: 'rgba(41,66,42,0.07)', marginBottom: 10 }}
              >
                <img src={maeLogo} alt="" width={18} height={18} style={{ opacity: 0.55 }} />
              </div>
              <p
                className="font-lora"
                style={{ fontSize: 14, lineHeight: '21px', color: MUTED, letterSpacing: '-0.1px', fontStyle: 'italic' }}
              >
                Each conversation becomes part of how Mae understands you.
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  )
}
