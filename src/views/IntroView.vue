<template>
  <div class="page-intro">
    <login-form />
  </div>
</template>

<script>
import LoginForm from "@/components/LoginForm.vue";

export default {
  name: "IntroView",
  components: {
    LoginForm,
  },
  data() {
    return {
      page_name: "intro",
    };
  },
};
</script>
