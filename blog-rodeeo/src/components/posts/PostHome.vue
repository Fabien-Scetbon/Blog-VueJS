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

    <div class="post__body body" @click="seeComments(item.id)">
      <div class="body__content">
        <span class="body__tags-title">Categories : </span>
        <span v-for="tag in item.tags" class="body__tags-tag" :key="tag">
          {{ tag }}
        </span>
        <p class="body__text">{{ item.text }}</p>
      </div>
      <img class="body__image" :src="item.image" alt="photo" />
    </div>

    <div class="post__footer footer">
      <div class="footer__like" @click="like()">
        <i class="fas fa-heart" :style="{ color: activeColor }"></i>
        <span class="footer__numbers">{{ likesNb }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
export default {
  name: "PostHome",
  props: {
    item: Object,
  },
  data() {
    return {
      likesNb: 0,
      liked: false,
      activeColor: "",
    };
  },
  methods: {
    seeComments(id) {
      this.$router.push(`/post/${id}`);
    },
    seeOwner(id) {
      this.$router.push(`/user/${id}`);
    },
    like() {
      if (!this.liked) {
        this.likesNb++;
        this.activeColor = "rgb(152, 59, 93)";
      } else {
        this.likesNb--;
        this.activeColor = "rgb(47, 84, 117)";
      }
      this.liked = !this.liked;
    },
  },
  mounted() {
    this.likesNb = this.item.likes;
  },
  created: function () {
    this.moment = moment;
  },
};
</script>

<style lang="scss">
.post {
  display: flex;
  flex-direction: column;
  width: 50vw;
  background-color: #dae0e6;
  border: 2px rgb(47, 84, 117) solid;
  margin-bottom: 25px;
  @media screen and (max-width: 800px) {
    width: 80vw;
  }
}

.header {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 10vh;
  background-color: #a5b2be;
  cursor: pointer;
  &:hover {
    background-color: #8d9aa4;
  }

  &__user-picture {
    width: 70px;
    height: 70px;
    border: 1px rgb(47, 84, 117) solid;
    border-radius: 50px;
    @media screen and (max-width: 800px) {
      width: 50px;
      height: 50px;
    }
  }

  &__post-date {
    font-size: 0.8rem;
    color: rgb(97, 102, 107);
  }
}

.body {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  cursor: pointer;
  &:hover {
    background-color: #a5b2be;
  }

  &__content {
    padding: 5px;
  }

  &__text {
    margin-top: 25px;
  }

  &__image {
    width: 200px;
    border: 2px rgb(47, 84, 117) solid;
  }

  &__tags-tag {
    font-size: 0.7rem;
    color: #ffff;
    margin: 0 2px 0 2px;
    padding: 0 3px 0 3px;
    border: 1px rgb(47, 84, 117) solid;
    background-color: rgb(47, 84, 117);
    border-radius: 30px;
  }
}

.footer {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 5vh;
  background-color: #a5b2be;
  i {
    color: rgb(47, 84, 117);
  }

  &__like {
    cursor: pointer;
  }

  &__numbers {
    margin-left: 5px;
    font-size: 0.8rem;
  }
}
</style>
