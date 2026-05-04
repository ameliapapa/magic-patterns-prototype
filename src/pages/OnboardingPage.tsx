import React, { useState, useRef, useEffect } from 'react'

// Mae logo
import maeLogo from '../assets/icons/mae-logo.svg'
import maeFlowerIcon from '../assets/icons/mae-flower-icon.svg'

// Grid illustrations (intro-1)
import imgStudying2 from '../assets/illustrations/u1355955226_student_studying_--sref_202514354_--profile_8d1tc_fc17280c-b262-49d3-9b3f-5e837e25e74b_2.png'
import imgParentChild from '../assets/illustrations/u1355955226_httpss.mj.runediIY9CaOxU_parent_holding_childs_ha_3d4341f0-366f-4f5d-b1e3-7cbd3860dfaf_2.png'
import imgBoardgames from '../assets/illustrations/u1355955226_playing_boardgames_--sref_202514354_--profile_8d1tc_d900c493-d5da-47b1-8964-94b53fbc6932.png'
import imgLunch from '../assets/illustrations/u1355955226_top_down_of_lunch_spread_at_a_restaurant_--sref_2_abbba477-5dd3-4b18-9a64-99e4f98bac2c_0.png'
import imgDancer from '../assets/illustrations/u1355955226_dancer_in_studio_--sref_202514354_--profile_8d1tc_4471827e-5bc1-4b21-8b83-57daf2706044_3.png'
import imgDogWalk from '../assets/illustrations/u1355955226_man_walking_dog_in_park_--sref_202514354_--profil_35c96630-cd8f-4290-85f0-14bf006601ba_1.png'

// Intro-2 hero
import imgBeach from '../assets/illustrations/u1355955226_two_men_walk_by_the_beach_--sref_202514354_--prof_896047be-7012-4fb3-9026-474f2bca23d0_3.png'

// Intention suggestion cards
import imgWriting from '../assets/illustrations/u1355955226_student_studying_--sref_202514354_--profile_8d1tc_fc17280c-b262-49d3-9b3f-5e837e25e74b_0.png'
import imgDrawing from '../assets/illustrations/drawing_female.png'
import imgPainting from '../assets/illustrations/u1355955226_painter_painting_a_canvas_--sref_202514354_--prof_51f7c398-d464-4ad1-8bb6-da52f2cc1971_1.png'

// Role icons — dark (for light background, unselected)
import iconFriend from '../assets/icons/friend-role-icon.svg'
import iconDaughter from '../assets/icons/daughter-role-icon.svg'
import iconSelf from '../assets/icons/self-role-icon.svg'
import iconPartner from '../assets/icons/partner-role.svg'
import iconParent from '../assets/icons/parent-role-icon.svg'
import iconCreative from '../assets/icons/creative-icon.svg'
import iconCaregiver from '../assets/icons/caregiver-role.svg'
import iconPetOwner from '../assets/icons/pet-owner-role.svg'
import iconHomeOwner from '../assets/icons/home-owner-role.svg'
import iconStudent from '../assets/icons/student-role.svg'
import iconSibling from '../assets/icons/sibling-role.svg'
import iconMentor from '../assets/icons/mentor-role.svg'
import iconProfessional from '../assets/icons/professional-role.svg'
import iconInvestor from '../assets/icons/investor-role.svg'
import iconReader from '../assets/icons/reader-role.svg'
import iconEntrepreneur from '../assets/icons/entrepeneur-role.svg'
import iconEntrepreneurLight from '../assets/icons/entrepeneur-role-light.svg'

