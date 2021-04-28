<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/allstars">All Stars</router-link>
    </div>
    <router-view/>
  </div>
</template>
<script>
export default {
 beforeMount(){
    this.$store.dispatch('getStars')
  },
  
}
</script>
<style lang="scss">
@import "./scss/main";



</style>
