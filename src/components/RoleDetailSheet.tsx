import { useState } from 'react'

// ─── Role Icons ───────────────────────────────────────────────────────────────
import iconSelf from '../assets/icons/self-role-icon.svg'
import iconCreative from '../assets/icons/creative-icon.svg'
import iconParent from '../assets/icons/parent-role-icon.svg'
import iconFriend from '../assets/icons/friend-role-icon.svg'
import iconPartner from '../assets/icons/partner-role.svg'
import iconProfessional from '../assets/icons/professional-role.svg'
import iconDaughter from '../assets/icons/daughter-role-icon.svg'
import maeLogo from '../assets/icons/mae-flower-icon.svg'

// ─── Hero Illustrations ───────────────────────────────────────────────────────
import imgSelf from '../assets/illustrations/u1355955226_runner_in_the_park_--sref_202514354_--profile_8d1_34b21c61-5858-439e-8fbd-0256b22a06a4_0.png'
import imgCreative from '../assets/illustrations/u1355955226_painter_painting_a_canvas_--sref_202514354_--prof_51f7c398-d464-4ad1-8bb6-da52f2cc1971_0.png'
import imgParent from '../assets/illustrations/u1355955226_parent_holding_childs_hand_--sref_202514354_--pro_91fe1ad1-9487-4412-b919-7b0594e7df7f_0.png'
import imgFriend from '../assets/illustrations/u1355955226_two_girls_sitting_in_coffee_shop_--sref_202514354_12f89aa8-94a4-410a-8fc2-7fd8f984d2c3_0.png'
import imgPartner from '../assets/illustrations/dinner-date-restaurant.png'
import imgProfessional from '../assets/illustrations/female-software-programmer.png'
import imgDaughter from '../assets/illustrations/u1355955226_helping_elderly_--sref_202514354_--profile_8d1tcd_3a38955f-8e12-495e-a291-1c85261bfe95_3.png'

// ─── Moment Illustrations ─────────────────────────────────────────────────────
import imgBoardgames from '../assets/illustrations/u1355955226_playing_boardgames_--sref_202514354_--profile_8d1_0c4b39ad-8442-4e08-b910-2733d343dc0b_3.png'
import imgPainting from '../assets/illustrations/u1355955226_painter_painting_a_canvas_--sref_202514354_--prof_51f7c398-d464-4ad1-8bb6-da52f2cc1971_0.png'
import imgCoffee from '../assets/illustrations/u1355955226_two_girls_sitting_in_coffee_shop_--sref_202514354_12f89aa8-94a4-410a-8fc2-7fd8f984d2c3_0.png'
import imgRunner from '../assets/illustrations/u1355955226_runner_in_the_park_--sref_202514354_--profile_8d1_34b21c61-5858-439e-8fbd-0256b22a06a4_0.png'

// ─── Tokens ───────────────────────────────────────────────────────────────────
const GREEN = '#29422a'
const BORDER = 'rgba(138,116,103,0.2)'
const AMBER = '#9c6b3a'
const AMBER_BG = 'rgba(156,107,58,0.07)'
const AMBER_BORDER = 'rgba(156,107,58,0.28)'
const INK = '#2d2d2a'
const MUTED = '#6b6660'

const ANIM = `
  @keyframes slideInRight {
    from { transform: translateX(100%); }
    to   { transform: translateX(0); }
  }
  @keyframes fadeUpIn {
    from { opacity: 0; transform: translateY(14px); }
    to   { opacity: 1; transform: translateY(0); }
  }
`

// ─── Data Types ───────────────────────────────────────────────────────────────

type PastMoment = {
  id: string
  date: string
  text: string
  image?: string
}

type UpcomingMoment = {
  date: string
  text: string
}

type RoleData = {
  id: string
  label: string
  icon: string
  illustration: string
  illustrationPosition?: string
  direction: string
  question: string
  intentions: string[]
  upcoming: UpcomingMoment[]
  past: PastMoment[]
}

