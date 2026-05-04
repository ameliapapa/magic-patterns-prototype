import { useState, useRef, useEffect } from 'react'

// ─── Mae icon ─────────────────────────────────────────────────────────────────
import maeFlowerIcon from '../assets/icons/mae-flower-icon.svg'

// ─── Cover hero ───────────────────────────────────────────────────────────────
import imgCoverHero from '../assets/illustrations/u1355955226_mountain_hike_--sref_202514354_--profile_8d1tcdd__1a989c17-693e-4851-a5ca-8fd6e6bc33dd_1.png'

// ─── Role illustrations (welcome screen) ─────────────────────────────────────
import imgSelf from '../assets/illustrations/u1355955226_runner_in_the_park_--sref_202514354_--profile_8d1_34b21c61-5858-439e-8fbd-0256b22a06a4_0.png'
import imgCreative from '../assets/illustrations/u1355955226_painter_painting_a_canvas_--sref_202514354_--prof_51f7c398-d464-4ad1-8bb6-da52f2cc1971_0.png'
import imgParent from '../assets/illustrations/u1355955226_parent_holding_childs_hand_--sref_202514354_--pro_91fe1ad1-9487-4412-b919-7b0594e7df7f_0.png'
import imgFriend from '../assets/illustrations/u1355955226_two_girls_sitting_in_coffee_shop_--sref_202514354_12f89aa8-94a4-410a-8fc2-7fd8f984d2c3_0.png'
import imgPartner from '../assets/illustrations/dinner-date-restaurant.png'
import imgProfessional from '../assets/illustrations/female-software-programmer.png'
import imgDaughter from '../assets/illustrations/u1355955226_helping_elderly_--sref_202514354_--profile_8d1tcd_3a38955f-8e12-495e-a291-1c85261bfe95_3.png'
import imgFallback from '../assets/illustrations/reading-female-v1.png'

// ─── Role icons ───────────────────────────────────────────────────────────────
import iconSelf from '../assets/icons/self-role-icon.svg'
import iconCreativeIcon from '../assets/icons/creative-icon.svg'
import iconParent from '../assets/icons/parent-role-icon.svg'
import iconFriend from '../assets/icons/friend-role-icon.svg'
import iconPartner from '../assets/icons/partner-role.svg'
import iconProfessional from '../assets/icons/professional-role.svg'
import iconDaughter from '../assets/icons/daughter-role-icon.svg'
import iconCaregiver from '../assets/icons/caregiver-role.svg'
import iconPetOwner from '../assets/icons/pet-owner-role.svg'
import iconHomeOwner from '../assets/icons/home-owner-role.svg'
import iconStudent from '../assets/icons/student-role.svg'
import iconEntrepreneur from '../assets/icons/idea-01.svg'
import iconSibling from '../assets/icons/sibling-role.svg'
import iconMentor from '../assets/icons/mentor-role.svg'
import iconInvestor from '../assets/icons/investor-role.svg'
import iconReader from '../assets/icons/reader-role.svg'

// ─── Tokens ───────────────────────────────────────────────────────────────────
const GREEN = '#044A28'
const BG = '#FFFCF3'
const INK = '#2d2d2a'
const MUTED = '#6b6660'
const BORDER = 'rgba(138,116,103,0.2)'

// ─── Data ─────────────────────────────────────────────────────────────────────

type Role = { id: string; label: string; icon: string }

