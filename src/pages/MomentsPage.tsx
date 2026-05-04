import { useEffect, useMemo, useRef, useState } from 'react'
import { Bell, ChevronLeft, ChevronRight, Search, Star, X } from 'lucide-react'

import maeLogo from '../assets/icons/mae-flower-icon.svg'
import runnerImg from '../assets/illustrations/u1355955226_runner_in_the_park_--sref_202514354_--profile_8d1_34b21c61-5858-439e-8fbd-0256b22a06a4_0.png'
import boardgamesImg from '../assets/illustrations/u1355955226_playing_boardgames_--sref_202514354_--profile_8d1_0c4b39ad-8442-4e08-b910-2733d343dc0b_3.png'
import coffeeImg from '../assets/illustrations/u1355955226_two_girls_sitting_in_coffee_shop_--sref_202514354_12f89aa8-94a4-410a-8fc2-7fd8f984d2c3_0.png'
import creativeImg from '../assets/illustrations/u1355955226_painter_painting_a_canvas_--sref_202514354_--prof_51f7c398-d464-4ad1-8bb6-da52f2cc1971_1.png'
import professionalImg from '../assets/illustrations/u1355955226_office_worker_in_front_of_pc_--sref_202514354_--p_34d3ce6f-dd9b-4966-bcba-6d684da243fa_3.png'

const GREEN = '#044A28'
const CANVAS = '#FFFCF3'
const SURFACE = '#fffffe'
const WARM = '#e8e1d7'
const BORDER = 'rgba(138,116,103,0.2)'
const MUTED = '#6b6660'
const INK = '#2d2d2a'
const RED = '#8f342f'
const GOLD = '#b9833d'

const DOW_LABELS = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']
const MONTH_LABEL = 'April 2026'
const TODAY_DATE = 30
const FIRST_DOW = 3
const DAYS_IN_MONTH = 30
const CALENDAR_CELLS: number[] = [
  ...Array(FIRST_DOW).fill(0),
  ...Array.from({ length: DAYS_IN_MONTH }, (_, i) => i + 1),
  ...Array(35 - FIRST_DOW - DAYS_IN_MONTH).fill(0),
]

type Filter = 'all' | 'highlights'

const SEARCH_SUGGESTIONS = ['Self', 'Friend', 'Creative']

type Moment = {
  id: string
  day: number
  role: string
  dateLabel: string
  text: string
  image: string
  color: string
  highlighted: boolean
}

const INITIAL_MOMENTS: Moment[] = [
  {
    id: 'morning-run',
    day: 30,
    role: 'Self',
    dateLabel: 'Today',
    text: 'Morning run in the park. Just me and the quiet.',
    image: runnerImg,
    color: GREEN,
    highlighted: false,
  },
  {
    id: 'game-night',
    day: 25,
    role: 'Parent',
    dateLabel: 'Apr 25',
    text: 'Game night with the kids. Lily won Uno again.',
    image: boardgamesImg,
    color: GOLD,
    highlighted: true,
  },
  {
    id: 'coffee',
    day: 28,
    role: 'Friend',
    dateLabel: 'Apr 28',
    text: 'Coffee with Nina became the kind of conversation that loosens the whole day.',
    image: coffeeImg,
    color: RED,
    highlighted: true,
  },
  {
    id: 'sketching',
    day: 24,
    role: 'Creative',
    dateLabel: 'Apr 24',
    text: 'An hour of sketching before bed. Forgot how good this feels.',
    image: creativeImg,
    color: RED,
    highlighted: false,
  },
  {
    id: 'q1-report',
    day: 27,
    role: 'Professional',
    dateLabel: 'Apr 27',
    text: 'Submitted the Q1 report. Done and dusted.',
    image: professionalImg,
    color: GREEN,
    highlighted: false,
  },
]

// ─── Header ───────────────────────────────────────────────────────────────────

