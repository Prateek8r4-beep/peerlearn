# Contributing to PeerLearn

Thank you for your interest in contributing to PeerLearn! This document provides guidelines and instructions for contributing.

## Getting Started

1. **Fork the repository**
   ```bash
   # Click the "Fork" button on GitHub
   ```

2. **Clone your fork**
   ```bash
   git clone https://github.com/YOUR_USERNAME/peerlearn.git
   cd peerlearn
   ```

3. **Add upstream remote**
   ```bash
   git remote add upstream https://github.com/Prateek8r4-beep/peerlearn.git
   ```

4. **Install dependencies**
   ```bash
   npm install
   ```

5. **Set up environment**
   ```bash
   cp .env.example .env.local
   # Add your Supabase credentials
   ```

## Development Workflow

### 1. Create a Branch

```bash
git checkout -b feature/your-feature-name
# or
git checkout -b fix/your-bug-fix
```

Branch naming conventions:
- `feature/` - New features
- `fix/` - Bug fixes
- `docs/` - Documentation updates
- `refactor/` - Code refactoring
- `test/` - Test additions/updates

### 2. Make Changes

- Write clean, readable code
- Follow existing code style
- Add comments for complex logic
- Update documentation if needed

### 3. Test Your Changes

```bash
npm run dev
# Test thoroughly in browser
npm run build
# Ensure build succeeds
```

### 4. Commit Changes

```bash
git add .
git commit -m "feat: add user profile editing"
```

Commit message format:
- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation
- `style:` - Formatting
- `refactor:` - Code restructuring
- `test:` - Tests
- `chore:` - Maintenance

### 5. Push and Create PR

```bash
git push origin feature/your-feature-name
```

Then create a Pull Request on GitHub.

## Code Style Guidelines

### TypeScript/JavaScript

- Use TypeScript for type safety
- Use functional components with hooks
- Prefer `const` over `let`
- Use meaningful variable names
- Add JSDoc comments for complex functions

```typescript
// Good
const fetchUserProfile = async (userId: string): Promise<Profile> => {
  // Implementation
}

// Bad
const f = async (id: any) => {
  // Implementation
}
```

### React Components

- One component per file
- Use named exports
- Props should be typed
- Use composition over inheritance

```typescript
// Good
interface ButtonProps {
  label: string
  onClick: () => void
  variant?: 'primary' | 'secondary'
}

export function Button({ label, onClick, variant = 'primary' }: ButtonProps) {
  return <button onClick={onClick}>{label}</button>
}
```

### CSS/Tailwind

- Use Tailwind utility classes
- Group related classes
- Use dark mode variants
- Avoid inline styles

```tsx
// Good
<div className="flex items-center space-x-4 p-4 bg-white dark:bg-gray-800 rounded-lg">

// Bad
<div style={{ display: 'flex', padding: '16px' }}>
```

## Feature Development

### Adding a New Feature

1. **Plan the feature**
   - Create an issue describing the feature
   - Discuss implementation approach
   - Get approval before starting

2. **Database changes**
   - Update `supabase/schema.sql`
   - Add migration if needed
   - Update TypeScript types

3. **Create components**
   - Build reusable components
   - Add to appropriate directory
   - Include proper TypeScript types

4. **Add API routes** (if needed)
   - Create in `app/api/`
   - Add error handling
   - Include validation

5. **Update documentation**
   - Update README if needed
   - Add JSDoc comments
   - Update DEPLOYMENT.md if needed

### Example: Adding Quiz Feature

```typescript
// 1. Database (already in schema.sql)
// 2. Types
interface Quiz {
  id: string
  title: string
  questions: Question[]
}

// 3. Component
export function QuizCard({ quiz }: { quiz: Quiz }) {
  return (
    <div className="p-4 bg-white rounded-lg">
      <h3>{quiz.title}</h3>
      {/* ... */}
    </div>
  )
}

// 4. Page
export default function QuizzesPage() {
  const [quizzes, setQuizzes] = useState<Quiz[]>([])
  // ... implementation
}
```

## Testing

### Manual Testing Checklist

- [ ] Feature works as expected
- [ ] Responsive on mobile/tablet/desktop
- [ ] Dark mode works correctly
- [ ] No console errors
- [ ] Loading states work
- [ ] Error handling works
- [ ] Authentication required routes protected

### Browser Testing

Test on:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## Pull Request Guidelines

### PR Title

Use conventional commit format:
```
feat: add quiz creation feature
fix: resolve login redirect issue
docs: update deployment guide
```

### PR Description

Include:
1. **What**: What does this PR do?
2. **Why**: Why is this change needed?
3. **How**: How does it work?
4. **Testing**: How was it tested?
5. **Screenshots**: If UI changes

Example:
```markdown
## What
Adds ability for users to create custom quizzes

## Why
Users requested ability to create and share quizzes with peers

## How
- Added quiz creation form
- Integrated with Supabase
- Added validation

## Testing
- Created multiple quizzes
- Tested with different question types
- Verified database storage

## Screenshots
[Add screenshots]
```

### PR Checklist

- [ ] Code follows style guidelines
- [ ] Self-review completed
- [ ] Comments added for complex code
- [ ] Documentation updated
- [ ] No console errors
- [ ] Tested on multiple browsers
- [ ] Mobile responsive
- [ ] Dark mode works

## Common Issues

### Build Errors

**Issue**: `Module not found`
```bash
npm install
rm -rf .next
npm run build
```

**Issue**: TypeScript errors
```bash
npm run lint
# Fix reported issues
```

### Supabase Issues

**Issue**: RLS policy errors
- Check policies in schema.sql
- Verify user authentication
- Test with Supabase dashboard

**Issue**: Connection errors
- Verify environment variables
- Check Supabase project status
- Confirm API keys are correct

## Getting Help

- **Questions**: Open a GitHub Discussion
- **Bugs**: Create an issue with reproduction steps
- **Features**: Create an issue with detailed description
- **Security**: Email security@peerlearn.com

## Code of Conduct

- Be respectful and inclusive
- Provide constructive feedback
- Help others learn and grow
- Follow community guidelines

## Recognition

Contributors will be:
- Listed in README
- Mentioned in release notes
- Credited in documentation

Thank you for contributing to PeerLearn! 🎉