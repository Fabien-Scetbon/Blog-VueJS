import axios from "../api";

export default {
  namespaced: true,
  state: {
    comments: [],
  },
  mutations: {
    SET_COMMENTS: (state, comments) => {
      state.comments = comments;
    },
  },
  actions: {
    async FETCH_COMMENTS({ commit }, id) {
      let { data } = await axios.get(`/post/${id}/comment`).catch((error) => {
        if (error.error) {
          console.log(error.error);
        }
      });
      commit("SET_COMMENTS", data);
    },
  },

  getters: {
    GET_COMMENTS: (state) => {
      return state.comments.data;
    },
  },
};
