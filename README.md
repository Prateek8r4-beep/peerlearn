# PeerLearn - Collaborative Learning Platform

PeerLearn is a comprehensive peer-to-peer learning platform that connects students for collaborative education, study sessions, and knowledge sharing.

## Features

### Core Features
- **User Authentication**: Email/Phone + Google OAuth
- **Student Profiles**: Complete academic information (college, course, year)
- **Peer Discovery**: AI-powered matching based on subjects and interests
- **Study Rooms**: Scheduled virtual study sessions with video/audio/chat
- **1-on-1 Sessions**: Direct messaging and video calls
- **Content Library**: Notes and lectures (free & paid)
- **Quiz System**: Create custom quizzes and take challenges
- **Gamification**: Streaks, leaderboards, badges, and achievements

### Additional Features
- Notes taking with rich text editor
- Study calendar with reminders
- Progress tracker
- Bookmarks and favorites
- Global search
- Dark mode
- Notifications system
- Real-time chat

## Tech Stack

- **Frontend**: Next.js 14, React, TypeScript, Tailwind CSS
- **Backend**: Supabase (PostgreSQL, Auth, Storage, Realtime)
- **Deployment**: Vercel
- **Real-time**: Socket.io (optional)

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Supabase account
- Vercel account (for deployment)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Prateek8r4-beep/peerlearn.git
cd peerlearn
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

Edit `.env.local` and add your Supabase credentials:
```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

4. Set up Supabase database:
- Go to your Supabase project dashboard
- Navigate to SQL Editor
- Copy and run the SQL from `supabase/schema.sql`

5. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Supabase Setup

### 1. Create a Supabase Project
1. Go to [supabase.com](https://supabase.com)
2. Create a new project
3. Wait for the database to be ready

### 2. Run Database Schema
1. Go to SQL Editor in your Supabase dashboard
2. Copy the contents of `supabase/schema.sql`
3. Execute the SQL to create all tables and policies

### 3. Configure Authentication
1. Go to Authentication > Providers
2. Enable Email provider
3. Enable Google OAuth (optional):
   - Add Google OAuth credentials
   - Set redirect URL: `https://your-project.supabase.co/auth/v1/callback`

### 4. Storage Setup (Optional)
1. Go to Storage
2. Create buckets for:
   - `avatars` (public)
   - `notes` (private)
   - `lectures` (private)

## Deployment on Vercel

### 1. Push to GitHub
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

### 2. Deploy to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Import your GitHub repository
3. Add environment variables:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `SUPABASE_SERVICE_ROLE_KEY`
4. Deploy!

### 3. Update Supabase Settings
1. Go to Supabase Authentication settings
2. Add your Vercel domain to "Site URL"
3. Add your Vercel domain to "Redirect URLs"

## Project Structure

```
peerlearn/
├── app/                    # Next.js app directory
│   ├── auth/              # Authentication pages
│   ├── dashboard/         # Main dashboard
│   ├── study-rooms/       # Study rooms feature
│   ├── notes/             # Notes management
│   ├── quizzes/           # Quiz system
│   └── profile/           # User profiles
├── components/            # React components
│   ├── ui/               # UI components
│   ├── providers/        # Context providers
│   └── layout/           # Layout components
├── lib/                   # Utility functions
│   ├── supabase/         # Supabase client
│   └── utils/            # Helper functions
├── supabase/             # Database schema
└── public/               # Static assets
```

## Database Schema

The application uses the following main tables:
- `profiles` - User profiles with academic info
- `connections` - Peer connections
- `study_rooms` - Virtual study sessions
- `messages` - Chat messages
- `notes` - Study notes
- `lectures` - Video lectures
- `quizzes` - Quiz system
- `bookmarks` - Saved content
- `notifications` - User notifications
- `achievements` - Gamification badges

## Features Roadmap

- [ ] Video calling integration (WebRTC)
- [ ] Payment gateway for paid content
- [ ] Mobile app (React Native)
- [ ] AI-powered study recommendations
- [ ] Collaborative whiteboard
- [ ] Screen sharing in study rooms
- [ ] Advanced analytics dashboard
- [ ] Multi-language support

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.

## Support

For support, email support@peerlearn.com or join our Discord community.

## Acknowledgments

- Built with Next.js and Supabase
- Icons by Lucide
- UI inspired by modern educational platforms