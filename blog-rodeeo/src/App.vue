<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Maitree&display=swap");

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: "Maitree", sans-serif;
}

#app {
  background: url(assets/background_image.jpg) no-repeat top/cover;
  background-attachment: fixed;
  margin: auto;
  width: 100%;
}
</style>
