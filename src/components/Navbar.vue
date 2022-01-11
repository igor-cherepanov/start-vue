<template>
  <div class="bg-purple-400 shadow-lg flex items-center" style="height: 50px">
    <router-link to="/" class="font-bold text-lg mx-4">Start Vue</router-link>
    <div class="flex mx-4">
      <router-link to="/posts" class="mx-4">Posts</router-link>
      <router-link to="/about" class="mx-4">About</router-link>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

</style>