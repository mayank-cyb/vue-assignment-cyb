<template>
  <div>
    <h2>{{ headlineCopy }}</h2>
    <p v-html="bodyCopy" />
    <the-submit-button route-to="reg_thanks">Enter Now</the-submit-button>
  </div>
</template>

<script>
import axiosInstance from "@/services/services.js";
import TheSubmitButton from "@/components/TheSubmitButton.vue";

export default {
  name: "LoginForm",
  components: {
    TheSubmitButton,
  },
  data() {
    return {
      page_name: "login",
      page_copy: "",
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      axiosInstance
        .get(`${this.page_name}.json`)
        .then((response) => {
          this.page_copy = response.data;
        })
        .catch((err) => console.error(err));
    },
  },
  computed: {
    bodyCopy() {
      return this.page_copy.body_copy;
    },
    headlineCopy() {
      return this.page_copy.headline_copy;
    },
  },
};
</script>
