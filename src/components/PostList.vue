<template>
  <div class="posts">
    <div class="m-4 font-bold">Посты</div>
    <transition-group name="post-list">
      <post-item class="post border-2 border-purple-600 m-4 p-2"
                 v-if="posts.length > 0"
                 v-for="(post, index) in posts"
                 :post="post"
                 :key="post.id"
                 @remove="$emit('delete', post.id)"
      />
      <div v-else
           class="text-red-400 m-4 p-2 font-bold border-2 border-red-600"
      >
        Ничего не найдено
      </div>
    </transition-group>
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
      this.posts.splice(index, 1)
    },

  }
}
</script>

<style scoped>
.post-list-item {
  display: inline-block;
  margin-right: 10px;
}
.post-list-enter-active,
.post-list-leave-active {
  transition: all 0.5s ease;
}
.post-list-enter-from{
  opacity: 0;
  transform: translateX(-30px);
}
.post-list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
.post-list-move{
  transition: transform 0.9s ease;
}
</style>