import axios from "../api";

export default {
  namespaced: true,
  state: {
    users: [],
  },
  mutations: {
    SET_USERS: (state, users) => {
      state.users = users;
    },
  },
  actions: {
    async FETCH_USERS({ commit }, page) {
      let { data } = await axios
        .get(`/user?page=${page}&limit=10`)
        .catch((error) => {
          if (error.error) {
            console.log(error.error);
          }
        });
      commit("SET_USERS", data);
    },
  },
};
