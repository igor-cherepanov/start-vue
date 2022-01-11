<template>
  <input
      :value="modelValue" @input="updateInput"
      class="py-2 px-5 placeholder-gray-500 border" style="outline-color:mediumpurple"
      :class="'bg-'+color+'-200 border-'+color+'-500'"
  >
</template>

<script>
export default {
  name: 'i-input',
  props: {
    modelValue:[String, Number],
    color: {
      type: String,
      default: 'purple',
    },
  },
  methods:{
    updateInput(event){
      this.$emit('update:modelValue', event.target.value);
    }
  }
}
</script>

<style scoped>

</style>