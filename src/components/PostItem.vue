<template>
  <div class="post">
    <div><span class="font-bold">Название: </span>{{ post.title }}</div>
    <div><span class="font-bold">Описание: </span>{{ post.body }}</div>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    }
  }
}
</script>

<style scoped>

</style>