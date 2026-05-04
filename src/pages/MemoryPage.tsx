import { useState } from 'react'

import runnerImg from '../assets/illustrations/u1355955226_runner_in_the_park_--sref_202514354_--profile_8d1_34b21c61-5858-439e-8fbd-0256b22a06a4_0.png'
import boardgamesImg from '../assets/illustrations/u1355955226_playing_boardgames_--sref_202514354_--profile_8d1_0c4b39ad-8442-4e08-b910-2733d343dc0b_3.png'
import iconBubbleChat from '../assets/icons/bubble-chat.svg'
import maeLogo from '../assets/icons/mae-flower-icon.svg'

// ─── Tokens ───────────────────────────────────────────────────────────────────

const GREEN = '#044A28'
const AMBER = '#9c6b3a'
const BORDER = 'rgba(138,116,103,0.2)'
const AMBER_BORDER = 'rgba(156,107,58,0.28)'
const AMBER_50 = '#FFFCEB'
const AMBER_800 = '#94440C'
const TERRACOTTA_50 = '#FEF0E3'
const TERRACOTTA_200 = '#FBD1AD'

// ─── Calendar constants (April 2026, today = 30) ─────────────────────────────

const DOW_LABELS = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']
const MONTH_LABEL = 'April 2026'
const TODAY_DATE = 30
const FIRST_DOW = 3  // Wednesday
const DAYS_IN_MONTH = 30

// Pad to a 5×7 grid
const CALENDAR_CELLS: number[] = [
  ...Array(FIRST_DOW).fill(0),
  ...Array.from({ length: DAYS_IN_MONTH }, (_, i) => i + 1),
  ...Array(35 - FIRST_DOW - DAYS_IN_MONTH).fill(0),
]

// April dates that have past moments
const PAST_DATES = new Set([24, 25, 27, 28, 29, 30])

// ─── Moment data ──────────────────────────────────────────────────────────────

type Moment = {
  id: string
  type: 'past' | 'upcoming'
  date: string
  role: string
  text: string
  image?: string
  highlighted: boolean
}

const INITIAL_MOMENTS: Moment[] = [
  {
    id: 'u1',
    type: 'upcoming',
    date: 'Fri, May 2',
    role: 'Self',
    text: 'Yoga class with Sarah',
    highlighted: false,
  },
  {
    id: 'u2',
    type: 'upcoming',
    date: 'Sun, May 4',
    role: 'Parent',
    text: 'Sunday family lunch',
    highlighted: false,
  },
  {
    id: 'u3',
    type: 'upcoming',
    date: 'Thu, May 8',
    role: 'Professional',
    text: 'Portfolio review with Marcus',
    highlighted: false,
  },
  {
    id: 'p1',
    type: 'past',
    date: 'Today',
    role: 'Self',
    text: 'Morning run in the park. Just me and the quiet.',
    image: runnerImg,
    highlighted: false,
  },
  {
    id: 'p2',
    type: 'past',
    date: 'Apr 28',
    role: 'Daughter',
    text: 'Called mum for her birthday. She cried — the good kind.',
    highlighted: true,
  },
  {
    id: 'p3',
    type: 'past',
    date: 'Apr 27',
    role: 'Professional',
    text: 'Submitted the Q1 report. Done and dusted.',
    highlighted: false,
  },
  {
    id: 'p4',
    type: 'past',
    date: 'Apr 25',
    role: 'Parent',
    text: 'Game night with the kids. Lily won Uno — again.',
    image: boardgamesImg,
    highlighted: true,
  },
  {
    id: 'p5',
    type: 'past',
    date: 'Apr 24',
    role: 'Creative',
    text: 'An hour of sketching before bed. Forgot how good this feels.',
    highlighted: false,
  },
]

// ─── Calendar ─────────────────────────────────────────────────────────────────

