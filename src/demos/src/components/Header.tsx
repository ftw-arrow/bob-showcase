import { Mail } from 'lucide-react'

export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-arrow-orange rounded-lg flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-8 h-8 text-white" fill="currentColor">
                <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5zm0 18c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z"/>
                <path d="M12 8l-4 4h3v4h2v-4h3z"/>
              </svg>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-slate-900">
                Arrow <span className="text-arrow-orange">Global Services</span>
              </h1>
              <p className="text-sm text-slate-600">Technical Services Navigator</p>
            </div>
          </div>

          {/* CTA Button */}
          <a
            href="mailto:GLBServicesSales@arrow.com"
            className="btn-primary flex items-center space-x-2"
          >
            <Mail className="w-5 h-5" />
            <span>Contact Sales</span>
          </a>
        </div>
      </div>
    </header>
  )
}

// Made with Bob
