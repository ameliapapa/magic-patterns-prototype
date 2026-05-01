import { useState } from 'react'
import iconSelf from '../assets/icons/self-role-icon.svg'
import iconCreative from '../assets/icons/creative-icon.svg'
import iconParent from '../assets/icons/parent-role-icon.svg'
import iconFriend from '../assets/icons/friend-role-icon.svg'
import iconPartner from '../assets/icons/partner-role.svg'
import iconProfessional from '../assets/icons/professional-role.svg'
import iconDaughter from '../assets/icons/daughter-role-icon.svg'
import iconPencilEdit from '../assets/icons/pencil-edit-01.svg'

import imgSelf from '../assets/illustrations/u1355955226_runner_in_the_park_--sref_202514354_--profile_8d1_34b21c61-5858-439e-8fbd-0256b22a06a4_0.png'
import imgCreative from '../assets/illustrations/u1355955226_painter_painting_a_canvas_--sref_202514354_--prof_51f7c398-d464-4ad1-8bb6-da52f2cc1971_0.png'
import imgParent from '../assets/illustrations/u1355955226_parent_holding_childs_hand_--sref_202514354_--pro_91fe1ad1-9487-4412-b919-7b0594e7df7f_0.png'
import imgFriend from '../assets/illustrations/u1355955226_two_girls_sitting_in_coffee_shop_--sref_202514354_12f89aa8-94a4-410a-8fc2-7fd8f984d2c3_0.png'
import imgPartner from '../assets/illustrations/dinner-date-restaurant.png'
import imgProfessional from '../assets/illustrations/female-software-programmer.png'
import imgDaughter from '../assets/illustrations/u1355955226_helping_elderly_--sref_202514354_--profile_8d1tcd_3a38955f-8e12-495e-a291-1c85261bfe95_3.png'

// ─── Data ─────────────────────────────────────────────────────────────────────

type RoleDef = { id: string; label: string; icon: string }

const USER_ROLES: RoleDef[] = [
  { id: 'self',         label: 'Self',         icon: iconSelf },
  { id: 'creative',     label: 'Creative',     icon: iconCreative },
  { id: 'parent',       label: 'Parent',       icon: iconParent },
  { id: 'friend',       label: 'Friend',       icon: iconFriend },
  { id: 'partner',      label: 'Partner',      icon: iconPartner },
  { id: 'professional', label: 'Professional', icon: iconProfessional },
  { id: 'daughter',     label: 'Daughter',     icon: iconDaughter },
]

const ILLUSTRATIONS: Record<string, string> = {
  self:         imgSelf,
  creative:     imgCreative,
  parent:       imgParent,
  friend:       imgFriend,
  partner:      imgPartner,
  professional: imgProfessional,
  daughter:     imgDaughter,
}

const ILLUSTRATION_POSITIONS: Record<string, string> = {
  self:         'center 55%',
  creative:     'center 10%',
  parent:       'center 65%',
  friend:       'center 50%',
  partner:      'center 65%',
  professional: 'center 40%',
  daughter:     'center 65%',
}

const DIRECTIONS: Record<string, string> = {
  self:         'Show up for myself first — sleep, movement, and nourishment',
  creative:     'Create more than I consume',
  parent:       'Be present, not perfect',
  friend:       'Invest in the people who actually matter',
  partner:      'Choose each other every day',
  professional: 'Build things worth building',
  daughter:     'Call more, worry less',
}

const INTENTIONS: Record<string, string[]> = {
  self:         ['Morning routine', 'Read 20 min daily', 'Gym 3× a week'],
  creative:     ['Portfolio Redesign', 'Watercolor practice', 'Sketchbook habit'],
  parent:       ['Weekly one-on-one time', 'Less screens at dinner'],
  friend:       ['Monthly catch-up with Jo'],
  partner:      [],
  professional: ['Role App design', 'Website Redesign'],
  daughter:     ['Sunday calls'],
}

// ─── Role Card ────────────────────────────────────────────────────────────────

