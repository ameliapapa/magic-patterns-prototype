import heroNature from '../assets/illustrations/walk-in-nature.png'
import activityWeightlifting from '../assets/illustrations/person_lifting_weights_in_gym.png'
import activityWatercolor from '../assets/illustrations/u1355955226_painter_painting_a_canvas_--sref_202514354_--prof_51f7c398-d464-4ad1-8bb6-da52f2cc1971_0.png'

// ─── Icons — drop SVG/PNG files into src/assets/icons/ with these exact names ─
import iconNotification from '../assets/icons/icon-notification.svg'
import iconUserCircle from '../assets/icons/icon-user-circle.svg'
import iconHeart from '../assets/icons/icon-heart.svg'
import iconChevronRight from '../assets/icons/icon-chevron-right.svg'
import iconMore from '../assets/icons/icon-more.svg'
import iconMemoryCard from '../assets/icons/icon-memory-card.svg'
import navOverview from '../assets/icons/nav-overview.svg'
import navReflect from '../assets/icons/nav-reflect.svg'
import navMemory from '../assets/icons/nav-memory.svg'
import navPlus from '../assets/icons/nav-plus.svg'

// ─── Sub-components ───────────────────────────────────────────────────────────

function RoleChip({ label }: { label: string }) {
  return (
    <div
      className="flex items-center overflow-hidden px-4 py-2 rounded-pill shrink-0"
      style={{
        background: '#fffffe',
        border: '1px solid rgba(138, 116, 103, 0.25)',
      }}
    >
      <span
        className="font-sans font-medium text-mid uppercase whitespace-nowrap"
        style={{ fontSize: 14, lineHeight: 'normal', fontVariationSettings: "'opsz' 14" }}
      >
        {label}
      </span>
    </div>
  )
}

function ActivityCard({
  image,
  role,
  duration,
  title,
}: {
  image: string
  role: string
  duration: string
  title: string
}) {
  return (
    <div className="flex flex-col gap-[12px] shrink-0">
      <div
        className="relative overflow-hidden rounded-[10px] shrink-0"
        style={{ width: 172, height: 210, background: '#e8e1d7' }}
      >
        <img
          src={image}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover rounded-[10px]"
        />
        <div
          className="absolute inset-0 rounded-[10px]"
          style={{
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(138,116,103,0.04) 62%)',
          }}
        />
        <button
          className="absolute flex items-center justify-center"
          style={{ top: 8, right: 8, width: 24, height: 24 }}
        >
          <img src={iconHeart} alt="" width={16} height={16} />
        </button>
      </div>
      <div className="flex flex-col gap-1" style={{ width: 157 }}>
        <p
          className="font-inter font-normal text-muted uppercase whitespace-nowrap tracking-[1.2px]"
          style={{ fontSize: 10, lineHeight: '15px' }}
        >
          {role} · {duration}
        </p>
        <p
          className="font-lora font-medium text-ink-secondary whitespace-nowrap"
          style={{ fontSize: 15, lineHeight: '19.5px' }}
        >
          {title}
        </p>
      </div>
    </div>
  )
}

function IntentionCard({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div
      className="flex flex-col gap-4 overflow-hidden p-4 rounded-2xl shrink-0"
      style={{ background: 'white', width: 179 }}
    >
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-1">
          <img src={navMemory} alt="" width={16} height={16} />
          <span
            className="font-sans font-normal text-ink-secondary"
            style={{ fontSize: 12, lineHeight: '18px', fontVariationSettings: "'opsz' 9" }}
          >
            Memory
          </span>
        </div>
        <span
          className="font-sans font-normal text-muted"
          style={{ fontSize: 12, lineHeight: '18px', fontVariationSettings: "'opsz' 9" }}
        >
          3h ago
        </span>
      </div>
      <div className="flex flex-col gap-2">
        <p
          className="font-sans font-medium text-ink-secondary whitespace-nowrap"
          style={{ fontSize: 16, lineHeight: '24px', letterSpacing: '-0.16px', fontVariationSettings: "'opsz' 14" }}
        >
          {title}
        </p>
        <p
          className="font-sans font-normal text-muted whitespace-nowrap"
          style={{ fontSize: 12, lineHeight: '18px', fontVariationSettings: "'opsz' 9" }}
        >
          {subtitle}
        </p>
      </div>
    </div>
  )
}

