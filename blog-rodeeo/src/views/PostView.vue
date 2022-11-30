<template>
  <div id="items">
    <PostHome :item="content" />
  </div>
</template>
<script>
import PostHome from "../components/posts/PostHome.vue";

export default {
  name: "PostView",

  components: {
    PostHome,
  },
  data() {
    return {
      content: {},
    };
  },
  computed: {},
  beforeMount() {
    let id = this.$route.params.id;
    console.log(id);
    this.$store.dispatch("post/FETCH_POST", id);
    setTimeout(() => {
      this.content = this.$store.state.post.post;
      console.log(this.content);
    }, "1000");
  },
};
</script>
<style scoped lang="scss"></style>
