<template>
  <div class="navbar">
    <div>Luminex Core</div>
    <div class="navbar__btns">
      <my-button @click="$router.push('/posts')">Посты</my-button>
      <my-button style="margin-left: 20px" @click="$router.push('/about')"
        >Описание</my-button
      >
      
      <my-button @click="$router.push('/postsWithStore')">Посты с использованием хранилища</my-button>

      

    </div>
  </div>
</template>

<script>
export default {};
</script>
<style>
.navbar {
  height: 50px;
  background-color: gray;
  box-shadow: 2px 2px 4px gray;
  display: flex;
  align-items: center;
  padding: 0 15px;
}
.navbar__btns {
  margin-left: auto;
  padding: 0 15px;
}
</style>
