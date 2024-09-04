import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage'
import ProductsPage from '../views/ProductsPage.vue'
import ProductsCreatePage from '../views/ProductsCreatePage'
import SalesPage from '../views/SalesPage.vue'
import SalesCreatePage from '../views/SalesCreatePage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/products',
    name: 'Products',
    component: ProductsPage
  },
  {
    path: '/products/create',
    name: 'ProductCreate',
    component: ProductsCreatePage,
    props: true
  },
  {
    path: '/products/edit/:id',
    name: 'EditProduct',
    component: ProductsCreatePage,
    props: route => ({
      isEditMode: true,
      productId: route.params.id
    })
  },
  {
    path: '/products/:id',
    name: 'ProductDetails',
    component: ProductsCreatePage,
    props: true
  },
  {
    path: '/sales',
    name: 'Sales',
    component: SalesPage
  },
  {
    path: '/sales/edit/:id',
    name: 'SaleEdit',
    component: SalesCreatePage,
    props: route => ({
      isEditMode: true,
      saleId: route.params.id
    })
  },
  {
    path: '/sales/:id',
    name: 'SaleDetails',
    component: SalesCreatePage,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
