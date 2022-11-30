<template>
  <div id="items">
    <PostHome v-for="item in content" :key="item.id" :item="item" />
  </div>
</template>

<script>
import PostHome from "../components/posts/PostHome.vue";

export default {
  name: "HomeView",
  components: {
    PostHome,
  },
  data() {
    return {
      content: [],
      page: 0,
    };
  },
  methods: {
    getInitialUsers() {
      this.$store.dispatch("post/FETCH_POSTS", this.page);
      setTimeout(() => {
        this.content = this.$store.state.post.posts.data;
        console.log("page init", this.page);
        console.log("initial", this.content);
      }, "1000");
    },
    getNextUser() {
      window.onscroll = () => {
        let bottomOfWindow =
          document.documentElement.scrollTop + window.innerHeight ===
          document.documentElement.offsetHeight;
        if (bottomOfWindow) {
          this.page++;
          this.$store.dispatch("post/FETCH_POSTS", this.page);
          this.content = this.content.concat(this.$store.state.post.posts.data);
          console.log("page next", this.page);
          console.log("next", this.content);
        }
      };
    },
  },
  beforeMount() {
    this.getInitialUsers();
  },
  mounted() {
    this.getNextUser();
  },
};
</script>

<style>
#items {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-width: 450px;
  margin: 0;
  padding: 1rem;
  z-index: 1;
}
</style>
