<template>
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
import PostHome from "../components/posts/PostHome.vue";

export default {
  name: "HomeView",
  components: {
    PostHome,
  },
  data() {
    return {
      content: [],
      page: 1,
    };
  },
  methods: {
    getInitialUsers() {
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
    getNextUser() {
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
    this.getInitialUsers();
  },
  mounted() {
    this.getNextUser();
  },
};
</script>

<style>
#notes {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 97%;
  min-width: 450px;
  margin: 0;
  padding: 1rem;
}
</style>
