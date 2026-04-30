import { useState } from 'react'
import iconSelf from '../assets/icons/self-role-icon.svg'
import iconCreative from '../assets/icons/creative-icon.svg'
import iconParent from '../assets/icons/parent-role-icon.svg'
import iconFriend from '../assets/icons/friend-role-icon.svg'
import iconPartner from '../assets/icons/partner-role.svg'
import iconProfessional from '../assets/icons/professional-role.svg'
import iconDaughter from '../assets/icons/daughter-role-icon.svg'

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

  return (
    <div
      className="flex flex-col rounded-[20px] overflow-hidden"
      style={{
        background: '#fffffe',
        border: '1px solid rgba(138,116,103,0.18)',
      }}
    >
      {/* Role header */}
      <div className="flex items-center justify-between px-5 pt-5 pb-4">
        <div className="flex items-center gap-[10px]">
          <div
            className="flex items-center justify-center rounded-full shrink-0"
            style={{ width: 34, height: 34, background: '#f8f6f2' }}
          >
            <img src={role.icon} alt="" width={18} height={18} />
          </div>
          <span
            className="font-sans font-medium uppercase text-ink"
            style={{ fontSize: 12, letterSpacing: '1.2px', fontVariationSettings: "'opsz' 14" }}
          >
            {role.label}
          </span>
        </div>
        <button>
          <span
            className="font-sans font-normal text-muted"
            style={{ fontSize: 11, fontVariationSettings: "'opsz' 9" }}
          >
            Edit
          </span>
        </button>
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
            className="font-lora text-ink-secondary"
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

export default function ReflectPage() {
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
          style={{ fontSize: 10, lineHeight: 'normal', letterSpacing: '0.8px', fontWeight: 300 }}
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
