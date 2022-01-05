<template>
  <form class="mt-2" @submit.prevent>
    <div class="font-bold mx-4 my-2">Создание</div>
    <div class="mx-4 my-2 ">
      <input
          v-model="post.title"
          class="py-2 px-5" style="outline-color:mediumpurple" type="text" placeholder="Название">
    </div>
    <div class="mx-4 my-2">
      <input
          v-model="post.body"
          class="py-2 px-5" style="outline-color:mediumpurple" type="text" placeholder="Описание">
    </div>
    <button @click="createPost"
            class="btn mx-4 text-center bg-purple-200 hover:shadow-purple-900 hover:outline hover:ring-2 ring-purple-400">
      Создать
    </button>
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
  methods:{
    createPost(){
        this.post.id = Date.now();
        this.$emit('create', this.post);
    }
  }
}
</script>

<style scoped>

</style>