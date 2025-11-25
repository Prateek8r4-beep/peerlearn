# PeerLearn Deployment Guide

Complete guide to deploy PeerLearn on Supabase and Vercel.

## Prerequisites

- GitHub account
- Supabase account
- Vercel account
- Node.js 18+ installed locally (for testing)

## Step 1: Supabase Setup

### 1.1 Create Supabase Project

1. Go to [supabase.com](https://supabase.com)
2. Click "New Project"
3. Fill in:
   - **Project Name**: peerlearn
   - **Database Password**: (save this securely)
   - **Region**: Choose closest to your users
4. Click "Create new project"
5. Wait 2-3 minutes for setup

### 1.2 Run Database Schema

1. In Supabase dashboard, go to **SQL Editor**
2. Click "New Query"
3. Copy entire contents of `supabase/schema.sql` from the repository
4. Paste into SQL Editor
5. Click "Run" or press Ctrl+Enter
6. Verify success (should see "Success. No rows returned")

### 1.3 Configure Authentication

1. Go to **Authentication** > **Providers**
2. **Email Provider**:
   - Already enabled by default
   - Confirm email enabled: ✓

3. **Google OAuth** (Optional but recommended):
   - Click on "Google"
   - Enable Google provider
   - Get credentials from [Google Cloud Console](https://console.cloud.google.com):
     - Create new project or select existing
     - Enable Google+ API
     - Create OAuth 2.0 credentials
     - Add authorized redirect URI: `https://[YOUR-PROJECT-REF].supabase.co/auth/v1/callback`
   - Copy Client ID and Client Secret to Supabase
   - Save

4. **URL Configuration**:
   - Go to **Authentication** > **URL Configuration**
   - Set **Site URL**: `http://localhost:3000` (will update after Vercel deployment)
   - Add **Redirect URLs**: `http://localhost:3000/auth/callback`

### 1.4 Get API Keys

1. Go to **Settings** > **API**
2. Copy these values (you'll need them):
   - **Project URL**: `https://[YOUR-PROJECT-REF].supabase.co`
   - **anon public key**: `eyJ...` (long string)
   - **service_role key**: `eyJ...` (long string - keep secret!)

### 1.5 Storage Setup (Optional)

1. Go to **Storage**
2. Create buckets:
   - **avatars** (public)
   - **notes** (private)
   - **lectures** (private)
3. Set policies for each bucket as needed

## Step 2: Vercel Deployment

### 2.1 Connect GitHub Repository

1. Go to [vercel.com](https://vercel.com)
2. Click "Add New" > "Project"
3. Import your GitHub repository: `Prateek8r4-beep/peerlearn`
4. Click "Import"

### 2.2 Configure Project

1. **Framework Preset**: Next.js (auto-detected)
2. **Root Directory**: `./` (default)
3. **Build Command**: `npm run build` (default)
4. **Output Directory**: `.next` (default)

### 2.3 Add Environment Variables

Click "Environment Variables" and add:

```
NEXT_PUBLIC_SUPABASE_URL=https://[YOUR-PROJECT-REF].supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJ... (your anon key)
SUPABASE_SERVICE_ROLE_KEY=eyJ... (your service role key)
NEXT_PUBLIC_APP_URL=https://your-app.vercel.app
```

**Important**: Replace placeholders with actual values from Step 1.4

### 2.4 Deploy

1. Click "Deploy"
2. Wait 2-3 minutes for build
3. Once deployed, copy your Vercel URL: `https://your-app.vercel.app`

## Step 3: Update Supabase URLs

### 3.1 Update Authentication URLs

1. Go back to Supabase dashboard
2. Navigate to **Authentication** > **URL Configuration**
3. Update **Site URL**: `https://your-app.vercel.app`
4. Add to **Redirect URLs**:
   - `https://your-app.vercel.app/auth/callback`
   - Keep localhost URL for local development
5. Save changes

### 3.2 Update Google OAuth (if configured)

1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Navigate to your OAuth credentials
3. Add authorized redirect URI:
   - `https://[YOUR-PROJECT-REF].supabase.co/auth/v1/callback`
4. Save

## Step 4: Verify Deployment

### 4.1 Test Authentication

1. Visit your Vercel URL
2. Click "Sign Up"
3. Create account with email
4. Check email for verification
5. Try logging in
6. Test Google OAuth (if configured)

### 4.2 Test Database

1. After signup, check Supabase dashboard
2. Go to **Table Editor** > **profiles**
3. Verify your profile was created
4. Check other tables are accessible

### 4.3 Test Features

- [ ] User registration (email)
- [ ] User registration (Google)
- [ ] Login
- [ ] Dashboard loads
- [ ] Profile displays correctly
- [ ] Dark mode toggle works
- [ ] Navigation works

## Step 5: Custom Domain (Optional)

### 5.1 Add Domain to Vercel

1. In Vercel project settings
2. Go to **Domains**
3. Add your custom domain
4. Follow DNS configuration instructions

### 5.2 Update Supabase

1. Add custom domain to Supabase redirect URLs
2. Update Site URL if needed

## Troubleshooting

### Build Fails on Vercel

**Error**: `Module not found`
- **Solution**: Check `package.json` dependencies
- Run `npm install` locally to verify

**Error**: `Environment variable not found`
- **Solution**: Verify all env vars are set in Vercel
- Redeploy after adding variables

### Authentication Issues

**Error**: `Invalid redirect URL`
- **Solution**: Check Supabase redirect URLs match exactly
- Include `/auth/callback` path

**Error**: `Google OAuth fails`
- **Solution**: Verify Google Cloud Console redirect URIs
- Check Client ID and Secret in Supabase

### Database Errors

**Error**: `relation "profiles" does not exist`
- **Solution**: Run schema.sql in Supabase SQL Editor
- Verify all tables created successfully

**Error**: `permission denied for table`
- **Solution**: Check RLS policies in schema
- Verify user authentication

### Performance Issues

**Slow page loads**
- Enable Vercel Analytics
- Check Supabase query performance
- Add database indexes if needed

## Monitoring

### Vercel Analytics

1. Go to project **Analytics** tab
2. Monitor:
   - Page views
   - Load times
   - Error rates

### Supabase Monitoring

1. Go to **Database** > **Query Performance**
2. Monitor slow queries
3. Check **API** > **Logs** for errors

## Maintenance

### Regular Tasks

- **Weekly**: Check error logs
- **Monthly**: Review database performance
- **Quarterly**: Update dependencies

### Backup

1. Supabase auto-backups daily
2. Manual backup: **Database** > **Backups**
3. Download SQL dump if needed

## Scaling

### When to Scale

- 1000+ concurrent users
- Slow query performance
- High API usage

### Scaling Options

1. **Supabase**: Upgrade to Pro plan
2. **Vercel**: Upgrade for more bandwidth
3. **Database**: Add read replicas
4. **CDN**: Use Vercel Edge Network

## Security Checklist

- [ ] Environment variables secured
- [ ] Service role key never exposed to client
- [ ] RLS policies enabled on all tables
- [ ] HTTPS enforced
- [ ] CORS configured properly
- [ ] Rate limiting enabled
- [ ] Regular security updates

## Support

- **Supabase Docs**: [supabase.com/docs](https://supabase.com/docs)
- **Vercel Docs**: [vercel.com/docs](https://vercel.com/docs)
- **Next.js Docs**: [nextjs.org/docs](https://nextjs.org/docs)

## Success! 🎉

Your PeerLearn application is now live and ready for users!

**Next Steps**:
1. Share your app URL
2. Gather user feedback
3. Monitor performance
4. Iterate and improve

---

**Deployed URL**: https://your-app.vercel.app
**Admin Dashboard**: https://supabase.com/dashboard/project/[YOUR-PROJECT-REF]