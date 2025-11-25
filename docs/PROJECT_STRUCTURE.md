# PeerLearn Project Structure

Complete guide to the codebase organization and architecture.

## 📁 Directory Structure

```
peerlearn/
├── app/                          # Next.js 14 App Router
│   ├── (auth)/                   # Auth route group
│   │   ├── login/               # Login page
│   │   ├── signup/              # Signup page
│   │   └── callback/            # OAuth callback
│   ├── dashboard/               # Main dashboard
│   ├── profile/                 # User profiles
│   ├── study-rooms/             # Study rooms feature
│   ├── notes/                   # Notes management
│   ├── lectures/                # Video lectures
│   ├── quizzes/                 # Quiz system
│   ├── messages/                # Chat/messaging
│   ├── calendar/                # Study calendar
│   ├── api/                     # API routes
│   ├── layout.tsx               # Root layout
│   ├── page.tsx                 # Landing page
│   └── globals.css              # Global styles
│
├── components/                   # React components
│   ├── ui/                      # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Input.tsx
│   │   ├── Modal.tsx
│   │   └── ...
│   ├── layout/                  # Layout components
│   │   ├── Header.tsx
│   │   ├── Sidebar.tsx
│   │   ├── Footer.tsx
│   │   └── Navigation.tsx
│   ├── features/                # Feature-specific components
│   │   ├── study-rooms/
│   │   ├── notes/
│   │   ├── quizzes/
│   │   └── ...
│   └── providers/               # Context providers
│       ├── ThemeProvider.tsx
│       ├── AuthProvider.tsx
│       └── SocketProvider.tsx
│
├── lib/                         # Utility libraries
│   ├── supabase/               # Supabase configuration
│   │   ├── client.ts           # Client-side client
│   │   ├── server.ts           # Server-side client
│   │   └── middleware.ts       # Middleware client
│   ├── utils/                  # Helper functions
│   │   ├── cn.ts               # className utility
│   │   ├── date.ts             # Date formatting
│   │   ├── validation.ts       # Form validation
│   │   └── ...
│   └── hooks/                  # Custom React hooks
│       ├── useAuth.ts
│       ├── useProfile.ts
│       ├── useStudyRooms.ts
│       └── ...
│
├── types/                       # TypeScript types
│   ├── database.types.ts       # Supabase generated types
│   ├── models.ts               # Application models
│   └── api.ts                  # API types
│
├── supabase/                    # Supabase configuration
│   ├── schema.sql              # Database schema
│   ├── migrations/             # Database migrations
│   └── seed.sql                # Seed data (optional)
│
├── public/                      # Static assets
│   ├── images/
│   ├── icons/
│   └── ...
│
├── docs/                        # Documentation
│   ├── PROJECT_STRUCTURE.md    # This file
│   ├── API.md                  # API documentation
│   └── FEATURES.md             # Feature documentation
│
├── .github/                     # GitHub configuration
│   ├── workflows/              # CI/CD workflows
│   └── ISSUE_TEMPLATE/         # Issue templates
│
├── middleware.ts                # Next.js middleware
├── next.config.js              # Next.js configuration
├── tailwind.config.ts          # Tailwind configuration
├── tsconfig.json               # TypeScript configuration
├── package.json                # Dependencies
├── .env.example                # Environment variables template
├── .gitignore                  # Git ignore rules
├── README.md                   # Project overview
├── DEPLOYMENT.md               # Deployment guide
├── QUICKSTART.md               # Quick start guide
├── CONTRIBUTING.md             # Contributing guidelines
└── LICENSE                     # MIT License
```

## 🏗️ Architecture

### Frontend Architecture

```
┌─────────────────────────────────────────┐
│           Next.js App Router            │
├─────────────────────────────────────────┤
│  Pages (app/)                           │
│  ├── Server Components (default)        │
│  └── Client Components ('use client')   │
├─────────────────────────────────────────┤
│  Components (components/)               │
│  ├── UI Components                      │
│  ├── Feature Components                 │
│  └── Layout Components                  │
├─────────────────────────────────────────┤
│  State Management                       │
│  ├── React Context                      │
│  ├── Zustand (optional)                 │
│  └── React Query (optional)             │
├─────────────────────────────────────────┤
│  Styling                                │
│  ├── Tailwind CSS                       │
│  └── CSS Modules (optional)             │
└─────────────────────────────────────────┘
```

### Backend Architecture

```
┌─────────────────────────────────────────┐
│         Supabase Backend                │
├─────────────────────────────────────────┤
│  Authentication                         │
│  ├── Email/Password                     │
│  ├── OAuth (Google)                     │
│  └── Phone (optional)                   │
├─────────────────────────────────────────┤
│  Database (PostgreSQL)                  │
│  ├── Tables                             │
│  ├── Views                              │
│  ├── Functions                          │
│  └── Triggers                           │
├─────────────────────────────────────────┤
│  Row Level Security (RLS)               │
│  ├── User-based policies                │
│  └── Role-based access                  │
├─────────────────────────────────────────┤
│  Storage                                │
│  ├── Avatars (public)                   │
│  ├── Notes (private)                    │
│  └── Lectures (private)                 │
├─────────────────────────────────────────┤
│  Realtime                               │
│  ├── Chat messages                      │
│  ├── Study room updates                 │
│  └── Notifications                      │
└─────────────────────────────────────────┘
```

