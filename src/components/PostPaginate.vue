<template>
  <div class="flex m-4">
    <div v-for="pageKey in pagesCount" :key="pageKey"
         class="border p-4 border-purple-800 cursor-pointer hover:ring-2 ring-purple-400 m-[20px]"
         :class="{
            'bg-purple-400' : page === pageKey
         }"
         @click="$emit('changePage', pageKey)"
    >
      {{ pageKey }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: 'purple',
    },
    pagesCount: {
      type: Number,
      required: true,
    },
    page: {
      type: Number,
      required: true,
    }
  },
}
</script>

<style scoped>

</style>