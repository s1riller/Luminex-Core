<template>
   <navbar v-if="!isHomePage"></navbar>
  <div class="app">
   
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from "@/pages/NavBar";
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
export default {
  components: {
    Navbar,
  },
  computed:{
  
    isHomePage() {
    
      return this.$route.fullPath === "/home";
    },
  
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

</style>