function RoleCard({ role }: { role: RoleDef }) {
  const direction = DIRECTIONS[role.id]
  const intentions = INTENTIONS[role.id] ?? []
  const illustration = ILLUSTRATIONS[role.id]
  const illustrationPosition = ILLUSTRATION_POSITIONS[role.id] ?? 'center'

  return (
    <div
      className="flex flex-col rounded-[20px] overflow-hidden"
      style={{
        background: '#fffffe',
        border: '1px solid rgba(138,116,103,0.18)',
      }}
    >
      {/* ── Hero image ── */}
      <div className="relative shrink-0" style={{ height: 160 }}>
        <img
          src={illustration}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: illustrationPosition }}
        />

        {/* Gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to bottom, rgba(0,0,0,0.18) 0%, rgba(0,0,0,0.04) 40%, rgba(0,0,0,0.48) 78%, rgba(0,0,0,0.65) 100%)',
          }}
        />

        {/* Edit pill — top right */}
        <button
          type="button"
          aria-label={`Edit ${role.label}`}
          className="absolute flex items-center justify-center rounded-pill"
          style={{
            top: 14,
            right: 14,
            height: 28,
            width: 34,
            padding: 0,
            background: 'rgba(255,255,254,0.18)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            border: '1px solid rgba(255,255,254,0.22)',
          }}
        >
          <img
            src={iconPencilEdit}
            alt=""
            width={14}
            height={14}
            style={{ filter: 'brightness(0) invert(1)', opacity: 0.96 }}
          />
        </button>

        {/* Role identity pill — bottom left */}
        <div
          className="absolute flex items-center gap-[7px] rounded-pill"
          style={{
            bottom: 14,
            left: 14,
            background: 'rgba(255,255,254,0.15)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            border: '1px solid rgba(255,255,254,0.22)',
            padding: '5px 11px 5px 7px',
          }}
        >
          <div
            className="flex items-center justify-center rounded-full shrink-0"
            style={{ width: 22, height: 22, background: 'rgba(255,255,254,0.2)' }}
          >
            <img src={role.icon} alt="" width={12} height={12} style={{ filter: 'brightness(0) invert(1)' }} />
          </div>
          <span
            className="font-sans font-medium uppercase"
            style={{ fontSize: 11, letterSpacing: '1.6px', color: '#fffffe', fontVariationSettings: "'opsz' 14" }}
          >
            {role.label}
          </span>
        </div>
      </div>

      {/* Divider */}
      <div style={{ height: 1, background: 'rgba(138,116,103,0.1)', marginLeft: 20, marginRight: 20 }} />

      {/* Direction */}
      <div className="flex flex-col gap-[6px] px-5 pt-[14px] pb-4">
        <span
          className="font-sans font-normal uppercase text-muted"
          style={{ fontSize: 9, letterSpacing: '1.4px', fontVariationSettings: "'opsz' 9" }}
        >
          Direction
        </span>
        {direction ? (
          <p
            className="font-serif text-ink-secondary"
            style={{ fontSize: 15, lineHeight: '23px', fontStyle: 'italic' }}
          >
            "{direction}"
          </p>
        ) : (
          <button className="flex items-center gap-1 text-left">
            <span
              className="font-sans font-normal"
              style={{ fontSize: 13, color: 'rgba(138,116,103,0.55)', fontVariationSettings: "'opsz' 9" }}
            >
              + Set your direction
            </span>
          </button>
        )}
      </div>

      {/* Divider */}
      <div style={{ height: 1, background: 'rgba(138,116,103,0.1)', marginLeft: 20, marginRight: 20 }} />

      {/* Intentions */}
      <div className="flex flex-col gap-[10px] px-5 pt-[14px] pb-5">
        <div className="flex items-center justify-between">
          <span
            className="font-sans font-normal uppercase text-muted"
            style={{ fontSize: 9, letterSpacing: '1.4px', fontVariationSettings: "'opsz' 9" }}
          >
            Intentions
          </span>
          {intentions.length > 0 && (
            <span
              className="font-sans font-normal text-muted"
              style={{ fontSize: 10, fontVariationSettings: "'opsz' 9" }}
            >
              {intentions.length} active
            </span>
          )}
        </div>

        {intentions.length > 0 && (
          <div className="flex flex-col gap-[8px]">
            {intentions.map((intent, i) => (
              <div key={i} className="flex items-center gap-[10px]">
                <div
                  className="shrink-0 rounded-full"
                  style={{ width: 5, height: 5, background: 'rgba(138,116,103,0.35)' }}
                />
                <span
                  className="font-sans font-normal text-ink"
                  style={{ fontSize: 13, lineHeight: '19px', fontVariationSettings: "'opsz' 9" }}
                >
                  {intent}
                </span>
              </div>
            ))}
          </div>
        )}

        <button className="flex items-center gap-1 mt-[2px]">
          <span
            className="font-sans font-normal"
            style={{ fontSize: 12, color: 'rgba(138,116,103,0.55)', fontVariationSettings: "'opsz' 9" }}
          >
            + Add intention
          </span>
        </button>
      </div>
    </div>
  )
}

