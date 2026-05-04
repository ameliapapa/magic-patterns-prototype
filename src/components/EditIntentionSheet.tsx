import { useEffect, useRef, useState } from 'react'

// ─── Tokens ───────────────────────────────────────────────────────────────────
const GREEN = '#044A28'
const BORDER = 'rgba(138,116,103,0.2)'
const INK = '#2d2d2a'
const MUTED = '#6b6660'
const AMBER = '#9c6b3a'

const ROLES = [
  { id: 'self',         label: 'Self' },
  { id: 'creative',     label: 'Creative' },
  { id: 'parent',       label: 'Parent' },
  { id: 'friend',       label: 'Friend' },
  { id: 'partner',      label: 'Partner' },
  { id: 'professional', label: 'Professional' },
  { id: 'daughter',     label: 'Daughter' },
]

// ─── Component ────────────────────────────────────────────────────────────────

export default function EditIntentionSheet({
  initialText,
  defaultRoleId,
  onSave,
  onDelete,
  onClose,
}: {
  initialText?: string
  defaultRoleId?: string
  onSave: (text: string, roleId: string | null) => void
  onDelete?: () => void
  onClose: () => void
}) {
  const isEditing = initialText !== undefined
  const [text, setText] = useState(initialText ?? '')
  const [roleId, setRoleId] = useState<string | null>(defaultRoleId ?? null)
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  // Delay focus until after sheet animation completes (380ms)
  useEffect(() => {
    const t = setTimeout(() => textareaRef.current?.focus(), 400)
    return () => clearTimeout(t)
  }, [])

  const canSave = text.trim().length > 0
  const showRolePicker = !defaultRoleId

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
              {isEditing ? 'Edit Intention' : 'New Intention'}
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
              placeholder="Something you want to do or create…"
              rows={3}
              className="w-full resize-none bg-transparent outline-none border-none"
              style={{
                fontFamily: "'F37 Bobby Trial', Georgia, serif",
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
          <div style={{ height: 1, background: BORDER, margin: '0 20px 20px' }} />

          {/* Role picker — hidden when opened from a role screen */}
          {showRolePicker && (
            <div style={{ paddingBottom: 24 }}>
              <div
                className="flex gap-[7px] overflow-x-auto scrollbar-hide"
                style={{ paddingLeft: 20, paddingRight: 20 }}
              >
                {ROLES.map(r => {
                  const active = roleId === r.id
                  return (
                    <button
                      key={r.id}
                      onClick={() => setRoleId(active ? null : r.id)}
                      className="shrink-0 rounded-pill font-sans font-medium"
                      style={{
                        fontSize: 12,
                        lineHeight: '30px',
                        padding: '0 12px',
                        background: active ? GREEN : 'transparent',
                        color: active ? '#fafaf7' : MUTED,
                        border: `1px solid ${active ? 'transparent' : BORDER}`,
                        transition: 'background 160ms ease, color 160ms ease, border-color 160ms ease',
                        fontVariationSettings: "'opsz' 9",
                      }}
                    >
                      {r.label}
                    </button>
                  )
                })}
              </div>
            </div>
          )}

          {/* Save button */}
          <div style={{ paddingLeft: 20, paddingRight: 20 }}>
            <button
              onClick={() => { if (canSave) onSave(text.trim(), roleId) }}
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
                Save Intention
              </span>
            </button>
          </div>

          {/* Delete — only in editing mode */}
          {onDelete && (
            <div className="flex justify-center" style={{ paddingTop: 20 }}>
              <button onClick={onDelete}>
                <span
                  className="font-sans font-normal"
                  style={{ fontSize: 13, color: AMBER, fontVariationSettings: "'opsz' 9" }}
                >
                  Delete intention
                </span>
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
