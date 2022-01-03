<template>
  <div>

    <form class="mt-2" @submit.prevent>
      <div class="font-bold mx-4 my-2">Создание</div>
      <div class="mx-4 my-2">
        <input
            v-bind:value="title"
            @input="title = $event.target.value"
            class="focus:outline ring-purple-400 hover:outline" type="text" placeholder="Название">
      </div>
      <div class="mx-4 my-2">
        <input
            v-bind:value="body"
            @input="body = $event.target.value"
            class="focus:outline ring-purple-400 hover:outline" type="text" placeholder="Описание">
      </div>
        <button @click="createNewPost" class="btn mx-4 text-center bg-purple-200 hover:shadow-purple-900 hover:outline hover:ring-2 ring-purple-400">
          Создать
        </button>
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
      title: '',
      body: '',
      posts: [
        {id: 1, title: 'Title 1', body: 'Body 1'},
        {id: 2, title: 'Title 1', body: 'Body 1'},
        {id: 3, title: 'Title 1', body: 'Body 1'},
      ]
    }
  },
  methods: {

    createNewPost(){
      const newPost = {
       id: Date.now(),
       title: this.title,
       body: this.title,
      }
      this.posts.push(newPost);
    },
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
  @apply py-2 px-5 bg-purple-200 rounded
}
</style>