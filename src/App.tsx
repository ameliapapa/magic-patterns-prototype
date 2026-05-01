import { useState } from 'react'
import DashboardPage from './pages/DashboardPage'
import OnboardingPage from './pages/OnboardingPage'
import ReflectPage from './pages/ReflectPage'
import MomentsPage from './pages/MomentsPage'
import CaptureMomentSheet from './components/CaptureMomentSheet'
import RoleDetailSheet from './components/RoleDetailSheet'
import EditIntentionSheet from './components/EditIntentionSheet'
import EditDirectionSheet from './components/EditDirectionSheet'
import MaeChatSheet from './components/MaeChatSheet'
import navOverview from './assets/icons/nav-overview.svg'
import navReflect from './assets/icons/nav-reflect.svg'
import navMemory from './assets/icons/nav-memory.svg'
import navPlus from './assets/icons/nav-plus.svg'

type Page = 'dashboard' | 'reflect' | 'memory'

type EditIntentionState = {
  text?: string
  roleId?: string
} | null

const ROLE_ID_TO_LABEL: Record<string, string> = {
  self: 'Self', creative: 'Creative', parent: 'Parent', friend: 'Friend',
  partner: 'Partner', professional: 'Professional', daughter: 'Daughter',
}

const GREEN = '#29422a'

// Nav pill height (61) + padding top/bottom (8 + 16) = 85px
// Gradient fade zone above = 20px
// Total overlay = 105px → paddingBottom on scroll content
const NAV_OVERLAY_HEIGHT = 105

function NavTab({
  icon,
  label,
  active,
  onClick,
}: {
  icon: string
  label: string
  active: boolean
  onClick: () => void
}) {
  return (
    <button
      onClick={onClick}
      className="flex flex-1 flex-col items-center gap-[2px] py-[4px] rounded-pill"
      style={{
        height: 49,
        background: active ? GREEN : 'transparent',
        transition: 'background 200ms ease',
      }}
    >
      <img
        src={icon}
        alt=""
        width={24}
        height={24}
        style={{
          filter: active ? 'brightness(0) invert(1)' : 'none',
          transition: 'filter 200ms ease',
        }}
      />
      <span
        className="font-sans font-medium text-center"
        style={{
          fontSize: 10,
          lineHeight: '15px',
          color: active ? '#fafaf7' : '#1f1b16',
          fontVariationSettings: "'opsz' 14",
          transition: 'color 200ms ease',
        }}
      >
        {label}
      </span>
    </button>
  )
}

function GlobalNav({
  page,
  navigate,
  onNewMoment,
}: {
  page: Page
  navigate: (p: Page) => void
  onNewMoment: () => void
}) {
  return (
    <div className="absolute bottom-0 left-0 right-0" style={{ zIndex: 20 }}>
      <div className="flex gap-[11px] items-center" style={{ padding: '8px 23px 16px' }}>
        <div
          className="flex flex-1 items-center py-[6px] px-[6px] rounded-pill"
          style={{ background: '#e8e1d7', height: 61 }}
        >
          <NavTab
            icon={navOverview}
            label="Overview"
            active={page === 'dashboard'}
            onClick={() => navigate('dashboard')}
          />
          <NavTab
            icon={navReflect}
            label="Reflect"
            active={page === 'reflect'}
            onClick={() => navigate('reflect')}
          />
          <NavTab
            icon={navMemory}
            label="Memory"
            active={page === 'memory'}
            onClick={() => navigate('memory')}
          />
        </div>

        <button
          onClick={onNewMoment}
          className="flex items-center justify-center rounded-pill shrink-0"
          style={{ background: '#e8e1d7', width: 59, height: 59 }}
        >
          <img src={navPlus} alt="Add" width={26} height={26} />
        </button>
      </div>
    </div>
  )
}

export default function App() {
  const [onboardingDone, setOnboardingDone] = useState(true)
  const [page, setPage] = useState<Page>('memory')
  const [showCaptureMoment, setShowCaptureMoment] = useState(false)
  const [captureMomentRole, setCaptureMomentRole] = useState<string | undefined>(undefined)
  const [activeRole, setActiveRole] = useState<string | null>(null)
  const [editIntention, setEditIntention] = useState<EditIntentionState>(null)
  const [editDirection, setEditDirection] = useState<string | null>(null)
  const [showMaeChat, setShowMaeChat] = useState(false)

  function openCaptureMoment(roleId?: string) {
    setCaptureMomentRole(roleId ? ROLE_ID_TO_LABEL[roleId] : undefined)
    setShowCaptureMoment(true)
  }

  function closeCaptureMoment() {
    setShowCaptureMoment(false)
    setCaptureMomentRole(undefined)
  }

  return (
    <div className="flex items-center justify-center min-h-screen">
      {/* Phone frame */}
      <div
        className="relative overflow-hidden bg-[#f8f6f2]"
        style={{
          width: 393,
          height: 852,
          borderRadius: 50,
          boxShadow: '0 40px 80px rgba(0,0,0,0.35), 0 0 0 1px rgba(0,0,0,0.12)',
        }}
      >
        {/* Full-height scroll area — paddingBottom clears the nav overlay */}
        <div
          className="h-full overflow-y-auto scrollbar-hide"
          style={{ paddingBottom: onboardingDone ? NAV_OVERLAY_HEIGHT : 0 }}
        >
          {!onboardingDone ? (
            <OnboardingPage onComplete={() => setOnboardingDone(true)} />
          ) : page === 'reflect' ? (
            <ReflectPage />
          ) : page === 'memory' ? (
            <MomentsPage onMaeChatOpen={() => setShowMaeChat(true)} />
          ) : (
            <DashboardPage
              onCaptureOpen={openCaptureMoment}
              onRoleOpen={setActiveRole}
              onMaeChatOpen={() => setShowMaeChat(true)}
              onIntentionEdit={(text, roleId) => setEditIntention({ text, roleId })}
            />
          )}
        </div>

        {/* Frosted nav — floats above scroll, never scrolls away */}
        {onboardingDone && (
          <GlobalNav
            page={page}
            navigate={setPage}
            onNewMoment={openCaptureMoment}
          />
        )}

        {/* Capture moment sheet */}
        {showCaptureMoment && (
          <CaptureMomentSheet
            defaultRole={captureMomentRole}
            onClose={closeCaptureMoment}
          />
        )}

        {/* Role detail sheet */}
        {activeRole && (
          <RoleDetailSheet
            roleId={activeRole}
            onClose={() => setActiveRole(null)}
            onIntentionEdit={(roleId, text) => setEditIntention({ text, roleId })}
            onDirectionEdit={roleId => setEditDirection(roleId)}
            onCaptureOpen={openCaptureMoment}
          />
        )}

        {/* Edit intention sheet */}
        {editIntention !== null && (
          <EditIntentionSheet
            initialText={editIntention.text}
            defaultRoleId={editIntention.roleId}
            onSave={(_text, _roleId) => setEditIntention(null)}
            onDelete={editIntention.text !== undefined ? () => setEditIntention(null) : undefined}
            onClose={() => setEditIntention(null)}
          />
        )}

        {/* Edit direction sheet */}
        {editDirection !== null && (
          <EditDirectionSheet
            roleId={editDirection}
            onSave={() => setEditDirection(null)}
            onClose={() => setEditDirection(null)}
          />
        )}

        {/* Mae chat sheet */}
        {showMaeChat && <MaeChatSheet onClose={() => setShowMaeChat(false)} />}
      </div>
    </div>
  )
}