function BottomNav() {
  return (
    <div className="flex gap-[11px] items-start py-[6px]">
      {/* Tab pill — 3 buttons */}
      <div
        className="flex gap-[12px] items-start py-[6px] px-[6px] rounded-pill shrink-0"
        style={{ background: '#e8e1d7', height: 61 }}
      >
        {/* Overview — active */}
        <button
          className="flex flex-col items-center gap-[2px] px-[14px] py-[4px] rounded-pill"
          style={{ background: 'rgba(250, 247, 242, 0.8)', minWidth: 72, height: 49 }}
        >
          <img src={navOverview} alt="" width={24} height={24} />
          <span
            className="font-sans font-medium text-ink-secondary text-center"
            style={{ fontSize: 10, lineHeight: '15px', fontVariationSettings: "'opsz' 14" }}
          >
            Overview
          </span>
        </button>
        {/* Reflect */}
        <button
          className="flex flex-col items-center gap-[2px] px-[14px] py-[4px] rounded-pill"
          style={{ minWidth: 56, height: 49 }}
        >
          <img src={navReflect} alt="" width={24} height={24} />
          <span
            className="font-sans font-medium text-ink-secondary text-center"
            style={{ fontSize: 10, lineHeight: '15px', fontVariationSettings: "'opsz' 14" }}
          >
            Reflect
          </span>
        </button>
        {/* Memory */}
        <button
          className="flex flex-col items-center gap-[2px] px-[14px] py-[4px] rounded-pill"
          style={{ minWidth: 71, height: 49 }}
        >
          <img src={navMemory} alt="" width={24} height={24} />
          <span
            className="font-sans font-medium text-ink-secondary text-center"
            style={{ fontSize: 10, lineHeight: '15px', fontVariationSettings: "'opsz' 14" }}
          >
            Memory
          </span>
        </button>
      </div>

      {/* Plus button */}
      <button
        className="flex items-center justify-center rounded-pill shrink-0"
        style={{ background: '#e8e1d7', width: 59, height: 59 }}
      >
        <img src={navPlus} alt="Add" width={26} height={26} />
      </button>
    </div>
  )
}

// ─── Main Page ─────────────────────────────────────────────────────────────────

