
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'livraria',
      component: HomeView
    },
    {
      path: '/shopping-cart',
      name: 'carrinho',
      component: CartView
    },
    {
      path: '/favoritos',
      name:'favoritos',
      component: FavoriteView
    }
  ]
})

export default router
