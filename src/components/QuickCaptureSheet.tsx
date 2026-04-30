import { useState } from 'react'
import { Camera, Check, X } from 'lucide-react'

import imgBoardgames from '../assets/illustrations/u1355955226_playing_boardgames_--sref_202514354_--profile_8d1_0c4b39ad-8442-4e08-b910-2733d343dc0b_3.png'
import imgCoffee from '../assets/illustrations/u1355955226_two_girls_sitting_in_coffee_shop_--sref_202514354_12f89aa8-94a4-410a-8fc2-7fd8f984d2c3_0.png'
import imgPainting from '../assets/illustrations/u1355955226_painter_painting_a_canvas_--sref_202514354_--prof_51f7c398-d464-4ad1-8bb6-da52f2cc1971_0.png'
import imgRunner from '../assets/illustrations/u1355955226_runner_in_the_park_--sref_202514354_--profile_8d1_34b21c61-5858-439e-8fbd-0256b22a06a4_0.png'
import imgTyping from '../assets/illustrations/hands_typing_in_keyboard.png'

const GREEN = '#29422a'
const BORDER = 'rgba(138,116,103,0.2)'

type MomentType = 'happened' | 'intention'
type Attachment = {
  id: string
  label: string
  src: string
  source: 'upload' | 'database'
}

const ROLES = ['Creative', 'Self', 'Parent', 'Daughter', 'Friend', 'Partner', 'Professional']
const DIRECTION = { role: 'Creative', text: 'Write a chapter of my novel' }
const DATABASE_ILLUSTRATIONS: Attachment[] = [
  { id: 'runner', label: 'Morning run', src: imgRunner, source: 'database' },
  { id: 'painting', label: 'Creative practice', src: imgPainting, source: 'database' },
  { id: 'boardgames', label: 'Game night', src: imgBoardgames, source: 'database' },
  { id: 'coffee', label: 'Coffee catch-up', src: imgCoffee, source: 'database' },
  { id: 'typing', label: 'Focused work', src: imgTyping, source: 'database' },
]

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
  const [attachment, setAttachment] = useState<Attachment | null>(null)

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
          maxHeight: '88%',
          overflowY: 'auto',
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

        {/* Attachment picker */}
        <div style={{ paddingBottom: 18 }}>
          <div className="flex items-center justify-between" style={{ paddingLeft: 20, paddingRight: 20, marginBottom: 10 }}>
            <p
              className="font-sans font-medium uppercase"
              style={{
                fontSize: 9,
                letterSpacing: '0.09em',
                color: 'rgba(74,74,69,0.45)',
                fontVariationSettings: "'opsz' 14",
              }}
            >
              Photo or illustration
            </p>
            {attachment && (
              <button
                onClick={() => setAttachment(null)}
                className="flex items-center gap-1"
                style={{ color: 'rgba(74,74,69,0.55)' }}
              >
                <X size={12} strokeWidth={2} />
                <span
                  className="font-sans font-medium"
                  style={{ fontSize: 11, fontVariationSettings: "'opsz' 9" }}
                >
                  Remove
                </span>
              </button>
            )}
          </div>

          <div
            className="flex gap-2 overflow-x-auto scrollbar-hide"
            style={{ paddingLeft: 20, paddingRight: 20 }}
          >
            <label
              className="relative flex flex-col items-center justify-center gap-1 shrink-0 overflow-hidden rounded-[14px]"
              style={{
                width: 82,
                height: 82,
                border: `1px dashed ${attachment?.source === 'upload' ? GREEN : 'rgba(138,116,103,0.35)'}`,
                background: attachment?.source === 'upload' ? 'rgba(41,66,42,0.05)' : '#f8f6f2',
                color: attachment?.source === 'upload' ? GREEN : '#6b6660',
                cursor: 'pointer',
              }}
            >
              {attachment?.source === 'upload' ? (
                <>
                  <img src={attachment.src} alt="" className="absolute inset-0 w-full h-full object-cover" />
                  <div
                    className="absolute inset-0"
                    style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.02), rgba(41,66,42,0.28))' }}
                  />
                  <span
                    className="absolute flex items-center justify-center rounded-full"
                    style={{ top: 6, right: 6, width: 20, height: 20, background: GREEN }}
                  >
                    <Check size={12} color="#fafaf7" strokeWidth={2.4} />
                  </span>
                  <span
                    className="absolute left-2 right-2 bottom-2 font-sans font-medium text-left"
                    style={{ fontSize: 10, lineHeight: '12px', color: '#fffffe', fontVariationSettings: "'opsz' 9" }}
                  >
                    Photo
                  </span>
                </>
              ) : (
                <>
                  <Camera size={18} strokeWidth={1.8} />
                  <span
                    className="font-sans font-medium text-center"
                    style={{ fontSize: 11, lineHeight: '13px', fontVariationSettings: "'opsz' 9" }}
                  >
                    Add photo
                  </span>
                </>
              )}
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={event => {
                  const file = event.target.files?.[0]
                  if (!file) return
                  setAttachment({
                    id: `upload-${file.name}`,
                    label: file.name,
                    src: URL.createObjectURL(file),
                    source: 'upload',
                  })
                }}
              />
            </label>

            {DATABASE_ILLUSTRATIONS.map(item => {
              const selected = attachment?.id === item.id

              return (
                <button
                  key={item.id}
                  onClick={() => setAttachment(selected ? null : item)}
                  className="relative overflow-hidden shrink-0 rounded-[14px]"
                  style={{
                    width: 82,
                    height: 82,
                    border: `2px solid ${selected ? GREEN : 'transparent'}`,
                    background: '#e8e1d7',
                  }}
                  aria-label={`Use ${item.label} illustration`}
                >
                  <img src={item.src} alt="" className="absolute inset-0 w-full h-full object-cover" />
                  <div
                    className="absolute inset-0"
                    style={{
                      background: selected
                        ? 'linear-gradient(to bottom, rgba(41,66,42,0.08), rgba(41,66,42,0.32))'
                        : 'linear-gradient(to bottom, rgba(0,0,0,0.02), rgba(0,0,0,0.18))',
                    }}
                  />
                  <span
                    className="absolute left-2 right-2 bottom-2 font-sans font-medium text-left"
                    style={{ fontSize: 10, lineHeight: '12px', color: '#fffffe', fontVariationSettings: "'opsz' 9" }}
                  >
                    {item.label}
                  </span>
                  {selected && (
                    <span
                      className="absolute flex items-center justify-center rounded-full"
                      style={{ top: 6, right: 6, width: 20, height: 20, background: GREEN }}
                    >
                      <Check size={12} color="#fafaf7" strokeWidth={2.4} />
                    </span>
                  )}
                </button>
              )
            })}
          </div>
        </div>

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
