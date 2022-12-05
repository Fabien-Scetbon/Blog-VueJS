<template>
  <div id="items">
    <PostHome :item="post" v-if="post.id" />
    <div class="comments">
      <div>{{ nbComments }} comments</div>
    </div>
    <CommentPost v-for="comm in comments" :key="comm.id" :item="comm" />
  </div>
</template>
<script>
import PostHome from "../components/posts/PostHome.vue";
import CommentPost from "../components/comments/CommentPost.vue";

export default {
  name: "PostView",

  components: {
    PostHome,
    CommentPost,
  },
  computed: {
    post() {
      return this.$store.getters["posts/GET_POST"];
    },
    comments() {
      return this.$store.getters["comments/GET_COMMENTS"];
    },
    nbComments() {
      return this.$store.state.comments.comments.total;
    },
  },
  mounted() {
    let id = this.$route.params.id;
    this.$store.dispatch("posts/FETCH_POST", id);
    this.$store.dispatch("comments/FETCH_COMMENTS", id);
  },
};
</script>
<style scoped lang="scss">
.comments {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 35px;
  margin: 10px;
  border: 2px rgb(47, 84, 117) solid;
  background-color: #89b8bd;
  padding: 0 10px 0 10px;
  border-radius: 10px;
}
</style>