function Header({
  onMaeChatOpen,
  momentCount,
  highlightCount,
}: {
  onMaeChatOpen: () => void
  momentCount: number
  highlightCount: number
}) {
  return (
    <header style={{ padding: '56px 20px 20px' }}>
      <div className="flex items-start justify-between">
        <div>
          <p
            className="font-serif font-bold"
            style={{ fontSize: 28, lineHeight: '34px', letterSpacing: '-0.5px', color: INK }}
          >
            Memories
          </p>
          <p
            className="font-sans"
            style={{
              marginTop: 5,
              fontSize: 13,
              lineHeight: '18px',
              color: MUTED,
              fontVariationSettings: "'opsz' 14",
            }}
          >
            {momentCount} moments · {highlightCount} highlights
          </p>
        </div>

        <button
          onClick={onMaeChatOpen}
          className="relative flex items-center justify-center rounded-full"
          aria-label="Notifications"
          style={{
            width: 38,
            height: 38,
            background: SURFACE,
            border: `1px solid ${BORDER}`,
            marginTop: 2,
          }}
        >
          <Bell size={17} strokeWidth={1.7} color={INK} />
          <span
            className="absolute rounded-full"
            style={{ width: 7, height: 7, background: GREEN, top: 8, right: 8, border: `1.5px solid ${SURFACE}` }}
          />
        </button>
      </div>
    </header>
  )
}

// ─── Mae Observation ──────────────────────────────────────────────────────────

function MaeObservation({ onDismiss }: { onDismiss: () => void }) {
  return (
    <div
      className="relative mx-5 rounded-[22px] overflow-hidden"
      style={{
        background: '#FFFCEB',
        border: '1px solid rgba(93,62,31,0.2)',
        padding: '18px 20px 22px 20px',
        minHeight: 120,
      }}
    >
      {/* Dismiss */}
      <button
        onClick={onDismiss}
        className="absolute flex items-center justify-center"
        aria-label="Dismiss"
        style={{ top: 15, right: 15, width: 26, height: 26 }}
      >
        <X size={13} strokeWidth={1.5} color="#5d3e1f" />
      </button>

      <div className="flex flex-col gap-[9px]" style={{ paddingRight: 88 }}>
        {/* Label */}
        <span
          className="font-mono uppercase"
          style={{ fontSize: 9, letterSpacing: '1.2px', color: '#5d3e1f', lineHeight: '13px' }}
        >
          Mae noticed
        </span>

        {/* Body */}
        <p
          className="font-bobby"
          style={{ fontSize: 21, lineHeight: '27px', letterSpacing: '-0.3px', color: '#1e1f1c', fontWeight: 400 }}
        >
          Your highlighted moments this month are with people who make you feel calm
        </p>
      </div>

      {/* Mae flower — anchored bottom-right, partially clipped */}
      <img
        src={maeLogo}
        alt=""
        className="absolute pointer-events-none"
        style={{ width: 88, height: 88, bottom: -10, right: -6 }}
      />
    </div>
  )
}

// ─── Mini Calendar ────────────────────────────────────────────────────────────

function MiniCalendar({
  selectedDay,
  momentDays,
  highlightDays,
  onSelect,
}: {
  selectedDay: number | null
  momentDays: Set<number>
  highlightDays: Set<number>
  onSelect: (day: number) => void
}) {
  return (
    <section
      className="mx-5 rounded-[24px]"
      style={{
        marginTop: 14,
        background: SURFACE,
        border: `1px solid ${BORDER}`,
        padding: '16px 16px 12px',
      }}
    >
      {/* Month nav */}
      <div className="mb-3 flex items-center justify-between">
        <button
          className="flex items-center justify-center rounded-full"
          style={{ width: 28, height: 28, background: 'rgba(138,116,103,0.1)' }}
        >
          <ChevronLeft size={15} strokeWidth={1.7} color={MUTED} />
        </button>
        <span className="font-serif font-medium" style={{ fontSize: 15, lineHeight: '22px', color: INK }}>
          {MONTH_LABEL}
        </span>
        <button
          className="flex items-center justify-center rounded-full"
          style={{ width: 28, height: 28, background: 'rgba(138,116,103,0.1)' }}
        >
          <ChevronRight size={15} strokeWidth={1.7} color={MUTED} />
        </button>
      </div>

      {/* Day-of-week labels */}
      <div className="grid" style={{ gridTemplateColumns: 'repeat(7, 1fr)', marginBottom: 2 }}>
        {DOW_LABELS.map(day => (
          <div key={day} className="flex items-center justify-center" style={{ height: 20 }}>
            <span
              className="font-sans font-medium"
              style={{
                fontSize: 10,
                color: 'rgba(107,102,96,0.55)',
                letterSpacing: '0.06em',
                fontVariationSettings: "'opsz' 9",
              }}
            >
              {day}
            </span>
          </div>
        ))}
      </div>

      {/* Day cells */}
      <div className="grid" style={{ gridTemplateColumns: 'repeat(7, 1fr)', gap: '1px 0' }}>
        {CALENDAR_CELLS.map((day, index) => {
          if (day === 0) return <div key={index} style={{ height: 36 }} />

          const selected = selectedDay === day
          const hasMoment = momentDays.has(day)
          const hasHighlight = highlightDays.has(day)

          return (
            <button
              key={index}
              onClick={() => onSelect(day)}
              className="flex flex-col items-center justify-start"
              style={{ height: 36, paddingTop: 2 }}
            >
              <div
                className="flex items-center justify-center rounded-full"
                style={{
                  width: 28,
                  height: 28,
                  background: selected ? GREEN : 'transparent',
                  border: day === TODAY_DATE && !selected ? `1.3px solid ${GREEN}` : 'none',
                }}
              >
                <span
                  className="font-sans font-medium"
                  style={{
                    fontSize: 12,
                    lineHeight: 1,
                    color: selected ? SURFACE : day === TODAY_DATE ? GREEN : INK,
                    fontVariationSettings: "'opsz' 14",
                  }}
                >
                  {day}
                </span>
              </div>

              {hasMoment && (
                <div className="flex items-center gap-[2px]" style={{ marginTop: 2 }}>
                  <span
                    style={{
                      display: 'block',
                      width: 4,
                      height: 4,
                      borderRadius: 2,
                      background: selected ? SURFACE : GREEN,
                      opacity: selected ? 0.8 : 1,
                    }}
                  />
                  {hasHighlight && (
                    <span
                      style={{
                        display: 'block',
                        width: 4,
                        height: 4,
                        borderRadius: 2,
                        background: selected ? SURFACE : GOLD,
                        opacity: selected ? 0.8 : 1,
                      }}
                    />
                  )}
                </div>
              )}
            </button>
          )
        })}
      </div>
    </section>
  )
}

