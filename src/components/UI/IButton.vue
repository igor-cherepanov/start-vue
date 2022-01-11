<template>
  <button
      class="btn mx-4 text-center hover:outline hover:ring-2 border"
      :class="'bg-'+color+'-200 hover:shadow-'+color+'-900 ring-'+color+'-400 border-'+color+'-500'"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'i-button',
  props: {
    color: {
      type: String,
      default: 'purple',
    },
  },
}
</script>

<style scoped>

.btn {
  padding: 5px 15px;
  border-radius: 5px;
}

</style>