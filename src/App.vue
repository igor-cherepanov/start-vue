<template>
  <div class="app">
    <h1 class="m-4 font-bold text-3xl">Страница постов</h1>
    <div class="my-4 flex">
      <i-button @click="showDialog">Создать статью</i-button>
      <i-select
          v-model="selectedSort"
          :options="sortOptions"
      />
    </div>
    <post-list
        v-if="!isPostsLoading"
        :posts="posts"
    />
    <div v-else>
      Loading...
    </div>
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
import axios from "axios";

export default {
  components: {PostList, PostForm},
  data() {
    return {
      posts: [],
      dialogVisible: false,
      isPostsLoading: false,
      selectedSort: '',
      sortOptions: [
        {value: 'title', name: 'По названию'},
        {value: 'body', name: 'По описанию'},
      ],
    }
  },
  methods: {
    createPost(post) {
      this.posts.push({...post})
      post.title = '';
      post.body = '';
      this.dialogVisible = false
    },
    showDialog() {
      this.dialogVisible = true;
    },
    async fetchPosts() {
      const postsUrl = 'https://jsonplaceholder.typicode.com/posts';
      try {
        this.isPostsLoading = true;
        const response = await axios.get(postsUrl);
        this.posts = response.data;
      } catch (e) {
        alert('Error ' + e.code + ' ' + e.error);
      } finally {
        this.isPostsLoading = false;
      }
    }
  },
  mounted() {
    this.fetchPosts();
  },
  watch: {
    selectedSort(newValue) {
      this.posts.sort((post1, post2) => {
        return post1[newValue]?.localeCompare(post2[newValue])
      });
    }
  }
}
</script>

<style lang="postcss">


input {
  @apply bg-purple-200 rounded
}
</style>