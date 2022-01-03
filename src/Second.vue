<template>
  <div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: [
        {id: 1, title: 'Title 1', body: 'Body 1'},
        {id: 2, title: 'Title 1', body: 'Body 1'},
        {id: 3, title: 'Title 1', body: 'Body 1'},
      ]
    }
  },
  methods: {
    addLike() {
      this.likes += 1;
    },
    addDislike() {
      this.dislikes -= 1;
    }
  }
}
</script>

<style scoped lang="postcss">
.btn {
  padding: 5px 15px;
  border-radius: 5px;
}
input {
  @apply py-2 px-5 bg-purple-200
}
</style>