const ROLE_ROWS: Role[][] = [
  [
    { id: 'friend',       label: 'Friend',       icon: iconFriend },
    { id: 'daughter',     label: 'Daughter',     icon: iconDaughter },
    { id: 'self',         label: 'Self',         icon: iconSelf },
    { id: 'partner',      label: 'Partner',      icon: iconPartner },
    { id: 'parent',       label: 'Parent',       icon: iconParent },
    { id: 'creative',     label: 'Creative',     icon: iconCreativeIcon },
  ],
  [
    { id: 'caregiver',    label: 'Caregiver',    icon: iconCaregiver },
    { id: 'pet-owner',    label: 'Pet owner',    icon: iconPetOwner },
    { id: 'home-owner',   label: 'Home owner',   icon: iconHomeOwner },
    { id: 'student',      label: 'Student',      icon: iconStudent },
    { id: 'entrepreneur', label: 'Entrepreneur', icon: iconEntrepreneur },
  ],
  [
    { id: 'sibling',      label: 'Sibling',      icon: iconSibling },
    { id: 'mentor',       label: 'Mentor',       icon: iconMentor },
    { id: 'professional', label: 'Professional', icon: iconProfessional },
    { id: 'investor',     label: 'Investor',     icon: iconInvestor },
    { id: 'reader',       label: 'Reader',       icon: iconReader },
  ],
]

const ALL_ROLES = ROLE_ROWS.flat()

const ROLE_ILLUSTRATIONS: Record<string, string> = {
  self: imgSelf,
  creative: imgCreative,
  parent: imgParent,
  friend: imgFriend,
  partner: imgPartner,
  professional: imgProfessional,
  daughter: imgDaughter,
}

const DIRECTION_SUGGESTIONS: Record<string, string[]> = {
  self:         ['Be here, not just busy',              'Sleep and move first',              'Less guilt, more care'],
  creative:     ['Create without waiting for feedback', 'Finish what I start',               'Make things for myself'],
  parent:       ['Put the phone down and be there',     'Remember the small moments',        'Quality over quantity'],
  friend:       ["Reach out first, don't wait",         'Actually show up',                  'Be the one who calls'],
  partner:      ['Choose them on purpose',              "Say the thing I'm thinking",        'Keep making time for each other'],
  professional: ['Build things worth building',         "Say no to what doesn't matter",     'Finish what I start'],
  daughter:     ['Call more, visit more',               'Listen more than I talk',           "Don't wait for a reason"],
}
const DEFAULT_SUGGESTIONS = ['Show up consistently', 'One thing at a time', 'Be present, not performative']

const INTENTION_CHIPS = [
  'Morning routine', 'Weekly catch-up', 'No phones at dinner',
  'Daily walk', 'Deep work block', 'Monthly check-in',
]

// ─── Shared sub-components ────────────────────────────────────────────────────

function ProgressDots({ current, total }: { current: number; total: number }) {
  return (
    <div className="flex gap-[6px] items-center justify-center">
      {Array.from({ length: total }).map((_, i) => (
        <div
          key={i}
          className="rounded-pill"
          style={{
            width: i < current ? 20 : 8,
            height: 4,
            background: i < current ? GREEN : '#d9d9d9',
          }}
        />
      ))}
    </div>
  )
}

function GreenButton({
  label,
  onClick,
  disabled,
}: {
  label: string
  onClick: () => void
  disabled?: boolean
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="w-full rounded-[24px] py-4 font-sans font-medium"
      style={{
        background: disabled ? 'transparent' : GREEN,
        border: disabled ? `1px solid ${BORDER}` : '1px solid transparent',
        color: disabled ? 'rgba(107,102,96,0.72)' : '#fffffe',
        fontFamily: disabled ? "'F37 Bobby Trial', Georgia, serif" : undefined,
        fontSize: disabled ? 18 : 16,
        fontWeight: disabled ? 700 : undefined,
        fontVariationSettings: disabled ? undefined : "'opsz' 14",
        transition: 'background 150ms ease, border-color 150ms ease',
      }}
    >
      {label}
    </button>
  )
}

function BackButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="w-full py-3 font-sans font-normal"
      style={{ fontSize: 14, color: 'rgba(74,74,69,0.55)', fontVariationSettings: "'opsz' 14" }}
    >
      Back
    </button>
  )
}

function WizardHeader({ step, total }: { step: number; total: number }) {
  return (
    <div className="flex flex-col items-center" style={{ paddingTop: 72, gap: 14 }}>
      <img src={maeFlowerIcon} alt="Mae" width={46} height={46} />
      <ProgressDots current={step} total={total} />
    </div>
  )
}

