import Vue from "vue";
import Vuex from "vuex";
import router from "../router";
import axios from "axios";
import qs from "qs";

Vue.use(Vuex);

const auth = firebase.auth();

// const client = axios.create({
//   baseURL: "http://localhost:3000"
//   // json: true
// });

export default new Vuex.Store({
  state: {
    user: null,
    isAuthenticated: false,
    result: "",
    message: "",
    input: "",
  },
  mutations: {
    setInput(state, payload) {
      state.input = payload;
    },
    setUser(state, payload) {
      state.user = payload;
    },
    setIsAuthenticated(state, payload) {
      state.isAuthenticated = payload;
    }
  },
  actions: {
    /**
    userLogin({ commit }, { email, password }) {
      auth
        .signInWithEmailAndPassword(email, password)
        .then(user => {
          commit("setUser", user);
          commit("setIsAuthenticated", true);
          router.push("/");
        })
        .catch(() => {
          commit("setUser", null);
          commit("setIsAuthenticated", false);
          router.push("/login");
        });
    },
    userLogout({ commit }) {
      auth
        .signOut()
        .then(() => {
          commit("setUser", null);
          commit("setIsAuthenticated", false);
          router.push("/login");
          console.log("logout successful");
        })
        .catch(error => {
          commit("setUser", null);
          commit("setIsAuthenticated", false);
          router.push("/login");
          console.log(error);
        });
    },
    **/
    async checkName({ commit }, { name }) {
      commit("setInput", name);

      let param = qs.stringify({
        name: this.state.input
      });
      console.log(param);
      axios.get(`http://localhost:3000/test?${param}`, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
          'Access-Control-Allow-Origin': '*'
        }
      })
        .then(res => {
          // console.log(res.data);
          this.state.result = res.data.message;
        })
        .catch(error => console.log(error));
    }
  },
  getters: {
    isAuthenticated(state) {
      return state.user !== null && state.user !== undefined;
    },
  },
  modules: {}
});
