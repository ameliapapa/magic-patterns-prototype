import { useEffect, useMemo, useRef, useState } from 'react'
import { ChevronLeft, Plus, Search, X } from 'lucide-react'

import movementImg from '../assets/illustrations/person_lifting_weights_in_gym.png'
import createImg from '../assets/illustrations/u1355955226_painter_painting_a_canvas_--sref_202514354_--prof_51f7c398-d464-4ad1-8bb6-da52f2cc1971_1.png'
import familyImg from '../assets/illustrations/u1355955226_family_dinner_table_--sref_202514354_--profile_8d_6dde0955-dfa3-4689-b9fa-afe77a537eda_1.png'
import adventureImg from '../assets/illustrations/u1355955226_mountain_hike_--sref_202514354_--profile_8d1tcdd__1a989c17-693e-4851-a5ca-8fd6e6bc33dd_0.png'
import treatsImg from '../assets/illustrations/u1355955226_top_down_of_coffee_spread_at_a_coffee_shop_--sref_18758d50-b0cd-46a3-bd56-dbc99093952b_1.png'
import dateIdeasImg from '../assets/illustrations/dinner-date-restaurant.png'
import quietImg from '../assets/illustrations/reading-female-v2.png'
import errandsImg from '../assets/illustrations/couple-shopping-garden-store.png'

const GREEN = '#29422a'
const CANVAS = '#f8f6f2'
const SURFACE = '#fffffe'
const BORDER = 'rgba(138,116,103,0.2)'
const MUTED = '#6b6660'
const INK = '#2d2d2a'

type LibraryItem = {
  title: string
  role: string
  image: string
  terms: string
}

const LIBRARY_ITEMS: LibraryItem[] = [
  {
    title: 'Movement',
    role: 'Self',
    image: movementImg,
    terms: 'run walk gym strength stretch yoga energy body',
  },
  {
    title: 'Create',
    role: 'Creative',
    image: createImg,
    terms: 'paint draw write music craft make art',
  },
  {
    title: 'Family',
    role: 'Parent',
    image: familyImg,
    terms: 'dinner game night children home lunch',
  },
  {
    title: 'Adventure',
    role: 'Self',
    image: adventureImg,
    terms: 'hike outdoors nature explore trip',
  },
  {
    title: 'Treats',
    role: 'Friend',
    image: treatsImg,
    terms: 'coffee pastry breakfast cafe small pleasure',
  },
  {
    title: 'Date ideas',
    role: 'Partner',
    image: dateIdeasImg,
    terms: 'date dinner theatre cinema couple partner',
  },
  {
    title: 'Quiet time',
    role: 'Self',
    image: quietImg,
    terms: 'read rest journal study calm alone',
  },
  {
    title: 'Errands together',
    role: 'Partner',
    image: errandsImg,
    terms: 'shopping garden store home project partner',
  },
]

function CreateTile() {
  return (
    <button
      className="flex items-center justify-center rounded-[24px] active:scale-[0.98]"
      style={{
        width: 72,
        height: 72,
        background: GREEN,
        transition: 'transform 120ms ease',
      }}
      aria-label="Create activity"
    >
      <Plus size={28} strokeWidth={1.7} color={SURFACE} />
    </button>
  )
}

function LibraryCard({ item }: { item: LibraryItem }) {
  return (
    <button
      className="relative overflow-hidden rounded-[24px] text-left active:scale-[0.985]"
      style={{
        height: 160,
        background: '#e8e1d7',
        transition: 'transform 120ms ease',
      }}
    >
      <img src={item.image} alt="" className="absolute inset-0 h-full w-full object-cover" />
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.02) 18%, rgba(0,0,0,0.44) 100%)',
        }}
      />
      <div className="absolute left-4 right-4 bottom-4">
        <p
          className="font-lora font-medium"
          style={{ fontSize: 24, lineHeight: '29px', color: SURFACE, letterSpacing: '-0.2px' }}
        >
          {item.title}
        </p>
      </div>
    </button>
  )
}