// ─── Step 0: Cover ────────────────────────────────────────────────────────────

function CoverStep({ onNext, onClose }: { onNext: () => void; onClose: () => void }) {
  return (
    <div className="flex flex-col h-full">
      {/* Hero image */}
      <div
        className="relative shrink-0 overflow-hidden"
        style={{
          height: 320,
          borderBottomLeftRadius: 50,
          borderBottomRightRadius: 50,
        }}
      >
        <img
          src={imgCoverHero}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: 'center 40%' }}
        />

        {/* Close pill — frosted glass, overlaid on hero */}
        <button
          onClick={onClose}
          className="absolute flex items-center gap-[6px] rounded-pill"
          style={{
            top: 52,
            right: 20,
            background: 'rgba(255,255,254,0.18)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            border: '1px solid rgba(255,255,254,0.22)',
            padding: '8px 16px',
          }}
        >
          <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
            <path d="M1 1l9 9M10 1L1 10" stroke="#fffffe" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
          <span
            className="font-sans font-medium"
            style={{ fontSize: 12, color: '#fffffe', fontVariationSettings: "'opsz' 14" }}
          >
            Close
          </span>
        </button>
      </div>

      {/* Content */}
      <div
        className="flex-1 flex flex-col items-center justify-center"
        style={{
          padding: '0 44px',
          gap: 14,
          animation: 'fadeUpIn 500ms 180ms both',
        }}
      >
        <img src={maeFlowerIcon} alt="" width={42} height={42} />
        <h1
          className="font-serif font-bold text-center"
          style={{ fontSize: 28, letterSpacing: '-0.5px', color: INK, lineHeight: '35px' }}
        >
          Let's add a role.
        </h1>
        <p
          className="font-sans text-center"
          style={{ fontSize: 14, color: MUTED, lineHeight: '21px', fontVariationSettings: "'opsz' 14" }}
        >
          Pick one, set a direction, done.
        </p>
      </div>

      {/* CTA */}
      <div style={{ padding: '0 40px 52px' }}>
        <GreenButton label="Get started" onClick={onNext} />
      </div>
    </div>
  )
}

// ─── Step 1: Pick role ────────────────────────────────────────────────────────

function RoleTile({
  role,
  selected,
  onSelect,
}: {
  role: Role
  selected: boolean
  onSelect: () => void
}) {
  return (
    <button
      onClick={onSelect}
      className="flex flex-row items-center shrink-0 active:scale-[0.95]"
      style={{
        background: selected ? GREEN : BG,
        border: selected ? '1px solid transparent' : '1px solid rgba(138,116,103,0.2)',
        transition: 'background 180ms ease, border-color 180ms ease, transform 100ms ease',
        borderRadius: 24,
        padding: '8px 14px 8px 10px',
        gap: 8,
      }}
    >
      <img
        src={role.icon}
        alt={role.label}
        style={{
          width: 28,
          height: 28,
          filter: selected ? 'brightness(0) invert(1)' : 'none',
        }}
      />
      <span
        className="font-sans font-medium"
        style={{
          fontSize: 12,
          lineHeight: '15px',
          color: selected ? '#fafaf7' : '#030712',
          fontVariationSettings: "'opsz' 14",
          whiteSpace: 'nowrap',
        }}
      >
        {role.label}
      </span>
    </button>
  )
}

