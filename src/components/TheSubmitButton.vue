<template>
  <button type="submit" @click="changeRoute(routeTo)">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "TheSubmitButton",
  props: {
    routeTo: {
      type: String,
    },
  },
  methods: {
    changeRoute(routeTo) {
      this.$router.push(`/${routeTo}`);
    },
  },
};
</script>
