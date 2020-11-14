import Vue from 'vue';
import Vuex from 'vuex';
import feed from '@/localedata/feeds.json';
import { users } from '@/localedata/users.js';
// console.log(users)
// console.log(feed)
// console.table(twts)
Vue.use(Vuex);

export default new Vuex.Store({
    strict: true,
    state: {
        feeds:feed,
        users:users
    },
    mutations: {
        // CRUD
    },
    actions: {
        // CRUD
    },
    getters: {
        //get stuff
    }

})