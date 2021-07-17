import { createRouter, createWebHistory } from 'vue-router'
import test1 from '../views/test1.vue'
import test2 from '../views/test2.vue'
import test3 from '../views/test3.vue'
import test4 from '../views/test4.vue'
import test5 from '../views/test5.vue'
import test6 from '../views/test6.vue'


const routes = [
  {
    path: '/test1',
    name: 'test1',
    component: test1
  },
  {
    path: '/test2',
    name: 'test2',
    component: test2
  },
  {
    path: '/test3',
    name: 'test3',
    component: test3
  },
  {
    path: '/test4',
    name: 'test4',
    component: test4
  },
  {
    path: '/test5',
    name: 'test5',
    component: test5
  },
  {
    path: '/test6',
    name: 'test6',
    component: test6
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