// ─── Role Dataset ─────────────────────────────────────────────────────────────

const ROLES_DATA: Record<string, RoleData> = {
  self: {
    id: 'self',
    label: 'Self',
    icon: iconSelf,
    illustration: imgSelf,
    illustrationPosition: 'center 30%',
    direction: 'Show up for myself first — sleep, movement, and nourishment',
    question: 'When did you last do something purely for yourself?',
    intentions: ['Morning routine', 'Read 20 min daily', 'Gym 3× a week'],
    upcoming: [
      { date: 'Fri, May 2', text: 'Yoga class with Sarah' },
    ],
    past: [
      { id: 'p1', date: 'Today', text: 'Morning run in the park. Just me and the quiet.', image: imgRunner },
      { id: 'p2', date: 'Apr 28', text: 'Hour of yoga before work. Felt human again.' },
    ],
  },
  creative: {
    id: 'creative',
    label: 'Creative',
    icon: iconCreative,
    illustration: imgCreative,
    illustrationPosition: 'center 20%',
    direction: 'Create more than I consume',
    question: 'What would you make if no one was watching?',
    intentions: ['Portfolio Redesign', 'Watercolor practice', 'Sketchbook habit'],
    upcoming: [
      { date: 'Sat, May 3', text: 'Watercolor workshop at Studio Co.' },
    ],
    past: [
      { id: 'p1', date: 'Apr 24', text: 'An hour of sketching before bed. Forgot how good this feels.' },
      { id: 'p2', date: 'Apr 20', text: 'Finished the watercolor study. Hung it in the kitchen.', image: imgPainting },
    ],
  },
  parent: {
    id: 'parent',
    label: 'Parent',
    icon: iconParent,
    illustration: imgParent,
    illustrationPosition: 'center 25%',
    direction: 'Be present, not perfect',
    question: "What's one moment you want to remember from this season with them?",
    intentions: ['Weekly one-on-one time', 'Less screens at dinner'],
    upcoming: [
      { date: 'Sun, May 4', text: 'Sunday family lunch' },
    ],
    past: [
      { id: 'p1', date: 'Apr 25', text: 'Game night with the kids. Lily won Uno — again.', image: imgBoardgames },
      { id: 'p2', date: 'Apr 19', text: 'School pickup — we talked the whole way home.' },
    ],
  },
  friend: {
    id: 'friend',
    label: 'Friend',
    icon: iconFriend,
    illustration: imgFriend,
    illustrationPosition: 'center 35%',
    direction: 'Invest in the people who actually matter',
    question: 'Who deserves more of you right now, and what would close that distance?',
    intentions: ['Monthly catch-up with Jo'],
    upcoming: [
      { date: 'Sat, May 10', text: 'Brunch with Jo at the usual place' },
    ],
    past: [
      { id: 'p1', date: 'Apr 22', text: 'Coffee with Sarah — we laughed until we cried.', image: imgCoffee },
      { id: 'p2', date: 'Apr 15', text: 'Long call with Priya. Needed that.' },
    ],
  },
  partner: {
    id: 'partner',
    label: 'Partner',
    icon: iconPartner,
    illustration: imgPartner,
    illustrationPosition: 'center 40%',
    direction: 'Choose each other every day',
    question: "What's one small gesture that could make this week feel more connected?",
    intentions: [],
    upcoming: [
      { date: 'Wed, May 7', text: 'Anniversary dinner at Chez Louis' },
    ],
    past: [
      { id: 'p1', date: 'Apr 26', text: 'Stayed up talking until midnight. No phones. Just us.' },
      { id: 'p2', date: 'Apr 18', text: 'Movie night on the couch. The way it used to be.' },
    ],
  },
  professional: {
    id: 'professional',
    label: 'Professional',
    icon: iconProfessional,
    illustration: imgProfessional,
    illustrationPosition: 'center 15%',
    direction: 'Build things worth building',
    question: 'What work would feel meaningful to look back on in a year?',
    intentions: ['Role App design', 'Website Redesign'],
    upcoming: [
      { date: 'Thu, May 8', text: 'Portfolio review with Marcus' },
    ],
    past: [
      { id: 'p1', date: 'Apr 27', text: 'Submitted the Q1 report. Done and dusted.' },
      { id: 'p2', date: 'Apr 23', text: 'Deep work session — four hours, no distractions.' },
    ],
  },
  daughter: {
    id: 'daughter',
    label: 'Daughter',
    icon: iconDaughter,
    illustration: imgDaughter,
    illustrationPosition: 'center 30%',
    direction: 'Call more, worry less',
    question: 'When did you last reach out, just because you were thinking of them?',
    intentions: ['Sunday calls'],
    upcoming: [
      { date: 'Sun, May 11', text: "Visit mum for Mother's Day" },
    ],
    past: [
      { id: 'p1', date: 'Apr 28', text: "Called mum for her birthday. She cried — the good kind." },
      { id: 'p2', date: 'Apr 14', text: 'Sunday call — she told me about her garden. I listened fully.' },
    ],
  },
}

