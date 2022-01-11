<template>
  <div class="post flex justify-between">
    <div>
      <div><span class="font-bold">id: </span>{{ post.id }}</div>
      <div><span class="font-bold">Название: </span>{{ post.title }}</div>
      <div><span class="font-bold">Описание: </span>{{ post.body }}</div>
    </div>
    <i-button
        color="red"
        @click="$emit('remove', post)"
    >
      Удалить
    </i-button>
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