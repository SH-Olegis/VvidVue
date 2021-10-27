<template>
  <div id="app">
    <LocaleSwitcher />
    <router-view />
  </div>
</template>

<script>
import LocaleSwitcher from "./components/LocaleSwitcher";

export default {
  components: {
    LocaleSwitcher,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

@import "index";
</style>
