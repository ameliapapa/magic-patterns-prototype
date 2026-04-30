import { useState } from 'react'

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
import iconIdea from '../assets/icons/idea-01.svg'
import iconIdeaLight from '../assets/icons/idea-01-light.svg'

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

const GREEN = '#29422a'
const BG = '#f8f6f2'

const ROLES_ROW1 = [
  { id: 'friend',     label: 'Friend',    icon: iconFriend,       iconLight: iconFriendLight },
  { id: 'daughter',   label: 'Daughter',  icon: iconDaughter,     iconLight: iconDaughterLight },
  { id: 'self',       label: 'Self',      icon: iconSelf,         iconLight: iconSelfLight },
  { id: 'partner',    label: 'Partner',   icon: iconPartner,      iconLight: iconPartnerLight },
  { id: 'parent',     label: 'Parent',    icon: iconParent,       iconLight: iconParentLight },
  { id: 'creative',   label: 'Creative',  icon: iconCreative,     iconLight: iconCreativeLight },
]
const ROLES_ROW2 = [
  { id: 'caregiver',  label: 'Care-giver',  icon: iconCaregiver,  iconLight: iconCaregiverLight },
  { id: 'pet-owner',  label: 'Pet-owner',   icon: iconPetOwner,   iconLight: iconPetOwnerLight },
  { id: 'home-owner', label: 'Home-owner',  icon: iconHomeOwner,  iconLight: iconHomeOwnerLight },
  { id: 'student',    label: 'Student',     icon: iconStudent,    iconLight: iconStudentLight },
  { id: 'entrepreneur', label: 'Entrepeneur', icon: iconIdea,     iconLight: iconIdeaLight },
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
  { id: 'caregiver',    icon: iconCaregiver,   label: 'Care-giver' },
  { id: 'pet-owner',    icon: iconPetOwner,    label: 'Pet owner' },
  { id: 'home-owner',   icon: iconHomeOwner,   label: 'Neighbour' },
  { id: 'student',      icon: iconStudent,     label: 'Student' },
  { id: 'sibling',      icon: iconSibling,     label: 'Sibling' },
  { id: 'mentor',       icon: iconMentor,      label: 'Mentor' },
  { id: 'entrepreneur', icon: iconIdea,         label: 'Entrepeneur' },
]

// ─── Shared components ────────────────────────────────────────────────────────

function ProgressDots({ active, total = 5 }: { active: number; total?: number }) {
  return (
    <div className="flex gap-1" style={{ width: 240 }}>
      {Array.from({ length: total }).map((_, i) => (
        <div
          key={i}
          className="flex-1 rounded-full"
          style={{ height: 4, background: i < active ? GREEN : '#d9d9d9' }}
        />
      ))}
    </div>
  )
}

function MaeHeader({ step }: { step?: number }) {
  return (
    <div className="flex flex-col items-center" style={{ paddingTop: 114, gap: 16 }}>
      <img src={maeLogo} alt="Mae" style={{ height: 64, width: 'auto', maxWidth: 221 }} />
      {step !== undefined && <ProgressDots active={step} />}
    </div>
  )
}

function GreenButton({
  label,
  onClick,
  disabled,
  fontFamily = 'DM Sans',
}: {
  label: string
  onClick: () => void
  disabled?: boolean
  fontFamily?: string
}) {
  return (
    <button
      onClick={onClick}
      className="w-full flex items-center justify-center rounded-[20px] py-4"
      style={{ background: disabled ? '#5c5c5c' : GREEN }}
    >
      <span
        className="font-medium text-base text-[#fcfcfa] text-center"
        style={{ fontFamily, fontVariationSettings: "'opsz' 14" }}
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
      className="w-full font-sans font-medium text-base text-center"
      style={{ color: 'rgba(74,74,69,0.6)', fontVariationSettings: "'opsz' 14" }}
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
  continueFontFamily = 'DM Sans',
}: {
  onContinue: () => void
  onBack?: () => void
  continueLabel?: string
  disabled?: boolean
  continueFontFamily?: string
}) {
  const pb = onBack ? 24 : 56
  return (
    <div
      className="absolute bottom-0 left-0 right-0 flex flex-col items-center"
      style={{ gap: 8, padding: `0 41px ${pb}px` }}
    >
      <GreenButton
        label={continueLabel}
        onClick={onContinue}
        disabled={disabled}
        fontFamily={continueFontFamily}
      />
      {onBack && <BackButton onClick={onBack} />}
    </div>
  )
}

