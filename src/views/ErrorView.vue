<template>
  <div class="page-lifecycle error">
    <h2 v-html="headlineCopy" />
    <p v-html="bodyCopy" />
    <the-exit-button />
  </div>
</template>

<script>
import axiosInstance from "@/services/services.js";
export default {
  name: "ErrorView",
  created() {
    //this.page_name = this.$route.params.lifecycle_phase;
    this.fetchData();
  },
  data() {
    return {
      page_name: "error",
      page_copy: "",
    };
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