function PickRoleStep({
  selectedId,
  onSelect,
  onNext,
  onBack,
}: {
  selectedId: string | null
  onSelect: (id: string | null) => void
  onNext: () => void
  onBack: () => void
}) {
  const [customRole, setCustomRole] = useState('')
  const allRoles = ROLE_ROWS.flat()
  const row1 = allRoles.slice(0, 8)
  const row2 = allRoles.slice(8)
  const canContinue = !!selectedId || customRole.trim().length > 0

  return (
    <div className="relative h-full" style={{ background: BG }}>
      <WizardHeader step={1} total={4} />

      <div style={{ animation: 'fadeUpIn 460ms 140ms both' }}>
        <div className="text-center px-6" style={{ paddingTop: 20 }}>
          <p className="font-serif font-bold" style={{ fontSize: 20, lineHeight: '27px', color: INK }}>
            Which role?
          </p>
          <p
            className="font-sans font-medium"
            style={{ fontSize: 10, color: MUTED, marginTop: 4, fontVariationSettings: "'opsz' 14" }}
          >
            You can add more later.
          </p>
        </div>

        {/* Row 1 — horizontal scroll */}
        <div
          className="overflow-x-auto scrollbar-hide flex gap-2"
          style={{ paddingLeft: 24, paddingRight: 24, paddingTop: 16 }}
        >
          {row1.map(role => (
            <RoleTile
              key={role.id}
              role={role}
              selected={selectedId === role.id}
              onSelect={() => onSelect(selectedId === role.id ? null : role.id)}
            />
          ))}
        </div>

        {/* Row 2 — horizontal scroll */}
        <div
          className="overflow-x-auto scrollbar-hide flex gap-2"
          style={{ paddingLeft: 24, paddingRight: 24, paddingTop: 10 }}
        >
          {row2.map(role => (
            <RoleTile
              key={role.id}
              role={role}
              selected={selectedId === role.id}
              onSelect={() => onSelect(selectedId === role.id ? null : role.id)}
            />
          ))}
        </div>

        {/* Custom role input */}
        <div style={{ paddingLeft: 55, paddingTop: 32, width: 326 }}>
          <input
            value={customRole}
            onChange={e => {
              setCustomRole(e.target.value)
              if (e.target.value.trim()) onSelect(null)
            }}
            className="w-full bg-transparent outline-none border-none font-serif font-bold text-black"
            style={{ fontSize: 20, lineHeight: '27px', caretColor: INK }}
            placeholder=""
          />
          <div style={{ width: 271, height: 1, background: INK, marginTop: 8 }} />
          <p
            className="font-sans font-normal"
            style={{ fontSize: 10, lineHeight: '27px', color: 'rgba(74,74,69,0.6)', marginTop: 2, fontVariationSettings: "'opsz' 14" }}
          >
            Add a role in your own words
          </p>
        </div>
      </div>

      {/* Bottom actions — absolute, same as onboarding */}
      <div
        className="absolute bottom-0 left-0 right-0 flex flex-col items-center"
        style={{ gap: 8, padding: '0 41px 24px' }}
      >
        <GreenButton label="Continue" onClick={onNext} disabled={!canContinue} />
        <BackButton onClick={onBack} />
      </div>
    </div>
  )
}

// ─── Step 2: Direction ────────────────────────────────────────────────────────

