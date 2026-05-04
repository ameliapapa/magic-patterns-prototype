import { useEffect, useRef, useState } from 'react'

// ─── Illustrations ────────────────────────────────────────────────────────────
import imgRunner from '../assets/illustrations/u1355955226_runner_in_the_park_--sref_202514354_--profile_8d1_34b21c61-5858-439e-8fbd-0256b22a06a4_0.png'
import imgCoffee from '../assets/illustrations/u1355955226_two_girls_sitting_in_coffee_shop_--sref_202514354_12f89aa8-94a4-410a-8fc2-7fd8f984d2c3_0.png'
import imgPainting from '../assets/illustrations/u1355955226_painter_painting_a_canvas_--sref_202514354_--prof_51f7c398-d464-4ad1-8bb6-da52f2cc1971_0.png'
import imgBoardgames from '../assets/illustrations/u1355955226_playing_boardgames_--sref_202514354_--profile_8d1_0c4b39ad-8442-4e08-b910-2733d343dc0b_3.png'
import imgLifting from '../assets/illustrations/u1355955226_person_lifting_weights_in_gym_--sref_202514354_--_52754bb9-c72c-469a-9604-81ecf9614cf5_0.png'
import imgDinner from '../assets/illustrations/dinner-date-restaurant.png'
import imgHike from '../assets/illustrations/u1355955226_mountain_hike_--sref_202514354_--profile_8d1tcdd__1a989c17-693e-4851-a5ca-8fd6e6bc33dd_0.png'
import imgFamilyDinner from '../assets/illustrations/u1355955226_family_dinner_table_--sref_202514354_--profile_8d_6dde0955-dfa3-4689-b9fa-afe77a537eda_1.png'

// ─── Tokens ───────────────────────────────────────────────────────────────────
const GREEN = '#044A28'
const BORDER = 'rgba(138,116,103,0.2)'
const INK = '#2d2d2a'
const MUTED = '#6b6660'

// ─── Data ─────────────────────────────────────────────────────────────────────
const ROLES = ['Self', 'Creative', 'Parent', 'Friend', 'Partner', 'Professional', 'Daughter']

type Illustration = { id: string; label: string; src: string }

const ILLUSTRATIONS: Illustration[] = [
  { id: 'runner',       label: 'Morning run',     src: imgRunner },
  { id: 'coffee',       label: 'Coffee catch-up',  src: imgCoffee },
  { id: 'painting',     label: 'Creative work',    src: imgPainting },
  { id: 'boardgames',   label: 'Game night',       src: imgBoardgames },
  { id: 'lifting',      label: 'Gym session',      src: imgLifting },
  { id: 'dinner',       label: 'Dinner together',  src: imgDinner },
  { id: 'hike',         label: 'Time outside',     src: imgHike },
  { id: 'family',       label: 'Family time',      src: imgFamilyDinner },
]

type Photo = { src: string; label: string; source: 'upload' | 'illus' }

