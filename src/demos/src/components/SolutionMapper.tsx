import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, Target } from 'lucide-react'

interface Challenge {
  id: string
  label: string
  solution: 'support' | 'adoption' | 'managed'
  description: string
}

const challenges: Challenge[] = [
  {
    id: 'talent',
    label: 'Talent Shortage',
    solution: 'managed',
    description: 'Let Arrow manage your infrastructure so your team can focus on strategic initiatives'
  },
  {
    id: 'vendor',
    label: 'Vendor Complexity',
    solution: 'support',
    description: 'Consolidate multi-vendor support with Arrow\'s unified helpdesk and engineering team'
  },
  {
    id: 'budget',
    label: 'Budget Pressure',
    solution: 'adoption',
    description: 'Optimize costs with Arrow\'s efficient project delivery and ongoing support'
  },
  {
    id: 'scale',
    label: 'Scaling Issues',
    solution: 'managed',
    description: 'Scale seamlessly with Arrow\'s tiered managed services approach'
  },
  {
    id: 'migration',
    label: 'Migration Needs',
    solution: 'adoption',
    description: 'Execute flawless migrations with Arrow\'s proven methodology and expert team'
  }
]

interface SolutionMapperProps {
  onSolutionSelect: (solution: string) => void
}

export default function SolutionMapper({ onSolutionSelect }: SolutionMapperProps) {
  const [selectedChallenge, setSelectedChallenge] = useState<Challenge | null>(null)
  const [isOpen, setIsOpen] = useState(false)

  const handleSelect = (challenge: Challenge) => {
    setSelectedChallenge(challenge)
    setIsOpen(false)
    onSolutionSelect(challenge.solution)
    
    // Scroll to the relevant section
    setTimeout(() => {
      const element = document.getElementById(`${challenge.solution}-services`)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' })
      }
    }, 100)
  }

  return (
    <section className="bg-white py-12 border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <div className="inline-flex items-center space-x-2 bg-arrow-orange/10 text-arrow-orange px-4 py-2 rounded-full mb-4">
            <Target className="w-5 h-5" />
            <span className="font-semibold">Solution Mapper</span>
          </div>
          <h2 className="text-3xl font-bold text-slate-900 mb-2">
            What's Your Biggest IT Challenge?
          </h2>
          <p className="text-slate-600">
            Select your challenge and we'll recommend the right Arrow service
          </p>
        </div>

        {/* Dropdown */}
        <div className="relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-full bg-slate-50 border-2 border-slate-300 rounded-xl px-6 py-4 flex items-center justify-between hover:border-arrow-orange transition-colors"
          >
            <span className="text-lg font-medium text-slate-900">
              {selectedChallenge ? selectedChallenge.label : 'Select your challenge...'}
            </span>
            <ChevronDown
              className={`w-6 h-6 text-slate-600 transition-transform ${
                isOpen ? 'rotate-180' : ''
              }`}
            />
          </button>

          {/* Dropdown Menu */}
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute z-10 w-full mt-2 bg-white border-2 border-slate-200 rounded-xl shadow-xl overflow-hidden"
            >
              {challenges.map((challenge) => (
                <button
                  key={challenge.id}
                  onClick={() => handleSelect(challenge)}
                  className="w-full px-6 py-4 text-left hover:bg-arrow-orange/5 transition-colors border-b border-slate-100 last:border-b-0"
                >
                  <div className="font-semibold text-slate-900 mb-1">
                    {challenge.label}
                  </div>
                  <div className="text-sm text-slate-600">
                    {challenge.description}
                  </div>
                </button>
              ))}
            </motion.div>
          )}
        </div>

        {/* Selected Challenge Info */}
        {selectedChallenge && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 bg-gradient-to-r from-arrow-orange/10 to-arrow-orange-light/10 border-2 border-arrow-orange/20 rounded-xl p-6"
          >
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-arrow-orange rounded-lg flex items-center justify-center flex-shrink-0">
                <Target className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  Recommended Solution: {selectedChallenge.solution.charAt(0).toUpperCase() + selectedChallenge.solution.slice(1)} Services
                </h3>
                <p className="text-slate-700">
                  {selectedChallenge.description}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  )
}

// Made with Bob
