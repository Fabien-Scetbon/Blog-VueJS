<template>
  <div id="items">
    <PostHome v-for="item in posts" :key="item.id" :item="item" />
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
      page: 0,
    };
  },
  computed: {
    posts() {
      return this.$store.getters["posts/GET_POSTS"];
    },
  },
  methods: {
    getInitialPosts() {
      this.$store.dispatch("posts/FETCH_POSTS", this.page);
    },
    getNextPosts() {
      window.onscroll = () => {
        let bottomOfWindow =
          document.documentElement.scrollTop + window.innerHeight ===
          document.documentElement.offsetHeight;
        if (bottomOfWindow) {
          this.page++;
          this.$store.dispatch("posts/FETCH_POSTS", this.page);
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

.message {
  font-size: 1.5rem;
  color: rgb(6, 129, 6);
  margin-bottom: 10px;
}
</style>
