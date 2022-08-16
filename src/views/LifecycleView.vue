<template>
  <div class="page-lifecycle">
    <h2 v-html="headlineCopy" />
    <p v-html="bodyCopy" />
    <the-exit-button />
  </div>
</template>

<script>
import axiosInstance from "@/services/services.js";
import TheExitButton from "@/components/TheExitButton.vue";
//import axios from "axios";
export default {
  components: { TheExitButton },
  name: "LifecycleView",
  data() {
    return {
      page_name: "prelaunch",
      page_copy: "",
    };
  },
  created() {
    /*this.$watch(() => {
      //this.page_name = this.$route.params.lifecycle_phase;
      // console.log(this.$route.param);
    });*/
    this.fetchData();
  },
  updated() {
    this.page_name = this.$route.params.lifecycle_phase;
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
