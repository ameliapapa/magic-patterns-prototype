import { useEffect, useMemo, useRef, useState } from 'react'
import { ChevronLeft, Heart, Plus, Search, X } from 'lucide-react'

import movementImg from '../assets/illustrations/person_lifting_weights_in_gym.png'
import createImg from '../assets/illustrations/u1355955226_painter_painting_a_canvas_--sref_202514354_--prof_51f7c398-d464-4ad1-8bb6-da52f2cc1971_1.png'
import familyImg from '../assets/illustrations/u1355955226_family_dinner_table_--sref_202514354_--profile_8d_6dde0955-dfa3-4689-b9fa-afe77a537eda_1.png'
import adventureImg from '../assets/illustrations/u1355955226_mountain_hike_--sref_202514354_--profile_8d1tcdd__1a989c17-693e-4851-a5ca-8fd6e6bc33dd_0.png'
import treatsImg from '../assets/illustrations/u1355955226_top_down_of_coffee_spread_at_a_coffee_shop_--sref_18758d50-b0cd-46a3-bd56-dbc99093952b_1.png'
import dateIdeasImg from '../assets/illustrations/dinner-date-restaurant.png'
import quietImg from '../assets/illustrations/reading-female-v2.png'
import errandsImg from '../assets/illustrations/couple-shopping-garden-store.png'
import runParkImg from '../assets/illustrations/u1355955226_runner_in_the_park_--sref_202514354_--profile_8d1_34b21c61-5858-439e-8fbd-0256b22a06a4_0.png'
import runParkSoftImg from '../assets/illustrations/u1355955226_runner_in_the_park_--sref_202514354_--profile_8d1_34b21c61-5858-439e-8fbd-0256b22a06a4_1.png'
import gymExerciseImg from '../assets/illustrations/u1355955226_person_exercising_in_gym_--sref_202514354_--profi_b3164072-3b5d-4310-b3da-e6efa18a1bc0_0.png'
import liftingDetailImg from '../assets/illustrations/u1355955226_person_lifting_weights_in_gym_--sref_202514354_--_52754bb9-c72c-469a-9604-81ecf9614cf5_2.png'
import dancerStudioImg from '../assets/illustrations/u1355955226_dancer_in_studio_--sref_202514354_--profile_8d1tc_4471827e-5bc1-4b21-8b83-57daf2706044_3.png'
import drawingImg from '../assets/illustrations/drawing_female.png'
import painterWideImg from '../assets/illustrations/u1355955226_painter_painting_a_canvas_--sref_202514354_--prof_51f7c398-d464-4ad1-8bb6-da52f2cc1971_0.png'
import painterTableImg from '../assets/illustrations/u1355955226_painting_on_canvas_--sref_202514354_--profile_8d1_eeb9fd65-b27d-488b-a4a2-a7e9bda746cc_0.png'
import keyboardHandsImg from '../assets/illustrations/hands_typing_in_keyboard.png'
import programmerImg from '../assets/illustrations/female-software-programmer.png'
import boardgamesImg from '../assets/illustrations/u1355955226_playing_boardgames_--sref_202514354_--profile_8d1_0c4b39ad-8442-4e08-b910-2733d343dc0b_3.png'
import parentHandImg from '../assets/illustrations/u1355955226_parent_holding_childs_hand_--sref_202514354_--pro_91fe1ad1-9487-4412-b919-7b0594e7df7f_0.png'
import parentHandWarmImg from '../assets/illustrations/u1355955226_httpss.mj.runediIY9CaOxU_parent_holding_childs_ha_3d4341f0-366f-4f5d-b1e3-7cbd3860dfaf_2.png'
import helpingElderlyImg from '../assets/illustrations/u1355955226_helping_elderly_--sref_202514354_--profile_8d1tcd_3a38955f-8e12-495e-a291-1c85261bfe95_3.png'
import dinnerSpreadImg from '../assets/illustrations/u1355955226_spread_of_dinner_table_with_mediterranean_food_--_e3b9cab8-e923-47d9-a15d-e1420df9225d_0.png'
import mountainTrailImg from '../assets/illustrations/u1355955226_mountain_hike_--sref_202514354_--profile_8d1tcdd__1a989c17-693e-4851-a5ca-8fd6e6bc33dd_3.png'
import walkNatureImg from '../assets/illustrations/walk-in-nature.png'
import beachWalkImg from '../assets/illustrations/u1355955226_two_men_walk_by_the_beach_--sref_202514354_--prof_896047be-7012-4fb3-9026-474f2bca23d0_3.png'
import dogWalkImg from '../assets/illustrations/u1355955226_man_walking_dog_in_park_--sref_202514354_--profil_35c96630-cd8f-4290-85f0-14bf006601ba_1.png'
import lunchSpreadImg from '../assets/illustrations/u1355955226_top_down_of_lunch_spread_at_a_restaurant_--sref_2_abbba477-5dd3-4b18-9a64-99e4f98bac2c_0.png'
import coffeeGirlsImg from '../assets/illustrations/u1355955226_two_girls_sitting_in_coffee_shop_--sref_202514354_12f89aa8-94a4-410a-8fc2-7fd8f984d2c3_0.png'
import coffeeSpreadImg from '../assets/illustrations/u1355955226_top_down_of_coffee_spread_at_a_coffee_shop_--sref_18758d50-b0cd-46a3-bd56-dbc99093952b_3.png'
import cafeLunchImg from '../assets/illustrations/u1355955226_top_down_of_lunch_spread_at_a_restaurant_--sref_2_abbba477-5dd3-4b18-9a64-99e4f98bac2c_2.png'
import dinnerDateAltImg from '../assets/illustrations/dinner-date-restaurant-2.png'
import theatreDateImg from '../assets/illustrations/date-night-theatre.png'
import movieDateImg from '../assets/illustrations/movie-date-cinema.png'
import couchDateImg from '../assets/illustrations/u1355955226_couple_watching_tv_from_couch_--sref_202514354_--_e9f88ed2-a159-43fa-8b4a-98827e90903a_0.png'
import readingMaleImg from '../assets/illustrations/reading-male-v3.png'
import readingFemaleImg from '../assets/illustrations/reading-female-v1.png'
import studentStudyImg from '../assets/illustrations/u1355955226_student_studying_--sref_202514354_--profile_8d1tc_fc17280c-b262-49d3-9b3f-5e837e25e74b_2.png'
import studentDeskImg from '../assets/illustrations/u1355955226_student_studying_--sref_202514354_--profile_8d1tc_fc17280c-b262-49d3-9b3f-5e837e25e74b_0.png'
import hardwareStoreImg from '../assets/illustrations/couple-shopping-hardware-store.png'
import officeWorkerImg from '../assets/illustrations/u1355955226_office_worker_in_front_of_pc_--sref_202514354_--p_34d3ce6f-dd9b-4966-bcba-6d684da243fa_3.png'

