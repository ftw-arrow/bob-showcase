import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import SolutionMapper from './components/SolutionMapper'
import SupportServices from './components/SupportServices'
import AdoptionServices from './components/AdoptionServices'
import ManagedServices from './components/ManagedServices'
import ChatAgent from './components/ChatAgent'

function App() {
  const [activeSection, setActiveSection] = useState<string | null>(null)

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <Hero />
      <SolutionMapper onSolutionSelect={setActiveSection} />
      
      <main className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <SupportServices isActive={activeSection === 'support'} />
          <AdoptionServices isActive={activeSection === 'adoption'} />
          <ManagedServices isActive={activeSection === 'managed'} />
        </div>
      </main>

      <ChatAgent />
    </div>
  )
}

export default App

// Made with Bob