function MiniCalendar({ selected, onSelect }: {
  selected: number
  onSelect: (d: number) => void
}) {
  return (
    <div style={{ paddingLeft: 20, paddingRight: 20 }}>
      {/* Month nav */}
      <div className="flex items-center justify-between" style={{ marginBottom: 14 }}>
        <button
          className="flex items-center justify-center rounded-full"
          style={{ width: 28, height: 28, background: 'rgba(138,116,103,0.1)' }}
        >
          <svg width="7" height="12" viewBox="0 0 7 12" fill="none">
            <path d="M6 1L1 6l5 5" stroke="#6b6660" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <span
          className="font-serif font-medium text-ink"
          style={{ fontSize: 15, lineHeight: '22px' }}
        >
          {MONTH_LABEL}
        </span>
        <button
          className="flex items-center justify-center rounded-full"
          style={{ width: 28, height: 28, background: 'rgba(138,116,103,0.1)' }}
        >
          <svg width="7" height="12" viewBox="0 0 7 12" fill="none">
            <path d="M1 1l5 5-5 5" stroke="#6b6660" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      {/* Day of week labels */}
      <div className="grid" style={{ gridTemplateColumns: 'repeat(7, 1fr)', marginBottom: 4 }}>
        {DOW_LABELS.map(d => (
          <div key={d} className="flex items-center justify-center" style={{ height: 24 }}>
            <span
              className="font-sans font-medium text-center"
              style={{
                fontSize: 10,
                color: 'rgba(107,102,96,0.55)',
                letterSpacing: '0.06em',
                fontVariationSettings: "'opsz' 9",
              }}
            >
              {d}
            </span>
          </div>
        ))}
      </div>

      {/* Day cells */}
      <div className="grid" style={{ gridTemplateColumns: 'repeat(7, 1fr)', gap: '2px 0' }}>
        {CALENDAR_CELLS.map((day, idx) => {
          if (day === 0) return <div key={idx} style={{ height: 42 }} />

          const isToday = day === TODAY_DATE
          const isSelected = day === selected
          const hasPastMoment = PAST_DATES.has(day)

          return (
            <button
              key={idx}
              onClick={() => onSelect(day)}
              className="flex flex-col items-center justify-start"
              style={{ height: 42, paddingTop: 4 }}
            >
              {/* Day number */}
              <div
                className="flex items-center justify-center rounded-full"
                style={{
                  width: 30,
                  height: 30,
                  background: isSelected
                    ? GREEN
                    : isToday
                    ? 'transparent'
                    : 'transparent',
                  border: isToday && !isSelected
                    ? `1.5px solid ${GREEN}`
                    : 'none',
                  transition: 'background 180ms ease',
                }}
              >
                <span
                  className="font-sans font-medium"
                  style={{
                    fontSize: 13,
                    lineHeight: 1,
                    color: isSelected
                      ? '#fffffe'
                      : isToday
                      ? GREEN
                      : '#2d2d2a',
                    fontVariationSettings: "'opsz' 14",
                  }}
                >
                  {day}
                </span>
              </div>

              {/* Moment dot */}
              {hasPastMoment && (
                <div
                  style={{
                    width: 4,
                    height: 4,
                    borderRadius: 2,
                    marginTop: 2,
                    background: isSelected ? '#fffffe' : GREEN,
                    opacity: isSelected ? 0.7 : 1,
                    transition: 'background 180ms ease',
                  }}
                />
              )}
            </button>
          )
        })}
      </div>
    </div>
  )
}

// ─── Past Moment Card ─────────────────────────────────────────────────────────