function DirectionStep({
  role,
  value,
  onChange,
  onNext,
  onBack,
}: {
  role: Role | null
  value: string
  onChange: (v: string) => void
  onNext: () => void
  onBack: () => void
}) {
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  useEffect(() => {
    const t = setTimeout(() => textareaRef.current?.focus(), 400)
    return () => clearTimeout(t)
  }, [])

  const suggestions = role ? (DIRECTION_SUGGESTIONS[role.id] ?? DEFAULT_SUGGESTIONS) : DEFAULT_SUGGESTIONS

  return (
    <div className="flex flex-col h-full">
      <WizardHeader step={2} total={4} />

      <div
        className="flex-1 overflow-y-auto scrollbar-hide"
        style={{ padding: '28px 24px 0', animation: 'fadeUpIn 460ms 140ms both' }}
      >
        <h2
          className="font-serif font-bold"
          style={{ fontSize: 22, letterSpacing: '-0.3px', color: INK, marginBottom: 6, lineHeight: '29px' }}
        >
          How do you want to show up as {role?.label ?? 'this role'}?
        </h2>
        <p
          className="font-sans"
          style={{ fontSize: 13, color: MUTED, marginBottom: 24, fontVariationSettings: "'opsz' 14" }}
        >
          One line is enough.
        </p>

        <div
          className="rounded-[24px] overflow-hidden"
          style={{
            background: 'rgba(138,116,103,0.06)',
            border: `1px solid ${BORDER}`,
            padding: '16px 18px',
            marginBottom: 24,
          }}
        >
          <textarea
            ref={textareaRef}
            value={value}
            onChange={e => onChange(e.target.value)}
            placeholder="My direction for this role..."
            className="w-full bg-transparent resize-none outline-none font-serif font-bold"
            rows={3}
            style={{
              fontSize: 19,
              lineHeight: '28px',
              color: INK,
              caretColor: GREEN,
              letterSpacing: '-0.2px',
            }}
          />
        </div>

        <p
          className="font-sans font-medium"
          style={{ fontSize: 11, color: 'rgba(45,45,42,0.4)', letterSpacing: '0.5px', marginBottom: 12, fontVariationSettings: "'opsz' 9" }}
        >
          TRY ONE OF THESE
        </p>
        <div className="flex flex-col gap-[8px]">
          {suggestions.map(s => (
            <button
              key={s}
              onClick={() => onChange(s)}
              className="text-left rounded-[14px]"
              style={{
                border: `1px solid ${value === s ? 'rgba(4,74,40,0.35)' : BORDER}`,
                padding: '11px 14px',
                background: value === s ? 'rgba(4,74,40,0.06)' : 'transparent',
                transition: 'background 140ms ease, border-color 140ms ease',
              }}
            >
              <span
                className="font-serif"
                style={{
                  fontSize: 14,
                  color: '#BC3712',
                  lineHeight: '20px',
                  fontWeight: 700,
                  transition: 'color 140ms ease',
                }}
              >
                {s}
              </span>
            </button>
          ))}
        </div>

        <div style={{ height: 20 }} />
      </div>

      <div style={{ padding: '16px 40px 44px' }}>
        <GreenButton label="Continue" onClick={onNext} />
        <BackButton onClick={onBack} />
      </div>
    </div>
  )
}

// ─── Step 3: Intentions ───────────────────────────────────────────────────────

function IntentionsStep({
  intentions,
  onChange,
  onNext,
  onBack,
}: {
  intentions: string[]
  onChange: (v: string[]) => void
  onNext: () => void
  onBack: () => void
}) {
  function update(i: number, val: string) {
    const next = [...intentions]
    next[i] = val
    onChange(next)
  }

  function applyChip(chip: string) {
    const emptyIdx = intentions.findIndex(v => v.trim() === '')
    if (emptyIdx >= 0) {
      update(emptyIdx, chip)
    } else if (intentions.length < 3) {
      onChange([...intentions, chip])
    }
  }

  return (
    <div className="flex flex-col h-full">
      <WizardHeader step={3} total={4} />

      <div
        className="flex-1 overflow-y-auto scrollbar-hide"
        style={{ padding: '28px 24px 0', animation: 'fadeUpIn 460ms 140ms both' }}
      >
        <h2
          className="font-serif font-bold"
          style={{ fontSize: 22, letterSpacing: '-0.3px', color: INK, marginBottom: 6, lineHeight: '29px' }}
        >
          What do you want to keep coming back to?
        </h2>
        <p
          className="font-sans"
          style={{ fontSize: 13, color: MUTED, marginBottom: 24, fontVariationSettings: "'opsz' 14" }}
        >
          One is plenty. You can always add more.
        </p>

        <div className="flex flex-col gap-[10px]" style={{ marginBottom: 24 }}>
          {intentions.map((val, i) => (
            <div
              key={i}
              className="rounded-[16px] overflow-hidden"
              style={{
                background: 'rgba(138,116,103,0.06)',
                border: `1px solid ${BORDER}`,
                padding: '14px 16px',
                animation: i > 0 ? 'fadeUpIn 300ms both' : undefined,
              }}
            >
              <input
                type="text"
                value={val}
                autoFocus={i === intentions.length - 1 && i > 0}
                onChange={e => update(i, e.target.value)}
                placeholder={i === 0 ? 'e.g. Daily walk, weekly call, journalling' : 'Another intention...'}
                className="w-full bg-transparent outline-none font-serif font-bold"
                style={{
                  fontSize: 17,
                  color: INK,
                  caretColor: GREEN,
                  letterSpacing: '-0.15px',
                }}
              />
            </div>
          ))}

          {intentions.length < 3 && (
            <button
              onClick={() => onChange([...intentions, ''])}
              className="flex items-center gap-[7px] self-start"
              style={{ padding: '4px 0' }}
            >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M6 1v10M1 6h10" stroke="rgba(4,74,40,0.5)" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              <span
                className="font-sans font-normal"
                style={{ fontSize: 13, color: 'rgba(4,74,40,0.65)', fontVariationSettings: "'opsz' 9" }}
              >
                Add another
              </span>
            </button>
          )}
        </div>

        <p
          className="font-sans font-medium"
          style={{ fontSize: 11, color: 'rgba(45,45,42,0.4)', letterSpacing: '0.5px', marginBottom: 12, fontVariationSettings: "'opsz' 9" }}
        >
          OR PICK ONE
        </p>
        <div className="flex flex-wrap gap-[8px]">
          {INTENTION_CHIPS.map(s => (
            <button
              key={s}
              onClick={() => applyChip(s)}
              className="rounded-[10px]"
              style={{ border: `1px solid ${BORDER}`, padding: '8px 13px', background: 'transparent' }}
            >
              <span
                className="font-sans font-normal"
                style={{ fontSize: 12, color: INK, fontVariationSettings: "'opsz' 9" }}
              >
                {s}
              </span>
            </button>
          ))}
        </div>

        <div style={{ height: 20 }} />
      </div>

      <div style={{ padding: '16px 40px 44px' }}>
        <GreenButton label="Continue" onClick={onNext} />
        <BackButton onClick={onBack} />
      </div>
    </div>
  )
}