// ─── Past Moment Card ─────────────────────────────────────────────────────────

function PastMomentCard({ moment }: { moment: PastMoment }) {
  const [highlighted, setHighlighted] = useState(false)
  const hasPhoto = Boolean(moment.image)

  return (
    <div
      className="rounded-[20px] overflow-hidden"
      style={{ background: '#fffffe', border: `1px solid ${BORDER}` }}
    >
      {hasPhoto && (
        <div className="relative overflow-hidden" style={{ height: 168 }}>
          <img
            src={moment.image}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to bottom, rgba(0,0,0,0.06) 0%, rgba(41,66,42,0.22) 100%)',
            }}
          />
        </div>
      )}

      <div
        className="flex flex-col"
        style={{ padding: hasPhoto ? '14px 16px 16px' : '16px' }}
      >
        {!hasPhoto && (
          <div className="flex items-center justify-between" style={{ marginBottom: 8 }}>
            <span
              className="font-mono uppercase"
              style={{ fontSize: 9, letterSpacing: '0.8px', color: MUTED, fontWeight: 300 }}
            >
              {moment.date}
            </span>
          </div>
        )}

        <p
          className="font-lora font-medium"
          style={{
            fontSize: hasPhoto ? 15 : 17,
            lineHeight: hasPhoto ? '22px' : '25px',
            letterSpacing: '-0.2px',
            color: INK,
          }}
        >
          {moment.text}
        </p>

        <div className="flex items-center justify-between" style={{ marginTop: 14 }}>
          {hasPhoto ? (
            <span
              className="font-mono uppercase"
              style={{ fontSize: 9, letterSpacing: '0.8px', color: MUTED, fontWeight: 300 }}
            >
              {moment.date}
            </span>
          ) : (
            <div />
          )}

          <button
            onClick={() => setHighlighted(h => !h)}
            className="flex items-center gap-[5px]"
          >
            {highlighted ? (
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M8 1.5l1.75 3.55 3.9.57-2.82 2.74.66 3.88L8 10.35l-3.49 1.84.66-3.88-2.82-2.74 3.9-.57L8 1.5z"
                  fill={AMBER}
                  stroke={AMBER}
                  strokeWidth="1"
                  strokeLinejoin="round"
                />
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M8 1.5l1.75 3.55 3.9.57-2.82 2.74.66 3.88L8 10.35l-3.49 1.84.66-3.88-2.82-2.74 3.9-.57L8 1.5z"
                  stroke="rgba(138,116,103,0.45)"
                  strokeWidth="1.2"
                  strokeLinejoin="round"
                />
              </svg>
            )}
            {highlighted && (
              <span
                className="font-sans font-medium"
                style={{ fontSize: 10, color: AMBER, fontVariationSettings: "'opsz' 9" }}
              >
                Highlight
              </span>
            )}
          </button>
        </div>
      </div>
    </div>
  )
}

