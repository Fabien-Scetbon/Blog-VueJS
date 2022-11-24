import { createStore } from "vuex";
import { post } from "./posts.module";

const store = createStore({
  modules: {
    post,
  },
});

export default store;
