import { useEffect, useRef, useState } from 'react'

// ─── Tokens ───────────────────────────────────────────────────────────────────
const GREEN = '#044A28'
const BORDER = 'rgba(138,116,103,0.2)'
const INK = '#2d2d2a'
const MUTED = '#6b6660'

const ROLE_DATA: Record<string, { label: string; direction: string }> = {
  self:         { label: 'Self',         direction: 'Show up for myself first — sleep, movement, and nourishment' },
  creative:     { label: 'Creative',     direction: 'Create more than I consume' },
  parent:       { label: 'Parent',       direction: 'Be present, not perfect' },
  friend:       { label: 'Friend',       direction: 'Invest in the people who actually matter' },
  partner:      { label: 'Partner',      direction: 'Choose each other every day' },
  professional: { label: 'Professional', direction: 'Build things worth building' },
  daughter:     { label: 'Daughter',     direction: 'Call more, worry less' },
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function EditDirectionSheet({
  roleId,
  onSave,
  onClose,
}: {
  roleId: string
  onSave: (text: string) => void
  onClose: () => void
}) {
  const roleData = ROLE_DATA[roleId]
  const [text, setText] = useState(roleData?.direction ?? '')
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const canSave = text.trim().length > 0

  // Delay focus until after sheet animation completes (380ms)
  useEffect(() => {
    const t = setTimeout(() => textareaRef.current?.focus(), 400)
    return () => clearTimeout(t)
  }, [])

  return (
    <>
      {/* Scrim */}
      <div
        className="absolute inset-0"
        style={{
          background: 'rgba(29,25,20,0.4)',
          animation: 'overlayIn 250ms ease both',
          zIndex: 44,
        }}
        onClick={onClose}
      />

      {/* Animated outer wrapper — overflow:hidden allows GPU-composited transform */}
      <div
        className="absolute bottom-0 left-0 right-0 flex flex-col"
        style={{
          borderRadius: '28px 28px 0 0',
          overflow: 'hidden',
          maxHeight: '88%',
          animation: 'sheetUp 380ms cubic-bezier(0.32, 0.72, 0, 1) both',
          zIndex: 45,
          willChange: 'transform',
        }}
      >
        {/* Inner scrollable content */}
        <div
          className="flex flex-col overflow-y-auto scrollbar-hide"
          style={{
            background: '#fffffe',
            paddingBottom: 32,
            flex: 1,
            minHeight: 0,
          }}
        >
          {/* Handle */}
          <div className="flex justify-center" style={{ paddingTop: 12, paddingBottom: 6 }}>
            <div style={{ width: 36, height: 4, borderRadius: 2, background: 'rgba(138,116,103,0.25)' }} />
          </div>

          {/* Header */}
          <div className="flex items-center justify-between" style={{ padding: '8px 20px 18px' }}>
            <span
              className="font-sans font-medium uppercase"
              style={{
                fontSize: 9,
                letterSpacing: '1.4px',
                color: 'rgba(107,102,96,0.6)',
                fontVariationSettings: "'opsz' 9",
              }}
            >
              Your Direction · {roleData?.label ?? roleId}
            </span>
            <button
              onClick={onClose}
              className="flex items-center justify-center"
              style={{ width: 28, height: 28 }}
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 2l10 10M12 2L2 12" stroke={MUTED} strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          {/* Text input */}
          <div style={{ paddingLeft: 20, paddingRight: 20, paddingBottom: 20 }}>
            <textarea
              ref={textareaRef}
              value={text}
              onChange={e => setText(e.target.value)}
              placeholder="What's your north star for this role…"
              rows={3}
              className="w-full resize-none bg-transparent outline-none border-none"
              style={{
                fontFamily: "'Libre Baskerville', Georgia, serif",
                fontWeight: 700,
                fontSize: 19,
                lineHeight: '28px',
                letterSpacing: '-0.2px',
                color: INK,
                caretColor: GREEN,
              }}
            />
          </div>

          {/* Divider */}
          <div style={{ height: 1, background: BORDER, margin: '0 20px 28px' }} />

          {/* Save button */}
          <div style={{ paddingLeft: 20, paddingRight: 20 }}>
            <button
              onClick={() => { if (canSave) onSave(text.trim()) }}
              disabled={!canSave}
              className="w-full flex items-center justify-center rounded-[20px] py-4"
              style={{
                background: canSave ? GREEN : 'rgba(4,74,40,0.3)',
                cursor: canSave ? 'pointer' : 'not-allowed',
                transition: 'background 200ms ease',
              }}
            >
              <span
                className="font-sans font-medium"
                style={{ fontSize: 15, color: '#fcfcfa', fontVariationSettings: "'opsz' 14" }}
              >
                Save Direction
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