export default function ActivityLibraryPage({ onBack }: { onBack: () => void }) {
  const [searchOpen, setSearchOpen] = useState(false)
  const [query, setQuery] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)
  const normalizedQuery = query.trim().toLowerCase()

  useEffect(() => {
    if (searchOpen) {
      window.setTimeout(() => inputRef.current?.focus(), 80)
    }
  }, [searchOpen])

  const visibleItems = useMemo(() => {
    if (normalizedQuery.length === 0) return LIBRARY_ITEMS

    return LIBRARY_ITEMS.filter(item => {
      const haystack = `${item.title} ${item.role} ${item.terms}`.toLowerCase()
      return haystack.includes(normalizedQuery)
    })
  }, [normalizedQuery])

  function closeSearch() {
    setSearchOpen(false)
    setQuery('')
  }

  return (
    <div className="relative" style={{ width: 393, minHeight: 852, background: CANVAS }}>
      <header style={{ padding: '56px 24px 24px' }}>
        <button
          onClick={onBack}
          className="mb-4 flex items-center justify-center"
          style={{ width: 32, height: 32 }}
          aria-label="Back to overview"
        >
          <ChevronLeft size={24} strokeWidth={1.8} color={INK} />
        </button>

        {searchOpen ? (
          <div
            className="flex items-center rounded-[24px]"
            style={{
              height: 48,
              background: SURFACE,
              border: `1px solid ${BORDER}`,
              padding: '0 8px 0 16px',
              animation: 'fadeUpIn 180ms ease-out both',
            }}
          >
            <Search size={18} strokeWidth={1.8} color={GREEN} style={{ flexShrink: 0 }} />
            <input
              ref={inputRef}
              value={query}
              onChange={event => setQuery(event.target.value)}
              placeholder="Search ideas, roles, moods"
              aria-label="Search activity library"
              className="min-w-0 flex-1 bg-transparent font-sans outline-none"
              style={{
                height: 48,
                padding: '0 12px',
                fontSize: 14,
                color: INK,
                fontVariationSettings: "'opsz' 14",
              }}
            />
            <button
              onClick={closeSearch}
              className="flex items-center justify-center rounded-full"
              style={{ width: 32, height: 32, background: 'rgba(138,116,103,0.1)' }}
              aria-label="Close search"
            >
              <X size={16} strokeWidth={1.8} color={MUTED} />
            </button>
          </div>
        ) : (
          <div className="flex items-center justify-between">
            <h1
              className="font-serif font-bold"
              style={{ fontSize: 28, lineHeight: '34px', color: '#151512', letterSpacing: '-0.4px' }}
            >
              Library
            </h1>
            <button
              onClick={() => setSearchOpen(true)}
              className="flex items-center justify-center rounded-full"
              style={{ width: 48, height: 48 }}
              aria-label="Search activity library"
            >
              <Search size={29} strokeWidth={1.8} color="#404040" />
            </button>
          </div>
        )}
      </header>

      <main style={{ padding: '0 24px 136px' }}>
        {normalizedQuery.length === 0 && (
          <div
            className="grid"
            style={{
              gridTemplateColumns: 'repeat(4, 72px)',
              justifyContent: 'space-between',
              marginBottom: 24,
            }}
          >
            <CreateTile />
            <CreateTile />
            <CreateTile />
            <CreateTile />
          </div>
        )}

        {normalizedQuery.length > 0 && (
          <p
            className="font-sans"
            style={{
              marginBottom: 16,
              fontSize: 13,
              lineHeight: '18px',
              color: MUTED,
              fontVariationSettings: "'opsz' 14",
            }}
          >
            {visibleItems.length} {visibleItems.length === 1 ? 'idea' : 'ideas'} found
          </p>
        )}

        {visibleItems.length > 0 ? (
          <div className="grid grid-cols-2" style={{ gap: 16 }}>
            {visibleItems.map(item => (
              <LibraryCard key={item.title} item={item} />
            ))}
          </div>
        ) : (
          <div
            className="rounded-[24px]"
            style={{ background: SURFACE, border: `1px solid ${BORDER}`, padding: 24 }}
          >
            <p className="font-lora font-medium" style={{ fontSize: 17, lineHeight: '25px', color: INK }}>
              Nothing surfaced for that search.
            </p>
            <p
              className="font-sans"
              style={{ marginTop: 8, fontSize: 13, lineHeight: '19px', color: MUTED, fontVariationSettings: "'opsz' 14" }}
            >
              Try a role, a place, or a small kind of tending.
            </p>
          </div>
        )}
      </main>
    </div>
  )
}
