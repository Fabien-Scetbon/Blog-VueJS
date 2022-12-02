<template>
  <div id="items">
    <form @submit.prevent="createPost">
      <table class="table table-striped">
        <tr class="table__line">
          <th>Text</th>
          <td>
            <input
              type="text"
              minlength="6"
              maxlength="50"
              v-model="text"
              required
            />
          </td>
        </tr>
        <tr class="table__line">
          <th>Image</th>
          <td><input type="text" v-model="image" required /></td>
        </tr>
        <tr class="table__line">
          <th>Tags</th>
          <td><input type="text" v-model="tags" required /></td>
        </tr>
        <tr class="table__line">
          <th>Owner</th>
          <td><input type="text" v-model="owner" required /></td>
        </tr>
      </table>
      <button class="table__button" type="submit">
        <i class="fas fa-user-check"></i>
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: "PostCreate",
  data() {
    return {
      text: "",
      image: "",
      likes: 0,
      tags: "",
      owner: "",
    };
  },
  methods: {
    createPost() {
      let tagsArray = this.tags.split(" ");
      let form = {
        text: this.text,
        image: this.image,
        likes: this.likes,
        tags: tagsArray,
        owner: this.owner,
      };
      this.$store.dispatch("posts/CREATE_POST", form);
      this.$router.push("/");
    },
  },
};
</script>

<style scoped lang="scss">
.table__button {
  border: 2px rgb(6, 129, 6) solid;
  border-radius: 20px;
}
</style>
