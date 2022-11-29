<template>
  <TheNavbar />
  <div class="header"></div>
  <div>{{ content.image }}</div>
  <PostHome :index="content.id" :item="content" />
</template>
<script>
import TheNavbar from "../components/TheNavbar.vue";
import PostHome from "../components/posts/PostHome.vue";

export default {
  name: "PostView",

  components: {
    TheNavbar,
    PostHome,
  },
  data() {
    return {};
  },
  computed: {},
  mounted() {},
};
</script>
<style scoped lang="scss">
.header {
  height: 500px;
}
</style>
