'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase/client'
import { 
  BookOpen, Users, Video, Calendar, Bell, Search, 
  TrendingUp, Award, MessageCircle, Moon, Sun 
} from 'lucide-react'
import { useTheme } from '@/components/providers/ThemeProvider'
import toast from 'react-hot-toast'

export default function DashboardPage() {
  const router = useRouter()
  const { theme, toggleTheme } = useTheme()
  const [user, setUser] = useState<any>(null)
  const [profile, setProfile] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [stats, setStats] = useState({
    studyStreak: 0,
    totalStudyHours: 0,
    completedQuizzes: 0,
    connections: 0,
  })

  useEffect(() => {
    checkUser()
  }, [])

  const checkUser = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser()
      
      if (!user) {
        router.push('/auth/login')
        return
      }

      setUser(user)

      // Fetch profile
      const { data: profileData, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', user.id)
        .single()

      if (error) throw error
      setProfile(profileData)

      // Fetch stats
      const { data: connectionsData } = await supabase
        .from('connections')
        .select('id')
        .or(`requester_id.eq.${user.id},receiver_id.eq.${user.id}`)
        .eq('status', 'accepted')

      setStats(prev => ({
        ...prev,
        studyStreak: profileData?.study_streak || 0,
        connections: connectionsData?.length || 0,
      }))

    } catch (error: any) {
      toast.error(error.message)
    } finally {
      setLoading(false)
    }
  }

  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.push('/')
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <BookOpen className="w-8 h-8 text-primary-600" />
              <span className="text-2xl font-bold text-gray-900 dark:text-white">PeerLearn</span>
            </div>

            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white w-64"
                />
              </div>

              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                {theme === 'light' ? (
                  <Moon className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                ) : (
                  <Sun className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                )}
              </button>

              <button className="relative p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                <Bell className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>

              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center text-white font-semibold">
                  {profile?.full_name?.charAt(0) || 'U'}
                </div>
                <div className="hidden md:block">
                  <p className="text-sm font-medium text-gray-900 dark:text-white">{profile?.full_name}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{profile?.course}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-6">
          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <nav className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-4 space-y-2">
              <NavItem icon={<TrendingUp />} label="Dashboard" active />
              <NavItem icon={<Users />} label="Find Peers" />
              <NavItem icon={<Video />} label="Study Rooms" />
              <NavItem icon={<MessageCircle />} label="Messages" />
              <NavItem icon={<BookOpen />} label="Notes" />
              <NavItem icon={<Award />} label="Quizzes" />
              <NavItem icon={<Calendar />} label="Calendar" />
              <button
                onClick={handleLogout}
                className="w-full text-left px-4 py-2 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition"
              >
                Logout
              </button>
            </nav>
          </aside>

          {/* Main Content */}
          <main className="lg:col-span-3 space-y-6">
            {/* Welcome Section */}
            <div className="bg-gradient-to-r from-primary-600 to-purple-600 rounded-xl shadow-lg p-8 text-white">
              <h1 className="text-3xl font-bold mb-2">Welcome back, {profile?.full_name}! 👋</h1>
              <p className="text-primary-100">Ready to continue your learning journey?</p>
            </div>

            {/* Stats Grid */}
            <div className="grid md:grid-cols-4 gap-4">
              <StatCard
                icon={<Award className="w-6 h-6 text-orange-500" />}
                label="Study Streak"
                value={`${stats.studyStreak} days`}
                bgColor="bg-orange-50 dark:bg-orange-900/20"
              />
              <StatCard
                icon={<Users className="w-6 h-6 text-blue-500" />}
                label="Connections"
                value={stats.connections}
                bgColor="bg-blue-50 dark:bg-blue-900/20"
              />
              <StatCard
                icon={<BookOpen className="w-6 h-6 text-green-500" />}
                label="Study Hours"
                value={`${stats.totalStudyHours}h`}
                bgColor="bg-green-50 dark:bg-green-900/20"
              />
              <StatCard
                icon={<TrendingUp className="w-6 h-6 text-purple-500" />}
                label="Quizzes"
                value={stats.completedQuizzes}
                bgColor="bg-purple-50 dark:bg-purple-900/20"
              />
            </div>

            {/* Quick Actions */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Quick Actions</h2>
              <div className="grid md:grid-cols-3 gap-4">
                <ActionCard
                  icon={<Video className="w-8 h-8 text-primary-600" />}
                  title="Join Study Room"
                  description="Connect with peers"
                />
                <ActionCard
                  icon={<Users className="w-8 h-8 text-primary-600" />}
                  title="Find Peers"
                  description="Discover study partners"
                />
                <ActionCard
                  icon={<Award className="w-8 h-8 text-primary-600" />}
                  title="Take Quiz"
                  description="Test your knowledge"
                />
              </div>
            </div>

            {/* Upcoming Sessions */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Upcoming Study Sessions</h2>
              <div className="space-y-3">
                <SessionCard
                  title="Mathematics Study Group"
                  time="Today, 3:00 PM"
                  participants={5}
                />
                <SessionCard
                  title="Physics Problem Solving"
                  time="Tomorrow, 10:00 AM"
                  participants={8}
                />
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}

function NavItem({ icon, label, active = false }: any) {
  return (
    <button
      className={`w-full flex items-center space-x-3 px-4 py-2 rounded-lg transition ${
        active
          ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-600'
          : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
      }`}
    >
      {icon}
      <span className="font-medium">{label}</span>
    </button>
  )
}

function StatCard({ icon, label, value, bgColor }: any) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-4">
      <div className={`w-12 h-12 ${bgColor} rounded-lg flex items-center justify-center mb-3`}>
        {icon}
      </div>
      <p className="text-2xl font-bold text-gray-900 dark:text-white">{value}</p>
      <p className="text-sm text-gray-600 dark:text-gray-400">{label}</p>
    </div>
  )
}

function ActionCard({ icon, title, description }: any) {
  return (
    <button className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 hover:bg-gray-100 dark:hover:bg-gray-600 transition text-left">
      <div className="mb-3">{icon}</div>
      <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{title}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-400">{description}</p>
    </button>
  )
}

function SessionCard({ title, time, participants }: any) {
  return (
    <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
      <div>
        <h3 className="font-semibold text-gray-900 dark:text-white">{title}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">{time}</p>
      </div>
      <div className="flex items-center space-x-2">
        <Users className="w-4 h-4 text-gray-400" />
        <span className="text-sm text-gray-600 dark:text-gray-400">{participants}</span>
      </div>
    </div>
  )
}