// ─── Filter Tabs ──────────────────────────────────────────────────────────────

function FilterTab({
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
      className="rounded-pill"
      style={{
        height: 34,
        padding: '0 15px',
        background: active ? GREEN : 'transparent',
        border: `1px solid ${active ? 'transparent' : BORDER}`,
        transition: 'background 180ms ease, border-color 180ms ease',
      }}
    >
      <span
        className="font-sans font-medium"
        style={{
          fontSize: 13,
          color: active ? SURFACE : MUTED,
          fontVariationSettings: "'opsz' 14",
          transition: 'color 180ms ease',
        }}
      >
        {label}
      </span>
    </button>
  )
}

// ─── Role Tag ─────────────────────────────────────────────────────────────────

function RoleTag({ label }: { label: string }) {
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
        className="block font-sans font-medium uppercase"
        style={{ fontSize: 10, lineHeight: 1, letterSpacing: '1.2px', color: INK, transform: 'translateY(-0.5px)' }}
      >
        {label}
      </span>
    </div>
  )
}

// ─── Moment Card ──────────────────────────────────────────────────────────────

function MomentCard({
  moment,
  onToggle,
}: {
  moment: Moment
  onToggle: (id: string) => void
}) {
  return (
    <article
      className="overflow-hidden rounded-[24px]"
      style={{
        background: moment.highlighted ? 'rgba(185,131,61,0.025)' : SURFACE,
        border: `1px solid ${moment.highlighted ? 'rgba(185,131,61,0.38)' : BORDER}`,
        transition: 'background 220ms ease, border-color 220ms ease',
      }}
    >
      {/* Photo band */}
      <div className="relative" style={{ height: 200, background: WARM }}>
        <img src={moment.image} alt="" className="absolute inset-0 h-full w-full object-cover" />

        {/* Role tag — top-left */}
        <div className="absolute" style={{ top: 14, left: 14 }}>
          <RoleTag label={moment.role} />
        </div>

        {/* Highlight button — top-right, circular */}
        <button
          onClick={() => onToggle(moment.id)}
          className="absolute flex items-center justify-center rounded-full"
          style={{
            top: 12,
            right: 12,
            width: 36,
            height: 36,
            background: moment.highlighted ? 'rgba(185,131,61,0.88)' : 'rgba(255,255,254,0.92)',
            backdropFilter: 'blur(6px)',
            transition: 'background 220ms ease',
          }}
        >
          <Star
            size={15}
            strokeWidth={1.6}
            color={moment.highlighted ? '#fffffe' : `rgba(45,45,42,0.55)`}
            fill={moment.highlighted ? '#fffffe' : 'transparent'}
          />
        </button>
      </div>

      {/* Text panel — overlaps photo */}
      <div
        style={{
          position: 'relative',
          marginTop: -22,
          borderRadius: '20px 20px 0 0',
          background: moment.highlighted ? '#fdf6ec' : SURFACE,
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

// ─── Main Page ────────────────────────────────────────────────────────────────

export default function MomentsPage({ onMaeChatOpen }: { onMaeChatOpen: () => void }) {
  const [moments, setMoments] = useState(INITIAL_MOMENTS)
  const [filter, setFilter] = useState<Filter>('all')
  const [selectedDay, setSelectedDay] = useState<number | null>(null)
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [showMaeObservation, setShowMaeObservation] = useState(true)
  const searchInputRef = useRef<HTMLInputElement>(null)

  const momentDays = useMemo(() => new Set(moments.map(m => m.day)), [moments])
  const highlightDays = useMemo(() => new Set(moments.filter(m => m.highlighted).map(m => m.day)), [moments])
  const normalizedSearchQuery = searchQuery.trim().toLowerCase()

  const visibleMoments = moments.filter(m => {
    if (filter === 'highlights' && !m.highlighted) return false
    if (selectedDay !== null && m.day !== selectedDay) return false
    if (normalizedSearchQuery.length > 0) {
      const searchable = [
        m.text,
        m.role,
        m.dateLabel,
        m.highlighted ? 'highlight highlighted held close' : '',
      ].join(' ').toLowerCase()

      if (!searchable.includes(normalizedSearchQuery)) return false
    }
    return true
  })

  useEffect(() => {
    if (searchOpen) {
      window.setTimeout(() => searchInputRef.current?.focus(), 80)
    }
  }, [searchOpen])

  function toggleHighlight(id: string) {
    setMoments(prev => prev.map(m => (m.id === id ? { ...m, highlighted: !m.highlighted } : m)))
  }

  const highlightCount = moments.filter(m => m.highlighted).length

  const sectionTitle = normalizedSearchQuery.length > 0
    ? 'Search results'
    : filter === 'highlights'
    ? 'Held close'
    : selectedDay !== null
    ? 'That day'
    : 'Recently recorded'

  const sectionMeta = normalizedSearchQuery.length > 0
    ? `${visibleMoments.length} ${visibleMoments.length === 1 ? 'moment' : 'moments'} found`
    : null

  function openSearch() {
    setFilter('all')
    setSelectedDay(null)
    setSearchOpen(true)
  }

  function closeSearch() {
    setSearchOpen(false)
    setSearchQuery('')
  }

  return (
    <div className="relative" style={{ width: 393, minHeight: 852, background: CANVAS }}>
      <Header
        onMaeChatOpen={onMaeChatOpen}
        momentCount={moments.length}
        highlightCount={highlightCount}
      />

      {showMaeObservation && <MaeObservation onDismiss={() => setShowMaeObservation(false)} />}

      <MiniCalendar
        selectedDay={selectedDay}
        momentDays={momentDays}
        highlightDays={highlightDays}
        onSelect={day => setSelectedDay(current => (current === day ? null : day))}
      />

      {/* Filter + section header */}
      <section style={{ padding: '20px 20px 0' }}>
        {searchOpen ? (
          <div
            className="flex items-center rounded-[20px]"
            style={{
              minHeight: 46,
              background: SURFACE,
              border: `1px solid ${BORDER}`,
              padding: '0 8px 0 14px',
              animation: 'fadeUpIn 180ms ease-out both',
            }}
          >
            <Search size={16} strokeWidth={1.7} color={GREEN} style={{ flexShrink: 0 }} />
            <input
              ref={searchInputRef}
              value={searchQuery}
              onChange={event => setSearchQuery(event.target.value)}
              placeholder="Search moments"
              aria-label="Search memories"
              className="min-w-0 flex-1 bg-transparent font-sans outline-none"
              style={{
                height: 44,
                padding: '0 10px',
                fontSize: 14,
                lineHeight: '20px',
                color: INK,
                fontVariationSettings: "'opsz' 14",
              }}
            />
            <button
              onClick={closeSearch}
              className="flex items-center justify-center rounded-full"
              aria-label="Close search"
              style={{ width: 30, height: 30, background: 'rgba(138,116,103,0.1)' }}
            >
              <X size={15} strokeWidth={1.7} color={MUTED} />
            </button>
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <FilterTab label="All moments" active={filter === 'all'} onClick={() => setFilter('all')} />
            <FilterTab label="Highlights" active={filter === 'highlights'} onClick={() => setFilter('highlights')} />
            <div style={{ flex: 1 }} />
            <button
              onClick={openSearch}
              className="flex items-center justify-center rounded-full"
              aria-label="Search memories"
              style={{ width: 34, height: 34, background: SURFACE, border: `1px solid ${BORDER}` }}
            >
              <Search size={15} strokeWidth={1.7} color={MUTED} />
            </button>
          </div>
        )}

        {searchOpen && normalizedSearchQuery.length === 0 && (
          <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide" style={{ marginTop: 10, paddingBottom: 2 }}>
            {SEARCH_SUGGESTIONS.map(term => (
              <button
                key={term}
                onClick={() => setSearchQuery(term)}
                className="shrink-0 rounded-pill"
                style={{
                  height: 30,
                  padding: '0 12px',
                  background: term === 'highlighted' ? 'rgba(185,131,61,0.08)' : 'rgba(4,74,40,0.06)',
                  border: `1px solid ${term === 'highlighted' ? 'rgba(185,131,61,0.22)' : 'rgba(4,74,40,0.14)'}`,
                }}
              >
                <span
                  className="font-sans font-medium"
                  style={{
                    fontSize: 12,
                    color: term === 'highlighted' ? GOLD : GREEN,
                    fontVariationSettings: "'opsz' 14",
                  }}
                >
                  {term}
                </span>
              </button>
            ))}
          </div>
        )}

        {/* Section heading row */}
        <div className="flex items-center justify-between" style={{ marginTop: 24 }}>
          <div>
            <h2
              className="font-serif font-medium"
              style={{ fontSize: 18, lineHeight: '24px', color: INK, letterSpacing: '-0.2px' }}
            >
              {sectionTitle}
            </h2>
            {sectionMeta && (
              <p
                className="font-sans"
                style={{ marginTop: 3, fontSize: 12, lineHeight: '17px', color: MUTED, fontVariationSettings: "'opsz' 14" }}
              >
                {sectionMeta}
              </p>
            )}
          </div>
          {selectedDay !== null && normalizedSearchQuery.length === 0 && (
            <button onClick={() => setSelectedDay(null)}>
              <span
                className="font-sans font-medium"
                style={{ fontSize: 12, color: MUTED, fontVariationSettings: "'opsz' 14" }}
              >
                Clear date
              </span>
            </button>
          )}
        </div>

        {/* Cards — grouped by date */}
        <div className="flex flex-col" style={{ marginTop: 16, gap: 24 }}>
          {visibleMoments.length > 0 ? (() => {
            const groups = visibleMoments.reduce<{ label: string; items: typeof visibleMoments }[]>((acc, m) => {
              const last = acc[acc.length - 1]
              if (last && last.label === m.dateLabel) {
                last.items.push(m)
              } else {
                acc.push({ label: m.dateLabel, items: [m] })
              }
              return acc
            }, [])

            return groups.map(({ label, items }) => (
              <div key={label} className="flex flex-col" style={{ gap: 10 }}>
                <span
                  className="font-sans font-medium"
                  style={{ fontSize: 12, color: MUTED, fontVariationSettings: "'opsz' 14" }}
                >
                  {label}
                </span>
                <div className="flex flex-col" style={{ gap: 12 }}>
                  {items.map(m => (
                    <MomentCard key={m.id} moment={m} onToggle={toggleHighlight} />
                  ))}
                </div>
              </div>
            ))
          })() : (
            <div
              className="rounded-[24px]"
              style={{ background: SURFACE, border: `1px solid ${BORDER}`, padding: '24px 20px' }}
            >
              <p
                className="font-serif font-medium"
                style={{ fontSize: 17, lineHeight: '25px', color: INK }}
              >
                {normalizedSearchQuery.length > 0 ? 'Nothing surfaced for that search.' : 'Nothing recorded here yet.'}
              </p>
              <p
                className="font-sans"
                style={{ marginTop: 6, fontSize: 13, lineHeight: '19px', color: MUTED, fontVariationSettings: "'opsz' 14" }}
              >
                {normalizedSearchQuery.length > 0
                  ? 'Try a role, a date, or a word from the moment. Mae remembers quietly, not perfectly.'
                  : 'Silence counts too. Mae will use what is here when there is something to return to.'}
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