const GREEN = '#29422a'
const CANVAS = '#f8f6f2'
const SURFACE = '#fffffe'
const BORDER = 'rgba(138,116,103,0.2)'
const MUTED = '#6b6660'
const INK = '#2d2d2a'

type LibraryIdea = {
  id: string
  title: string
  image: string
  terms: string
  duration: string
  intensity: string
  context: string
}

type SavedIdea = LibraryIdea & {
  category: string
}

type LibraryItem = {
  id: string
  title: string
  role: string
  image: string
  terms: string
  observation: string
  ideas: LibraryIdea[]
}

const LIBRARY_ITEMS: LibraryItem[] = [
  {
    id: 'movement',
    title: 'Movement',
    role: 'Self',
    image: movementImg,
    terms: 'run walk gym strength stretch yoga energy body health self care',
    observation: 'A balanced life often announces itself in the body first: a steadier breath, a longer stride, a little more trust in your own stamina.',
    ideas: [
      { id: 'park-run', title: 'Park run', image: runParkImg, terms: 'run jog park cardio morning self', duration: '30 min', intensity: 'Energizing', context: 'Outside' },
      { id: 'soft-run', title: 'Easy miles', image: runParkSoftImg, terms: 'run jog outside soft movement', duration: '25 min', intensity: 'Medium', context: 'Clear head' },
      { id: 'weight-room', title: 'Weight room', image: movementImg, terms: 'gym weights strength lift body', duration: '45 min', intensity: 'Strong', context: 'Gym' },
      { id: 'gym-reset', title: 'Gym reset', image: gymExerciseImg, terms: 'exercise gym training stretch health', duration: '35 min', intensity: 'Medium', context: 'After work' },
      { id: 'heavier-set', title: 'Strong set', image: liftingDetailImg, terms: 'strength lift weights progress', duration: '50 min', intensity: 'High', context: 'Progress' },
      { id: 'studio-motion', title: 'Studio motion', image: dancerStudioImg, terms: 'dance studio movement rhythm body', duration: '40 min', intensity: 'Flow', context: 'Indoor' },
    ],
  },
  {
    id: 'create',
    title: 'Create',
    role: 'Creative',
    image: createImg,
    terms: 'paint draw write music craft make art creative studio practice',
    observation: 'Making something is a record of attention. The unfinished edge, the messy desk, and the first pass all count.',
    ideas: [
      { id: 'canvas-session', title: 'Canvas session', image: createImg, terms: 'paint canvas art studio creative', duration: '45 min', intensity: 'Flow', context: 'Studio' },
      { id: 'drawing-hour', title: 'Drawing hour', image: drawingImg, terms: 'draw sketch illustration creative', duration: '20 min', intensity: 'Low lift', context: 'At home' },
      { id: 'paint-study', title: 'Paint study', image: painterWideImg, terms: 'paint art practice studio', duration: '30 min', intensity: 'Medium', context: 'Practice' },
      { id: 'color-work', title: 'Color work', image: painterTableImg, terms: 'paint canvas color craft', duration: '25 min', intensity: 'Gentle', context: 'Hands-on' },
      { id: 'keyboard-draft', title: 'Keyboard draft', image: keyboardHandsImg, terms: 'write code draft keyboard make', duration: '15 min', intensity: 'Low lift', context: 'Start now' },
      { id: 'deep-work', title: 'Deep work', image: programmerImg, terms: 'design code screen professional creative', duration: '60 min', intensity: 'Focused', context: 'Desk' },
    ],
  },
  {
    id: 'family',
    title: 'Family',
    role: 'Parent',
    image: familyImg,
    terms: 'dinner game night children home lunch parent daughter sibling caregiver',
    observation: 'Family life is built from repeatable scenes: plates passed, shoes found, jokes retold, someone staying at the table a little longer.',
    ideas: [
      { id: 'family-table', title: 'Family table', image: familyImg, terms: 'family dinner table parent children home', duration: '60 min', intensity: 'Warm', context: 'Dinner' },
      { id: 'game-night', title: 'Game night', image: boardgamesImg, terms: 'family boardgames play home together', duration: '45 min', intensity: 'Playful', context: 'At home' },
      { id: 'small-hand', title: 'Small hand', image: parentHandImg, terms: 'parent child hand care walk', duration: '10 min', intensity: 'Gentle', context: 'In-between' },
      { id: 'after-school', title: 'After-school care', image: parentHandWarmImg, terms: 'parent child tender care home', duration: '30 min', intensity: 'Tender', context: 'After school' },
      { id: 'care-visit', title: 'Care visit', image: helpingElderlyImg, terms: 'caregiver elderly daughter family support', duration: '45 min', intensity: 'Steady', context: 'Care day' },
      { id: 'shared-spread', title: 'Shared spread', image: dinnerSpreadImg, terms: 'family meal food dinner table', duration: '75 min', intensity: 'Social', context: 'Gathering' },
    ],
  },
  {
    id: 'adventure',
    title: 'Adventure',
    role: 'Self',
    image: adventureImg,
    terms: 'hike outdoors nature explore trip adventure travel fresh air self friend',
    observation: 'Adventure does not need to be far away. It begins when the day gets a little less automatic.',
    ideas: [
      { id: 'mountain-hike', title: 'Mountain hike', image: adventureImg, terms: 'hike mountain trail nature adventure', duration: 'Half day', intensity: 'High', context: 'Weekend' },
      { id: 'ridge-walk', title: 'Ridge walk', image: mountainTrailImg, terms: 'hike mountain walk outdoors', duration: '90 min', intensity: 'Energizing', context: 'Outside' },
      { id: 'nature-path', title: 'Nature path', image: walkNatureImg, terms: 'walk nature trees outdoors self', duration: '40 min', intensity: 'Gentle', context: 'Fresh air' },
      { id: 'beach-walk', title: 'Beach walk', image: beachWalkImg, terms: 'beach walk friend coast travel', duration: '60 min', intensity: 'Easy', context: 'Social' },
      { id: 'dog-park-loop', title: 'Dog park loop', image: dogWalkImg, terms: 'dog walk park pet owner outside', duration: '25 min', intensity: 'Low lift', context: 'Daily loop' },
    ],
  },
  {
    id: 'treats',
    title: 'Treats',
    role: 'Friend',
    image: treatsImg,
    terms: 'coffee pastry breakfast cafe small pleasure treat friend self delight',
    observation: 'Small pleasures are not interruptions to a serious life. They are how a day learns softness.',
    ideas: [
      { id: 'coffee-table', title: 'Coffee table', image: treatsImg, terms: 'coffee cafe pastry treat breakfast', duration: '20 min', intensity: 'Low lift', context: 'Good today' },
      { id: 'lunch-spread', title: 'Long lunch', image: lunchSpreadImg, terms: 'lunch restaurant treat food friend', duration: '75 min', intensity: 'Social', context: 'Midday' },
      { id: 'cafe-catchup', title: 'Cafe catch-up', image: coffeeGirlsImg, terms: 'coffee friend cafe conversation', duration: '45 min', intensity: 'Social', context: 'Friend time' },
      { id: 'second-cup', title: 'Second cup', image: coffeeSpreadImg, terms: 'coffee small pleasure cafe', duration: '15 min', intensity: 'Gentle', context: 'Pause' },
      { id: 'table-treats', title: 'Table treats', image: cafeLunchImg, terms: 'food treat restaurant pleasure', duration: '40 min', intensity: 'Easy', context: 'Treat' },
    ],
  },
  {
    id: 'date-ideas',
    title: 'Date ideas',
    role: 'Partner',
    image: dateIdeasImg,
    terms: 'date dinner theatre cinema couple partner romance relationship',
    observation: 'A relationship stays vivid when it has scenes of its own: the reservation, the walk after, the joke only the two of you heard.',
    ideas: [
      { id: 'dinner-date', title: 'Dinner date', image: dateIdeasImg, terms: 'date dinner partner restaurant romance', duration: '90 min', intensity: 'Romantic', context: 'Evening' },
      { id: 'corner-table', title: 'Corner table', image: dinnerDateAltImg, terms: 'date restaurant meal partner', duration: '75 min', intensity: 'Warm', context: 'Reservation' },
      { id: 'theatre-night', title: 'Theatre night', image: theatreDateImg, terms: 'date theatre show night partner', duration: '2 hrs', intensity: 'Special', context: 'Night out' },
      { id: 'movie-night', title: 'Movie night', image: movieDateImg, terms: 'date cinema movie partner', duration: '2 hrs', intensity: 'Easy', context: 'Out' },
      { id: 'couch-night', title: 'Couch night', image: couchDateImg, terms: 'partner home sofa tv quiet', duration: '60 min', intensity: 'Low lift', context: 'At home' },
      { id: 'coast-walk', title: 'Coast walk', image: beachWalkImg, terms: 'partner walk beach date outside', duration: '45 min', intensity: 'Gentle', context: 'Outside' },
    ],
  },
  {
    id: 'quiet-time',
    title: 'Quiet time',
    role: 'Self',
    image: quietImg,
    terms: 'read rest journal study calm alone quiet self recovery reflection',
    observation: 'Quiet time gives your inner life a room of its own. It is still an activity, even when nothing performative happens.',
    ideas: [
      { id: 'reading-chair', title: 'Reading chair', image: quietImg, terms: 'read book rest quiet self', duration: '30 min', intensity: 'Restful', context: 'Solo' },
      { id: 'morning-pages', title: 'Morning pages', image: readingFemaleImg, terms: 'read journal morning quiet', duration: '15 min', intensity: 'Gentle', context: 'Morning' },
      { id: 'slow-reading', title: 'Slow reading', image: readingMaleImg, terms: 'read calm book alone', duration: '25 min', intensity: 'Low lift', context: 'Quiet' },
      { id: 'study-pocket', title: 'Study pocket', image: studentStudyImg, terms: 'study student desk quiet focus', duration: '45 min', intensity: 'Focused', context: 'Desk' },
      { id: 'desk-light', title: 'Desk light', image: studentDeskImg, terms: 'study notebook quiet learning', duration: '30 min', intensity: 'Steady', context: 'Indoor' },
    ],
  },
  {
    id: 'errands-together',
    title: 'Errands together',
    role: 'Partner',
    image: errandsImg,
    terms: 'shopping garden store home project partner errands household care',
    observation: 'Some of the most intimate life admin happens in aisles, parking lots, and deciding which plant or screw or paint color comes home.',
    ideas: [
      { id: 'garden-store', title: 'Garden store', image: errandsImg, terms: 'shopping garden store plants partner home', duration: '45 min', intensity: 'Easy', context: 'Together' },
      { id: 'hardware-run', title: 'Hardware run', image: hardwareStoreImg, terms: 'hardware store errand home project partner', duration: '40 min', intensity: 'Practical', context: 'Home project' },
      { id: 'admin-hour', title: 'Admin hour', image: officeWorkerImg, terms: 'admin office computer errand planning', duration: '30 min', intensity: 'Focused', context: 'Desk' },
      { id: 'keyboard-list', title: 'List-making', image: keyboardHandsImg, terms: 'list planning computer errands', duration: '10 min', intensity: 'Low lift', context: 'Start now' },
      { id: 'reward-coffee', title: 'Reward coffee', image: coffeeSpreadImg, terms: 'coffee reward errand treat', duration: '15 min', intensity: 'Gentle', context: 'After chores' },
    ],
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

function LibraryCard({ item, onOpen }: { item: LibraryItem; onOpen: () => void }) {
  return (
    <button
      onClick={onOpen}
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
          className="font-serif font-medium"
          style={{ fontSize: 24, lineHeight: '29px', color: SURFACE, letterSpacing: '-0.2px' }}
        >
          {item.title}
        </p>
      </div>
    </button>
  )
}

function MetaChips({ idea, compact = false }: { idea: LibraryIdea; compact?: boolean }) {
  const labels = compact ? [idea.duration, idea.intensity] : [idea.duration, idea.intensity, idea.context]

  return (
    <div className="flex flex-wrap" style={{ gap: 4, marginTop: 8 }}>
      {labels.map(label => (
        <span
          key={label}
          className="rounded-pill font-sans font-medium"
          style={{
            maxWidth: '100%',
            height: 18,
            padding: '2px 7px',
            background: 'rgba(255,255,254,0.86)',
            color: GREEN,
            fontSize: 9,
            lineHeight: '14px',
            fontVariationSettings: "'opsz' 9",
            whiteSpace: 'nowrap',
          }}
        >
          {label}
        </span>
      ))}
    </div>
  )
}

function IdeaCard({
  idea,
  saved,
  onCaptureOpen,
  onToggleSaved,
}: {
  idea: LibraryIdea
  saved: boolean
  onCaptureOpen: () => void
  onToggleSaved: () => void
}) {
  return (
    <div
      className="relative overflow-hidden rounded-[20px] text-left"
      style={{
        height: 208,
        background: '#e8e1d7',
        border: `1px solid ${BORDER}`,
        transition: 'transform 120ms ease',
      }}
    >
      <img src={idea.image} alt="" className="absolute inset-0 h-full w-full object-cover" />
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.02) 24%, rgba(0,0,0,0.66) 100%)',
        }}
      />
      <button
        onClick={onCaptureOpen}
        className="absolute flex items-center justify-center rounded-full active:scale-[0.94]"
        style={{
          top: 8,
          left: 8,
          width: 32,
          height: 32,
          background: 'rgba(255,255,254,0.86)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          transition: 'transform 120ms ease',
        }}
        aria-label={`Capture ${idea.title}`}
      >
        <Plus size={18} strokeWidth={2} color={GREEN} />
      </button>
      <button
        onClick={onToggleSaved}
        className="absolute flex items-center justify-center rounded-full active:scale-[0.94]"
        style={{
          top: 8,
          right: 8,
          width: 32,
          height: 32,
          background: saved ? GREEN : 'rgba(255,255,254,0.86)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          transition: 'transform 120ms ease, background 160ms ease',
        }}
        aria-label={saved ? `Remove ${idea.title} from library` : `Save ${idea.title} to library`}
        aria-pressed={saved}
      >
        <Heart
          size={17}
          strokeWidth={1.9}
          color={saved ? SURFACE : GREEN}
          fill={saved ? SURFACE : 'transparent'}
        />
      </button>
      <div className="absolute left-3 right-3 bottom-3">
        <p
          className="font-serif font-medium"
          style={{ fontSize: 17, lineHeight: '21px', color: SURFACE }}
        >
          {idea.title}
        </p>
        <MetaChips idea={idea} />
      </div>
    </div>
  )
}

