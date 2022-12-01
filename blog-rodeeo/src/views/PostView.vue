<template>
  <div v-if="post.id" id="items">
    <PostHome :item="post" />
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
  mounted() {
    let id = this.$route.params.id;
    console.log(id);
    this.$store.dispatch("post/FETCH_POST", id);
    this.$store.dispatch("comments/FETCH_COMMENTS", id);
  },
  computed: {
    post() {
      return this.$store.state.post.post;
    },
    comments() {
      return this.$store.state.comments.comments.data;
    },
    nbComments() {
      return this.$store.state.comments.comments.total;
    },
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
