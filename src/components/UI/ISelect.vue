<template>
  <select
      v-model="modelValue"
      class="bg-purple-200 rounded border"
      style="outline-color:mediumpurple"
      @change="changeOption"
      :class="'bg-'+color+'-200 border-'+color+'-500'"
  >
    <option disabled value="">Выберите чтото из списка</option>
    <option
        v-for="option in options"
        :key="option.value"
        :value="option.value"
    >
      {{ option.name }}
    </option>
  </select>
</template>

<script>
export default {
  name: 'i-select',
  props: {
    color: {
      type: String,
      default: 'purple',
    },
    modelValue:{
      type: String
    },
    options:{
      type:Array,
      default: () => []
    }
  },
  methods: {
    changeOption(event){
      this.$emit('update:modelValue', event.target.value);
    }
  }
}
</script>

<style scoped>

</style>