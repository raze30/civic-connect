# Frontend Setup Complete ✅

The Vue 3 + Vite frontend is now fully scaffolded with all necessary infrastructure for building features.

## What's Been Set Up

### 1. **State Management (Pinia)**
- **File**: [src/stores/auth.js](src/stores/auth.js)
- User authentication store with login, register, logout
- Token & role stored in localStorage for persistence
- Auth state accessible from any component via `useAuthStore()`

### 2. **API Service Layer**
- **File**: [src/services/api.js](src/services/api.js)
- Axios configured with:
  - Base URL: `VITE_API_BASE_URL` env variable (defaults to `http://localhost:8000/api`)
  - Auto-attach auth token to all requests
  - Auto-redirect to login on 401 errors
  - Error handling interceptors

### 3. **Routing & Guards**
- **File**: [src/router/index.js](src/router/index.js)
- All 19 routes defined with lazy loading
- Route guards: public, authenticated, role-based (citizen/staff/admin)
- Protected routes automatically redirect to login or 403 if unauthorized

### 4. **All Views Created** (19 placeholder files)
- **Public**: Home, Login, Register, Verify Email, Verify OTP, Help (Chatbot)
- **Citizen**: Dashboard, Report Issue, Issues List, Issue Detail, Profile
- **Staff**: Staff Dashboard, Issue Management
- **Admin**: Admin Dashboard, User Management, Audit Trail
- **Error**: 404, 403 pages

### 5. **App Shell (App.vue)**
- Navbar with:
  - Responsive design (hamburger menu on mobile)
  - Conditional nav links based on auth status
  - Role-based navigation (Staff/Admin links only show for those roles)
  - Login/Register buttons for guests
  - User profile & logout for authenticated users
- Footer with copyright
- Main content area with RouterView outlet
- Toast notification provider

### 6. **Global Setup (main.js)**
- Vue Toastification initialized with smart defaults
- Pinia store system ready
- Vue Router with guards active

## Project Structure

```
src/
├── stores/
│   └── auth.js          # Pinia authentication store
├── services/
│   └── api.js           # Axios API client with interceptors
├── router/
│   └── index.js         # Routes + guards (19 routes)
├── views/               # 19 view components (all routes)
├── assets/
│   └── main.css         # Tailwind + Catppuccin theme (light/dark)
├── App.vue              # Main shell with navbar/footer
└── main.js              # Vue app entry + plugins
```

## How to Use

### Running the Dev Server
```bash
cd frontend
npm run dev
# Open http://localhost:5174 in browser
```

### Building for Production
```bash
npm run build        # Creates dist/
npm run preview      # Preview production build locally
```

### Linting & Formatting
```bash
npm run lint         # Run ESLint + fix
npm run format       # Run Prettier
```

## Configuration

### Environment Variables
Create `.env.local` in the `frontend/` folder:
```
VITE_API_BASE_URL=http://localhost:8000/api
```

## Next Steps: Build Landing Page

The setup is ready for the landing page (HomeView). You can now:

1. **Update** [src/views/HomeView.vue](src/views/HomeView.vue) with a full hero section, features list, CTA buttons
2. **Use Tailwind classes** from Catppuccin theme (e.g., `text-accent-blue`, `bg-neutral-0`, `dark:bg-neutral-9`)
3. **Add Heroicons** for visual clarity (imported from `@heroicons/vue`)
4. **Test navigation** - the navbar links already work

### Example: Update HomeView with a Hero Section
```vue
<template>
  <div class="space-y-8">
    <!-- Hero -->
    <section class="min-h-96 flex flex-col justify-center items-center text-center">
      <h1 class="text-5xl font-bold mb-4">Fix Your City, Together</h1>
      <p class="text-lg text-neutral-5 mb-8 max-w-2xl">
        Report civic issues, track their progress, and see your community improve in real-time.
      </p>
      <div class="flex gap-4">
        <RouterLink to="/report" class="px-6 py-3 bg-accent-blue text-white rounded-lg hover:opacity-90">
          Report Issue
        </RouterLink>
        <RouterLink to="/issues" class="px-6 py-3 border border-accent-blue text-accent-blue rounded-lg hover:bg-accent-blue hover:text-white">
          View Issues
        </RouterLink>
      </div>
    </section>
    
    <!-- Features -->
    <!-- ... more sections ... -->
  </div>
</template>
```

## Key Features Ready to Use

- ✅ Authentication (login/register with form validation)
- ✅ Protected routes (redirects unauthorized users)
- ✅ Global toast notifications (show success/error messages)
- ✅ Responsive navbar with mobile menu
- ✅ Dark/Light theme support (Catppuccin colors)
- ✅ Tailwind CSS with custom theme
- ✅ Icon library (Heroicons)
- ✅ Form validation library (VeeValidate)
- ✅ Map library (Leaflet)

## Notes

- All API calls use the service layer (src/services/api.js) — don't make direct axios calls
- Always use Pinia store for auth state — don't store user data in components
- Use `useToast()` for notifications: `toast.success('Success!')`, `toast.error('Error')`
- Tailwind uses Catppuccin v4 theme with CSS variables (prefix: `--color-`)
- Add `localStorage.setItem/getItem` to persist user preferences like theme