// Role icons — light (for dark background, selected)
import iconFriendLight from '../assets/icons/friend-role-icon-light.svg'
import iconDaughterLight from '../assets/icons/daughter-role-icon-light.svg'
import iconSelfLight from '../assets/icons/self-role-icon-light.svg'
import iconPartnerLight from '../assets/icons/partner-role-light.svg'
import iconParentLight from '../assets/icons/parent-role-icon-light.svg'
import iconCreativeLight from '../assets/icons/creative-icon-light.svg'
import iconCaregiverLight from '../assets/icons/caregiver-role-light.svg'
import iconPetOwnerLight from '../assets/icons/pet-owner-role-light.svg'
import iconHomeOwnerLight from '../assets/icons/home-owner-role-light.svg'
import iconStudentLight from '../assets/icons/student-role-light.svg'
import iconSiblingLight from '../assets/icons/sibling-role-light.svg'
import iconMentorLight from '../assets/icons/mentor-role-light.svg'
import iconProfessionalLight from '../assets/icons/professional-role-light.svg'
import iconInvestorLight from '../assets/icons/investor-role-light.svg'
import iconReaderLight from '../assets/icons/reader-role-light.svg'

// ─── Constants ────────────────────────────────────────────────────────────────

const GREEN = '#044A28'
const BG = '#FFFCF3'
const SURFACE = '#fffffe'
const INK = '#2d2d2a'
const MUTED = '#6b6660'
const BORDER = 'rgba(138,116,103,0.2)'
const TERRACOTTA = '#8f342f'
const MAE_LOGO_TOP = 90
const MAE_LOGO_HEIGHT = 64

const ROLES_ROW1 = [
  { id: 'friend',     label: 'Friend',    icon: iconFriend,       iconLight: iconFriendLight },
  { id: 'daughter',   label: 'Daughter',  icon: iconDaughter,     iconLight: iconDaughterLight },
  { id: 'self',       label: 'Self',      icon: iconSelf,         iconLight: iconSelfLight },
  { id: 'partner',    label: 'Partner',   icon: iconPartner,      iconLight: iconPartnerLight },
  { id: 'parent',     label: 'Parent',    icon: iconParent,       iconLight: iconParentLight },
  { id: 'creative',   label: 'Creative',  icon: iconCreative,     iconLight: iconCreativeLight },
]
const ROLES_ROW2 = [
  { id: 'caregiver',  label: 'Caregiver',   icon: iconCaregiver,  iconLight: iconCaregiverLight },
  { id: 'pet-owner',  label: 'Pet owner',   icon: iconPetOwner,   iconLight: iconPetOwnerLight },
  { id: 'home-owner', label: 'Home owner',  icon: iconHomeOwner,  iconLight: iconHomeOwnerLight },
  { id: 'student',    label: 'Student',     icon: iconStudent,    iconLight: iconStudentLight },
  { id: 'entrepreneur', label: 'Entrepreneur', icon: iconEntrepreneur, iconLight: iconEntrepreneurLight },
]
const ROLES_ROW3 = [
  { id: 'sibling',    label: 'Sibling',     icon: iconSibling,    iconLight: iconSiblingLight },
  { id: 'mentor',     label: 'Mentor',      icon: iconMentor,     iconLight: iconMentorLight },
  { id: 'professional', label: 'Professional', icon: iconProfessional, iconLight: iconProfessionalLight },
  { id: 'investor',   label: 'Investor',    icon: iconInvestor,   iconLight: iconInvestorLight },
  { id: 'reader',     label: 'Reader',      icon: iconReader,     iconLight: iconReaderLight },
]

// Decorative icon rows for intro-3 (always dark, displayed on light background)
const INTRO_ROW1 = [
  { id: 'daughter',     icon: iconDaughter,    label: 'Daughter' },
  { id: 'self',         icon: iconSelf,        label: 'Self' },
  { id: 'friend',       icon: iconFriend,      label: 'Friend' },
  { id: 'partner',      icon: iconPartner,     label: 'Partner' },
  { id: 'parent',       icon: iconParent,      label: 'Parent' },
  { id: 'creative',     icon: iconCreative,    label: 'Creative' },
  { id: 'professional', icon: iconProfessional, label: 'Professional' },
]
const INTRO_ROW2 = [
  { id: 'caregiver',    icon: iconCaregiver,   label: 'Caregiver' },
  { id: 'pet-owner',    icon: iconPetOwner,    label: 'Pet owner' },
  { id: 'home-owner',   icon: iconHomeOwner,   label: 'Home owner' },
  { id: 'student',      icon: iconStudent,     label: 'Student' },
  { id: 'sibling',      icon: iconSibling,     label: 'Sibling' },
  { id: 'mentor',       icon: iconMentor,      label: 'Mentor' },
  { id: 'entrepreneur', icon: iconEntrepreneur,  label: 'Entrepreneur' },
]

