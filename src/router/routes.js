import HomePage from "pages/HomePage";

const routes = [
  {
    path: "/",
    component: HomePage
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  },
  {
    path: '/cottage',
    component: () => import('pages/CottagePage.vue')
  },
  {
    path: '/cottage/add',
    component: () => import('pages/AddCottagePage.vue')
  },
  {
    path: '/cottage/my',
    component: () => import('pages/MyCottagesPage.vue')
  },
  {
    path: '/cottage/change/:id',
    component: () => import('pages/ChangeCottagePage.vue')
  },
  {
    path: '/favorites',
    component: () => import('pages/FavoritesPage.vue')
  },
  {
    path: '/setting',
    component: () => import('pages/SettingPage.vue')
  }
]

export default routes
