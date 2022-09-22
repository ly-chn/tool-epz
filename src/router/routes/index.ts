import {RouteRecordRaw} from 'vue-router'

export const PageLayout = () => import('/@/layouts/page-layout/page-layout.vue')
export const RootRoute: RouteRecordRaw = {
  path: '/',
  name: 'Root',
  redirect: '/dashboard',
  meta: {
    title: 'Root'
  }
}
const dashboard: RouteRecordRaw = {
  path: '/dashboard',
  name: 'Dashboard',
  component: PageLayout,
  redirect: '/dashboard/analysis',
  meta: {
    title: '首页'
  },
  children: [
    {
      path: 'analysis',
      name: 'Analysis',
      component: () => import('/@/views/dashboard/analysis/analysis-page.vue'),
      meta: {
        // affix: true,
        title: 'analysis'
      }
    }, {
      path: 'table-create',
      name: 'TableCreate',
      component: () => import('/@/views/tool/table-create.vue'),
      meta: {
        title: 'PS 制表工具'
      }
    }
  ]
}
// Basic routing without permission
export const visitorRoutes = [
  RootRoute,
  dashboard
]
