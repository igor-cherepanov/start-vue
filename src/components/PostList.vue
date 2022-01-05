<template>
  <div class="posts">
    <div class="m-4 font-bold">Посты</div>
    <post-item class="post border-2 border-indigo-600 m-4 p-2 " v-for="post in posts"
               :post="post"/>
  </div>
</template>

<script>
import PostItem from "./PostItem";

export default {
  components: {PostItem},
  props: {
    posts: {
      type: Array,
      required: true,
    }
  }
}
</script>

<style scoped>

</style>