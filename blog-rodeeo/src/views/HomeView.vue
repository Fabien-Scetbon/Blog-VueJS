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
  // computed: {
  //   posts() {
  //     console.log("view", this.$store.state.post.posts.data);
  //     return this.$store.state.post.posts.data;
  //   },
  // },
  methods: {
    getInitialPosts() {
      this.$store.dispatch("posts/FETCH_POSTS", this.page);
      setTimeout(() => {
        this.content = this.$store.state.posts.posts.data;
        // console.log("page init", this.page);
        // console.log("initial", this.content);
      }, "1000");
    },
    getNextPosts() {
      window.onscroll = () => {
        let bottomOfWindow =
          document.documentElement.scrollTop + window.innerHeight ===
          document.documentElement.offsetHeight;
        if (bottomOfWindow) {
          this.page++;
          this.$store.dispatch("posts/FETCH_POSTS", this.page);
          setTimeout(() => {
            this.content = this.content.concat(
              this.$store.state.posts.posts.data
            );
            // console.log("page next", this.page);
            // console.log("next", this.content);
          }, "1000");
        }
      };
    },
  },
  beforeMount() {
    this.getInitialPosts();
  },
  mounted() {
    this.getNextPosts();
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