// ─── Shared components ────────────────────────────────────────────────────────

function MaeLogo() {
  return (
    <img
      src={maeLogo}
      alt="Mae"
      style={{ height: MAE_LOGO_HEIGHT, width: 'auto', maxWidth: 221 }}
    />
  )
}

function ProgressDots({ active, total = 5 }: { active: number; total?: number }) {
  return (
    <div className="flex gap-1" style={{ width: 240 }}>
      {Array.from({ length: total }).map((_, i) => (
        <div
          key={i}
          className="flex-1 rounded-full"
          style={{ height: 4, background: i < active ? GREEN : '#d9d9d9', transition: 'background 400ms ease' }}
        />
      ))}
    </div>
  )
}

function MaeHeader({ step, extraTop = 0 }: { step?: number; extraTop?: number }) {
  return (
    <div className="flex flex-col items-center" style={{ paddingTop: MAE_LOGO_TOP + extraTop, gap: 16 }}>
      <MaeLogo />
      {step !== undefined && <ProgressDots active={step} />}
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
      className="w-full flex items-center justify-center rounded-[20px] py-4 active:scale-[0.97] transition-transform duration-100"
      style={{
        background: disabled ? 'rgba(4,74,40,0.45)' : GREEN,
        cursor: disabled ? 'not-allowed' : 'pointer',
      }}
    >
      <span
        className="font-sans font-medium text-[#fcfcfa] text-center"
        style={{ fontSize: 16, fontVariationSettings: "'opsz' 14" }}
      >
        {label}
      </span>
    </button>
  )
}

function BackButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="w-full font-sans font-normal text-center hover:opacity-70 transition-opacity duration-150"
      style={{ fontSize: 14, color: 'rgba(74,74,69,0.55)', fontVariationSettings: "'opsz' 14" }}
    >
      Back
    </button>
  )
}

// paddingBottom is 56px for intro screens (no back button), 24px for step screens (with back)
function BottomActions({
  onContinue,
  onBack,
  continueLabel = 'Continue',
  disabled = false,
}: {
  onContinue: () => void
  onBack?: () => void
  continueLabel?: string
  disabled?: boolean
}) {
  const pb = onBack ? 24 : 56
  return (
    <div
      className="absolute bottom-0 left-0 right-0 flex flex-col items-center"
      style={{ gap: 8, padding: `0 41px ${pb}px` }}
    >
      <GreenButton label={continueLabel} onClick={onContinue} disabled={disabled} />
      {onBack && <BackButton onClick={onBack} />}
    </div>
  )
}

function SuggestionChip({ label, onClick }: { label: string; onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      className="flex items-center justify-center px-2 py-2 rounded-[10px] shrink-0 active:bg-[rgba(138,116,103,0.08)] transition-colors duration-100"
      style={{ border: '1px solid rgba(138,116,103,0.2)' }}
    >
      <span className="font-sans font-normal text-black text-center" style={{ fontSize: 13, lineHeight: '18px', fontVariationSettings: "'opsz' 14" }}>
        {label}
      </span>
    </button>
  )
}

function TextInputBox({
  value,
  onChange,
  placeholder,
}: {
  value: string
  onChange: (v: string) => void
  placeholder: string
}) {
  const inputRef = useRef<HTMLInputElement>(null)
  useEffect(() => {
    const t = setTimeout(() => inputRef.current?.focus(), 400)
    return () => clearTimeout(t)
  }, [])

  return (
    <div
      className="relative overflow-hidden rounded-[20px]"
      style={{ width: 290, height: 78, border: `1px solid ${BORDER}`, background: SURFACE }}
    >
      <input
        ref={inputRef}
        value={value}
        onChange={e => onChange(e.target.value)}
        className="absolute text-black bg-transparent outline-none border-none"
        style={{ top: 16, left: 16, right: 16, fontSize: 22, fontFamily: "'Libre Baskerville', Georgia, serif", fontWeight: 700, color: INK }}
      />
      {!value && (
        <p
          className="absolute font-sans font-normal text-left"
          style={{ bottom: 12, left: 16, fontSize: 13, lineHeight: '18px', color: MUTED, fontVariationSettings: "'opsz' 14" }}
        >
          {placeholder}
        </p>
      )}
    </div>
  )
}

