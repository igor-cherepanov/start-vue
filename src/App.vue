<template>
  <div>
    <form class="d-flex mt-2" action="">
      <div class="font-bold mx-4 my-2">Создание</div>
      <input class="" type="text" placeholder="Название">
      <input class="focus:outline" type="text" placeholder="Описание">
      <button class="btn mx-4 text-center bg-purple-200 hover:shadow-purple-900 hover:outline hover:ring-2 ring-purple-400" >Создать</button>
    </form>
    <div class="post border-2 border-indigo-600 m-4 p-2 " v-for="post in posts">
      <div><span class="font-bold">Название: </span>{{ post.title }}</div>
      <div><span class="font-bold">Описание: </span>{{ post.body }}</div>
    </div>
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