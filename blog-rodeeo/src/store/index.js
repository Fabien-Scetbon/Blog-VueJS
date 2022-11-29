import { createStore } from "vuex";
import post from "./modules/posts";
import comments from "./modules/comments";

const store = createStore({
  modules: {
    post,
    comments,
  },
});

export default store;
