import { createStore } from "vuex";
import posts from "./modules/posts";
import comments from "./modules/comments";
import users from "./modules/users";

const store = createStore({
  modules: {
    posts,
    comments,
    users,
  },
});

export default store;
