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
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, i) in users" :key="i" class="table__line">
          <td class="table__index">{{ i + 1 }}</td>
          <td>
            <img class="header__user-picture" :src="item.picture" alt="photo" />
          </td>
          <td>{{ item.title }}</td>
          <td>{{ item.firstName }}</td>
          <td>{{ item.lastName }}</td>
          <td><i class="fas fa-user-edit"></i></td>
          <td><i class="fas fa-trash-alt" @click="deleteUser(item.id)"></i></td>
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
      page: 0,
    };
  },
  computed: {
    users() {
      return this.$store.getters["users/GET_USERS"];
    },
  },
  methods: {
    deleteUser(id) {
      this.$store.dispatch("users/DELETE_USER", id);
    },
    getInitialUsers() {
      this.$store.dispatch("users/FETCH_USERS", this.page);
    },
    getNextUser() {
      window.onscroll = () => {
        let bottomOfWindow =
          document.documentElement.scrollTop + window.innerHeight ===
          document.documentElement.offsetHeight;
        if (bottomOfWindow) {
          this.page++;
          this.$store.dispatch("users/FETCH_USERS", this.page);
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
  height: 80px;
  vertical-align: middle !important;
  text-align: center;
}

.header__user-picture {
  width: 45px;
  height: 45px;
}
.fas {
  cursor: pointer;
}
.fa {
  &-user-edit {
    color: rgb(6, 129, 6);
  }
  &-trash-alt {
    color: rgb(211, 76, 52);
  }
}
</style>
