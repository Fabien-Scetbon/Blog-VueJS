<template>
  <div id="items">
    <table class="table table-striped">
      <thead>
        <tr class="table__header">
          <th>Index</th>
          <th>Picture</th>
          <th>Title</th>
          <th>First name</th>
          <th>Last name</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, i) in content" :key="i" class="table__line">
          <td class="table__index">{{ i + 1 }}</td>
          <td>
            <img class="header__user-picture" :src="item.picture" alt="photo" />
          </td>
          <td>{{ item.title }}</td>
          <td>{{ item.firstName }}</td>
          <td>{{ item.lastName }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  name: "UserView",
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
    getInitialUsers() {
      this.$store.dispatch("users/FETCH_USERS", this.page);
      setTimeout(() => {
        this.content = this.$store.state.users.users.data;
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
          this.$store.dispatch("users/FETCH_USERS", this.page);
          setTimeout(() => {
            this.content = this.content.concat(
              this.$store.state.users.users.data
            );
            console.log("page next", this.page);
            console.log("next", this.content);
          }, "1000");
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

<style scoped lang="scss">
.table {
  width: 50vw;
  &__header,
  &__index {
    font-size: 1.2rem;
    color: rgb(125, 165, 200);
  }
}

th {
  text-align: center;
}

td {
  height: 100px;
  vertical-align: center !important;
  text-align: center;
}
</style>
