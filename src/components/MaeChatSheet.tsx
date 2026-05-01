import { useState, useRef, useEffect } from 'react'
import maeLogo from '../assets/icons/mae-flower-icon.svg'
import chatIcon from '../assets/icons/bubble-chat.svg'
import archiveIcon from '../assets/icons/archive-04.svg'

// ─── Tokens ───────────────────────────────────────────────────────────────────
const GREEN = '#29422a'
const BORDER = 'rgba(138,116,103,0.2)'
const INK = '#2d2d2a'
const MUTED = '#6b6660'
const BG = '#f8f6f2'
const SURFACE = '#fffffe'

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

function MaeMark({ size = 40 }: { size?: number }) {
  return (
    <div
      className="flex items-center justify-center"
      style={{
        width: size,
        height: size,
      }}
    >
      <img src={maeLogo} alt="" width={Math.round(size * 0.72)} height={Math.round(size * 0.72)} />
    </div>
  )
}

function RichText({ text, isMae }: { text: string; isMae: boolean }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g)

  return (
    <p
      className={isMae ? 'font-serif' : 'font-sans'}
      style={{
        fontSize: isMae ? 15 : 13,
        lineHeight: isMae ? '24px' : '19px',
        color: INK,
        letterSpacing: 0,
        fontVariationSettings: isMae ? undefined : "'opsz' 14",
      }}
    >
      {parts.map((part, index) => {
        const isStrong = part.startsWith('**') && part.endsWith('**')
        return isStrong ? (
          <strong key={`${part}-${index}`} style={{ fontWeight: 700, color: GREEN }}>
            {part.slice(2, -2)}
          </strong>
        ) : (
          <span key={`${part}-${index}`}>{part}</span>
        )
      })}
    </p>
  )
}

