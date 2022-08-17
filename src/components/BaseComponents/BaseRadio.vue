<template>
  <div class="radio-wrapper">
    <label :for="label">{{ label }}</label>
    <input
      type="radio"
      :value="modelValue"
      @change="$emit('change', $event.target.value)"
      v-bind="$attrs"
    />
  </div>
</template>

<script>
export default {
  name: "BaseRadio",
  inheritAttrs: false,
  props: {
    label: {
      type: String,
    },
    modelValue: {
      type: String,
    },
  },
  emits: ["change"],
  created() {
    console.log(this.$attrs);
  },
};
</script>
