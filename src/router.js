import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

function loadView(view) {
    return () =>
        import ( /*webpackChunkName:"view-[request]"*/ `@/routes/${view}.vue`)
}
export default new Router({
    scrollBehavior(to, from, savedPosition) {
        let exceptions = ['root']
        if (exceptions.includes(to.name)) return 0;
        // console.log(to)
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({ x: 0, y: 0 })
            }, 150)
        })
    },
    routes: [{
            path: '/',
            name: 'root',
            component: loadView('HomeRoute'), //viewMainCat,
            props: false
        },
        {
            // :to="{name:'user',params:{name:at,user:user}}"
            path: '/user/:id',//user/:name
            name: 'user',
            component: loadView('userRoute'), //viewMainCat,
            props: true
        }
        // {
        //   path: '/about',
        //   name: 'about',
        //   // route level code-splitting
        //   // this generates a separate chunk (about.[hash].js) for this route
        //   // which is lazy-loaded when the route is visited.
        //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
        // }
    ],
    // mode:'history'
})