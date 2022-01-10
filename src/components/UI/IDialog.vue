<template>
  <div class="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full"
       v-show="show"
       @click.stop="hideDialog"
  >
    <div class="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white" @click.stop>
      <div class="mt-3 text-center">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'i-dialog',
  props: {
    show: {
      type: Boolean,
      default: false,
    }
  },
  methods:{
    hideDialog(){
      this.$emit('update:show', false);
    }
  }
}
</script>

<style scoped>

</style>