function PastMomentCard({
  moment,
  onToggleHighlight,
}: {
  moment: Moment
  onToggleHighlight: (id: string) => void
}) {
  const hasPhoto = Boolean(moment.image)

  return (
    <div
      className="rounded-[24px] overflow-hidden"
      style={{
        background: moment.highlighted ? AMBER_50 : '#fffffe',
        border: `1px solid ${BORDER}`,
      }}
    >
      {/* Photo band */}
      {hasPhoto && (
        <div
          className="relative overflow-hidden"
          style={{ height: 168 }}
        >
          <img
            src={moment.image}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Subtle gradient for text legibility */}
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to bottom, rgba(0,0,0,0.08) 0%, rgba(4,74,40,0.18) 100%)',
            }}
          />
          {/* Role tag overlaid on photo */}
          <div
            className="absolute flex items-center px-3 rounded-pill"
            style={{
              bottom: 12,
              left: 16,
              height: 24,
              background: 'rgba(255,255,254,0.85)',
              backdropFilter: 'blur(6px)',
            }}
          >
            <span
              className="font-sans font-medium uppercase"
              style={{ fontSize: 9, letterSpacing: '1.1px', color: GREEN }}
            >
              {moment.role}
            </span>
          </div>
        </div>
      )}

      {/* Card body */}
      <div className="flex flex-col" style={{ padding: hasPhoto ? '14px 16px 16px' : '16px 16px 16px' }}>
        {/* Meta row — role (if no photo) + date */}
        {!hasPhoto && (
          <div className="flex items-center justify-between" style={{ marginBottom: 10 }}>
            <span
              className="font-sans font-medium uppercase"
              style={{ fontSize: 9, letterSpacing: '1.1px', color: GREEN }}
            >
              {moment.role}
            </span>
            <span
              className="font-sans font-normal text-muted"
              style={{ fontSize: 11, fontVariationSettings: "'opsz' 9" }}
            >
              {moment.date}
            </span>
          </div>
        )}

        {/* Moment text */}
        <p
          className="font-serif font-medium text-ink"
          style={{
            fontSize: hasPhoto ? 15 : 17,
            lineHeight: hasPhoto ? '22px' : '25px',
            letterSpacing: '-0.2px',
          }}
        >
          {moment.text}
        </p>

        {/* Footer row */}
        <div className="flex items-center justify-between" style={{ marginTop: 14 }}>
          {hasPhoto ? (
            <span
              className="font-sans font-normal text-muted"
              style={{ fontSize: 11, fontVariationSettings: "'opsz' 9" }}
            >
              {moment.date}
            </span>
          ) : (
            <div />
          )}

          {/* Highlight button */}
          <button
            onClick={() => onToggleHighlight(moment.id)}
            className="flex items-center gap-[5px]"
          >
            {moment.highlighted ? (
              /* Filled star — highlighted */
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
              /* Outline star — not highlighted */
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M8 1.5l1.75 3.55 3.9.57-2.82 2.74.66 3.88L8 10.35l-3.49 1.84.66-3.88-2.82-2.74 3.9-.57L8 1.5z"
                  stroke="rgba(138,116,103,0.45)"
                  strokeWidth="1.2"
                  strokeLinejoin="round"
                />
              </svg>
            )}
            {moment.highlighted && (
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

function UpcomingMomentCard({ moment }: { moment: Moment }) {
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
        {/* Meta */}
        <div className="flex items-center gap-2">
          <div
            className="flex items-center rounded-pill"
            style={{ height: 26, background: AMBER_800, padding: '0 13px' }}
          >
            <span
              className="font-mono font-normal uppercase"
              style={{ fontSize: 12, lineHeight: '16px', letterSpacing: '0.2px', color: '#fffffe' }}
            >
              Upcoming
            </span>
          </div>
        </div>

        {/* Text */}
        <p
          className="font-serif font-normal text-ink"
          style={{ fontSize: 16, lineHeight: '22px' }}
        >
          {moment.text}
        </p>
      </div>

      {/* Date badge */}
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
          style={{ fontSize: 10, letterSpacing: '0.2px', color: '#2d2d2a', lineHeight: '14px' }}
        >
          {moment.date.split(',')[0].toUpperCase()}
        </span>
        <span
          className="font-serif font-normal"
          style={{ fontSize: 23, color: '#2d2d2a', lineHeight: '27px' }}
        >
          {moment.date.split(' ').pop()}
        </span>
      </div>
    </div>
  )
}

// ─── Filter Tabs ──────────────────────────────────────────────────────────────

type Filter = 'all' | 'past' | 'upcoming'

function FilterTab({
  label,
  count,
  active,
  onClick,
}: {
  label: string
  count: number
  active: boolean
  onClick: () => void
}) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-[5px] px-4 rounded-pill"
      style={{
        height: 34,
        background: active ? GREEN : 'transparent',
        border: `1px solid ${active ? 'transparent' : BORDER}`,
        transition: 'background 180ms ease, border-color 180ms ease',
      }}
    >
      <span
        className="font-sans font-medium"
        style={{
          fontSize: 13,
          color: active ? '#fafaf7' : '#6b6660',
          fontVariationSettings: "'opsz' 14",
          transition: 'color 180ms ease',
        }}
      >
        {label}
      </span>
      <span
        className="font-sans font-medium"
        style={{
          fontSize: 11,
          color: active ? 'rgba(250,250,247,0.6)' : 'rgba(107,102,96,0.55)',
          fontVariationSettings: "'opsz' 9",
          transition: 'color 180ms ease',
        }}
      >
        {count}
      </span>
    </button>
  )
}

