<template>
  <div class="post">
    <div class="post__header header" @click="seeOwner(item.owner.id)">
      <img class="header__user-picture" :src="item.owner.picture" alt="photo" />
      <div class="header__user-name">
        Posted by : {{ item.owner.firstName }} {{ item.owner.lastName }}
      </div>
      <div class="header__post-date">
        the
        {{ moment(item.publishDate).format("MMM DD, YYYY [at] HH:mm") }}
      </div>
    </div>

    <div class="post__body body-comment">
      <div class="body__content">
        <p class="body__text">{{ item.message }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
export default {
  name: "CommentPost",
  props: {
    item: Object,
  },
  methods: {
    seeOwner(id) {
      this.$router.push(`/user/${id}`);
    },
  },
  created() {
    this.moment = moment;
  },
};
</script>

<style scoped lang="scss">
.post {
  background-color: #b6d7db;
  border: 2px rgb(47, 84, 117) solid;
  margin-bottom: 15px;
}
.header {
  height: 6vh !important;
  background-color: #89b8bd;

  &__user-picture {
    width: 45px;
    height: 45px;
  }

  &__user-name {
    font-size: 0.8rem;
  }

  &__post-date {
    font-size: 0.7rem;
  }
}

.body {
  &:hover {
    background-color: #b6d7db;
  }
  &-comment {
    cursor: default !important;
  }
}
</style>
