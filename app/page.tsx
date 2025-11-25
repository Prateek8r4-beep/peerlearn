import Link from 'next/link'
import { BookOpen, Users, Video, Award, MessageCircle, Calendar } from 'lucide-react'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <nav className="flex justify-between items-center mb-16">
          <div className="flex items-center space-x-2">
            <BookOpen className="w-8 h-8 text-primary-600" />
            <span className="text-2xl font-bold text-gray-900 dark:text-white">PeerLearn</span>
          </div>
          <div className="space-x-4">
            <Link href="/auth/login" className="px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-primary-600">
              Login
            </Link>
            <Link href="/auth/signup" className="px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition">
              Sign Up
            </Link>
          </div>
        </nav>

        <div className="text-center max-w-4xl mx-auto mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 animate-fade-in">
            Learn Together, <span className="text-primary-600">Grow Together</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 animate-slide-up">
            Connect with peers, share knowledge, and excel in your academic journey through collaborative learning
          </p>
          <Link href="/auth/signup" className="inline-block px-8 py-4 bg-primary-600 text-white text-lg rounded-lg hover:bg-primary-700 transition transform hover:scale-105">
            Get Started Free
          </Link>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <FeatureCard
            icon={<Users className="w-12 h-12 text-primary-600" />}
            title="Peer Matching"
            description="AI-powered matching connects you with the right peers based on subjects and interests"
          />
          <FeatureCard
            icon={<Video className="w-12 h-12 text-primary-600" />}
            title="Study Rooms"
            description="Join or create virtual study rooms for collaborative learning sessions"
          />
          <FeatureCard
            icon={<MessageCircle className="w-12 h-12 text-primary-600" />}
            title="1-on-1 Chat"
            description="Get personalized help through direct messaging and video calls"
          />
          <FeatureCard
            icon={<BookOpen className="w-12 h-12 text-primary-600" />}
            title="Notes & Lectures"
            description="Access and share study materials, notes, and recorded lectures"
          />
          <FeatureCard
            icon={<Award className="w-12 h-12 text-primary-600" />}
            title="Quizzes & Challenges"
            description="Test your knowledge with custom quizzes and compete on leaderboards"
          />
          <FeatureCard
            icon={<Calendar className="w-12 h-12 text-primary-600" />}
            title="Study Calendar"
            description="Organize your study schedule with reminders and progress tracking"
          />
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-4 gap-8 text-center">
          <StatCard number="10K+" label="Active Students" />
          <StatCard number="500+" label="Study Rooms" />
          <StatCard number="50K+" label="Notes Shared" />
          <StatCard number="95%" label="Success Rate" />
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 PeerLearn. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-1">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  )
}

function StatCard({ number, label }: { number: string; label: string }) {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
      <div className="text-4xl font-bold text-primary-600 mb-2">{number}</div>
      <div className="text-gray-600 dark:text-gray-300">{label}</div>
    </div>
  )
}