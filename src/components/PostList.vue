<template>
  <div class="posts">
    <div class="m-4 font-bold">Посты</div>
    <post-item class="post border-2 border-indigo-600 m-4 p-2"
               v-if="posts.length > 0"
               v-for="(post, index) in posts"
               :post="post"
               :key="post.id"
               @click="removePost(index)"
    />
    <div v-else
      class="text-red-400 m-4 p-2 font-bold border-2 border-red-600"
    >
      Ничего не найдено
    </div>
  </div>

</template>

<script>
import PostItem from "./PostItem";

export default {
  components: {PostItem},
  props: {
    posts: {
      type: Array,
      required: true,
    }
  },
  methods: {
    removePost(index) {
      this.posts.splice(index,1)
    },

  }
}
</script>

<style scoped>

</style>