// ─── Upcoming Moment Card ─────────────────────────────────────────────────────

function UpcomingMomentCard({ date, text }: { date: string; text: string }) {
  const dayLabel = date.split(',')[0]
  const dayNum = date.split(' ').pop()

  return (
    <div
      className="flex items-center justify-between rounded-[18px]"
      style={{
        background: AMBER_BG,
        border: `1px solid ${AMBER_BORDER}`,
        padding: '14px 16px',
      }}
    >
      <div className="flex flex-col gap-[6px]">
        <div className="flex items-center gap-2">
          <div
            className="flex items-center px-2 rounded-pill"
            style={{ height: 18, background: AMBER }}
          >
            <span
              className="font-inter font-medium uppercase"
              style={{ fontSize: 8, letterSpacing: '1.1px', color: '#fffffe' }}
            >
              Upcoming
            </span>
          </div>
        </div>
        <p
          className="font-sans font-medium"
          style={{
            fontSize: 15,
            lineHeight: '22px',
            letterSpacing: '-0.15px',
            color: INK,
            fontVariationSettings: "'opsz' 14",
          }}
        >
          {text}
        </p>
      </div>

      <div
        className="flex flex-col items-center justify-center rounded-[12px] shrink-0"
        style={{
          width: 52,
          height: 52,
          background: 'rgba(156,107,58,0.12)',
          marginLeft: 12,
        }}
      >
        <span
          className="font-inter font-medium uppercase"
          style={{ fontSize: 9, letterSpacing: '0.8px', color: AMBER, lineHeight: '13px' }}
        >
          {dayLabel}
        </span>
        <span
          className="font-lora font-medium"
          style={{ fontSize: 16, color: AMBER, lineHeight: '20px' }}
        >
          {dayNum}
        </span>
      </div>
    </div>
  )
}

// ─── Main Sheet ───────────────────────────────────────────────────────────────

