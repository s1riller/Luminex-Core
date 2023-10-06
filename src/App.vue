<template>
   <navbar></navbar>
  <div class="app">

    <router-view></router-view>
  </div>
</template>

<script>
import navbar from "@/components/navbar";
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
export default {
  components: {
    navbar,
  },
  computed:{


  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;

    font-family: "gg sans", sans-serif;

}

</style>
