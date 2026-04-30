import { useState } from 'react'
import DashboardPage from './pages/DashboardPage'
import OnboardingPage from './pages/OnboardingPage'

export default function App() {
  const [onboardingDone, setOnboardingDone] = useState(false)

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
        {/* Scrollable content area */}
        <div
          className="scrollbar-hide overflow-y-auto"
          style={{ width: '100%', height: '100%' }}
        >
          {onboardingDone
            ? <DashboardPage />
            : <OnboardingPage onComplete={() => setOnboardingDone(true)} />}
        </div>
      </div>
    </div>
  )
}
