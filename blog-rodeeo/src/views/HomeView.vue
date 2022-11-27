<template>
  <TheNavbar />
  <div class="home__header"></div>
  <div id="notes">
    <PostHome
      v-for="(note, index) in content"
      :index="index"
      :key="note.id"
      :note="note"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import PostsService from "../services/posts.service";
import TheNavbar from "../components/TheNavbar.vue";
import PostHome from "../components/posts/PostHome.vue";

export default {
  name: "HomeView",
  components: {
    TheNavbar,
    PostHome,
  },
  data() {
    return {
      content: [],
      page: 1,
    };
  },
  methods: {
    getInitialPosts() {
      PostsService.getAllPage().then(
        (response) => {
          this.content = response.data;
          console.log("initialUsers");
          console.log(this.content);
        },
        (error) => {
          this.content =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
        }
      );
    },
    getNextPosts() {
      window.onscroll = () => {
        let bottomOfWindow =
          document.documentElement.scrollTop + window.innerHeight ===
          document.documentElement.offsetHeight;
        if (bottomOfWindow) {
          PostsService.getAllPage().then(
            (response) => {
              this.content.push(...response.data);
              console.log("nextUsers");
              console.log(this.content);
            },
            (error) => {
              this.content =
                (error.response &&
                  error.response.data &&
                  error.response.data.message) ||
                error.message ||
                error.toString();
            }
          );
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
.home__header {
  height: 100px;
}

#notes {
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
