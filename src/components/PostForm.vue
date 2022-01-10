<template>
  <form class="mt-2" @submit.prevent>
    <div class="font-bold mx-4 my-2">Создание</div>
    <div class="mx-4 my-2 ">
      <i-input
          v-model="post.title"
          class="py-2 px-5" style="outline-color:mediumpurple" type="text" placeholder="Название"
      />
    </div>
    <div class="mx-4 my-2">
      <i-input
          v-model="post.body"
          class="py-2 px-5" style="outline-color:mediumpurple" type="text" placeholder="Описание"
      />
    </div>
    <i-button
        @click="createPost"
    >
      Создать
    </i-button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      post: {
        title: '',
        body: '',
      }
    }
  },
  methods: {
    createPost() {
      this.post.id = Date.now();
      this.$emit('create', this.post);
    }
  }
}
</script>

<style scoped>

</style>