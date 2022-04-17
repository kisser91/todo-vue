<template>
  <div id="app" class="flex flex-col h-screen justify-between">
    <AppHeader/>
      <router-view class="container"></router-view>
    <AppFooter/>
  </div>
</template>


<script>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup

import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';

export default {
  name: 'app',
  components: {AppHeader,AppFooter}, 
  data (){
    return {

    }
  }
}


</script>


<style  lang="scss" scoped>
#app {
  box-sizing: border-box;
  color: #37474f;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin: 0 auto;
  padding: 0;
}
.container {
  padding-bottom: 4rem;
}
</style>
