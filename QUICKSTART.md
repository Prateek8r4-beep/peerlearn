# PeerLearn Quick Start Guide

Get PeerLearn running in 10 minutes! ⚡

## 🚀 Quick Deploy (Recommended)

### Step 1: Supabase Setup (3 minutes)

1. **Create Project**
   - Go to [supabase.com](https://supabase.com) → New Project
   - Name: `peerlearn`
   - Choose region → Create

2. **Run Database Schema**
   - Dashboard → SQL Editor → New Query
   - Copy/paste from `supabase/schema.sql`
   - Click Run ✓

3. **Get API Keys**
   - Settings → API
   - Copy:
     - Project URL
     - anon public key
     - service_role key

### Step 2: Vercel Deploy (2 minutes)

1. **Deploy**
   - Go to [vercel.com](https://vercel.com)
   - New Project → Import `Prateek8r4-beep/peerlearn`

2. **Add Environment Variables**
   ```
   NEXT_PUBLIC_SUPABASE_URL=your_project_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
   SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
   NEXT_PUBLIC_APP_URL=https://your-app.vercel.app
   ```

3. **Deploy** → Wait 2 minutes ✓

### Step 3: Connect (1 minute)

1. **Update Supabase URLs**
   - Supabase → Authentication → URL Configuration
   - Site URL: `https://your-app.vercel.app`
   - Redirect URLs: `https://your-app.vercel.app/auth/callback`

2. **Done!** 🎉
   - Visit your Vercel URL
   - Sign up and start using PeerLearn

---

## 💻 Local Development

### Prerequisites
- Node.js 18+
- npm or yarn

### Setup (5 minutes)

```bash
# 1. Clone
git clone https://github.com/Prateek8r4-beep/peerlearn.git
cd peerlearn

# 2. Install
npm install

# 3. Environment
cp .env.example .env.local
# Edit .env.local with your Supabase credentials

# 4. Run
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## 🔑 Environment Variables

Create `.env.local`:

```bash
# From Supabase Dashboard → Settings → API
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGc...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGc...

# Your app URL
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

---

## ✅ Verify Setup

### Test Checklist

1. **Homepage** → Should load
2. **Sign Up** → Create account
3. **Email** → Check verification email
4. **Login** → Sign in
5. **Dashboard** → Should display

### Common Issues

**Build fails?**
```bash
rm -rf .next node_modules
npm install
npm run build
```

**Auth not working?**
- Check Supabase redirect URLs
- Verify environment variables
- Check browser console for errors

**Database errors?**
- Confirm schema.sql ran successfully
- Check Supabase Table Editor
- Verify RLS policies enabled

---

## 📚 Next Steps

### Features to Explore

1. **Profile Setup**
   - Add college/university
   - Set subjects and interests
   - Upload profile picture

2. **Find Peers**
   - Search by college/course
   - Send connection requests
   - Start chatting

3. **Study Rooms**
   - Create study session
   - Invite peers
   - Schedule meetings

4. **Notes & Quizzes**
   - Upload study notes
   - Create quizzes
   - Share with peers

### Customize

- **Branding**: Update colors in `tailwind.config.ts`
- **Features**: Add new pages in `app/` directory
- **Database**: Extend schema in `supabase/schema.sql`

---

## 🛠️ Development Commands

```bash
# Development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint

# Type check
npx tsc --noEmit
```

---

## 📖 Documentation

- **Full Setup**: See [DEPLOYMENT.md](DEPLOYMENT.md)
- **Contributing**: See [CONTRIBUTING.md](CONTRIBUTING.md)
- **Features**: See [README.md](README.md)

---

## 🆘 Get Help

- **Issues**: [GitHub Issues](https://github.com/Prateek8r4-beep/peerlearn/issues)
- **Docs**: [Supabase Docs](https://supabase.com/docs) | [Next.js Docs](https://nextjs.org/docs)

---

## 🎯 Production Checklist

Before going live:

- [ ] Database schema deployed
- [ ] Environment variables set
- [ ] Supabase URLs configured
- [ ] Google OAuth setup (optional)
- [ ] Custom domain added (optional)
- [ ] SSL certificate active
- [ ] Error monitoring enabled
- [ ] Backup strategy in place

---

**That's it!** You're ready to build the future of collaborative learning! 🚀

Questions? Open an issue or check the docs.

Happy coding! 💙