## 📄 Key Files Explained

### Configuration Files

#### `next.config.js`
- Next.js configuration
- Image domains
- Environment variables
- Build settings

#### `tailwind.config.ts`
- Tailwind CSS configuration
- Custom colors and themes
- Dark mode settings
- Custom utilities

#### `tsconfig.json`
- TypeScript configuration
- Path aliases (@/)
- Compiler options

#### `middleware.ts`
- Route protection
- Authentication checks
- Redirects

### Core Application Files

#### `app/layout.tsx`
- Root layout component
- Global providers
- Font configuration
- Metadata

#### `app/page.tsx`
- Landing page
- Hero section
- Features showcase

#### `lib/supabase/client.ts`
- Supabase client initialization
- Client-side operations
- Authentication helpers

#### `supabase/schema.sql`
- Complete database schema
- All tables and relationships
- RLS policies
- Indexes and triggers

## 🔄 Data Flow

### Authentication Flow

```
User Action → Next.js Page → Supabase Auth
                ↓
         Update Session
                ↓
         Middleware Check
                ↓
    Redirect or Allow Access
```

### Data Fetching Flow

```
Component Mount → useEffect/Server Component
                        ↓
                 Supabase Query
                        ↓
                  RLS Check
                        ↓
                Return Data
                        ↓
                Update State
                        ↓
                 Render UI
```

### Real-time Updates Flow

```
Database Change → Supabase Realtime
                        ↓
                WebSocket Event
                        ↓
              Client Subscription
                        ↓
                Update Local State
                        ↓
                 Re-render UI
```

## 🎨 Component Patterns

### Server Components (Default)

```typescript
// app/dashboard/page.tsx
export default async function DashboardPage() {
  const supabase = createServerComponentClient()
  const { data } = await supabase.from('profiles').select()
  
  return <div>{/* Render data */}</div>
}
```

### Client Components

```typescript
// components/features/ChatBox.tsx
'use client'

import { useState, useEffect } from 'react'

export function ChatBox() {
  const [messages, setMessages] = useState([])
  
  useEffect(() => {
    // Subscribe to realtime updates
  }, [])
  
  return <div>{/* Render chat */}</div>
}
```

### Shared Components

```typescript
// components/ui/Button.tsx
interface ButtonProps {
  children: React.ReactNode
  onClick?: () => void
  variant?: 'primary' | 'secondary'
}

export function Button({ children, onClick, variant = 'primary' }: ButtonProps) {
  return (
    <button onClick={onClick} className={/* styles */}>
      {children}
    </button>
  )
}
```

## 🗄️ Database Schema Overview

### Core Tables

1. **profiles** - User profiles and academic info
2. **connections** - Peer connections
3. **study_rooms** - Virtual study sessions
4. **messages** - Chat messages
5. **notes** - Study notes
6. **lectures** - Video lectures
7. **quizzes** - Quiz system
8. **notifications** - User notifications

### Relationships

```
profiles (1) ──── (many) study_rooms
profiles (1) ──── (many) notes
profiles (1) ──── (many) messages
profiles (many) ──── (many) connections
study_rooms (1) ──── (many) messages
quizzes (1) ──── (many) quiz_questions
```

## 🔐 Security

### Row Level Security (RLS)

All tables have RLS enabled with policies:

- **SELECT**: Users can view public data or their own data
- **INSERT**: Users can only insert their own data
- **UPDATE**: Users can only update their own data
- **DELETE**: Users can only delete their own data

### Environment Variables

Sensitive data stored in environment variables:
- Supabase credentials
- API keys
- Service role keys (server-only)

## 🚀 Performance Optimization

### Code Splitting

- Automatic with Next.js App Router
- Dynamic imports for heavy components
- Route-based splitting

### Image Optimization

- Next.js Image component
- Automatic WebP conversion
- Lazy loading

### Caching

- Server component caching
- Supabase query caching
- Static page generation

## 📱 Responsive Design

### Breakpoints

```typescript
// Tailwind breakpoints
sm: '640px'   // Mobile landscape
md: '768px'   // Tablet
lg: '1024px'  // Desktop
xl: '1280px'  // Large desktop
2xl: '1536px' // Extra large
```

### Mobile-First Approach

All components designed mobile-first, then enhanced for larger screens.

## 🧪 Testing Strategy

### Unit Tests
- Component testing
- Utility function testing
- Hook testing

### Integration Tests
- API route testing
- Database operation testing
- Authentication flow testing

### E2E Tests
- User journey testing
- Critical path testing
- Cross-browser testing

## 📦 Deployment

### Build Process

```bash
npm run build
# Generates optimized production build
# Output: .next/ directory
```

### Environment Setup

1. Development: `.env.local`
2. Production: Vercel environment variables

### CI/CD

- Automatic deployment on push to main
- Preview deployments for PRs
- Automatic rollback on errors

## 🔧 Development Workflow

1. **Feature Branch**: Create from main
2. **Development**: Code and test locally
3. **Commit**: Follow conventional commits
4. **Push**: Push to GitHub
5. **PR**: Create pull request
6. **Review**: Code review
7. **Merge**: Merge to main
8. **Deploy**: Automatic deployment

## 📚 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Supabase Documentation](https://supabase.com/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)

---

**Questions?** Check other docs or open an issue!