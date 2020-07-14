import Vue from "vue";
import Vuex from "vuex";
import firebase from 'firebase';
import router from '../router';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null,
    isAuthenticated: false,
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
    },
    setIsAuthenticated(state, payload) {
      state.isAuthenticated = payload;
    },
  },
  actions: {
    userLogin({commit}, {email,password}) {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(user => {
          commit('setUser', user);
          commit('setIsAuthenticated', true);
          router.push('/');
        })
        .catch(() => {
          commit('setUser', null);
          commit('setIsAuthenticated', false);
          router.push('/login');
        });
    },
    userLogout({commit}) {
      firebase
        .auth()
        .signOut()
        .then(() => {
          commit('setUser', null);
          commit('setIsAuthenticated', false);
          router.push('/login');
        })
        .catch(() => {
          commit('setUser', null);
          commit('setIsAuthenticated', false);
          router.push('/login');
        });
    },
  },
  getters: {
    isAuthenticated(state) {
      return state.user !== null && state.user !== undefined;
    }
  },
  modules: {}
});
