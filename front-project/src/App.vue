<template>
  <div id="app">
<!--    <img src="./assets/logo.png">-->
      <router-view/>
<!--      <router-view class="view one"></router-view>-->
<!--      <router-view class="view two" name="a"></router-view>-->
<!--      <router-view class="view three" name="b"></router-view>-->
<!--      <sale></sale>-->
  </div>
</template>

<script>
export default {
  name: 'App'

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height:100%;
  margin:0;
  padding:0;
}
</style>
