<template>
  <div>
    <!--h2 v-html="pageCopy" /-->
    <div class="steps-wrapper">
      <div class="step-1">
        <div class="content-left">
          <h2 class="orange" v-html="pageCopy.headline_step1" />
          <div v-html="pageCopy.body_step1" />
        </div>
        <div class="content-right">
          <!--h2 class="orange" v-html="pageCopy.headline_step1" />
          <div v-html="pageCopy.body_step1" /-->
        </div>
      </div>
      <div class="step-2">
        <div class="content-top">
          <h2 class="orange" v-html="pageCopy.headline_step2" />
          <div v-html="pageCopy.body_step2" />
        </div>
        <div class="content-bottom"></div>
      </div>
      <div class="step-3">
        <div class="content-top">
          <h2 class="orange" v-html="pageCopy.headline_step3" />
          <div v-html="pageCopy.body_step3" />
        </div>
        <div class="content-bottom"></div>
      </div>
    </div>
  </div>
</template>

<script>
import axiosInstance from "@/services/services.js";

const container = document.getElementById("container");

export default {
  name: "RegThanksView",
  data() {
    return {
      page_name: "reg_thanks",
      page_copy: "",
    };
  },
  created() {
    this.$watch(
      () => {
        container.classList.add(this.$route.meta.className);
        this.fetchData();
      }
      // fetch the data when the view is created and the data is
      // already being observed
    );
  },
  // beforeRouteLeave(to) {
  //   // called before the route that renders this component is confirmed.
  //   // does NOT have access to `this` component instance,
  //   // because it has not been created yet when this guard is called!
  //   if (to.meta.className) {
  //     container.classList.add(to.meta.className);
  //   } else {
  //     console.log("route with no class");
  //   }
  // },
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
    pageCopy() {
      return this.page_copy;
    },
  },
};
</script>
