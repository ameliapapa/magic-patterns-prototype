import { useState } from 'react'

const GREEN = '#29422a'
const BORDER = 'rgba(138,116,103,0.2)'

type MomentType = 'happened' | 'intention'

const ROLES = ['Creative', 'Self', 'Parent', 'Daughter', 'Friend', 'Partner', 'Professional']
const DIRECTION = { role: 'Creative', text: 'Write a chapter of my novel' }

const STYLES = `
  @keyframes sheetUp {
    from { transform: translateY(100%); }
    to   { transform: translateY(0); }
  }
  @keyframes overlayIn {
    from { opacity: 0; }
    to   { opacity: 1; }
  }
`

function TypeToggle({
  label,
  active,
  onClick,
}: {
  label: string
  active: boolean
  onClick: () => void
}) {
  return (
    <button
      onClick={onClick}
      className="flex items-center px-4 py-2 rounded-full font-sans font-medium shrink-0"
      style={{
        fontSize: 14,
        lineHeight: '20px',
        background: active ? GREEN : 'transparent',
        color: active ? '#fafaf7' : 'rgba(74,74,69,0.55)',
        border: `1.5px solid ${active ? 'transparent' : BORDER}`,
        transition: 'background 220ms ease, color 220ms ease, border-color 220ms ease',
        fontVariationSettings: "'opsz' 14",
      }}
    >
      {label}
    </button>
  )
}

export default function QuickCaptureSheet({ onClose }: { onClose: () => void }) {
  const [type, setType] = useState<MomentType>('happened')
  const [text, setText] = useState('')
  const [role, setRole] = useState<string | null>(null)
  const [directionLinked, setDirectionLinked] = useState(false)

  const canSubmit = text.trim().length > 0
  const submitLabel = type === 'happened' ? 'Capture Moment' : 'Save Intention'

  const placeholder =
    type === 'happened'
      ? 'Something you did, felt, or experienced…'
      : 'Something you want to do or create…'

  return (
    <>
      <style>{STYLES}</style>

      {/* Scrim */}
      <div
        className="absolute inset-0"
        style={{
          background: 'rgba(29,25,20,0.4)',
          animation: 'overlayIn 250ms ease both',
          zIndex: 10,
        }}
        onClick={onClose}
      />

      {/* Sheet */}
      <div
        className="absolute bottom-0 left-0 right-0 flex flex-col"
        style={{
          background: '#fffffe',
          borderRadius: '28px 28px 0 0',
          animation: 'sheetUp 380ms cubic-bezier(0.32, 0.72, 0, 1) both',
          zIndex: 20,
          paddingBottom: 28,
        }}
      >
        {/* Handle */}
        <div className="flex justify-center" style={{ paddingTop: 12, paddingBottom: 20 }}>
          <div
            style={{ width: 36, height: 4, borderRadius: 2, background: 'rgba(138,116,103,0.25)' }}
          />
        </div>

        {/* Type toggle */}
        <div className="flex gap-2 px-5" style={{ paddingBottom: 20 }}>
          <TypeToggle
            label="It happened"
            active={type === 'happened'}
            onClick={() => setType('happened')}
          />
          <TypeToggle
            label="I want this"
            active={type === 'intention'}
            onClick={() => setType('intention')}
          />
        </div>

        {/* Text area */}
        <div className="px-5" style={{ paddingBottom: 12 }}>
          <textarea
            value={text}
            onChange={e => setText(e.target.value)}
            placeholder={placeholder}
            rows={4}
            autoFocus
            className="w-full resize-none bg-transparent outline-none border-none"
            style={{
              fontFamily: "'Libre Baskerville', Georgia, serif",
              fontWeight: 700,
              fontSize: 20,
              lineHeight: '30px',
              color: '#2d2d2a',
              caretColor: GREEN,
            }}
          />
        </div>

        {/* Divider */}
        <div style={{ height: 1, background: BORDER, margin: '0 20px 18px' }} />

        {/* Role row */}
        <div style={{ paddingBottom: 16 }}>
          <p
            className="font-sans font-medium uppercase"
            style={{
              fontSize: 9,
              letterSpacing: '0.09em',
              color: 'rgba(74,74,69,0.45)',
              paddingLeft: 20,
              marginBottom: 10,
              fontVariationSettings: "'opsz' 14",
            }}
          >
            Role
          </p>
          <div
            className="flex gap-2 overflow-x-auto scrollbar-hide"
            style={{ paddingLeft: 20, paddingRight: 20 }}
          >
            {ROLES.map(r => (
              <button
                key={r}
                onClick={() => setRole(role === r ? null : r)}
                className="shrink-0 px-3 rounded-full font-sans font-medium"
                style={{
                  fontSize: 13,
                  lineHeight: '32px',
                  background: role === r ? GREEN : 'transparent',
                  color: role === r ? '#fafaf7' : '#2d2d2a',
                  border: `1px solid ${role === r ? 'transparent' : BORDER}`,
                  transition: 'background 180ms ease, color 180ms ease, border-color 180ms ease',
                  fontVariationSettings: "'opsz' 14",
                }}
              >
                {r}
              </button>
            ))}
          </div>
        </div>

        {/* Direction link */}
        <div style={{ paddingLeft: 20, paddingRight: 20, paddingBottom: 20 }}>
          <button
            onClick={() => setDirectionLinked(d => !d)}
            className="flex items-center gap-3 w-full rounded-[14px] px-4 py-3 text-left"
            style={{
              border: `1px solid ${directionLinked ? GREEN : BORDER}`,
              background: directionLinked ? 'rgba(41,66,42,0.05)' : 'transparent',
              transition: 'border-color 200ms ease, background 200ms ease',
            }}
          >
            {/* Checkbox */}
            <div
              className="flex items-center justify-center rounded-full shrink-0"
              style={{
                width: 20,
                height: 20,
                border: `1.5px solid ${directionLinked ? GREEN : 'rgba(138,116,103,0.4)'}`,
                background: directionLinked ? GREEN : 'transparent',
                transition: 'all 200ms ease',
              }}
            >
              {directionLinked && (
                <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                  <path
                    d="M1 4l2.5 2.5L9 1"
                    stroke="#fafaf7"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </div>

            {/* Direction text */}
            <div className="flex flex-col gap-0.5">
              <span
                className="font-sans font-medium uppercase"
                style={{
                  fontSize: 9,
                  letterSpacing: '0.09em',
                  color: 'rgba(74,74,69,0.45)',
                  fontVariationSettings: "'opsz' 14",
                }}
              >
                Direction · {DIRECTION.role}
              </span>
              <span
                className="font-sans font-medium"
                style={{
                  fontSize: 13,
                  color: directionLinked ? GREEN : '#2d2d2a',
                  transition: 'color 200ms ease',
                  fontVariationSettings: "'opsz' 14",
                }}
              >
                {DIRECTION.text}
              </span>
            </div>
          </button>
        </div>

        {/* Submit */}
        <div style={{ paddingLeft: 20, paddingRight: 20 }}>
          <button
            onClick={() => { if (canSubmit) onClose() }}
            disabled={!canSubmit}
            className="w-full flex items-center justify-center rounded-[20px] py-4"
            style={{
              background: canSubmit ? GREEN : 'rgba(41,66,42,0.3)',
              cursor: canSubmit ? 'pointer' : 'not-allowed',
              transition: 'background 200ms ease',
            }}
          >
            <span
              className="font-sans font-medium text-base"
              style={{ color: '#fcfcfa', fontVariationSettings: "'opsz' 14" }}
            >
              {submitLabel}
            </span>
          </button>
        </div>
      </div>
    </>
  )
}