export default function DashboardPage() {
  return (
    <div className="relative" style={{ width: 393, background: '#f8f6f2', minHeight: 852 }}>

      {/* ── 1. Hero section (image + overlapping greeting card + role chips) ── */}
      <div className="relative" style={{ height: 368 }}>
        {/* Hero image */}
        <div
          className="absolute left-0 top-0 overflow-hidden"
          style={{ width: 401, height: 358, borderBottomLeftRadius: 50, borderBottomRightRadius: 50 }}
        >
          <img
            src={heroNature}
            alt=""
            className="absolute max-w-none"
            style={{ width: '102.04%', height: '114.44%', top: '-0.06%', left: '-0.85%', display: 'block' }}
          />
        </div>

        {/* Greeting card */}
        <div
          className="absolute flex items-start justify-between px-[23px] py-[37px] rounded-[30px]"
          style={{
            top: 132,
            left: '50%',
            transform: 'translateX(calc(-50% + 1.5px))',
            width: 357,
            background: '#fffffe',
            border: '1px solid rgba(138, 116, 103, 0.2)',
          }}
        >
          <div className="flex flex-col gap-1">
            <p
              className="font-serif font-bold text-ink"
              style={{ fontSize: 24, lineHeight: 'normal', letterSpacing: '-0.4px' }}
            >
              Morning Clara!
            </p>
            <p
              className="font-mono text-ink uppercase"
              style={{ fontSize: 10, lineHeight: 'normal', letterSpacing: '-0.4px', fontWeight: 300 }}
            >
              Monday, April 27 | Spring
            </p>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <img src={iconNotification} alt="notifications" width={24} height={24} />
            <img src={iconUserCircle} alt="profile" width={24} height={24} />
          </div>
        </div>

        {/* Role chips — two rows */}
        <div
          className="absolute flex flex-col gap-1 items-center pb-4 pt-2 px-4"
          style={{
            top: 253,
            left: '50%',
            transform: 'translateX(calc(-50% + 1.5px))',
            width: 383,
          }}
        >
          <div className="flex gap-1 items-center justify-center w-full">
            <RoleChip label="Parent" />
            <RoleChip label="Self" />
            <RoleChip label="Daughter" />
            <RoleChip label="Friend" />
          </div>
          <div className="flex gap-1 items-center justify-center w-full" style={{ height: 35 }}>
            <RoleChip label="Creative" />
            <RoleChip label="Partner" />
            <RoleChip label="Professional" />
          </div>
        </div>
      </div>

      {/* ── 2. Mae question ── */}
      <div className="flex flex-col items-start px-6 py-2" style={{ width: 402 }}>
        <p
          className="font-serif font-bold text-ink w-full"
          style={{ fontSize: 20, lineHeight: '26px', letterSpacing: '-0.3px' }}
        >
          Which roles are you stepping into today?
        </p>
      </div>

      {/* ── 3. Quick capture widget ── */}
      <div className="flex items-center px-[14.5px]" style={{ width: 393 }}>
        <div
          className="flex-1 overflow-hidden rounded-[20px] relative"
          style={{ height: 199, border: '1px solid rgba(138, 116, 103, 0.2)' }}
        >
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-1">
            <img src={iconMore} alt="" width={24} height={24} />
            <p
              className="font-inter font-medium text-center text-black"
              style={{ fontSize: 10, lineHeight: '19px' }}
            >
              Care for a quick check in?
            </p>
            <button
              className="flex items-center justify-center px-4 py-1 rounded-[30px]"
              style={{ background: '#2d2d2a' }}
            >
              <span
                className="font-inter font-medium text-center"
                style={{ fontSize: 10, lineHeight: '19px', color: '#fffffe' }}
              >
                Capture Moment
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* ── 4. "For today" section ── */}
      <div className="flex flex-col items-start" style={{ width: 400, marginLeft: 1, marginTop: 20 }}>
        <div className="flex items-center justify-between px-6 w-full" style={{ height: 27 }}>
          <p
            className="font-lora font-medium text-ink-secondary whitespace-nowrap"
            style={{ fontSize: 18, lineHeight: '27px' }}
          >
            For today
          </p>
          <button>
            <span
              className="font-inter font-medium text-muted text-center whitespace-nowrap"
              style={{ fontSize: 11, lineHeight: '16.5px' }}
            >
              More suggestions →
            </span>
          </button>
        </div>

        {/* Activity cards — right card bottom-aligned in 276px frame (matches Figma stagger) */}
        <div className="flex items-center justify-between px-6 w-full" style={{ marginTop: 16 }}>
          <ActivityCard
            image={activityWeightlifting}
            role="SELF"
            duration="45 MIN"
            title="Weight lifting session"
          />
          <div className="flex flex-col justify-end shrink-0" style={{ height: 276, paddingBottom: 8 }}>
            <ActivityCard
              image={activityWatercolor}
              role="CREATIVE"
              duration="20 MIN"
              title="Watercolor painting"
            />
          </div>
        </div>
      </div>

      {/* ── 5. "Your intentions" section ── */}
      <div className="flex flex-col" style={{ width: 393, marginTop: 28 }}>
        <div className="flex items-center gap-1 px-6" style={{ height: 27 }}>
          <p
            className="font-serif font-bold text-ink whitespace-nowrap"
            style={{ fontSize: 20, lineHeight: '26px', letterSpacing: '-0.3px' }}
          >
            Your intentions
          </p>
          <img src={iconChevronRight} alt="" width={15} height={16} />
        </div>

        <div
          className="flex gap-2 overflow-x-auto scrollbar-hide"
          style={{ paddingLeft: 15, paddingRight: 15, paddingTop: 12, paddingBottom: 8 }}
        >
          <IntentionCard title="Portfolio Redesign" subtitle="Create new custom icons" />
          <IntentionCard title="Role App design" subtitle="Refine user flow" />
          <IntentionCard title="Website Redesign" subtitle="Create new custom icons" />
        </div>
      </div>

      {/* ── 6. Bottom navigation ── */}
      <div style={{ paddingLeft: 23, paddingTop: 8, paddingBottom: 16 }}>
        <BottomNav />
      </div>

    </div>
  )
}
