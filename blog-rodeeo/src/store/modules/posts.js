import axios from "../api";

export default {
  namespaced: true,
  state: {
    posts: [],
    post: {},
  },
  mutations: {
    SET_POSTS: (state, posts) => {
      state.posts = posts;
    },
    SET_POST: (state, post) => {
      state.post = post;
    },
  },
  actions: {
    async FETCH_POSTS({ commit }, page) {
      let limit = 5 + 5 * page;
      let { data } = await axios
        .get(`/post?page=0&limit=${limit}`)
        .catch((error) => {
          if (error.error) {
            console.log(error.error);
          }
        });
      commit("SET_POSTS", data);
    },

    async FETCH_POST({ commit }, id) {
      const { data } = await axios.get(`/post/${id}`).catch((error) => {
        if (error.error) {
          console.log(error.error);
        }
      });
      commit("SET_POST", data);
    },

    async CREATE_POST({ commit }, body) {
      const { data } = await axios.post("/post/create", body).catch((error) => {
        if (error.response) {
          console.log(error.response.data);
        } else {
          console.log(JSON.stringify(error.message));
        }
      });
      commit("SET_POSTS", data);
    },
  },

  getters: {
    GET_POSTS: (state) => {
      return state.posts.data;
    },
    GET_POST: (state) => {
      return state.post;
    },
  },
};