// ─── Illustration tile ────────────────────────────────────────────────────────
function IllustrationTile({
  item,
  selected,
  onSelect,
}: {
  item: Illustration
  selected: boolean
  onSelect: () => void
}) {
  return (
    <button
      onClick={onSelect}
      className="relative overflow-hidden shrink-0 rounded-[14px]"
      style={{
        width: 72,
        height: 72,
        border: `2px solid ${selected ? GREEN : 'transparent'}`,
        background: '#e8e1d7',
        transition: 'border-color 150ms ease',
      }}
      aria-label={item.label}
    >
      <img src={item.src} alt="" className="absolute inset-0 w-full h-full object-cover" />
      <div
        className="absolute inset-0"
        style={{
          background: selected
            ? 'linear-gradient(to bottom, rgba(4,74,40,0.04), rgba(4,74,40,0.38))'
            : 'linear-gradient(to bottom, rgba(0,0,0,0.02), rgba(0,0,0,0.22))',
        }}
      />
      <span
        className="absolute left-2 right-2 bottom-[6px] font-sans font-medium text-left"
        style={{ fontSize: 9, lineHeight: '12px', color: 'rgba(255,255,254,0.88)', fontVariationSettings: "'opsz' 9" }}
      >
        {item.label}
      </span>
      {selected && (
        <span
          className="absolute flex items-center justify-center rounded-full"
          style={{ top: 5, right: 5, width: 18, height: 18, background: GREEN }}
        >
          <svg width="9" height="7" viewBox="0 0 9 7" fill="none">
            <path d="M1 3.5l2 2L8 1" stroke="#fafaf7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      )}
    </button>
  )
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function CaptureMomentSheet({
  onClose,
  defaultRole,
}: {
  onClose: () => void
  defaultRole?: string
}) {
  const [text, setText] = useState('')
  const [role, setRole] = useState<string | null>(defaultRole ?? null)
  const [photo, setPhoto] = useState<Photo | null>(null)
  const [showPicker, setShowPicker] = useState(false)
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  // Delay focus until after sheet animation completes (380ms)
  useEffect(() => {
    const t = setTimeout(() => textareaRef.current?.focus(), 400)
    return () => clearTimeout(t)
  }, [])

  const canSubmit = text.trim().length > 0

  function selectIllustration(item: Illustration) {
    setPhoto({ src: item.src, label: item.label, source: 'illus' })
    setShowPicker(false)
  }

  function removePhoto() {
    setPhoto(null)
    setShowPicker(false)
  }

  return (
    <>
      {/* Scrim */}
      <div
        className="absolute inset-0"
        style={{
          background: 'rgba(29,25,20,0.45)',
          animation: 'overlayIn 250ms ease both',
          zIndex: 10,
        }}
        onClick={onClose}
      />

      {/* Sheet — overflow:hidden on animated element allows GPU-composited transform */}
      <div
        className="absolute bottom-0 left-0 right-0 flex flex-col overflow-hidden"
        style={{
          background: '#fffffe',
          borderRadius: '28px 28px 0 0',
          animation: 'sheetUp 380ms cubic-bezier(0.32, 0.72, 0, 1) both',
          zIndex: 20,
          maxHeight: '90%',
          willChange: 'transform',
        }}
      >

        {/* ── Image header (shown when photo selected) ── */}
        {photo && (
          <div
            className="relative shrink-0 overflow-hidden"
            style={{ height: 172, animation: 'imageIn 320ms ease both' }}
          >
            <img
              src={photo.src}
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Light gradient at top only — bottom covered by card */}
            <div
              className="absolute inset-0"
              style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.22) 0%, rgba(0,0,0,0.0) 55%)' }}
            />
            {/* Remove button — top-right, clear of card overlap zone */}
            <button
              onClick={removePhoto}
              className="absolute flex items-center gap-[5px] rounded-pill"
              style={{
                top: 12,
                right: 14,
                background: 'rgba(0,0,0,0.32)',
                backdropFilter: 'blur(8px)',
                WebkitBackdropFilter: 'blur(8px)',
                padding: '5px 10px 5px 8px',
              }}
            >
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path d="M1.5 1.5l7 7M8.5 1.5l-7 7" stroke="rgba(255,255,254,0.85)" strokeWidth="1.4" strokeLinecap="round" />
              </svg>
              <span
                className="font-sans font-medium"
                style={{ fontSize: 11, color: 'rgba(255,255,254,0.85)', fontVariationSettings: "'opsz' 9" }}
              >
                Remove
              </span>
            </button>
            {/* Role badge — positioned above card overlap zone */}
            {role && (
              <div
                className="absolute rounded-pill"
                style={{
                  bottom: 30,
                  left: 14,
                  background: 'rgba(255,255,254,0.16)',
                  backdropFilter: 'blur(8px)',
                  WebkitBackdropFilter: 'blur(8px)',
                  border: '1px solid rgba(255,255,254,0.2)',
                  padding: '4px 10px',
                }}
              >
                <span
                  className="font-sans font-medium uppercase"
                  style={{ fontSize: 9, letterSpacing: '1.4px', color: '#fffffe', fontVariationSettings: "'opsz' 9" }}
                >
                  {role}
                </span>
              </div>
            )}
          </div>
        )}

        {/* Scrollable body — slides up over image when photo is present */}
        <div
          className="flex flex-col overflow-y-auto scrollbar-hide"
          style={{
            paddingBottom: 28,
            background: '#fffffe',
            borderRadius: photo ? '22px 22px 0 0' : undefined,
            marginTop: photo ? -22 : 0,
            position: 'relative',
          }}
        >

          {/* Handle — always inside body so it sits on the white surface */}
          <div className="flex justify-center shrink-0" style={{ paddingTop: 12, paddingBottom: 4 }}>
            <div style={{ width: 36, height: 4, borderRadius: 2, background: 'rgba(138,116,103,0.25)' }} />
          </div>

          {/* ── Writing area ── */}
          <div style={{ padding: '18px 20px 6px' }}>
            <textarea
              ref={textareaRef}
              value={text}
              onChange={e => setText(e.target.value)}
              placeholder="What's worth remembering…"
              rows={5}
              className="w-full resize-none bg-transparent outline-none border-none"
              style={{
                fontFamily: "'F37 Bobby Trial', Georgia, serif",
                fontWeight: 700,
                fontSize: 20,
                lineHeight: '31px',
                letterSpacing: '-0.3px',
                color: INK,
                caretColor: GREEN,
              }}
            />
          </div>

          {/* ── Divider ── */}
          <div style={{ height: 1, background: BORDER, margin: '10px 20px 16px' }} />

          {/* ── Role pills — no label, context implied ── */}
          <div
            className="flex gap-[7px] overflow-x-auto scrollbar-hide"
            style={{ paddingLeft: 20, paddingRight: 20, paddingBottom: 16 }}
          >
            {ROLES.map(r => {
              const active = role === r
              return (
                <button
                  key={r}
                  onClick={() => setRole(active ? null : r)}
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
                  {r}
                </button>
              )
            })}
          </div>

          {/* ── Illustration picker (revealed by camera button) ── */}
          {showPicker && (
            <div
              style={{
                paddingBottom: 16,
                animation: 'pickerReveal 220ms cubic-bezier(0.22, 1, 0.36, 1) both',
              }}
            >
              {/* Divider above picker */}
              <div style={{ height: 1, background: BORDER, margin: '0 20px 14px' }} />

              <div
                className="flex gap-2 overflow-x-auto scrollbar-hide"
                style={{ paddingLeft: 20, paddingRight: 20 }}
              >
                {/* Upload slot */}
                <label
                  className="relative flex flex-col items-center justify-center gap-1 shrink-0 rounded-[14px]"
                  style={{
                    width: 72,
                    height: 72,
                    border: '1px dashed rgba(138,116,103,0.35)',
                    background: '#FFFCF3',
                    cursor: 'pointer',
                    color: MUTED,
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <rect x="2" y="4" width="14" height="10" rx="2" stroke={MUTED} strokeWidth="1.3" />
                    <circle cx="9" cy="9" r="2.5" stroke={MUTED} strokeWidth="1.3" />
                    <path d="M6.5 4V3a.5.5 0 01.5-.5h4a.5.5 0 01.5.5v1" stroke={MUTED} strokeWidth="1.3" />
                  </svg>
                  <span
                    className="font-sans font-medium text-center"
                    style={{ fontSize: 9, lineHeight: '12px', color: MUTED, fontVariationSettings: "'opsz' 9" }}
                  >
                    Upload
                  </span>
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={e => {
                      const file = e.target.files?.[0]
                      if (!file) return
                      setPhoto({ src: URL.createObjectURL(file), label: file.name, source: 'upload' })
                      setShowPicker(false)
                    }}
                  />
                </label>

                {/* Illustration tiles */}
                {ILLUSTRATIONS.map(item => (
                  <IllustrationTile
                    key={item.id}
                    item={item}
                    selected={photo?.src === item.src}
                    onSelect={() => selectIllustration(item)}
                  />
                ))}
              </div>
            </div>
          )}

          {/* ── Bottom toolbar ── */}
          <div
            className="flex items-center gap-3"
            style={{ padding: '4px 20px 0' }}
          >
            {/* Camera toggle */}
            <button
              onClick={() => setShowPicker(p => !p)}
              className="flex items-center justify-center rounded-full shrink-0"
              style={{
                width: 40,
                height: 40,
                background: showPicker ? 'rgba(4,74,40,0.08)' : 'rgba(138,116,103,0.08)',
                transition: 'background 160ms ease',
              }}
              aria-label={showPicker ? 'Close picker' : 'Add illustration'}
            >
              {photo && !showPicker ? (
                /* Thumbnail preview when photo selected and picker closed */
                <div className="rounded-full overflow-hidden" style={{ width: 24, height: 24 }}>
                  <img src={photo.src} alt="" className="w-full h-full object-cover" />
                </div>
              ) : (
                <svg width="17" height="17" viewBox="0 0 17 17" fill="none">
                  <rect x="1.5" y="4" width="14" height="10" rx="2.5" stroke={showPicker ? GREEN : MUTED} strokeWidth="1.4" />
                  <circle cx="8.5" cy="9" r="2.6" stroke={showPicker ? GREEN : MUTED} strokeWidth="1.4" />
                  <path d="M6 4V3a.6.6 0 01.6-.6h4a.6.6 0 01.6.6v1" stroke={showPicker ? GREEN : MUTED} strokeWidth="1.4" />
                </svg>
              )}
            </button>

            {/* Spacer */}
            <div className="flex-1" />

            {/* Capture button */}
            <button
              onClick={() => { if (canSubmit) onClose() }}
              disabled={!canSubmit}
              className="flex items-center gap-[8px] rounded-pill"
              style={{
                background: canSubmit ? GREEN : 'rgba(4,74,40,0.25)',
                padding: '12px 20px',
                cursor: canSubmit ? 'pointer' : 'not-allowed',
                transition: 'background 200ms ease',
              }}
            >
              <span
                className="font-sans font-medium"
                style={{ fontSize: 14, color: '#fcfcfa', fontVariationSettings: "'opsz' 14" }}
              >
                Capture moment
              </span>
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                <path d="M2 6.5h9M8 3l3.5 3.5L8 10" stroke="#fcfcfa" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>

        </div>
      </div>
    </>
  )
}
