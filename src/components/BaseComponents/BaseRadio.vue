<template>
  <div class="radio-wrapper">
    <input
      type="radio"
      :value="modelValue"
      @change="$emit('change', $event.target.value)"
      v-bind="$attrs"
    />
    <label v-if="label" :for="label">{{ label }}</label>
    <slot v-else></slot>
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
    //console.log(this.$attrs);
  },
};
</script>
