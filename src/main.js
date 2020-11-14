import Vue from 'vue'
import App from './App.vue'
import router from './router';
import { sync } from 'vuex-router-sync'
import store from '@/store/store'; //contains all variable values globally
// import '../node_modules/font-awesome/fonts/fontawesome-webfont.eot';
// import '../node_modules/font-awesome/fonts/FontAwesome.otf';
// import '../node_modules/font-awesome/fonts/fontawesome-webfont.svg';
// import '../node_modules/font-awesome/fonts/fontawesome-webfont.ttf';
// import '../node_modules/font-awesome/fonts/fontawesome-webfont.woff';
// import '../node_modules/font-awesome/fonts/fontawesome-webfont.woff2';
// fix user route mainn image padding, fix tweet cancel btn mobile,
import '../node_modules/font-awesome/css/font-awesome.min.css';
Vue.config.productionTip = false;
sync(store, router)

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')