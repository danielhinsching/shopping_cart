
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
    },{
      path: '/forms',
      name: 'formulario',
      component: formsVIew,
    },

  ]
})

export default router
