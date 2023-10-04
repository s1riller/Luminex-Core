<template>
   <navbarV2 v-if="!isHomePage"></navbarV2>
  <div class="app">
   
    <router-view></router-view>
  </div>
</template>

<script>
import NavbarV2 from "@/pages/NavBarV2";
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
export default {
  components: {
    NavbarV2,
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