function SavedIdeaCard({
  idea,
  onCaptureOpen,
}: {
  idea: SavedIdea
  onCaptureOpen: () => void
}) {
  return (
    <button
      onClick={onCaptureOpen}
      className="relative shrink-0 overflow-hidden rounded-[18px] text-left active:scale-[0.985]"
      style={{
        width: 120,
        height: 144,
        background: '#e8e1d7',
        border: `1px solid ${BORDER}`,
        transition: 'transform 120ms ease',
      }}
    >
      <img src={idea.image} alt="" className="absolute inset-0 h-full w-full object-cover" />
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.02) 42%, rgba(0,0,0,0.58) 100%)' }}
      />
      <div
        className="absolute flex items-center justify-center rounded-full"
        style={{ top: 8, right: 8, width: 28, height: 28, background: GREEN }}
      >
        <Heart size={15} strokeWidth={1.8} color={SURFACE} fill={SURFACE} />
      </div>
      <div className="absolute left-3 right-3 bottom-3">
        <p className="font-serif font-medium" style={{ fontSize: 15, lineHeight: '18px', color: SURFACE }}>
          {idea.title}
        </p>
        <MetaChips idea={idea} compact />
      </div>
    </button>
  )
}

function FindMoreCard({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="relative flex shrink-0 flex-col items-center justify-center rounded-[18px] active:scale-[0.985]"
      style={{
        width: 120,
        height: 144,
        background: 'rgba(41,66,42,0.04)',
        border: `1px solid ${BORDER}`,
        transition: 'transform 120ms ease',
      }}
      aria-label="Find more ideas to save"
    >
      <div
        className="relative flex items-center justify-center rounded-full"
        style={{ width: 40, height: 40, background: 'rgba(41,66,42,0.08)' }}
      >
        <Heart size={20} strokeWidth={1.8} color={GREEN} />
        <span
          className="absolute flex items-center justify-center rounded-full"
          style={{ right: -2, bottom: -2, width: 18, height: 18, background: GREEN }}
        >
          <Plus size={12} strokeWidth={2} color={SURFACE} />
        </span>
      </div>
      <span
        className="mt-3 font-sans font-medium"
        style={{ fontSize: 12, lineHeight: '16px', color: GREEN, fontVariationSettings: "'opsz' 14" }}
      >
        Find more
      </span>
    </button>
  )
}

