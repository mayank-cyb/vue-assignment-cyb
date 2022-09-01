<template>
  <div class="checkbox">
    <input
      type="checkbox"
      @change="$emit('change', $event.target.value)"
      :id="id"
      :checked="checked"
      v-bind="$attrs"
    />
    <label v-if="label" :for="id" v-html="label" />
  </div>
</template>

<script>
export default {
  name: "BaseCheckbox",
  inheritAttrs: false,
  props: {
    checked: {
      type: Boolean,
      default: false,
    },
    label: {
      type: String,
    },
    id: {
      type: String,
    },
  },
};
</script>
