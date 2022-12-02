import axios from "../api";

export default {
  namespaced: true,
  state: {
    users: [],
    user: {},
  },
  mutations: {
    SET_USERS: (state, users) => {
      state.users = users;
    },
    SET_USER: (state, user) => {
      state.user = user;
    },
  },
  actions: {
    async FETCH_USERS({ commit }, page) {
      let limit = 10 + 10 * page;
      let { data } = await axios
        .get(`/user?page=0&limit=${limit}`)
        .catch((error) => {
          if (error.error) {
            console.log(error.error);
          }
        });
      commit("SET_USERS", data);
    },
    async FETCH_USER({ commit }, id) {
      let { data } = await axios.get(`/user/${id}`).catch((error) => {
        if (error.error) {
          console.log("error", error.error);
        }
      });
      console.log("user", data);
      commit("SET_USER", data);
    },
    async UPDATE_USER({ commit }, datas) {
      const { data } = await axios
        .put(`/user/${datas.id}`, datas)
        .catch((error) => {
          if (error.error) {
            console.log(error.error);
          }
        });
      commit("SET_USER", data);
    },
    async DELETE_USER({ dispatch }, id) {
      const response = await axios.delete(`/user/${id}`).catch((error) => {
        if (error.error) {
          console.log("error", error.error);
        }
      });
      if (response) {
        dispatch("FETCH_USERS");
      }
    },
  },
  getters: {
    GET_USERS: (state) => {
      return state.users.data;
    },
    GET_USER: (state) => {
      return state.user;
    },
  },
};
