<template>
  <div>
    <label>
      <input
        :type="type"
        v-bind="$attrs"
        :value="value"
        @input="$emit('input', $event.target.value)"
      />
    </label>
  </div>
</template>

<script>
export default {
  name: "BaseInput",
  inheritAttrs: false,
  props: {
    type: {
      type: String,
      default: "text",
      required: true,
    },
    value: [String, Number],
  },
};
</script>
