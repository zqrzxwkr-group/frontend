import Home from '@/components/layout/Home'
import Index from '@/components/views/Index'

const Register = () => import('@/components/pages/Register')
const Login = () => import('@/components/pages/Login')
const Info = () => import('@/components/views/Info')
const Subject = () => import('@/components/views/Subject')
const Score = () => import('@/components/pages/Score')
const Question = () => import('@/components/pages/Question')
const Feedback = () => import('@/components/pages/Feedback')

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    redirect: '/index',
    children: [
      {
        path: '/index',
        name: '首页',
        component: Index,
        icon: 'icon-wujiaoxing',
        level: 1,
        meta: {
          requiresAuth: true // 是否需要登录
        }
      },
      {
        path: '/subject',
        name: '专业基本信息',
        component: Subject,
        icon: 'icon-addpeople_fill',
        meta: {
          requiresAuth: true // 是否需要登录
        }
      },
      {
        path: '/info',
        name: '学校基本信息',
        component: Info,
        meta: {
          requiresAuth: true // 是否需要登录
        }
      },
      {
        path: '/score',
        name: '高校分数信息',
        component: Score,
        meta: {
          requiresAuth: true // 是否需要登录
        }
      },
      {
        path: '/question',
        name: '提问',
        component: Question,
        meta: {
          requiresAuth: true // 是否需要登录
        }
      },
      {
        path: '/feedback',
        name: '反馈',
        component: Feedback
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  }
]
// const router = new VueRouter({
//   routes,
//   mode: 'history'
// })
export default routes
