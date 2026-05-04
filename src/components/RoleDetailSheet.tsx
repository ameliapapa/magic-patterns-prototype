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
const GREEN = '#044A28'
const BORDER = 'rgba(138,116,103,0.2)'
const AMBER = '#9c6b3a'
const AMBER_50 = '#FFFCEB'
const AMBER_200 = '#FFED93'
const AMBER_900 = '#7A380D'
const SURFACE = '#fffffe'
const WARM = '#e8e1d7'
const AMBER_800 = '#94440C'
const TERRACOTTA_50 = '#FEF0E3'
const TERRACOTTA_200 = '#FBD1AD'
const INK = '#2d2d2a'
const MUTED = '#6b6660'

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
  noticed: string
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
    noticed: 'It has been a while since you moved your body just for the joy of it.',
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
    noticed: 'It has been a while since you painted for fun.',
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
    noticed: 'You have been capturing fewer moments with the kids lately.',
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
    noticed: 'You have not reached out to Jo in over three weeks.',
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
    noticed: 'The last few weeks have been quiet. A small gesture goes a long way.',
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
    noticed: 'You have been in reactive mode lately — no deep work sessions logged.',
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
    noticed: 'You have not called your mum since her birthday. She would love to hear from you.',
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

function MomentDateTag({ label }: { label: string }) {
  return (
    <div
      className="flex items-center justify-center rounded-pill"
      style={{
        height: 28,
        padding: '0 14px',
        background: 'rgba(255,255,254,0.92)',
        backdropFilter: 'blur(6px)',
      }}
    >
      <span
        className="block font-mono font-normal uppercase"
        style={{ fontSize: 11, lineHeight: 1, letterSpacing: '0.2px', color: INK, transform: 'translateY(-0.5px)' }}
      >
        {label}
      </span>
    </div>
  )
}

function HighlightButton({
  highlighted,
  onClick,
}: {
  highlighted: boolean
  onClick: () => void
}) {
  return (
    <button
      onClick={onClick}
      className="flex items-center justify-center rounded-full"
      style={{
        width: 36,
        height: 36,
        background: highlighted ? AMBER_200 : 'rgba(255,255,254,0.92)',
        backdropFilter: 'blur(6px)',
        transition: 'background 220ms ease',
      }}
      aria-label={highlighted ? 'Remove highlight' : 'Highlight moment'}
    >
      <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
        <path
          d="M8 1.5l1.75 3.55 3.9.57-2.82 2.74.66 3.88L8 10.35l-3.49 1.84.66-3.88-2.82-2.74 3.9-.57L8 1.5z"
          fill={highlighted ? AMBER_900 : 'transparent'}
          stroke={highlighted ? AMBER_900 : 'rgba(45,45,42,0.55)'}
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  )
}

function PastMomentCard({ moment }: { moment: PastMoment }) {
  const [highlighted, setHighlighted] = useState(false)
  const hasPhoto = Boolean(moment.image)

  if (!hasPhoto) {
    return (
      <article
        className="overflow-hidden rounded-[24px]"
        style={{
          background: highlighted ? AMBER_50 : SURFACE,
          border: `1px solid ${highlighted ? 'rgba(185,131,61,0.38)' : BORDER}`,
          padding: '14px 16px 17px',
          transition: 'background 220ms ease, border-color 220ms ease',
        }}
      >
        <div className="flex items-center justify-between" style={{ marginBottom: 8 }}>
          <span
            className="font-mono font-normal uppercase"
            style={{ fontSize: 11, lineHeight: 1, letterSpacing: '0.2px', color: INK }}
          >
            {moment.date}
          </span>
          <HighlightButton highlighted={highlighted} onClick={() => setHighlighted(h => !h)} />
        </div>

        <p
          className="font-serif font-medium"
          style={{ fontSize: 17, lineHeight: '26px', color: INK, letterSpacing: '-0.2px' }}
        >
          {moment.text}
        </p>
      </article>
    )
  }

  return (
    <article
      className="overflow-hidden rounded-[24px]"
      style={{
        background: highlighted ? AMBER_50 : SURFACE,
        border: `1px solid ${highlighted ? 'rgba(185,131,61,0.38)' : BORDER}`,
        transition: 'background 220ms ease, border-color 220ms ease',
      }}
    >
      <div className="relative" style={{ height: 200, background: WARM }}>
        <img src={moment.image} alt="" className="absolute inset-0 h-full w-full object-cover" />

        <div className="absolute" style={{ top: 14, left: 14 }}>
          <MomentDateTag label={moment.date} />
        </div>

        <div className="absolute" style={{ top: 12, right: 12 }}>
          <HighlightButton highlighted={highlighted} onClick={() => setHighlighted(h => !h)} />
        </div>
      </div>

      <div
        style={{
          position: 'relative',
          marginTop: -22,
          borderRadius: '20px 20px 0 0',
          background: highlighted ? AMBER_50 : SURFACE,
          padding: '16px 18px 20px',
          transition: 'background 220ms ease',
        }}
      >
        <p
          className="font-serif font-medium"
          style={{ fontSize: 17, lineHeight: '26px', color: INK, letterSpacing: '-0.2px' }}
        >
          {moment.text}
        </p>
      </div>
    </article>
  )
}