// ─── Step 4: Welcome ──────────────────────────────────────────────────────────

function WelcomeStep({
  role,
  direction,
  onComplete,
}: {
  role: Role | null
  direction: string
  onComplete: () => void
}) {
  const illustration = role ? (ROLE_ILLUSTRATIONS[role.id] ?? imgFallback) : imgFallback

  return (
    <div className="h-full overflow-y-auto scrollbar-hide" style={{ background: BG }}>
      {/* Hero */}
      <div className="relative shrink-0" style={{ height: 300 }}>
        <img
          src={illustration}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: 'center 30%' }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to bottom, rgba(0,0,0,0.22) 0%, rgba(0,0,0,0.06) 38%, rgba(0,0,0,0.52) 78%, rgba(0,0,0,0.70) 100%)',
          }}
        />

        {/* Role pill */}
        {role && (
          <div
            className="absolute flex flex-col gap-[10px]"
            style={{
              bottom: 28,
              left: 24,
              right: 24,
              animation: 'fadeUpIn 480ms 160ms both',
            }}
          >
            <div
              className="flex items-center gap-[8px] self-start rounded-pill"
              style={{
                background: 'rgba(255,255,254,0.15)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,255,254,0.22)',
                padding: '6px 12px 6px 8px',
              }}
            >
              <div
                className="flex items-center justify-center rounded-full"
                style={{ width: 24, height: 24, background: 'rgba(255,255,254,0.2)' }}
              >
                <img
                  src={role.icon}
                  alt=""
                  width={13}
                  height={13}
                  style={{ filter: 'brightness(0) invert(1)' }}
                />
              </div>
              <span
                className="font-sans font-medium uppercase"
                style={{ fontSize: 11, letterSpacing: '1.8px', color: '#fffffe', fontVariationSettings: "'opsz' 14" }}
              >
                {role.label}
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <div
        className="flex flex-col"
        style={{
          padding: '28px 24px 52px',
          animation: 'fadeUpIn 520ms 220ms cubic-bezier(0.22,1,0.36,1) both',
        }}
      >
        {direction ? (
          <div style={{ marginBottom: 24 }}>
            <span
              className="font-sans font-medium uppercase"
              style={{
                fontSize: 10,
                letterSpacing: '1.1px',
                color: 'rgba(45,45,42,0.45)',
                display: 'block',
                marginBottom: 12,
                fontVariationSettings: "'opsz' 9",
              }}
            >
              Your direction
            </span>
            <div style={{ paddingLeft: 14, borderLeft: '2px solid rgba(4,74,40,0.28)' }}>
              <p
                className="font-serif"
                style={{
                  fontSize: 18,
                  lineHeight: '27px',
                  letterSpacing: '-0.2px',
                  color: '#BC3712',
                  fontWeight: 700,
                }}
              >
                "{direction}"
              </p>
            </div>
          </div>
        ) : (
          <div style={{ marginBottom: 24 }}>
            <p
              className="font-sans"
              style={{ fontSize: 14, color: 'rgba(138,116,103,0.65)', fontVariationSettings: "'opsz' 14" }}
            >
              No direction set — you can add one from the role screen.
            </p>
          </div>
        )}

        {/* Mae note */}
        <div
          className="rounded-[24px] flex flex-col gap-[10px]"
          style={{
            background: 'rgba(4,74,40,0.06)',
            padding: '16px 18px',
            marginBottom: 28,
          }}
        >
          <div className="flex items-center gap-[7px]">
            <img src={maeFlowerIcon} alt="" width={16} height={16} />
            <span
              className="font-sans font-medium uppercase"
              style={{ fontSize: 9, letterSpacing: '1.3px', color: GREEN, opacity: 0.8, fontVariationSettings: "'opsz' 9" }}
            >
              Mae
            </span>
          </div>
          <p
            className="font-sans"
            style={{ fontSize: 14, lineHeight: '21px', color: INK, fontVariationSettings: "'opsz' 14" }}
          >
            I'll ask how this is going when you check in.
          </p>
        </div>

        <GreenButton
          label={`Go to ${role?.label ?? 'this role'} →`}
          onClick={onComplete}
        />
      </div>
    </div>
  )
}