function SuggestionChip({ label, onClick }: { label: string; onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      className="flex items-center justify-center px-2 py-2 rounded-[10px] shrink-0"
      style={{ border: '1px solid rgba(138,116,103,0.2)' }}
    >
      <span className="font-sans font-normal text-black text-center" style={{ fontSize: 10, lineHeight: '13px', fontVariationSettings: "'opsz' 14" }}>
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
  return (
    <div
      className="relative overflow-hidden rounded-[20px]"
      style={{ width: 290, height: 78, border: '1px solid rgba(138,116,103,0.2)', background: BG }}
    >
      <input
        value={value}
        onChange={e => onChange(e.target.value)}
        className="absolute font-sans font-normal text-black bg-transparent outline-none border-none"
        style={{ top: 16, left: 16, right: 16, fontSize: 20, fontWeight: 100, fontVariationSettings: "'opsz' 14" }}
        autoFocus
      />
      {!value && (
        <p
          className="absolute font-sans font-normal text-left"
          style={{ bottom: 12, left: 16, fontSize: 10, lineHeight: '15px', color: 'rgba(74,74,69,0.6)', fontVariationSettings: "'opsz' 14" }}
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
      className="flex flex-col items-center p-2 rounded-[10px] shrink-0"
      style={{
        background: selected ? GREEN : BG,
        border: selected ? 'none' : '1px solid rgba(138,116,103,0.2)',
        width: 54,
        gap: 4,
      }}
    >
      <img
        src={selected ? iconLight : icon}
        alt={label}
        style={{ width: 40, height: 40 }}
      />
      <span
        className="font-sans font-medium text-center"
        style={{
          fontSize: 10,
          lineHeight: 'normal',
          color: selected ? '#fafaf7' : '#030712',
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
      <div className="flex justify-center" style={{ paddingTop: 90 }}>
        <img src={maeLogo} alt="Mae" style={{ height: 64, width: 'auto', maxWidth: 221 }} />
      </div>

      {/* Photo grid — two offset rows */}
      <div
        className="absolute overflow-hidden"
        style={{ top: 204, left: -77, width: 555, height: 343 }}
      >
        <div className="absolute flex gap-[14px]" style={{ top: 0, left: 47 }}>
          {[imgStudying2, imgParentChild, imgBoardgames].map((src, i) => (
            <div key={i} className="shrink-0 rounded-[20px] overflow-hidden" style={{ width: 160, height: 160 }}>
              <img src={src} alt="" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
        <div className="absolute flex gap-[11px]" style={{ top: 184, left: 0 }}>
          {[imgLunch, imgDancer, imgDogWalk].map((src, i) => (
            <div key={i} className="shrink-0 rounded-[20px] overflow-hidden" style={{ width: 160, height: 160 }}>
              <img src={src} alt="" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>

      {/* Headline */}
      <div className="absolute text-center px-6" style={{ top: 613, left: 0, right: 0 }}>
        <p
          className="font-serif font-bold"
          style={{ fontSize: 20, lineHeight: '27px', color: '#2d2d2a' }}
        >
          Plan your week around{' '}
          <em style={{ color: '#d13e1e', fontStyle: 'italic' }}>who you are,</em>
          {' '}and{' '}
          <em style={{ color: '#d13e1e', fontStyle: 'italic' }}>who you are becoming</em>
        </p>
      </div>

      <BottomActions onContinue={onNext} />
    </div>
  )
}

function Intro2({ onNext }: { onNext: () => void }) {
  return (
    <div className="relative size-full overflow-hidden" style={{ background: '#fafaf7' }}>
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
        <img src={maeFlowerIcon} alt="Mae" className="w-full h-full" />
      </div>

      {/* Headline — centered below icon */}
      <div
        className="absolute text-center"
        style={{ top: '50%', left: 0, right: 0, paddingTop: 130, paddingLeft: 24, paddingRight: 24 }}
      >
        <p
          className="font-serif font-bold"
          style={{ fontSize: 32, lineHeight: '38px', color: GREEN }}
        >
          Balance your roles{'\n'}
          through journaling{'\n'}
          with{' '}
          <span style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: 700 }}>Mae</span>
        </p>
      </div>

      {/* Glass continue button */}
      <div className="absolute" style={{ bottom: 53, left: 51, right: 51 }}>
        <button
          onClick={onNext}
          className="w-full flex items-center justify-center rounded-[20px] py-4"
          style={{ background: 'rgba(41,66,42,0.2)', backdropFilter: 'blur(9px)' }}
        >
          <span className="font-sans font-medium text-base text-[#fcfcfa]" style={{ fontVariationSettings: "'opsz' 14" }}>
            Continue
          </span>
        </button>
      </div>
    </div>
  )
}

function Intro3({ onNext }: { onNext: () => void }) {
  return (
    <div className="relative size-full" style={{ background: BG }}>
      {/* Mae logo — paddingTop 90 matches Figma ~92px from top */}
      <div className="flex justify-center" style={{ paddingTop: 90 }}>
        <img src={maeLogo} alt="Mae" style={{ height: 64, width: 'auto', maxWidth: 221 }} />
      </div>

      {/* Headline */}
      <div className="text-center px-6" style={{ paddingTop: 48 }}>
        <p className="font-serif font-bold" style={{ fontSize: 20, lineHeight: '27px', color: '#2d2d2a' }}>
          The roles you hold,{'\n'}all tended for in one place.
        </p>
      </div>

      {/* Row 1 — overflows right (Professional clips) */}
      <div
        className="absolute overflow-hidden"
        style={{ top: 364, left: 23, right: -30 }}
      >
        <div className="flex items-start justify-between px-[2px]">
          {INTRO_ROW1.map(r => (
            <div key={r.id} className="flex flex-col items-center shrink-0" style={{ width: 44 }}>
              <img src={r.icon} alt={r.label} style={{ width: 44, height: 44, opacity: 0.5 }} />
              <span
                className="font-sans font-medium text-center"
                style={{ fontSize: 10, lineHeight: 'normal', color: 'rgba(74,74,69,0.6)', fontVariationSettings: "'opsz' 14" }}
              >
                {r.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Row 2 — overflows left (Care-giver clips) */}
      <div
        className="absolute overflow-hidden"
        style={{ top: 436, left: -24, right: 0 }}
      >
        <div className="flex items-start justify-between px-[2px]">
          {INTRO_ROW2.map(r => (
            <div key={r.id} className="flex flex-col items-center shrink-0" style={{ width: 44 }}>
              <img src={r.icon} alt={r.label} style={{ width: 44, height: 44, opacity: 0.5 }} />
              <span
                className="font-sans font-medium text-center"
                style={{ fontSize: 10, lineHeight: 'normal', color: 'rgba(74,74,69,0.6)', fontVariationSettings: "'opsz' 14" }}
              >
                {r.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      <BottomActions
        onContinue={onNext}
        continueLabel="Let's set them up"
        continueFontFamily="'Libre Baskerville', Georgia, serif"
      />
    </div>
  )
}

function StepPersonal({ onNext, onBack }: { onNext: (name: string) => void; onBack: () => void }) {
  const [name, setName] = useState('')
  return (
    <div className="relative size-full" style={{ background: BG }}>
      <MaeHeader step={1} />

      <div className="text-center px-6" style={{ paddingTop: 32 }}>
        <p className="font-serif font-bold" style={{ fontSize: 20, lineHeight: '27px', color: '#2d2d2a' }}>
          How should I call you?
        </p>
        <p
          className="font-sans font-medium"
          style={{ fontSize: 10, lineHeight: '27px', color: '#000', marginTop: 0, fontVariationSettings: "'opsz' 14" }}
        >
          Could be your name or a nickname
        </p>
      </div>

      <div style={{ paddingLeft: 55, paddingTop: 90 }}>
        <div className="flex items-center gap-1">
          <p
            className="font-serif font-bold"
            style={{ fontSize: 20, color: '#000', lineHeight: '27px' }}
          >
            {name || ''}
          </p>
          <span
            className="font-sans"
            style={{ fontSize: 20, fontWeight: 100, color: '#000', fontVariationSettings: "'opsz' 14" }}
          >
            |
          </span>
          <input
            value={name}
            onChange={e => setName(e.target.value)}
            className="absolute opacity-0"
            style={{ left: 55, top: 403, width: 271 }}
            autoFocus
          />
        </div>
        <div style={{ width: 271, height: 1, background: '#000', marginTop: 8 }} />
        {name && (
          <p
            className="font-sans font-normal"
            style={{ fontSize: 10, lineHeight: '27px', color: '#000', marginTop: 4, fontVariationSettings: "'opsz' 14" }}
          >
            Nice to meet you, {name}.
          </p>
        )}
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
  const [selected, setSelected] = useState<Set<string>>(new Set(['friend', 'partner', 'creative', 'professional']))
  const [customRole, setCustomRole] = useState('')

  const toggle = (id: string) =>
    setSelected(prev => {
      const next = new Set(prev)
      next.has(id) ? next.delete(id) : next.add(id)
      return next
    })

  const count = selected.size

  return (
    <div className="relative size-full" style={{ background: BG }}>
      <MaeHeader step={2} />

      <div className="text-center px-6" style={{ paddingTop: 24 }}>
        <p className="font-serif font-bold" style={{ fontSize: 20, lineHeight: '27px', color: '#2d2d2a' }}>
          Which of these roles do you identify with, right now?
        </p>
        <p
          className="font-sans font-medium"
          style={{ fontSize: 10, lineHeight: '12px', color: '#000', marginTop: 4, fontVariationSettings: "'opsz' 14" }}
        >
          Pick as many as you see fit. You can make changes anytime,{'\n'}roles can change with the seasons
        </p>
      </div>

      {/* Row 1 */}
      <div className="flex gap-2 px-2" style={{ marginTop: 20 }}>
        {ROLES_ROW1.map(r => (
          <RoleTile key={r.id} {...r} selected={selected.has(r.id)} onToggle={() => toggle(r.id)} />
        ))}
      </div>

      {/* Row 2 */}
      <div className="flex gap-2 px-4" style={{ marginTop: 8 }}>
        {ROLES_ROW2.map(r => (
          <RoleTile key={r.id} {...r} selected={selected.has(r.id)} onToggle={() => toggle(r.id)} />
        ))}
      </div>

      {/* Row 3 */}
      <div className="flex gap-2 px-2" style={{ marginTop: 8 }}>
        {ROLES_ROW3.map(r => (
          <RoleTile key={r.id} {...r} selected={selected.has(r.id)} onToggle={() => toggle(r.id)} />
        ))}
      </div>

      {/* Custom role input */}
      <div style={{ paddingLeft: 68, paddingTop: 24 }}>
        <div className="flex items-center gap-1">
          <span className="font-sans" style={{ fontSize: 20, fontWeight: 100, fontVariationSettings: "'opsz' 14" }}>|</span>
          <input
            value={customRole}
            onChange={e => setCustomRole(e.target.value)}
            className="font-sans bg-transparent outline-none border-none text-black"
            style={{ fontSize: 14, fontVariationSettings: "'opsz' 14" }}
            placeholder=""
          />
        </div>
        <div style={{ width: 271, height: 1, background: '#000', marginTop: 4 }} />
        <p
          className="font-sans font-normal"
          style={{ fontSize: 10, lineHeight: '27px', color: '#000', fontVariationSettings: "'opsz' 14", marginTop: 2 }}
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
  const suggestions = ['Making pottery', 'Filming videos', 'Designing posters']
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
        <p className="font-serif font-bold" style={{ fontSize: 20, lineHeight: '27px', color: '#2d2d2a' }}>
          Where is your{' '}
          <em style={{ fontStyle: 'italic' }}>Creative</em>
          {' '}role pulling you, right now?
        </p>
      </div>

      <div className="flex justify-center" style={{ marginTop: 16 }}>
        <TextInputBox value={text} onChange={setText} placeholder="Add as many examples that come to mind" />
      </div>

      <div className="flex gap-2 justify-center flex-wrap px-6" style={{ marginTop: 16 }}>
        {suggestions.map(s => (
          <SuggestionChip key={s} label={s} onClick={() => addSuggestion(s)} />
        ))}
      </div>

      <p
        className="font-sans font-normal text-center uppercase"
        style={{ fontSize: 10, lineHeight: '15px', color: 'rgba(74,74,69,0.6)', marginTop: 24, letterSpacing: '0.05em', fontVariationSettings: "'opsz' 14" }}
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
                style={{ fontSize: 14, lineHeight: 'normal', color: '#000' }}
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
        <p className="font-serif font-bold" style={{ fontSize: 20, lineHeight: '27px', color: '#2d2d2a' }}>
          Pick one direction for your{' '}
          <em style={{ fontStyle: 'italic' }}>Creative</em>
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
          fontSize: 10,
          lineHeight: '15px',
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
          style={{ width: 296, border: '1px solid rgba(138,116,103,0.2)', background: BG }}
        >
          <span
            className="font-sans font-normal"
            style={{ fontSize: 14, lineHeight: '27px', color: '#000', fontVariationSettings: "'opsz' 14" }}
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
  const next = () => setStep(s => Math.min(s + 1, 7) as Step)
  const back = () => setStep(s => Math.max(s - 1, 0) as Step)

  if (step === 0) return <Intro1 onNext={next} />
  if (step === 1) return <Intro2 onNext={next} />
  if (step === 2) return <Intro3 onNext={next} />
  if (step === 3) return <StepPersonal onNext={(_name) => next()} onBack={back} />
  if (step === 4) return <StepRoles onNext={(_roles) => next()} onBack={back} />
  if (step === 5) return <StepIntentions onNext={(_items) => next()} onBack={back} />
  if (step === 6) return <StepDirections onNext={(_dir) => next()} onBack={back} />
  return <StepCheckin onNext={onComplete} onBack={back} />
}
