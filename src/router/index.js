import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Admin from '../views/Admin.vue';
import Pregunta from '../views/Pregunta.vue';
import Libro from '../views/Libro.vue';
import Usuario from '../views/Usuario.vue';
import {fb} from '../firebase';

Vue.use(VueRouter);

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
    {
    path: '/admin',
    name: 'Admin',
    component: Admin,
    meta: { requiresAuth: true },
    children: [
        {
            path: 'preguntas',
            name: 'pregunta',
            component: Pregunta
        },
        {
            path: 'libros',
            name: 'libro',
            component: Libro
        },
        {
            path: 'usuarios',
            name: 'usuario',
            component: Usuario
        }
    ]
  },
  {
    path: 'about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes,
    mode: 'history'
});


router.beforeEach((to, from, next) => {
    
    const requresAuth = to.matched.some(x => x.meta.requiresAuth);
    const currentUser = fb.auth().currentUser;
    
    if(requresAuth && ! currentUser) {
        next('/');
    } else if(requresAuth && currentUser) {
        next();
    } else {
        next();
    }
});

export default router;