// ─── Main Page ─────────────────────────────────────────────────────────────────

export default function ReflectPage({ onAddRole }: { onAddRole?: () => void }) {
  const [activeRole, setActiveRole] = useState<string | null>(null)

  const visibleRoles = activeRole
    ? USER_ROLES.filter(r => r.id === activeRole)
    : USER_ROLES

  return (
    <div style={{ width: 393, background: '#f8f6f2' }}>
      {/* ── 1. Header ── */}
      <div className="flex flex-col gap-[6px] px-6" style={{ paddingTop: 48, paddingBottom: 20 }}>
        <p
          className="font-serif font-bold text-ink"
          style={{ fontSize: 28, lineHeight: '36px', letterSpacing: '-0.4px' }}
        >
          Reflect
        </p>
        <p
          className="font-mono text-muted uppercase"
          style={{ fontSize: 10, lineHeight: 'normal', letterSpacing: '0.4px', fontWeight: 400 }}
        >
          Your compass across every role
        </p>
      </div>

      {/* ── 2. Role filter chips ── */}
      <div
        className="flex gap-2 overflow-x-auto scrollbar-hide"
        style={{ paddingLeft: 24, paddingRight: 24, paddingBottom: 18 }}
      >
        <button
          onClick={() => setActiveRole(null)}
          className="flex items-center px-[14px] py-[7px] rounded-pill shrink-0"
          style={{
            background: activeRole === null ? '#2d2d2a' : '#fffffe',
            border: activeRole === null ? '1px solid transparent' : '1px solid rgba(138,116,103,0.25)',
          }}
        >
          <span
            className="font-sans font-medium uppercase"
            style={{
              fontSize: 11,
              letterSpacing: '0.8px',
              color: activeRole === null ? '#fffffe' : '#6b6660',
              fontVariationSettings: "'opsz' 14",
            }}
          >
            All
          </span>
        </button>

        {USER_ROLES.map(role => (
          <button
            key={role.id}
            onClick={() => setActiveRole(role.id === activeRole ? null : role.id)}
            className="flex items-center gap-[6px] px-[12px] py-[7px] rounded-pill shrink-0"
            style={{
              background: activeRole === role.id ? '#2d2d2a' : '#fffffe',
              border: activeRole === role.id ? '1px solid transparent' : '1px solid rgba(138,116,103,0.25)',
            }}
          >
            <img
              src={role.icon}
              alt=""
              width={13}
              height={13}
              style={{
                filter: activeRole === role.id ? 'brightness(0) invert(1)' : 'none',
                opacity: activeRole === role.id ? 1 : 0.7,
              }}
            />
            <span
              className="font-sans font-medium uppercase"
              style={{
                fontSize: 11,
                letterSpacing: '0.8px',
                color: activeRole === role.id ? '#fffffe' : '#6b6660',
                fontVariationSettings: "'opsz' 14",
              }}
            >
              {role.label}
            </span>
          </button>
        ))}

        {onAddRole && (
          <button
            onClick={onAddRole}
            className="flex items-center gap-[6px] px-[12px] py-[7px] rounded-pill shrink-0"
            style={{
              background: 'transparent',
              border: '1px dashed rgba(138,116,103,0.38)',
            }}
          >
            <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
              <path d="M4.5 1v7M1 4.5h7" stroke="rgba(107,102,96,0.55)" strokeWidth="1.3" strokeLinecap="round" />
            </svg>
            <span
              className="font-sans font-medium uppercase"
              style={{
                fontSize: 11,
                letterSpacing: '0.8px',
                color: '#6b6660',
                fontVariationSettings: "'opsz' 14",
              }}
            >
              Add role
            </span>
          </button>
        )}
      </div>

      {/* ── 3. Role cards ── */}
      <div
        className="flex flex-col gap-[10px]"
        style={{ paddingLeft: 20, paddingRight: 20, paddingBottom: 20 }}
      >
        {visibleRoles.map(role => (
          <RoleCard key={role.id} role={role} />
        ))}
      </div>
    </div>
  )
}
