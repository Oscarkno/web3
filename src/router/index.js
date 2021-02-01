import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{

        path: '/',
        name: 'Home',
        component: () =>
            import ( /* webpackChunkName: "Home" */ '../views/Home.vue')
    },
    {
        path: '/Home',
        name: 'Home',
        component: () =>
            import ( /* webpackChunkName: "Home" */ '../views/Home.vue')
    },
    {
        path: '/AddPersonas',
        name: 'AddPersonas',
        component: () =>
            import ( /* webpackChunkName: "AddPersonas" */ '../views/AddPersonas.vue')
    },
    {
        path: '/OtraPagina',
        name: 'OtraPagina',
        component: () =>
            import ( /* webpackChunkName: "Contacto" */ '../views/OtraPagina.vue')
    },
    {
        path: '/about',
        name: 'About',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/About.vue')
    }
]


const router = new VueRouter({
    mode: "history",
    base: '/web3/',
    routes
})

export default router
