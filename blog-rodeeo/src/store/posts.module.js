import postsService from "../services/posts.service";

export const post = {
  namespaced: true,
  state: {
    postItems: [],
  },
  actions: {
    getPosts({ commit }) {
      return postsService.getAllPage().then((response) => {
        commit("UPDATE_POST_ITEMS", response.data?.posts);
      });
    },
  },
  mutations: {},
  getters: {
    getAllPosts: (state) => {
      return state.postItems;
    },
  },
};