function CategoryDetail({
  item,
  onBack,
  onCaptureOpen,
  savedIdeaIds,
  onToggleSaved,
}: {
  item: LibraryItem
  onBack: () => void
  onCaptureOpen: () => void
  savedIdeaIds: Set<string>
  onToggleSaved: (ideaId: string) => void
}) {
  return (
    <div className="relative" style={{ width: 393, minHeight: 852, background: CANVAS, animation: 'fadeUpIn 180ms ease-out both' }}>
      <section className="relative overflow-hidden" style={{ height: 360, borderBottomLeftRadius: 32, borderBottomRightRadius: 32 }}>
        <img src={item.image} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.18) 0%, rgba(0,0,0,0.08) 34%, rgba(0,0,0,0.58) 100%)',
          }}
        />
        <button
          onClick={onBack}
          className="absolute flex items-center justify-center rounded-full"
          style={{
            top: 56,
            left: 24,
            width: 40,
            height: 40,
            background: 'rgba(255,255,254,0.82)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
          }}
          aria-label="Back to library"
        >
          <ChevronLeft size={24} strokeWidth={1.8} color={INK} />
        </button>
        <div className="absolute left-6 right-6 bottom-8">
          <h1
            className="font-serif font-bold"
            style={{ fontSize: 38, lineHeight: '42px', color: SURFACE, letterSpacing: '-0.4px' }}
          >
            {item.title}
          </h1>
        </div>
      </section>

      <main style={{ padding: '24px 24px 32px' }}>
        <div
          className="rounded-[24px]"
          style={{
            background: SURFACE,
            border: `1px solid ${BORDER}`,
            padding: 24,
          }}
        >
          <p
            className="font-serif font-medium"
            style={{ fontSize: 18, lineHeight: '27px', color: INK }}
          >
            {item.observation}
          </p>
        </div>

        <div className="grid grid-cols-2" style={{ gap: 16, marginTop: 32 }}>
          {item.ideas.map(idea => (
            <IdeaCard
              key={idea.id}
              idea={idea}
              saved={savedIdeaIds.has(idea.id)}
              onCaptureOpen={onCaptureOpen}
              onToggleSaved={() => onToggleSaved(idea.id)}
            />
          ))}
        </div>
      </main>
    </div>
  )
}

