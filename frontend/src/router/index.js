import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // Public routes
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
      meta: { requiresAuth: false }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue'),
      meta: { requiresAuth: false }
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/RegisterView.vue'),
      meta: { requiresAuth: false }
    },
    {
      path: '/verify-email',
      name: 'verify-email',
      component: () => import('../views/VerifyEmailView.vue'),
      meta: { requiresAuth: false }
    },
    {
      path: '/verify-otp',
      name: 'verify-otp',
      component: () => import('../views/VerifyOtpView.vue'),
      meta: { requiresAuth: false }
    },

    // Citizen routes
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('../views/DashboardView.vue'),
      meta: { requiresAuth: true, roles: ['citizen', 'staff', 'admin'] }
    },
    {
      path: '/report',
      name: 'report',
      component: () => import('../views/ReportIssueView.vue'),
      meta: { requiresAuth: true, roles: ['citizen', 'staff', 'admin'] }
    },
    {
      path: '/issues',
      name: 'issues',
      component: () => import('../views/IssuesView.vue'),
      meta: { requiresAuth: false }
    },
    {
      path: '/issues/:id',
      name: 'issue-detail',
      component: () => import('../views/IssueDetailView.vue'),
      meta: { requiresAuth: false }
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('../views/ProfileView.vue'),
      meta: { requiresAuth: true, roles: ['citizen', 'staff', 'admin'] }
    },

    // Staff routes
    {
      path: '/staff/dashboard',
      name: 'staff-dashboard',
      component: () => import('../views/StaffDashboardView.vue'),
      meta: { requiresAuth: true, roles: ['staff', 'admin'] }
    },
    {
      path: '/staff/issues/:id',
      name: 'staff-issue-detail',
      component: () => import('../views/StaffIssueDetailView.vue'),
      meta: { requiresAuth: true, roles: ['staff', 'admin'] }
    },

    // Admin routes
    {
      path: '/admin/dashboard',
      name: 'admin-dashboard',
      component: () => import('../views/AdminDashboardView.vue'),
      meta: { requiresAuth: true, roles: ['admin'] }
    },
    {
      path: '/admin/users',
      name: 'admin-users',
      component: () => import('../views/AdminUsersView.vue'),
      meta: { requiresAuth: true, roles: ['admin'] }
    },
    {
      path: '/admin/audit',
      name: 'admin-audit',
      component: () => import('../views/AdminAuditView.vue'),
      meta: { requiresAuth: true, roles: ['admin'] }
    },

    // Support & Error routes
    {
      path: '/help',
      name: 'chatbot',
      component: () => import('../views/ChatbotView.vue'),
      meta: { requiresAuth: false }
    },
    {
      path: '/404',
      name: 'not-found',
      component: () => import('../views/NotFoundView.vue')
    },
    {
      path: '/403',
      name: 'forbidden',
      component: () => import('../views/ForbiddenView.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/404'
    }
  ]
})

// Route guards
router.beforeEach((to, from, next) => {
  const authStore = useAuthStore()

  // If route requires auth
  if (to.meta.requiresAuth) {
    if (!authStore.isAuthenticated) {
      next('/login')
      return
    }

    // Check role-based access
    if (to.meta.roles && !to.meta.roles.includes(authStore.role)) {
      next('/403')
      return
    }
  }

  next()
})

export default router
