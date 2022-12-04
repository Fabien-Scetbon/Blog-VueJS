<template>
  <div id="items">
    <div class="message" v-if="visible">Post created!</div>
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
          <td>
            <input
              type="text"
              placeholder="dog animal grey"
              v-model="tags"
              required
            />
          </td>
        </tr>
        <tr class="table__line">
          <th>Owner</th>
          <td><input type="text" v-model="owner" required /></td>
        </tr>
      </table>
      <button class="table__button" type="submit">
        <i class="fas fa-plus-square"></i>
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
      visible: false,
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
      this.visible = true;
      setTimeout(() => {
        this.$router.push("/");
      }, 2000);
    },
  },
};
</script>

<style scoped lang="scss">
form {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50vw;
}

table {
  border-collapse: separate;
  border-spacing: 10px;
}

i {
  color: rgb(6, 129, 6);
}

th {
  color: rgb(47, 84, 117);
}

input {
  width: 100%;
  border: 1px rgb(47, 84, 117) solid;
}
.table__button {
  border: 2px rgb(6, 129, 6) solid;
  border-radius: 20px;
}
</style>
