<template>
  <div id="app">
    <ListCategories></ListCategories>
  </div>
</template>

<script>
import ListCategories from "./components/ListCategories";
import Leadership from "./components/Leadership";

export default {
  name: "App",
  components: {
    ListCategories,
    Leadership
  }
};
</script>

<style>
* {
  font-family: Helvetica, Arial, sans-serif;
}
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 60px, 60px, 60px, 60px;
  width: 100%;
  height: 100%;
}
</style>
