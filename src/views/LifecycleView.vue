<template>
  <div class="page-lifecycle">
    <h2 v-html="headlineCopy" />
    <p v-html="bodyCopy" />
  </div>
</template>

<script>
import axiosInstance from "@/services/services.js";
//import axios from "axios";
export default {
  name: "LifecycleView",
  props: {
    pageName: String,
  },
  data() {
    return {
      page_name: "prelaunch",
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
