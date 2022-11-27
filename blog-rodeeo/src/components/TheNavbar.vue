<template>
  <div class="nav">
    <router-link to="/">
      <button class="nav__button">
        <i class="fas fa-home"></i>
      </button>
    </router-link>
    <div class="nav__title">
      <h1>RODEEO - BLOG</h1>
      <img src="../assets/rodeo.png" alt="rodeo-picture" />
    </div>
    <div class="nav__edit">
      <router-link to="#">
        <button class="nav__button">
          <i class="fas fa-pencil-alt"></i>
        </button>
      </router-link>
      <router-link to="#">
        <button class="nav__button">
          <i class="fas fa-user-cog"></i>
        </button>
      </router-link>
    </div>
  </div>

  <router-view />
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Maitree&family=Rubik+Glitch&display=swap");

.nav {
  height: 100px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  background: linear-gradient(85deg, rgb(124, 121, 120), rgb(213, 208, 207));
  position: fixed;
  z-index: 100;

  i {
    font-size: 1.5rem;
    color: rgb(47, 84, 117);
  }
}

.nav__button {
  margin-left: 10px;
  cursor: pointer;
  background-color: transparent;
  background-color: rgb(255, 255, 255, 0.1);
  padding: 0.2rem 1rem;
  font-size: 2rem;
  border-radius: 50px;
  border: 1px rgb(47, 84, 117) solid;
}

button:active {
  transform: scale(0.95);
}

.nav__title {
  display: flex;

  h1 {
    font-family: "Maitree", serif;
    font-family: "Rubik Glitch", cursive;
    color: rgb(61, 57, 57);
    font-size: 3rem;
  }

  img {
    margin-left: 20px;
    width: 50px;
    height: 50px;
  }
}
</style>
