<template>
  <div id="app">
    <ul>
      <li>
        <router-link :to="{path: '/Create'}">Create</router-link>
      </li>
      <li>
        <router-link :to="{path: '/General'}">General</router-link>
      </li>
      <li>
      <router-link :to="{path: '/Picture'}">Picture</router-link>
      </li>
      <li>
      <router-link :to="{path: '/Method'}">Method</router-link>
      </li>
      <li>
        <router-link :to="{path: '/Congratulations'}">Congratulations</router-link>
      </li>
    </ul>
    <router-view/>
  </div>
</template>

<script>
// import "https://use.fontawesome.com/releases/v5.1.0/css/all.css";
export default {
  name: "App"
};
</script>

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */

</style>
