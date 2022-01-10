<template>
  <div class="app">
    <h1 class="m-4 font-bold text-3xl">Страница постов</h1>
    <div class="my-4">
      <i-button @click="showDialog">Создать статью</i-button>
    </div>
    <post-list
        :posts="posts"
    />
    <i-dialog v-model:show="dialogVisible">
      <post-form
          @create="createPost"
      />
    </i-dialog>
  </div>
</template>
<script>
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";

export default {
  components: { PostList, PostForm},
  data() {
    return {
      posts: [
        {id: 1, title: 'Title 1', body: 'Body 1'},
        {id: 2, title: 'Title 1', body: 'Body 1'},
        {id: 3, title: 'Title 1', body: 'Body 1'},
      ],
      dialogVisible: false,
    }
  },
  methods: {
    createPost(post) {
      this.posts.push({...post})
      post.title = '';
      post.body = '';
      this.dialogVisible = false
    },
    showDialog(){
      this.dialogVisible = true;
    }
  }
}
</script>

<style lang="postcss">


input {
  @apply bg-purple-200 rounded
}
</style>