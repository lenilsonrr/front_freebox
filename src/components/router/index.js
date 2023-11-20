import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Cliente from '../views/Cliente.vue'
import Fornecedor from '../views/Fornecedor.vue'
import Cadastro from '../views/Cadastro.vue'
import Login from '../views/Login.vue'
import Recuperar from '../views/Recuperar.vue'
import Sistema from '../views/Sistema.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/cliente',
    name: 'Cliente',
    component: Cliente
  },
  {
    path:'/fornecedor',
    name: 'Fornecedor',
    component: Fornecedor
  },
  {
    path:'/cadastro',
    name: 'Cadastro',
    component: Cadastro
  },
  {
    path:'/login',
    name: 'Login',
    component: Login
  },
  {
    path:'/recuperar',
    name: 'Recuperar',
    component: Recuperar
  },
  {
    path:'/sistema',
    name: 'Sistema',
    component: Sistema
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
