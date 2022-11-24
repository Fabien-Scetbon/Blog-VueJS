<template>
  <p>{{ note.text }}</p>
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