export default function RoleDetailSheet({
  roleId,
  onClose,
}: {
  roleId: string
  onClose: () => void
}) {
  const role = ROLES_DATA[roleId]
  if (!role) return null

  return (
    <>
      <style>{ANIM}</style>

      <div
        className="absolute inset-0 overflow-y-auto scrollbar-hide"
        style={{
          background: '#f8f6f2',
          zIndex: 30,
          animation: 'slideInRight 360ms cubic-bezier(0.32, 0.72, 0, 1) both',
        }}
      >
        {/* ── 1. Hero illustration ── */}
        <div className="relative shrink-0" style={{ height: 300 }}>
          <img
            src={role.illustration}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
            style={{ objectPosition: role.illustrationPosition ?? 'center' }}
          />

          {/* Gradient — light at top for button legibility, rich at bottom for title */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to bottom, rgba(0,0,0,0.28) 0%, rgba(0,0,0,0.08) 38%, rgba(0,0,0,0.55) 78%, rgba(0,0,0,0.72) 100%)',
            }}
          />

          {/* Back button */}
          <button
            onClick={onClose}
            className="absolute flex items-center justify-center rounded-full"
            style={{
              top: 52,
              left: 20,
              width: 36,
              height: 36,
              background: 'rgba(255,255,254,0.18)',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
              border: '1px solid rgba(255,255,254,0.2)',
            }}
          >
            <svg width="8" height="14" viewBox="0 0 8 14" fill="none">
              <path
                d="M7 1L1 7l6 6"
                stroke="#fffffe"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {/* Role identity — anchored to bottom of hero */}
          <div
            className="absolute flex flex-col gap-[10px]"
            style={{
              bottom: 28,
              left: 22,
              right: 22,
              animation: 'fadeUpIn 480ms 160ms cubic-bezier(0.22, 1, 0.36, 1) both',
            }}
          >
            {/* Role icon pill */}
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
                style={{
                  width: 24,
                  height: 24,
                  background: 'rgba(255,255,254,0.2)',
                }}
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
                style={{
                  fontSize: 11,
                  letterSpacing: '1.8px',
                  color: '#fffffe',
                  fontVariationSettings: "'opsz' 14",
                }}
              >
                {role.label}
              </span>
            </div>

            {/* Direction preview */}
            <p
              className="font-lora"
              style={{
                fontSize: 15,
                lineHeight: '22px',
                color: 'rgba(255,255,254,0.82)',
                fontStyle: 'italic',
                letterSpacing: '-0.1px',
              }}
            >
              "{role.direction}"
            </p>
          </div>
        </div>

        {/* ── 2. Content ── */}
        <div
          className="flex flex-col"
          style={{
            paddingLeft: 20,
            paddingRight: 20,
            paddingBottom: 40,
            animation: 'fadeUpIn 520ms 220ms cubic-bezier(0.22, 1, 0.36, 1) both',
          }}
        >
          {/* Mae asks card */}
          <div
            className="rounded-[22px] flex flex-col gap-4"
            style={{
              background: 'rgba(41,66,42,0.06)',
              border: '1px solid rgba(41,66,42,0.12)',
              padding: '20px',
              marginTop: 20,
              marginBottom: 28,
            }}
          >
            {/* Mae label */}
            <div className="flex items-center gap-[7px]">
              <img src={maeLogo} alt="" width={15} height={15} style={{ opacity: 0.65 }} />
              <span
                className="font-sans font-medium uppercase"
                style={{
                  fontSize: 9,
                  letterSpacing: '1.3px',
                  color: GREEN,
                  opacity: 0.75,
                  fontVariationSettings: "'opsz' 9",
                }}
              >
                Mae asks
              </span>
            </div>

            {/* Question */}
            <p
              className="font-lora"
              style={{
                fontSize: 19,
                lineHeight: '28px',
                letterSpacing: '-0.2px',
                color: INK,
                fontStyle: 'italic',
              }}
            >
              "{role.question}"
            </p>

            {/* CTA */}
            <button
              className="flex items-center gap-[8px] self-start rounded-[30px]"
              style={{ background: GREEN, padding: '10px 18px' }}
            >
              <span
                className="font-sans font-medium"
                style={{
                  fontSize: 13,
                  color: '#fffffe',
                  fontVariationSettings: "'opsz' 14",
                }}
              >
                Make time for this
              </span>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path
                  d="M2 6h8M7 3l3 3-3 3"
                  stroke="#fffffe"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          {/* ── Direction ── */}
          <div style={{ marginBottom: 28 }}>
            <div className="flex items-center justify-between" style={{ marginBottom: 10 }}>
              <span
                className="font-sans font-normal uppercase"
                style={{
                  fontSize: 9,
                  letterSpacing: '1.4px',
                  color: 'rgba(107,102,96,0.6)',
                  fontVariationSettings: "'opsz' 9",
                }}
              >
                Your Direction
              </span>
              <button>
                <span
                  className="font-sans font-normal"
                  style={{ fontSize: 11, color: MUTED, fontVariationSettings: "'opsz' 9" }}
                >
                  Edit
                </span>
              </button>
            </div>

            <div
              className="rounded-[16px]"
              style={{
                background: '#fffffe',
                border: `1px solid ${BORDER}`,
                padding: '16px 18px',
              }}
            >
              <p
                className="font-lora"
                style={{
                  fontSize: 16,
                  lineHeight: '25px',
                  letterSpacing: '-0.15px',
                  color: INK,
                  fontStyle: 'italic',
                }}
              >
                "{role.direction}"
              </p>
            </div>
          </div>

          {/* ── Divider ── */}
          <div style={{ height: 1, background: BORDER, marginBottom: 28 }} />

          {/* ── Intentions ── */}
          <div style={{ marginBottom: 28 }}>
            <div className="flex items-center justify-between" style={{ marginBottom: 14 }}>
              <span
                className="font-sans font-normal uppercase"
                style={{
                  fontSize: 9,
                  letterSpacing: '1.4px',
                  color: 'rgba(107,102,96,0.6)',
                  fontVariationSettings: "'opsz' 9",
                }}
              >
                Intentions
              </span>
              {role.intentions.length > 0 && (
                <span
                  className="font-sans font-normal"
                  style={{ fontSize: 10, color: 'rgba(107,102,96,0.55)', fontVariationSettings: "'opsz' 9" }}
                >
                  {role.intentions.length} active
                </span>
              )}
            </div>

            {role.intentions.length > 0 ? (
              <div
                className="flex flex-col rounded-[16px] overflow-hidden"
                style={{
                  background: '#fffffe',
                  border: `1px solid ${BORDER}`,
                  marginBottom: 12,
                }}
              >
                {role.intentions.map((intent, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-[12px]"
                    style={{
                      padding: '13px 18px',
                      borderBottom:
                        i < role.intentions.length - 1
                          ? `1px solid ${BORDER}`
                          : 'none',
                    }}
                  >
                    <div
                      className="shrink-0 rounded-full"
                      style={{ width: 5, height: 5, background: 'rgba(138,116,103,0.35)' }}
                    />
                    <span
                      className="font-sans font-normal"
                      style={{
                        fontSize: 14,
                        lineHeight: '20px',
                        color: INK,
                        fontVariationSettings: "'opsz' 9",
                      }}
                    >
                      {intent}
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              <p
                className="font-sans font-normal"
                style={{
                  fontSize: 13,
                  color: 'rgba(138,116,103,0.5)',
                  fontVariationSettings: "'opsz' 9",
                  marginBottom: 12,
                }}
              >
                No intentions set yet.
              </p>
            )}

            <button className="flex items-center gap-[6px]">
              <span
                className="font-sans font-normal"
                style={{ fontSize: 13, color: 'rgba(138,116,103,0.55)', fontVariationSettings: "'opsz' 9" }}
              >
                + Add intention
              </span>
            </button>
          </div>

          {/* ── Divider ── */}
          <div style={{ height: 1, background: BORDER, marginBottom: 28 }} />

          {/* ── Moments ── */}
          <div>
            {/* Upcoming */}
            {role.upcoming.length > 0 && (
              <>
                <div className="flex items-center gap-3" style={{ marginBottom: 12 }}>
                  <span
                    className="font-inter font-medium uppercase"
                    style={{ fontSize: 9, letterSpacing: '1.2px', color: AMBER }}
                  >
                    Upcoming
                  </span>
                  <div style={{ flex: 1, height: 1, background: AMBER_BORDER }} />
                </div>

                <div className="flex flex-col gap-2" style={{ marginBottom: 24 }}>
                  {role.upcoming.map((m, i) => (
                    <UpcomingMomentCard key={i} date={m.date} text={m.text} />
                  ))}
                </div>
              </>
            )}

            {/* Past */}
            {role.past.length > 0 && (
              <>
                <div className="flex items-center gap-3" style={{ marginBottom: 14 }}>
                  <span
                    className="font-inter font-medium uppercase"
                    style={{ fontSize: 9, letterSpacing: '1.2px', color: 'rgba(107,102,96,0.6)' }}
                  >
                    Recent
                  </span>
                  <div style={{ flex: 1, height: 1, background: BORDER }} />
                </div>

                <div className="flex flex-col gap-3">
                  {role.past.map(m => (
                    <PastMomentCard key={m.id} moment={m} />
                  ))}
                </div>
              </>
            )}

            {/* Add moment CTA */}
            <button
              className="flex items-center justify-center w-full rounded-[18px] mt-4"
              style={{
                height: 52,
                border: `1px dashed rgba(138,116,103,0.35)`,
                background: 'transparent',
              }}
            >
              <span
                className="font-sans font-normal"
                style={{ fontSize: 13, color: 'rgba(138,116,103,0.55)', fontVariationSettings: "'opsz' 9" }}
              >
                + Capture a moment for {role.label}
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
