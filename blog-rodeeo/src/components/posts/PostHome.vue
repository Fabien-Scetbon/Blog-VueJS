<template>
  <div class="card mb-4 shadow-sm" v-on:click="goEdit(note.id)">
    <div class="card-title d-flex flex-row">
      <div class="user">
        <img class="shadow-sm" :src="note.owner.picture" alt="photo" />
      </div>
      <div class="mr-2">
        Posted by : {{ note.owner.lastName }} {{ note.owner.firstName }}
      </div>
      <div>the {{ note.publishDate }}</div>
    </div>

    <div class="card-body">
      <div class="d-flex flex-row justify-content-between">
        <div class="content">
          <span class="badge bg-secondary">Category : {{ note.tags[0] }}</span>
          <p>{{ note.text }}</p>
        </div>

        <div class="image">
          <img class="shadow-sm" :src="note.image" alt="photo" />
        </div>
      </div>
    </div>

    <div class="card-footer">
      <span class="like">{{ note.likes }}</span>
      <!-- <span class="comments"> {{ note.nbComments }} comments</span> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "PostHome",
  props: {
    //L'objet "props" définit quel data est attendu lors du rendu du component
    //recevoir donnee depuis le parent (celui qui appelle ça)
    index: Number,
    note: Object,
  },
  methods: {},
};
</script>

<style scoped lang="scss">
.card {
  margin: auto;
  width: 50vw;
  max-width: 50vw;
  background-color: #dae0e6;
  cursor: pointer;
}

.card-title {
  background-color: #fff;
  padding: 0.8rem;
}

.content {
  width: 60%;
}

.image {
  width: 40%;
  margin-right: 1rem;
  img {
    width: 200px;
  }
}

.badge {
  margin-bottom: 0.8rem;
  font-size: 0.8rem;
  font-weight: normal;
}

.card:hover {
  background-color: #a5b2be;
}

h1 {
  font-weight: 600;
  color: #56616d;
  margin-bottom: 0.8rem;
}

p {
  word-break: break-all;
}

.url {
  font-size: 0.9rem;
  color: #e66604;
}

.fa-user-ninja {
  font-size: 2rem;
}

img {
  margin-left: 1rem;
}

.like {
  font-size: 0.8rem;
}

.comments {
  font-size: 0.9rem;
  margin-left: 2rem;
}
</style>