// ─── Upcoming Moment Card ─────────────────────────────────────────────────────

function UpcomingMomentCard({ date, text }: { date: string; text: string }) {
  const dayLabel = date.split(',')[0].toUpperCase()
  const dayNum = date.split(' ').pop()

  return (
    <div
      className="flex items-center justify-between rounded-[18px]"
      style={{
        background: TERRACOTTA_50,
        border: '1px solid rgba(149,45,23,0.16)',
        padding: '14px 14px 14px 16px',
      }}
    >
      <div className="flex min-w-0 flex-col" style={{ gap: 14, paddingRight: 12 }}>
        <div className="flex items-center gap-2">
          <div
            className="flex items-center rounded-pill"
            style={{ height: 26, background: AMBER_800, padding: '0 13px' }}
          >
            <span
              className="font-mono font-normal uppercase"
              style={{ fontSize: 12, lineHeight: '16px', letterSpacing: 0, color: '#fffffe' }}
            >
              Upcoming
            </span>
          </div>
        </div>
        <p
          className="font-serif font-normal"
          style={{
            fontSize: 16,
            lineHeight: '22px',
            color: INK,
          }}
        >
          {text}
        </p>
      </div>

      <div
        className="flex flex-col items-center justify-center rounded-[18px] shrink-0"
        style={{
          width: 46,
          height: 58,
          background: TERRACOTTA_200,
        }}
      >
        <span
          className="font-mono font-normal uppercase"
          style={{ fontSize: 10, letterSpacing: 0, color: INK, lineHeight: '14px' }}
        >
          {dayLabel}
        </span>
        <span
          className="font-serif font-normal"
          style={{ fontSize: 23, color: INK, lineHeight: '27px' }}
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
  onIntentionEdit,
  onDirectionEdit,
  onCaptureOpen,
}: {
  roleId: string
  onClose: () => void
  onIntentionEdit: (roleId: string, text?: string) => void
  onDirectionEdit: (roleId: string) => void
  onCaptureOpen: (roleId: string) => void
}) {
  const [showMaeAsks, setShowMaeAsks] = useState(true)
  const role = ROLES_DATA[roleId]
  if (!role) return null

  return (
    <>
      {/* Animated outer — overflow:hidden allows GPU-composited transform */}
      <div
        className="absolute inset-0"
        style={{
          zIndex: 30,
          overflow: 'hidden',
          animation: 'slideInRight 360ms cubic-bezier(0.32, 0.72, 0, 1) both',
          willChange: 'transform',
        }}
      >
      {/* Scrollable inner */}
      <div
        className="h-full overflow-y-auto scrollbar-hide"
        style={{ background: '#FFFCF3' }}
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
                Role
              </span>
            </div>

            <h1
              className="font-serif font-bold"
              style={{
                fontSize: 38,
                lineHeight: '42px',
                letterSpacing: '-0.35px',
                color: '#fffffe',
                textShadow: '0 2px 18px rgba(0,0,0,0.18)',
              }}
            >
              {role.label}
            </h1>
          </div>
        </div>

        {/* ── 2. Content ── */}
        <div
          className="flex flex-col"
          style={{
            paddingLeft: 20,
            paddingRight: 20,
            paddingTop: 20,
            paddingBottom: 40,
            animation: 'fadeUpIn 520ms 220ms cubic-bezier(0.22, 1, 0.36, 1) both',
          }}
        >
          {/* Mae noticed card */}
          {showMaeAsks && (
            <div
              className="relative rounded-[22px] overflow-hidden flex flex-col"
              style={{
                background: AMBER_50,
                border: '1px solid rgba(93,62,31,0.2)',
                padding: '18px 20px 22px',
                marginBottom: 20,
                minHeight: 120,
              }}
            >
              {/* Dismiss */}
              <button
                onClick={() => setShowMaeAsks(false)}
                className="absolute flex items-center justify-center"
                style={{ top: 15, right: 15, width: 26, height: 26 }}
              >
                <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                  <path d="M1 1l9 9M10 1L1 10" stroke="#5d3e1f" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </button>

              <div className="flex flex-col" style={{ gap: 9, paddingRight: 78 }}>
                {/* "MAE NOTICED" label */}
                <span
                  className="font-mono uppercase"
                  style={{ fontSize: 9, letterSpacing: '1.2px', color: '#5d3e1f', lineHeight: '13px' }}
                >
                  Mae noticed
                </span>

                {/* Body text */}
                <p
                  className="font-bobby"
                  style={{ fontSize: 18, lineHeight: '25px', letterSpacing: '-0.2px', color: INK, fontWeight: 400 }}
                >
                  {role.noticed}
                </p>
              </div>

              {/* Mae flower — large, clipped bottom-right */}
              <img
                src={maeLogo}
                alt=""
                className="absolute"
                style={{
                  width: 90,
                  height: 90,
                  bottom: -10,
                  right: -8,
                  opacity: 1,
                }}
              />
            </div>
          )}

          {/* ── Direction ── */}
          <div
            className="rounded-[18px]"
            style={{
              background: '#fffffe',
              border: '1px solid rgba(138,116,103,0.15)',
              padding: '16px 16px 17px',
              marginBottom: 24,
            }}
          >
            <div className="flex items-center justify-between" style={{ marginBottom: 10 }}>
              <span
                className="font-serif font-normal"
                style={{ fontSize: 15, color: INK, lineHeight: '20px' }}
              >
                Your Direction
              </span>
              <button onClick={() => onDirectionEdit(role.id)}>
                <span
                  className="font-sans font-normal"
                  style={{ fontSize: 11, color: MUTED, fontVariationSettings: "'opsz' 9" }}
                >
                  Edit
                </span>
              </button>
            </div>

            <p
              className="font-serif"
              style={{
                fontSize: 17,
                lineHeight: '25px',
                letterSpacing: '-0.15px',
                color: GREEN,
                fontWeight: 700,
              }}
            >
              "{role.direction}"
            </p>
          </div>

          {/* ── Intentions — individual cards, no grouped container ── */}
          <div style={{ marginBottom: 28 }}>
            <div className="flex items-center justify-between" style={{ marginBottom: 12 }}>
              <span
                className="font-serif font-normal"
                style={{ fontSize: 15, color: INK, lineHeight: '20px' }}
              >
                Intentions
              </span>
              {role.intentions.length > 0 && (
                <div
                  className="flex items-center justify-center rounded-pill"
                  style={{ background: 'rgba(138,116,103,0.1)', padding: '3px 9px' }}
                >
                  <span
                    className="font-sans font-medium"
                    style={{ fontSize: 10, color: MUTED, fontVariationSettings: "'opsz' 9" }}
                  >
                    {role.intentions.length} active
                  </span>
                </div>
              )}
            </div>

            {role.intentions.length > 0 ? (
              <div className="flex flex-col" style={{ gap: 8, marginBottom: 10 }}>
                {role.intentions.map((intent, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between rounded-[14px]"
                    style={{
                      background: '#fffffe',
                      border: '1px solid rgba(138,116,103,0.15)',
                      padding: '13px 16px',
                    }}
                  >
                    <span
                      className="font-sans font-normal"
                      style={{ fontSize: 14, lineHeight: '20px', color: INK, fontVariationSettings: "'opsz' 9" }}
                    >
                      {intent}
                    </span>
                    <button
                      className="shrink-0"
                      style={{ marginLeft: 12 }}
                      onClick={() => onIntentionEdit(role.id, intent)}
                    >
                      <span
                        className="font-sans font-normal"
                        style={{ fontSize: 11, color: MUTED, fontVariationSettings: "'opsz' 9" }}
                      >
                        Edit
                      </span>
                    </button>
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
                  marginBottom: 10,
                }}
              >
                No intentions set yet.
              </p>
            )}

            {/* Add intention — dashed card matching item height */}
            <button
              className="flex items-center justify-center w-full rounded-[14px]"
              style={{
                height: 46,
                border: '1px dashed rgba(138,116,103,0.3)',
                background: 'rgba(138,116,103,0.03)',
              }}
              onClick={() => onIntentionEdit(role.id)}
            >
              <span
                className="font-sans font-normal"
                style={{ fontSize: 13, color: 'rgba(4,74,40,0.6)', fontVariationSettings: "'opsz' 9" }}
              >
                + Add intention
              </span>
            </button>
          </div>

          {/* ── Moments ── */}
          <div>
            <div className="flex items-center justify-between" style={{ marginBottom: 12 }}>
              <span
                className="font-serif font-normal"
                style={{ fontSize: 15, color: INK, lineHeight: '20px' }}
              >
                Moments
              </span>
              {(role.upcoming.length + role.past.length) > 0 && (
                <div
                  className="flex items-center justify-center rounded-pill"
                  style={{ background: 'rgba(138,116,103,0.1)', padding: '3px 9px' }}
                >
                  <span
                    className="font-sans font-medium"
                    style={{ fontSize: 10, color: MUTED, fontVariationSettings: "'opsz' 9" }}
                  >
                    {role.upcoming.length + role.past.length} total
                  </span>
                </div>
              )}
            </div>

            {/* Upcoming */}
            {role.upcoming.length > 0 && (
              <>
                <div className="flex items-center" style={{ marginBottom: 8 }}>
                  <span
                    className="font-mono font-normal uppercase"
                    style={{ fontSize: 10, letterSpacing: '0.2px', color: AMBER, lineHeight: '14px' }}
                  >
                    Upcoming
                  </span>
                </div>

                <div className="flex flex-col gap-2" style={{ marginBottom: 18 }}>
                  {role.upcoming.map((m, i) => (
                    <UpcomingMomentCard key={i} date={m.date} text={m.text} />
                  ))}
                </div>
              </>
            )}

            {/* Recent */}
            {role.past.length > 0 && (
              <>
                <div className="flex items-center" style={{ marginBottom: 10 }}>
                  <span
                    className="font-mono font-normal uppercase"
                    style={{ fontSize: 10, letterSpacing: '0.2px', color: 'rgba(107,102,96,0.65)', lineHeight: '14px' }}
                  >
                    Recent
                  </span>
                </div>

                <div className="flex flex-col gap-3">
                  {role.past.map(m => (
                    <PastMomentCard key={m.id} moment={m} />
                  ))}
                </div>
              </>
            )}

            {/* Capture CTA — tinted dashed card with icon */}
            <button
              onClick={() => onCaptureOpen(role.id)}
              className="flex items-center justify-center gap-[8px] w-full rounded-[18px]"
              style={{
                height: 54,
                marginTop: 16,
                border: '1px dashed rgba(138,116,103,0.3)',
                background: 'rgba(138,116,103,0.04)',
              }}
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M7 2v10M2 7h10" stroke="rgba(4,74,40,0.6)" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              <span
                className="font-sans font-normal"
                style={{ fontSize: 13, color: 'rgba(4,74,40,0.65)', fontVariationSettings: "'opsz' 9" }}
              >
                Capture a moment for {role.label}
              </span>
            </button>
          </div>
        </div>
      </div>
      </div>
    </>
  )
}