// ─── Main export ──────────────────────────────────────────────────────────────

export default function RoleEditWizard({
  onComplete,
  onClose,
}: {
  onComplete: () => void
  onClose: () => void
}) {
  const [step, setStep] = useState(0)
  const directionRef = useRef<'forward' | 'back'>('forward')
  const [selectedRoleId, setSelectedRoleId] = useState<string | null>(null)
  const [directionText, setDirectionText] = useState('')
  const [intentions, setIntentions] = useState<string[]>([''])

  function goNext() {
    directionRef.current = 'forward'
    setStep(s => s + 1)
  }

  function goBack() {
    directionRef.current = 'back'
    setStep(s => s - 1)
  }

  const anim = directionRef.current === 'forward' ? 'onbSlideInRight' : 'onbSlideInLeft'
  const selectedRole = ALL_ROLES.find(r => r.id === selectedRoleId) ?? null

  return (
    <div
      className="absolute inset-0"
      style={{ zIndex: 50, overflow: 'hidden', willChange: 'transform', background: BG }}
    >
      <div
        key={step}
        className="absolute inset-0"
        style={{
          background: BG,
          overflow: 'hidden',
          animation: `${anim} 300ms cubic-bezier(0.22, 1, 0.36, 1) both`,
        }}
      >
        {step === 0 && <CoverStep onNext={goNext} onClose={onClose} />}
        {step === 1 && (
          <PickRoleStep
            selectedId={selectedRoleId}
            onSelect={setSelectedRoleId}
            onNext={goNext}
            onBack={goBack}
          />
        )}
        {step === 2 && (
          <DirectionStep
            role={selectedRole}
            value={directionText}
            onChange={setDirectionText}
            onNext={goNext}
            onBack={goBack}
          />
        )}
        {step === 3 && (
          <IntentionsStep
            intentions={intentions}
            onChange={setIntentions}
            onNext={goNext}
            onBack={goBack}
          />
        )}
        {step === 4 && (
          <WelcomeStep
            role={selectedRole}
            direction={directionText}
            onComplete={onComplete}
          />
        )}
      </div>
    </div>
  )
}
