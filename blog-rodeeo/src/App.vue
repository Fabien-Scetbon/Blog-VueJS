<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Maitree&display=swap");

* {
  font-family: "Maitree", sans-serif;
  box-sizing: border-box;
}

#app {
  background: url(assets/background_image.jpg) no-repeat top/cover;
  background-attachment: fixed;
  margin: auto;
  width: 100%;
}
</style>