function RoleTile({
  label,
  icon,
  iconLight,
  selected,
  onToggle,
}: {
  label: string
  icon: string
  iconLight: string
  selected: boolean
  onToggle: () => void
}) {
  return (
    <button
      onClick={onToggle}
      className="flex flex-row items-center shrink-0 active:scale-[0.95]"
      style={{
        background: selected ? GREEN : SURFACE,
        border: selected ? '1px solid transparent' : `1px solid ${BORDER}`,
        transition: 'background 180ms ease, border-color 180ms ease, transform 100ms ease',
        borderRadius: 20,
        padding: '8px 14px 8px 10px',
        gap: 8,
      }}
    >
      <img
        src={selected ? iconLight : icon}
        alt={label}
        style={{ width: 28, height: 28 }}
      />
      <span
        className="font-sans font-medium"
        style={{
          fontSize: 12,
          lineHeight: '15px',
          color: selected ? '#fffffe' : INK,
          fontVariationSettings: "'opsz' 14",
          whiteSpace: 'nowrap',
        }}
      >
        {label}
      </span>
    </button>
  )
}

// ─── Screen components ────────────────────────────────────────────────────────

function Intro1({ onNext }: { onNext: () => void }) {
  return (
    <div className="relative size-full" style={{ background: BG }}>
      {/* Mae logo — paddingTop 90 matches Figma ~92px from top */}
      <div className="flex justify-center" style={{ paddingTop: MAE_LOGO_TOP }}>
        <MaeLogo />
      </div>

      {/* Photo grid — two offset rows */}
      <div
        className="absolute overflow-hidden"
        style={{ top: 204, left: -77, width: 555, height: 343 }}
      >
        <div className="absolute flex gap-[14px]" style={{ top: 0, left: 47 }}>
          {[imgStudying2, imgParentChild, imgBoardgames].map((src, i) => (
            <div
              key={i}
              className="shrink-0 rounded-[20px] overflow-hidden"
              style={{ width: 160, height: 160, animation: 'fadeSlideUp 500ms ease both', animationDelay: `${i * 60}ms` }}
            >
              <img src={src} alt="" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
        <div className="absolute flex gap-[11px]" style={{ top: 184, left: 0 }}>
          {[imgLunch, imgDancer, imgDogWalk].map((src, i) => (
            <div
              key={i}
              className="shrink-0 rounded-[20px] overflow-hidden"
              style={{ width: 160, height: 160, animation: 'fadeSlideUp 500ms ease both', animationDelay: `${(i + 3) * 60}ms` }}
            >
              <img src={src} alt="" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>

      {/* Headline */}
      <div className="absolute text-center" style={{ top: 613, left: 0, right: 0, padding: '0 41px' }}>
        <p
          className="font-serif font-bold"
          style={{ fontSize: 20, lineHeight: '27px', color: '#2d2d2a' }}
        >
          Plan your week around{' '}
          <em style={{ fontWeight: 700, color: TERRACOTTA, fontStyle: 'normal' }}>who you are,</em>
          {' '}and{' '}
          <em style={{ fontWeight: 700, color: TERRACOTTA, fontStyle: 'normal' }}>who you are becoming</em>
        </p>
      </div>

      <BottomActions onContinue={onNext} />
    </div>
  )
}

function Intro2({ onNext }: { onNext: () => void }) {
  return (
    <div className="relative size-full overflow-hidden" style={{ background: BG }}>
      {/* Full-bleed beach illustration */}
      <div className="absolute" style={{ left: -297, top: -65, width: 939, height: 939 }}>
        <img src={imgBeach} alt="" className="w-full h-full object-cover" />
      </div>

      {/* Flower icon only — centered at 43.75% of frame */}
      <div
        className="absolute"
        style={{
          top: '43.75%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 141,
          height: 139,
        }}
      >
        <img src={maeFlowerIcon} alt="Mae" className="w-full h-full" style={{ animation: 'breathe 4s ease-in-out infinite' }} />
      </div>

      {/* Headline — between icon and button */}
      <div
        className="absolute text-center overflow-hidden"
        style={{ top: 468, left: 0, right: 0, paddingLeft: 24, paddingRight: 24, paddingBottom: 8 }}
      >
        <p
          className="font-serif font-bold"
          style={{ fontSize: 32, lineHeight: '38px', color: GREEN, animation: 'maskReveal 700ms cubic-bezier(0.22, 1, 0.36, 1) 150ms both' }}
        >
          Balance your roles{'\n'}
          through journaling{'\n'}
          with{' '}
          <span className="font-serif" style={{ fontWeight: 700 }}>Mae</span>
        </p>
      </div>

      <BottomActions onContinue={onNext} />
    </div>
  )
}

// Duplicated for seamless marquee loop
const INTRO_ROW1_LOOP = [...INTRO_ROW1, ...INTRO_ROW1]
const INTRO_ROW2_LOOP = [...INTRO_ROW2, ...INTRO_ROW2]

function MarqueeRow({
  items,
  direction,
  top,
}: {
  items: typeof INTRO_ROW1_LOOP
  direction: 'left' | 'right'
  top: number
}) {
  const animName = direction === 'left' ? 'marquee' : 'marqueeReverse'
  return (
    <div
      className="absolute overflow-hidden"
      style={{ top, left: 0, right: 0 }}
    >
      <div
        style={{
          display: 'flex',
          gap: 16,
          width: 'max-content',
          animation: `${animName} 28s linear infinite`,
        }}
      >
        {items.map((r, i) => (
          <div key={`${r.id}-${i}`} className="flex flex-col items-center shrink-0" style={{ width: 52 }}>
            <img src={r.icon} alt={r.label} style={{ width: 44, height: 44, opacity: 0.45 }} />
            <span
              className="font-sans font-medium text-center"
              style={{ fontSize: 9, lineHeight: 'normal', color: 'rgba(74,74,69,0.5)', fontVariationSettings: "'opsz' 14" }}
            >
              {r.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

function Intro3({ onNext }: { onNext: () => void }) {
  return (
    <div className="relative size-full" style={{ background: BG }}>
      <MaeHeader extraTop={60} />

      {/* Headline */}
      <div className="flex justify-center" style={{ paddingTop: 48 }}>
        <p className="font-serif font-bold text-center" style={{ fontSize: 24, lineHeight: '31px', color: '#2d2d2a', width: 248 }}>
          The roles you hold,<br />all tended for<br />in one place.
        </p>
      </div>

      <MarqueeRow items={INTRO_ROW1_LOOP} direction="left"  top={424} />
      <MarqueeRow items={INTRO_ROW2_LOOP} direction="right" top={500} />

      <BottomActions
        onContinue={onNext}
        continueLabel="Let's set them up"
      />
    </div>
  )
}

function StepPersonal({ onNext, onBack }: { onNext: (name: string) => void; onBack: () => void }) {
  const [name, setName] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)
  useEffect(() => {
    const t = setTimeout(() => inputRef.current?.focus(), 400)
    return () => clearTimeout(t)
  }, [])

  return (
    <div className="relative size-full" style={{ background: BG }}>
      <MaeHeader step={1} extraTop={60} />

      <div className="text-center px-6" style={{ paddingTop: 32 }}>
        <p className="font-serif font-bold" style={{ fontSize: 24, lineHeight: '31px', color: '#2d2d2a' }}>
          How should I call you?
        </p>
        <p
          className="font-sans font-medium"
          style={{ fontSize: 13, lineHeight: '20px', color: MUTED, marginTop: 6, fontVariationSettings: "'opsz' 14" }}
        >
          Could be your name or a nickname
        </p>
      </div>

      <div style={{ paddingLeft: 55, paddingTop: 90, width: 326 }}>
        <input
          ref={inputRef}
          value={name}
          onChange={e => setName(e.target.value)}
          className="w-full bg-transparent outline-none border-none font-serif font-bold text-black"
          style={{ fontSize: 23, lineHeight: '31px', caretColor: GREEN, color: INK }}
        />
        <div style={{ width: 271, height: 1, background: 'rgba(138,116,103,0.35)', marginTop: 8 }} />
        <p
          className="font-sans font-normal"
          style={{
            fontSize: 13,
            lineHeight: '20px',
            color: MUTED,
            marginTop: 6,
            fontVariationSettings: "'opsz' 14",
            opacity: name ? 1 : 0,
            transform: name ? 'translateY(0)' : 'translateY(4px)',
            transition: 'opacity 400ms ease, transform 400ms ease',
          }}
        >
          Nice to meet you, {name || ' '}.
        </p>
      </div>

      <BottomActions
        onContinue={() => onNext(name)}
        onBack={onBack}
        disabled={!name.trim()}
      />
    </div>
  )
}

function StepRoles({
  onNext,
  onBack,
}: {
  onNext: (roles: Set<string>) => void
  onBack: () => void
}) {
  const [selected, setSelected] = useState<Set<string>>(new Set())
  const [customRole, setCustomRole] = useState('')

  const toggle = (id: string) =>
    setSelected(prev => {
      const next = new Set(prev)
      next.has(id) ? next.delete(id) : next.add(id)
      return next
    })

  const count = selected.size
  const ALL_ROLES = [...ROLES_ROW1, ...ROLES_ROW2, ...ROLES_ROW3]
  const tileRow1 = ALL_ROLES.slice(0, 8)
  const tileRow2 = ALL_ROLES.slice(8)

  return (
    <div className="relative size-full" style={{ background: BG }}>
      <MaeHeader step={2} extraTop={60} />

      <div className="text-center px-6" style={{ paddingTop: 24 }}>
        <p className="font-serif font-bold" style={{ fontSize: 24, lineHeight: '31px', color: '#2d2d2a' }}>
          Which of these roles do you identify with, right now?
        </p>
        <p
          className="font-sans font-medium"
          style={{ fontSize: 13, lineHeight: '18px', color: MUTED, marginTop: 6, fontVariationSettings: "'opsz' 14" }}
        >
          Pick as many as you see fit. You can make changes anytime,{'\n'}roles can change with the seasons
        </p>
      </div>

      <div className="overflow-x-auto scrollbar-hide flex gap-2" style={{ paddingLeft: 24, paddingRight: 24, paddingTop: 28 }}>
        {tileRow1.map(r => (
          <RoleTile key={r.id} {...r} selected={selected.has(r.id)} onToggle={() => toggle(r.id)} />
        ))}
      </div>

      <div className="overflow-x-auto scrollbar-hide flex gap-2" style={{ paddingLeft: 24, paddingRight: 24, paddingTop: 10 }}>
        {tileRow2.map(r => (
          <RoleTile key={r.id} {...r} selected={selected.has(r.id)} onToggle={() => toggle(r.id)} />
        ))}
      </div>

      {/* Custom role input — same style as StepPersonal */}
      <div style={{ paddingLeft: 55, paddingTop: 52, width: 326 }}>
        <input
          value={customRole}
          onChange={e => setCustomRole(e.target.value)}
          className="w-full bg-transparent outline-none border-none font-serif font-bold text-black"
          style={{ fontSize: 23, lineHeight: '31px', caretColor: GREEN, color: INK }}
          placeholder=""
        />
        <div style={{ width: 271, height: 1, background: 'rgba(138,116,103,0.35)', marginTop: 8 }} />
        <p
          className="font-sans font-normal"
          style={{ fontSize: 13, lineHeight: '20px', color: 'rgba(74,74,69,0.6)', marginTop: 6, fontVariationSettings: "'opsz' 14" }}
        >
          Add a role in your own words
        </p>
      </div>

      <BottomActions
        onContinue={() => onNext(selected)}
        onBack={onBack}
        continueLabel={`${count} Role${count !== 1 ? 's' : ''} · Continue`}
        disabled={count === 0}
      />
    </div>
  )
}

function StepIntentions({ onNext, onBack }: { onNext: (items: string[]) => void; onBack: () => void }) {
  const [text, setText] = useState('')
  const suggestions = ['Making pottery', 'Filming videos', 'Designing posters', 'Writing a journal', 'Learning guitar']
  const intentions = text.split(',').map(s => s.trim()).filter(Boolean)

  const addSuggestion = (s: string) => {
    setText(prev => (prev ? `${prev}, ${s}` : s))
  }

  const CARDS = [
    { img: imgWriting, title: 'Writing poetry' },
    { img: imgDrawing, title: 'Essay writing' },
    { img: imgPainting, title: 'Watercolor painting' },
  ]

  return (
    <div className="relative size-full" style={{ background: BG }}>
      <MaeHeader step={3} />

      <div className="text-center px-6" style={{ paddingTop: 24 }}>
        <p className="font-serif font-bold" style={{ fontSize: 24, lineHeight: '31px', color: '#2d2d2a' }}>
          Where is your{' '}
          <em style={{ fontWeight: 700, color: TERRACOTTA, fontStyle: 'normal' }}>Creative</em>
          {' '}role pulling you, right now?
        </p>
      </div>

      <div className="flex justify-center" style={{ marginTop: 16 }}>
        <TextInputBox value={text} onChange={setText} placeholder="Add as many examples that come to mind" />
      </div>

      <div className="flex overflow-x-auto scrollbar-hide gap-2" style={{ paddingLeft: 24, paddingRight: 24, marginTop: 16 }}>
        {suggestions.map(s => (
          <SuggestionChip key={s} label={s} onClick={() => addSuggestion(s)} />
        ))}
      </div>

      <p
        className="font-sans font-normal text-center uppercase"
        style={{ fontSize: 13, lineHeight: '18px', color: 'rgba(74,74,69,0.6)', marginTop: 24, letterSpacing: '0.05em', fontVariationSettings: "'opsz' 14" }}
      >
        How about some suggestions
      </p>

      <div
        className="flex overflow-x-auto scrollbar-hide"
        style={{ paddingLeft: 8, paddingTop: 8, gap: 0 }}
      >
        {CARDS.map((c, i) => (
          <div key={i} className="flex flex-col gap-3 p-2 rounded-[30px] shrink-0">
            <div className="rounded-[20px] overflow-hidden" style={{ width: 150, height: 150 }}>
              <img src={c.img} alt={c.title} className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col gap-2 px-1">
              <div className="flex items-center gap-2">
                <img src={iconCreative} alt="" style={{ width: 18, height: 18 }} />
                <span
                  className="font-sans font-normal tracking-[1.2px] uppercase"
                  style={{ fontSize: 10, lineHeight: '15px', color: '#2d2d2a' }}
                >
                  CREATIVE
                </span>
              </div>
              <p
                className="font-serif"
                style={{ fontSize: 14, lineHeight: 'normal', color: INK }}
              >
                {c.title}
              </p>
            </div>
          </div>
        ))}
      </div>

      <BottomActions
        onContinue={() => onNext(intentions)}
        onBack={onBack}
        continueLabel={intentions.length > 0 ? `${intentions.length} Intention${intentions.length !== 1 ? 's' : ''} · Continue` : 'Continue'}
      />
    </div>
  )
}

function StepDirections({ onNext, onBack }: { onNext: (direction: string) => void; onBack: () => void }) {
  const [text, setText] = useState('')
  const suggestions = ['Finish a chapter of my novel', 'Make a short film', 'Draw once a week', 'Redesign my portfolio']

  return (
    <div className="relative size-full" style={{ background: BG }}>
      <MaeHeader step={4} />

      <div className="text-center px-6" style={{ paddingTop: 24 }}>
        <p className="font-serif font-bold" style={{ fontSize: 24, lineHeight: '31px', color: '#2d2d2a' }}>
          Pick one direction for your{' '}
          <em style={{ fontWeight: 700, color: TERRACOTTA, fontStyle: 'normal' }}>Creative</em>
          {' '}role this season
        </p>
      </div>

      <div className="flex justify-center" style={{ marginTop: 16 }}>
        <TextInputBox value={text} onChange={setText} placeholder="Write out your aspiration. You can change it anytime." />
      </div>

      <div
        className="flex overflow-x-auto scrollbar-hide gap-2"
        style={{ padding: '16px 0 0 43px' }}
      >
        {suggestions.map(s => (
          <SuggestionChip key={s} label={s} onClick={() => setText(s)} />
        ))}
      </div>

      <p
        className="font-sans font-normal"
        style={{
          fontSize: 13,
          lineHeight: '18px',
          color: 'rgba(74,74,69,0.6)',
          padding: '16px 54px 0',
          fontVariationSettings: "'opsz' 14",
        }}
      >
        At a later time you can do this exercise for each of your roles. This is how you will realize the balance you are looking for your life.
      </p>

      <BottomActions
        onContinue={() => onNext(text)}
        onBack={onBack}
        continueLabel="Direction · Continue"
        disabled={!text.trim()}
      />
    </div>
  )
}

function StepCheckin({ onNext, onBack }: { onNext: () => void; onBack: () => void }) {
  return (
    <div className="relative size-full" style={{ background: BG }}>
      <MaeHeader step={5} />

      <div className="px-6" style={{ paddingTop: 32 }}>
        <p className="font-serif font-bold" style={{ fontSize: 20, lineHeight: '27px', color: '#2d2d2a' }}>
          Let's do your first check-in
        </p>
      </div>

      <div className="flex justify-center" style={{ marginTop: 20 }}>
        <div
          className="flex items-center justify-between px-4 py-4 rounded-[20px] overflow-hidden"
          style={{ width: 296, border: '1px solid rgba(138,116,103,0.2)', background: BG, animation: 'fadeSlideUp 400ms ease both', animationDelay: '120ms' }}
        >
          <span
            className="font-sans font-normal"
            style={{ fontSize: 14, lineHeight: '27px', color: INK, fontVariationSettings: "'opsz' 14" }}
          >
            Capture Moment
          </span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" stroke="#6b6660" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" stroke="#6b6660" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>

      <BottomActions
        onContinue={onNext}
        onBack={onBack}
        continueLabel="Go to my overview"
      />
    </div>
  )
}

// ─── Main orchestrator ────────────────────────────────────────────────────────

type Step = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7

export default function OnboardingPage({ onComplete }: { onComplete: () => void }) {
  const [step, setStep] = useState<Step>(0)
  const directionRef = useRef<'forward' | 'back'>('forward')

  const next = () => {
    directionRef.current = 'forward'
    setStep(s => Math.min(s + 1, 7) as Step)
  }
  const back = () => {
    directionRef.current = 'back'
    setStep(s => Math.max(s - 1, 0) as Step)
  }

  const animName = directionRef.current === 'forward' ? 'onbSlideInRight' : 'onbSlideInLeft'

  let screen: React.ReactNode
  if (step === 0) screen = <Intro1 onNext={next} />
  else if (step === 1) screen = <Intro2 onNext={next} />
  else if (step === 2) screen = <Intro3 onNext={next} />
  else if (step === 3) screen = <StepPersonal onNext={() => next()} onBack={back} />
  else if (step === 4) screen = <StepRoles onNext={() => next()} onBack={back} />
  else if (step === 5) screen = <StepIntentions onNext={() => next()} onBack={back} />
  else if (step === 6) screen = <StepDirections onNext={() => next()} onBack={back} />
  else screen = <StepCheckin onNext={onComplete} onBack={back} />

  return (
    <div className="relative size-full">
        <div
          key={step}
          className="size-full"
          style={{ animation: `${animName} 320ms cubic-bezier(0.25, 0.46, 0.45, 0.94) both` }}
        >
          {screen}
        </div>
        {step >= 2 && (
          <button
            onClick={onComplete}
            className="absolute font-sans font-medium hover:opacity-70 transition-opacity duration-150"
            style={{
              top: 52,
              right: 24,
              fontSize: 14,
              color: 'rgba(45,45,42,0.8)',
              fontVariationSettings: "'opsz' 14",
              fontWeight: 600,
            }}
          >
            Skip
          </button>
        )}
    </div>
  )
}
