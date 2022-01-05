<template>
  <div class="app">
    <post-form
        @create="createPost"
    />
    <post-list
        :posts="posts"
    />
  </div>
</template>
<script>
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
export default {
  components: {PostList, PostForm},
  data() {
    return {
      posts: [
        {id: 1, title: 'Title 1', body: 'Body 1'},
        {id: 2, title: 'Title 1', body: 'Body 1'},
        {id: 3, title: 'Title 1', body: 'Body 1'},
      ]
    }
  },
  methods:{
    createPost(post){
      console.log(post);
      this.posts.push(post)
    }
  }
}
</script>

<style lang="postcss">
.btn {
  padding: 5px 15px;
  border-radius: 5px;
}

input {
  @apply bg-purple-200 rounded
}
</style>