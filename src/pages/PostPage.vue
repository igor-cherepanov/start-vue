<template>
  <div>
    <h1 class="m-4 font-bold text-3xl">Страница постов</h1>
    <div class="m-4 flex">
      <i-input
          v-model="searchQuery"
          placeholder="Поиск..."
          v-focus
      />
      <i-button @click="showDialog">Создать статью</i-button>
      <i-select
          v-model="selectedSort"
          :options="sortOptions"
      />
    </div>
    <post-list
        v-if="!isPostsLoading"
        :posts="postsFilteredBySearch"
        @delete="removePost"
    />
    <div ref="observer" v-intersection="loadMorePosts">

    </div>
<!--    <post-paginate-->
<!--        v-if="!isPostsLoading"-->
<!--        :pages-count="pagesCount"-->
<!--        :page="page"-->
<!--        @changePage="changePage"-->
<!--    >-->
<!--    </post-paginate>-->
    <div class="m-4" v-if="isPostsLoading">
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
import PostForm from "../components/PostForm";
import PostList from "../components/PostList";
import axios from "axios";
import PostPaginate from "../components/PostPaginate";

export default {
  components: {PostPaginate, PostList, PostForm},
  data() {
    return {
      posts: [],
      dialogVisible: false,
      isPostsLoading: false,
      selectedSort: '',
      searchQuery: '',
      page: 1,
      limit: 10,
      pagesCount: 0,
      sortOptions: [
        {value: 'title', name: 'По названию'},
        {value: 'body', name: 'По описанию'},
      ],
    }
  },
  methods: {
    changePage(pageKey) {
      this.page = pageKey;
    },
    removePost(postId) {
      this.posts = this.posts.filter(function (post) {
        return post.id !== postId
      })
    },
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
        const response = await axios.get(postsUrl, {
          params: {
            _page: this.page,
            _limit: this.limit,
          }
        });
        this.pagesCount = Math.ceil(response.headers['x-total-count'] / this.limit);
        this.posts = response.data;
      } catch (e) {
        alert('Error ' + e.code + ' ' + e.error);
      } finally {
        this.isPostsLoading = false;
      }
    },
    async loadMorePosts() {
      this.page += 1;
      const postsUrl = 'https://jsonplaceholder.typicode.com/posts';
      try {
        const response = await axios.get(postsUrl, {
          params: {
            _page: this.page,
            _limit: this.limit,
          }
        });
        this.pagesCount = Math.ceil(response.headers['x-total-count'] / this.limit);
        this.posts = [...this.posts, ...response.data];
      } catch (e) {
        alert('Error ' + e.code + ' ' + e.error);
      }
    }
  },
  mounted() {
    this.fetchPosts();

  },
  computed: {
    postsFilteredBySelect() {
      return [...this.posts].sort((post1, post2) => {
        return post1[this.selectedSort]?.localeCompare(post2[this.selectedSort])
      })
    },
    postsFilteredBySearch() {
      return this.postsFilteredBySelect.filter(post => {
            return post.title.toLowerCase().includes(this.searchQuery.toLowerCase()) || post.id.toString() === this.searchQuery
          }
      )
    },
  },

}
</script>

<style lang="postcss">

input {
  @apply bg-purple-200 rounded
}
</style>