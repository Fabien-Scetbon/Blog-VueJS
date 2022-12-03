<template>
  <div id="items">
    <form @submit.prevent="editUser">
      <table class="table table-striped">
        <thead>
          <tr class="table__header">
            <th>Id</th>
            <th>Picture</th>
            <th>Title</th>
            <th>First name</th>
            <th>Last name</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr class="table__line">
            <td>{{ user.id }}</td>
            <td><input type="text" v-model="picture" required /></td>
            <td><input type="text" v-model="title" /></td>
            <td><input type="text" v-model="firstName" required /></td>
            <td><input type="text" v-model="lastName" required /></td>
          </tr>
        </tbody>
        <thead>
          <tr class="table__header">
            <th>Email</th>
            <th>Gender</th>
            <th>Birthdate</th>
            <th>Register the</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr class="table__line">
            <td>{{ user.email }}</td>
            <td>{{ user.gender }}</td>
            <td>{{ moment(user.dateOfBirth).format("MMM DD, YYYY") }}</td>
            <td>{{ moment(user.registerDate).format("MMM DD, YYYY") }}</td>
            <td>
              <button class="table__button" type="submit">
                <i class="fas fa-user-check"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  </div>
</template>

<script>
import moment from "moment";
export default {
  name: "UserEdit",
  data() {
    return {
      title: "",
      firstName: "",
      lastName: "",
      picture: "",
    };
  },
  computed: {
    user() {
      return this.$store.getters["users/GET_USER"];
    },
  },
  methods: {
    editUser() {
      if (!["mr", "ms", "mrs", "miss", "dr", ""].includes(this.title)) return;
      let form = {
        id: this.$route.params.id,
        title: this.title,
        firstName: this.firstName,
        lastName: this.lastName,
        picture: this.picture,
      };
      this.$store.dispatch("users/UPDATE_USER", form);
      this.$router.push("/users");
    },
  },
  async mounted() {
    // async sinon user() vide
    let id = this.$route.params.id;
    await this.$store.dispatch("users/FETCH_USER", id);
    this.title = this.user.title;
    this.firstName = this.user.firstName;
    this.lastName = this.user.lastName;
    this.picture = this.user.picture;
  },
  created() {
    this.moment = moment;
  },
};
</script>

<style scoped lang="scss">
.table__button {
  border: 2px rgb(6, 129, 6) solid;
  border-radius: 20px;
}
</style>
