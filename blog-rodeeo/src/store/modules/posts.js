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
      // console.log("state post data", state.posts.data);
      // console.log("posts", posts.data);
      // state.posts.data = state.posts.concat(posts.data);
    },
    SET_POST: (state, post) => {
      state.post = post;
      // console.log("state post", state.post);
    },
    CREATE_POST: (state, post) => state.posts.push(post),
    DELETE_POST(state, id) {
      let index = state.posts.findIndex((elem) => elem.id === id);
      state.posts.splice(index, 1);
    },
    UPDATE_POST(state, post) {
      let index = state.posts.findIndex((elem) => elem.id === post.id);
      state.posts.splice(index, 1, post);
    },
  },
  actions: {
    async FETCH_POSTS({ commit }, page) {
      let { data } = await axios
        .get(`/post?page=${page}&limit=5`)
        .catch((error) => {
          if (error.error) {
            console.log(error.error);
          }
        });
      // data.data = Object.assign({}, this.state.post.posts.data, data.data);
      // console.log("data", data.data);
      commit("SET_POSTS", data);
      // console.log("state.post", this.state.post.posts.data);
    },

    async FETCH_POST({ commit }, id) {
      const { data } = await axios.get(`/post/${id}`).catch((error) => {
        if (error.error) {
          console.log(error.error);
        }
      });
      // console.log("fetch post", data);
      commit("SET_POST", data);
    },

    async CREATE_POST({ commit }, body) {
      const { data } = await axios.post("/posts", body).catch((error) => {
        if (error.response) {
          console.log(error.response.data);
        } else {
          console.log(JSON.stringify(error.message));
        }
      });
      commit("CREATE_POST", data);
    },

    async DELETE_POST({ dispatch }, datas) {
      if (!datas.force) {
        datas.force = false;
      }
      let body = { force: datas.force };
      const response = await axios
        .delete("/posts/${datas.id}", { data: body })
        .catch((error) => {
          if (error.response) {
            console.log(error.response.data);
          } else {
            console.log(JSON.stringify(error.message));
          }
        });
      if (response) {
        dispatch("FETCH_POSTS");
      }
    },

    async UPDATE_POST({ commit }, datas) {
      const { data } = await axios
        .put(`/posts/${datas.id}`, datas.body)
        .catch((error) => {
          if (error.response) {
            console.log(error.response.data);
          } else {
            console.log(JSON.stringify(error.message));
          }
        });
      commit("UPDATE_POST", data);
    },
  },

  getters: {
    GET_POSTS: (state) => {
      return state.posts;
    },
  },
};