export default function ActivityLibraryPage({
  onBack,
  onCaptureOpen,
}: {
  onBack: () => void
  onCaptureOpen: () => void
}) {
  const [searchOpen, setSearchOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [activeItem, setActiveItem] = useState<LibraryItem | null>(null)
  const [savedIdeaIds, setSavedIdeaIds] = useState<Set<string>>(() => new Set())
  const inputRef = useRef<HTMLInputElement>(null)
  const categoryGridRef = useRef<HTMLDivElement>(null)
  const normalizedQuery = query.trim().toLowerCase()

  useEffect(() => {
    if (searchOpen) {
      window.setTimeout(() => inputRef.current?.focus(), 80)
    }
  }, [searchOpen])

  const visibleItems = useMemo(() => {
    if (normalizedQuery.length === 0) return LIBRARY_ITEMS

    return LIBRARY_ITEMS.filter(item => {
      const ideaTerms = item.ideas.map(idea => `${idea.title} ${idea.terms} ${idea.duration} ${idea.intensity} ${idea.context}`).join(' ')
      const haystack = `${item.title} ${item.role} ${item.terms} ${item.observation} ${ideaTerms}`.toLowerCase()
      return haystack.includes(normalizedQuery)
    })
  }, [normalizedQuery])

  const savedIdeas = useMemo<SavedIdea[]>(() => {
    return LIBRARY_ITEMS.flatMap(item =>
      item.ideas
        .filter(idea => savedIdeaIds.has(idea.id))
        .map(idea => ({ ...idea, category: item.title })),
    )
  }, [savedIdeaIds])

  function closeSearch() {
    setSearchOpen(false)
    setQuery('')
  }

  function toggleSavedIdea(ideaId: string) {
    setSavedIdeaIds(current => {
      const next = new Set(current)
      if (next.has(ideaId)) {
        next.delete(ideaId)
      } else {
        next.add(ideaId)
      }
      return next
    })
  }

  function browseMoreIdeas() {
    categoryGridRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  if (activeItem) {
    return (
      <CategoryDetail
        item={activeItem}
        onBack={() => setActiveItem(null)}
        onCaptureOpen={onCaptureOpen}
        savedIdeaIds={savedIdeaIds}
        onToggleSaved={toggleSavedIdea}
      />
    )
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
              placeholder="Search for ideas"
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

      <main style={{ padding: '0 24px 32px' }}>
        {normalizedQuery.length === 0 && (
          savedIdeas.length > 0 ? (
            <section
              className="rounded-[24px]"
              style={{
                marginBottom: 32,
                padding: 16,
                background: SURFACE,
                border: `1px solid ${BORDER}`,
              }}
            >
              <h2
                className="font-serif font-bold"
                style={{ fontSize: 20, lineHeight: '26px', color: '#151512', letterSpacing: '-0.2px' }}
              >
                Saved ideas
              </h2>
              <div
                className="mt-4 flex overflow-x-auto scrollbar-hide"
                style={{ gap: 16, marginLeft: -16, marginRight: -16, padding: '0 16px 4px' }}
              >
                {savedIdeas.map(idea => (
                  <SavedIdeaCard key={idea.id} idea={idea} onCaptureOpen={onCaptureOpen} />
                ))}
                <FindMoreCard onClick={browseMoreIdeas} />
              </div>
            </section>
          ) : (
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
          )
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
          <div ref={categoryGridRef} className="grid grid-cols-2" style={{ gap: 16 }}>
            {visibleItems.map(item => (
              <LibraryCard key={item.id} item={item} onOpen={() => setActiveItem(item)} />
            ))}
          </div>
        ) : (
          <div
            className="rounded-[24px]"
            style={{ background: SURFACE, border: `1px solid ${BORDER}`, padding: 24 }}
          >
            <p className="font-serif font-medium" style={{ fontSize: 17, lineHeight: '25px', color: INK }}>
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
