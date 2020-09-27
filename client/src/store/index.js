import Vue from 'vue'
import Vuex from 'vuex'
import auth_api from './api/auth_api';
import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        user: null
    },

    mutations: {
        set_user(state, user) {
            state.user = user;
        }
    },

    actions: {
        logout({commit}) {
            commit('set_user', null);
        },
        login({commit}, user) {
            commit('set_user', user);
        },
    },

    modules: {

    },

    getters: {
        get_user: state => state.user,
        is_auth: state => state.user !== null
    }
})