// ─── Main Page ────────────────────────────────────────────────────────────────

export default function MemoryPage({ onMaeChatOpen }: { onMaeChatOpen: () => void }) {
  const [selectedDay, setSelectedDay] = useState(TODAY_DATE)
  const [filter, setFilter] = useState<Filter>('all')
  const [moments, setMoments] = useState<Moment[]>(INITIAL_MOMENTS)

  function toggleHighlight(id: string) {
    setMoments(prev =>
      prev.map(m => (m.id === id ? { ...m, highlighted: !m.highlighted } : m))
    )
  }

  const pastMoments = moments.filter(m => m.type === 'past')
  const upcomingMoments = moments.filter(m => m.type === 'upcoming')

  const showPast = filter === 'all' || filter === 'past'
  const showUpcoming = filter === 'all' || filter === 'upcoming'

  return (
    <div
      className="relative"
      style={{ width: 393, background: '#FFFCF3', minHeight: 852 }}
    >

      {/* ── 1. Header ── */}
      <div
        className="flex items-center justify-between"
        style={{ paddingTop: 56, paddingLeft: 20, paddingRight: 20, paddingBottom: 20 }}
      >
        <div className="flex flex-col gap-[2px]">
          <p
            className="font-serif font-medium text-ink"
            style={{ fontSize: 24, lineHeight: '32px', letterSpacing: '-0.4px' }}
          >
            Memories
          </p>
          <p
            className="font-sans text-muted uppercase"
            style={{ fontSize: 9, letterSpacing: '0.08em', fontWeight: 300 }}
          >
            {moments.filter(m => m.highlighted).length} highlights · {pastMoments.length} moments
          </p>
        </div>
        <button onClick={onMaeChatOpen} className="relative flex items-center justify-center">
          <img src={iconBubbleChat} alt="chat" width={24} height={24} />
          <span
            className="absolute rounded-full"
            style={{ width: 7, height: 7, background: GREEN, top: 0, right: 0, border: '1.5px solid #FFFCF3' }}
          />
        </button>
      </div>

      {/* ── 2. Calendar ── */}
      <div
        className="rounded-[24px] mx-5"
        style={{
          background: '#fffffe',
          border: `1px solid ${BORDER}`,
          paddingTop: 18,
          paddingBottom: 14,
          marginBottom: 20,
        }}
      >
        <MiniCalendar selected={selectedDay} onSelect={setSelectedDay} />

        {/* Calendar legend */}
        <div className="flex items-center gap-4 justify-center" style={{ marginTop: 12 }}>
          <div className="flex items-center gap-[6px]">
            <div style={{ width: 6, height: 6, borderRadius: 3, background: GREEN }} />
            <span
              className="font-sans font-normal text-muted"
              style={{ fontSize: 10, fontVariationSettings: "'opsz' 9" }}
            >
              Moment recorded
            </span>
          </div>
        </div>
      </div>

      {/* ── 3. Filter tabs ── */}
      <div
        className="flex gap-2"
        style={{ paddingLeft: 20, paddingRight: 20, paddingBottom: 16 }}
      >
        <FilterTab
          label="All"
          count={moments.length}
          active={filter === 'all'}
          onClick={() => setFilter('all')}
        />
        <FilterTab
          label="Past"
          count={pastMoments.length}
          active={filter === 'past'}
          onClick={() => setFilter('past')}
        />
        <FilterTab
          label="Upcoming"
          count={upcomingMoments.length}
          active={filter === 'upcoming'}
          onClick={() => setFilter('upcoming')}
        />
      </div>

      {/* ── 4. Ask Mae card ── */}
      <button
        onClick={onMaeChatOpen}
        className="flex items-center justify-between mx-5 rounded-[24px]"
        style={{
          background: 'rgba(4,74,40,0.06)',
          border: '1px solid rgba(4,74,40,0.14)',
          padding: '16px 18px',
          marginBottom: 20,
          width: 'calc(100% - 40px)',
        }}
      >
        <div className="flex items-center gap-3">
          <div
            className="flex items-center justify-center rounded-full shrink-0"
            style={{ width: 36, height: 36, background: 'rgba(4,74,40,0.1)' }}
          >
            <img src={maeLogo} alt="" width={18} height={18} />
          </div>
          <div className="flex flex-col gap-[3px] text-left">
            <span
              className="font-sans font-medium uppercase"
              style={{ fontSize: 9, letterSpacing: '1.3px', color: GREEN, opacity: 0.75, fontVariationSettings: "'opsz' 9" }}
            >
              Ask Mae
            </span>
            <p
              className="font-serif"
              style={{ fontSize: 14, lineHeight: '20px', color: '#BC3712', letterSpacing: '-0.1px', fontWeight: 700 }}
            >
              What do my memories say about me this month?
            </p>
          </div>
        </div>
        <svg width="7" height="12" viewBox="0 0 7 12" fill="none" style={{ marginLeft: 12, flexShrink: 0 }}>
          <path d="M1 1l5 5-5 5" stroke="rgba(4,74,40,0.5)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {/* ── 5. Moments feed ── */}
      <div
        className="flex flex-col"
        style={{ paddingLeft: 20, paddingRight: 20, paddingBottom: 8 }}
      >

        {/* Upcoming section */}
        {showUpcoming && upcomingMoments.length > 0 && (
          <>
            <div className="flex items-center gap-3" style={{ marginBottom: 10 }}>
              <span
                className="font-sans font-medium uppercase"
                style={{ fontSize: 9, letterSpacing: '1.2px', color: AMBER }}
              >
                Upcoming
              </span>
              <div style={{ flex: 1, height: 1, background: AMBER_BORDER }} />
            </div>
            <div className="flex flex-col gap-2" style={{ marginBottom: showPast ? 22 : 0 }}>
              {upcomingMoments.map(m => (
                <UpcomingMomentCard key={m.id} moment={m} />
              ))}
            </div>
          </>
        )}

        {/* Past section */}
        {showPast && pastMoments.length > 0 && (
          <>
            <div className="flex items-center gap-3" style={{ marginBottom: 12 }}>
              <span
                className="font-sans font-medium uppercase"
                style={{ fontSize: 9, letterSpacing: '1.2px', color: 'rgba(107,102,96,0.6)' }}
              >
                Recent
              </span>
              <div style={{ flex: 1, height: 1, background: BORDER }} />
            </div>
            <div className="flex flex-col gap-3">
              {pastMoments.map(m => (
                <PastMomentCard
                  key={m.id}
                  moment={m}
                  onToggleHighlight={toggleHighlight}
                />
              ))}
            </div>
          </>
        )}
      </div>

    </div>
  )
}