// ─── Mae typing indicator ─────────────────────────────────────────────────────
function TypingDots() {
  return (
    <div className="flex items-center gap-[5px]" style={{ padding: '4px 2px' }}>
      {[0, 1, 2].map(i => (
        <div
          key={i}
          style={{
            width: 5,
            height: 5,
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
          <span
            className="font-sans font-medium uppercase"
            style={{ fontSize: 9, letterSpacing: '1px', color: GREEN, opacity: 0.82, fontVariationSettings: "'opsz' 9" }}
          >
            Mae
          </span>
        </div>
      )}

      <div
        style={{
          maxWidth: isMae ? '91%' : '76%',
          padding: isMae ? '15px 16px 15px 17px' : '10px 13px',
          borderRadius: isMae ? '16px 16px 16px 6px' : '15px 15px 6px 15px',
          background: isMae ? SURFACE : 'rgba(41,66,42,0.08)',
          border: isMae ? `1px solid ${BORDER}` : '1px solid rgba(41,66,42,0.12)',
          borderLeft: isMae ? '3px solid rgba(41,66,42,0.42)' : undefined,
          boxShadow: isMae ? '0 8px 20px rgba(45,45,42,0.035)' : 'none',
        }}
      >
        <RichText text={msg.text} isMae={isMae} />
      </div>

      <span
        className="font-sans"
        style={{
          fontSize: 10,
          color: 'rgba(107,102,96,0.5)',
          marginTop: 5,
          letterSpacing: 0,
          fontVariationSettings: "'opsz' 9",
        }}
      >
        {msg.time}
      </span>
    </div>
  )
}

function PromptRow({
  prompt,
  onSelect,
}: {
  prompt: string
  onSelect: () => void
}) {
  return (
    <button
      onClick={onSelect}
      className="w-full text-left active:scale-[0.995]"
      aria-label={prompt}
      style={{
        background: 'transparent',
        padding: '9px 0',
        transition: 'transform 120ms ease',
      }}
    >
      <div className="flex items-center gap-2">
        <div className="min-w-0 flex-1">
          <p
            className="font-sans font-normal"
            style={{ fontSize: 13, lineHeight: '18px', color: 'rgba(45,45,42,0.68)', letterSpacing: 0, fontVariationSettings: "'opsz' 14" }}
          >
            {prompt}
          </p>
        </div>
        <svg width="7" height="12" viewBox="0 0 7 12" fill="none" className="shrink-0">
          <path d="M1 1l5 5-5 5" stroke="rgba(45,45,42,0.28)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </button>
  )
}

function TabIcon({
  icon,
  label,
  active,
  onClick,
}: {
  icon: string
  label: string
  active: boolean
  onClick: () => void
}) {
  return (
    <button
      onClick={onClick}
      className="flex items-center justify-center rounded-full"
      style={{
        width: 34,
        height: 34,
        background: active ? GREEN : 'rgba(138,116,103,0.08)',
        border: `1px solid ${active ? 'rgba(41,66,42,0.18)' : BORDER}`,
        transition: 'background 180ms ease, border-color 180ms ease',
      }}
      aria-label={label}
      aria-pressed={active}
    >
      <span
        aria-hidden="true"
        style={{
          width: 17,
          height: 17,
          display: 'block',
          background: active ? SURFACE : 'rgba(45,45,42,0.58)',
          WebkitMaskImage: `url(${icon})`,
          maskImage: `url(${icon})`,
          WebkitMaskRepeat: 'no-repeat',
          maskRepeat: 'no-repeat',
          WebkitMaskPosition: 'center',
          maskPosition: 'center',
          WebkitMaskSize: 'contain',
          maskSize: 'contain',
        }}
      />
    </button>
  )
}

// ─── Archive session card ─────────────────────────────────────────────────────
function ArchiveCard({ session }: { session: ChatSession }) {
  return (
    <button
      className="flex w-full items-stretch text-left active:scale-[0.995]"
      style={{
        background: SURFACE,
        border: `1px solid ${BORDER}`,
        borderRadius: 16,
        padding: '13px 14px 13px 0',
        transition: 'transform 120ms ease',
      }}
    >
      <div
        className="shrink-0"
        style={{
          width: 3,
          margin: '3px 13px 3px 0',
          borderRadius: 3,
          background: 'rgba(41,66,42,0.34)',
        }}
      />
      <div className="flex min-w-0 flex-1 flex-col" style={{ paddingRight: 10 }}>
        <div className="flex items-center gap-2" style={{ marginBottom: 7 }}>
          <span
            className="font-sans font-medium uppercase"
            style={{ fontSize: 9, letterSpacing: '1px', color: MUTED, fontVariationSettings: "'opsz' 9" }}
          >
            {session.date}
          </span>
          <div
            className="rounded-pill"
            style={{
              height: 18,
              background: 'rgba(41,66,42,0.08)',
              padding: '2px 7px',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <span
              className="font-sans font-medium"
              style={{ fontSize: 9, color: GREEN, letterSpacing: 0, fontVariationSettings: "'opsz' 9" }}
            >
              {session.topic}
            </span>
          </div>
        </div>
        <p
          className="font-serif font-medium"
          style={{ fontSize: 14, lineHeight: '20px', color: INK, letterSpacing: 0 }}
        >
          {session.preview}
        </p>
        <span
          className="font-sans font-normal"
          style={{ marginTop: 7, fontSize: 11, color: MUTED, fontVariationSettings: "'opsz' 9" }}
        >
          {session.turns} exchanges
        </span>
      </div>
      <div
        className="flex shrink-0 items-center justify-center rounded-full"
        style={{ alignSelf: 'center', width: 28, height: 28, background: 'rgba(138,116,103,0.09)' }}
      >
        <svg width="7" height="12" viewBox="0 0 7 12" fill="none">
          <path d="M1 1l5 5-5 5" stroke="rgba(45,45,42,0.52)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
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
          className="shrink-0 flex items-center"
          style={{
            padding: '52px 20px 14px',
            gap: 10,
            background: 'rgba(255,255,254,0.82)',
            borderBottom: `1px solid ${BORDER}`,
            backdropFilter: 'blur(14px)',
            WebkitBackdropFilter: 'blur(14px)',
          }}
        >
          <button
            onClick={onClose}
            className="flex shrink-0 items-center justify-center"
            style={{
              width: 32,
              height: 36,
            }}
            aria-label="Close Mae chat"
          >
            <svg width="8" height="14" viewBox="0 0 8 14" fill="none">
              <path d="M7 1L1 7l6 6" stroke={INK} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <div className="flex min-w-0 flex-1 items-center gap-2">
            <MaeMark size={30} />
            <div className="min-w-0">
              <span
                style={{
                  display: 'block',
                  fontFamily: "'Fraunces', Georgia, serif",
                  fontSize: 20,
                  fontWeight: 700,
                  lineHeight: '23px',
                  color: INK,
                  letterSpacing: 0,
                  fontVariationSettings: "'opsz' 24",
                }}
              >
                Mae
              </span>
            </div>
          </div>

          <div
            className="flex shrink-0 items-center"
            style={{
              gap: 6,
            }}
          >
            <TabIcon
              icon={chatIcon}
              label="Chat"
              active={tab === 'chat'}
              onClick={() => setTab('chat')}
            />
            <TabIcon
              icon={archiveIcon}
              label="Archive"
              active={tab === 'archive'}
              onClick={() => setTab('archive')}
            />
          </div>
        </div>

        {/* ── Chat view ── */}
        {tab === 'chat' && (
          <>
            {/* Empty state */}
            {messages.length === 1 && (
              <div
                className="flex-1"
                style={{ padding: '18px 20px 0', animation: 'fadeUpIn 380ms 80ms cubic-bezier(0.22, 1, 0.36, 1) both' }}
              >
                <div
                  className="rounded-[22px]"
                  style={{
                    background: SURFACE,
                    border: `1px solid ${BORDER}`,
                    padding: '18px',
                    boxShadow: '0 10px 28px rgba(45,45,42,0.035)',
                  }}
                >
                  <div>
                    <span
                      className="font-sans font-medium uppercase"
                      style={{
                        fontSize: 9,
                        lineHeight: '13px',
                        letterSpacing: '1px',
                        color: GREEN,
                        fontVariationSettings: "'opsz' 9",
                      }}
                    >
                      Ask Mae
                    </span>
                    <p
                      className="font-serif font-medium"
                      style={{ marginTop: 8, fontSize: 18, lineHeight: '25px', color: INK, letterSpacing: 0 }}
                    >
                      Start with a question about where your attention, habits, or roles are pointing.
                    </p>
                  </div>
                  <div style={{ marginTop: 12 }}>
                    {SUGGESTIONS.map(s => (
                      <PromptRow
                        key={s}
                        prompt={s}
                        onSelect={() => sendMessage(s)}
                      />
                    ))}
                  </div>
                </div>
                <div
                  className="flex items-start gap-2"
                  style={{
                    marginTop: 16,
                    padding: '0 4px',
                    color: MUTED,
                  }}
                >
                  <div style={{ width: 4, height: 4, marginTop: 8, borderRadius: 4, background: 'rgba(41,66,42,0.45)' }} />
                  <p
                    className="font-sans"
                    style={{ fontSize: 12, lineHeight: '18px', fontVariationSettings: "'opsz' 9" }}
                  >
                    Mae uses Apple Intelligence built into your device, which keeps all your data private.
                  </p>
                </div>
              </div>
            )}

            {/* Messages area — only shown once conversation starts */}
            {messages.length > 1 && (
              <div
                className="flex-1 overflow-y-auto scrollbar-hide"
                style={{ padding: '18px 20px 0' }}
              >
                <div className="flex flex-col" style={{ gap: 16 }}>
                  {messages.map(msg => (
                    <Bubble key={msg.id} msg={msg} />
                  ))}

                  {isTyping && (
                    <div className="flex flex-col" style={{ alignItems: 'flex-start' }}>
                      <div className="flex items-center gap-[6px]" style={{ marginBottom: 6, marginLeft: 2 }}>
                        <span
                          className="font-sans font-medium uppercase"
                          style={{ fontSize: 9, letterSpacing: '1px', color: GREEN, opacity: 0.82 }}
                        >
                          Mae
                        </span>
                      </div>
                      <div
                        style={{
                          padding: '14px 16px',
                          borderRadius: '16px 16px 16px 6px',
                          background: SURFACE,
                          border: `1px solid ${BORDER}`,
                          borderLeft: '3px solid rgba(41,66,42,0.42)',
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
                padding: '10px 20px 24px',
                borderTop: `1px solid ${BORDER}`,
                background: 'rgba(248,246,242,0.96)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
              }}
            >
              <div
                className="flex items-center rounded-[18px]"
                style={{
                  background: SURFACE,
                  border: `1px solid ${BORDER}`,
                  padding: '8px 9px 8px 14px',
                  gap: 8,
                  boxShadow: '0 8px 22px rgba(45,45,42,0.05)',
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
                  placeholder="Ask Mae about a pattern..."
                  rows={1}
                  className="flex-1 resize-none bg-transparent outline-none font-sans"
                  style={{
                    fontSize: 14,
                    lineHeight: '34px',
                    color: INK,
                    letterSpacing: 0,
                    height: 34,
                    minHeight: 34,
                    maxHeight: 34,
                    overflow: 'hidden',
                    fontVariationSettings: "'opsz' 14",
                  }}
                />
                <button
                  onClick={() => sendMessage(input)}
                  disabled={!input.trim()}
                  className="shrink-0 flex items-center justify-center rounded-full"
                  aria-label="Send message to Mae"
                  style={{
                    width: 34,
                    height: 34,
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
                style={{ fontSize: 10, color: 'rgba(107,102,96,0.5)', marginTop: 7, fontVariationSettings: "'opsz' 9", letterSpacing: 0 }}
              >
                Apple Intelligence is built into your device, keeping all your data private.
              </p>
            </div>
          </>
        )}

        {/* ── Archive view ── */}
        {tab === 'archive' && (
          <div
            className="flex-1 overflow-y-auto scrollbar-hide"
            style={{ padding: '18px 20px 28px' }}
          >
            <div
              className="flex items-end justify-between"
              style={{
                marginBottom: 16,
                animation: 'fadeUpIn 320ms cubic-bezier(0.22, 1, 0.36, 1) both',
              }}
            >
              <div>
                <span
                  className="font-sans font-medium uppercase"
                  style={{ fontSize: 9, lineHeight: '13px', letterSpacing: '1px', color: GREEN, fontVariationSettings: "'opsz' 9" }}
                >
                  Conversation notes
                </span>
                <p
                  className="font-serif font-medium"
                  style={{ marginTop: 5, fontSize: 21, color: INK, letterSpacing: 0, lineHeight: '27px' }}
                >
                  Saved threads
                </p>
              </div>
              <span
                className="font-sans font-medium"
                style={{ paddingBottom: 4, fontSize: 11, color: MUTED, fontVariationSettings: "'opsz' 9" }}
              >
                {ARCHIVE.length} total
              </span>
            </div>

            <div
              className="flex flex-col gap-2"
              style={{ animation: 'fadeUpIn 360ms 60ms cubic-bezier(0.22, 1, 0.36, 1) both' }}
            >
              {ARCHIVE.map(session => (
                <ArchiveCard key={session.id} session={session} />
              ))}
            </div>

            {/* Empty state hint */}
            <div
              className="rounded-[16px]"
              style={{
                marginTop: 16,
                padding: '14px 16px',
                border: `1px solid ${BORDER}`,
                background: 'rgba(255,255,254,0.72)',
              }}
            >
              <p
                className="font-serif"
                style={{ fontSize: 14, lineHeight: '21px', color: MUTED, letterSpacing: 0 }}
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
