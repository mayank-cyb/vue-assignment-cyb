<template>
  <div class="reg-thanks">
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
          <p>{{ selectedFitnessGroup }}</p>
          <div
            class="radio-set"
            v-for="(radioValue, index) in radioValues"
            :key="index"
          >
            <base-radio
              :id="createRadioId(radioValue)"
              :class="`radio-${index + 1}`"
              name="fitness group"
              :model-value="radioValue"
              @change="
                (value) => {
                  selectedFitnessGroup = value;
                }
              "
              :label="createRadioId(radioValue)"
            ></base-radio>
            <label :for="createRadioId(radioValue)">
              <span class="big">{{
                `page_copy.fitness_group[radioValue].big`
              }}</span>
              <span class="small">{{
                `page_copy.fitness_group[radioValue].small`
              }}</span>
            </label>
          </div>
        </div>
      </div>
      <div class="step-2">
        <div class="content-top">
          <h2 class="orange" v-html="pageCopy.headline_step2" />
          <div v-html="pageCopy.body_step2" />
        </div>
        <div class="content-bottom">
          <!--base-input
            type="text"
            placeholder="First Name"
            v-model="friendsFname"
          ></base-input>
          <base-input
            type="email"
            placeholder="Email Address"
            v-model="friendsEmails"
          ></base-input-->
        </div>
      </div>
      <div class="step-3">
        <div class="content-top">
          <h2 class="orange" v-html="pageCopy.headline_step3" />
          <div v-html="pageCopy.body_step3" />
        </div>
        <div class="content-bottom">
          <base-input
            type="phone"
            placeholder="Mobile Number"
            v-model="phoneNumber"
          ></base-input>
        </div>
      </div>
    </div>
    <the-submit-button routeTo="hub">Submit</the-submit-button>
  </div>
</template>

<script>
import axiosInstance from "@/services/services.js";
import BaseRadio from "@/components/BaseComponents/BaseRadio.vue";
import BaseInput from "@/components/BaseComponents/BaseInput.vue";
import TheSubmitButton from "@/components/TheSubmitButton.vue";

const container = document.getElementById("container");

export default {
  name: "RegThanksView",
  components: {
    BaseRadio,
    BaseInput,
    TheSubmitButton,
  },
  data() {
    return {
      // friendsFname: [],
      // friendsEmailAddr: [],
      page_name: "reg_thanks",
      radioValues: ["new soles", "casual walkers", "fit fanatics"],
      selectedFitnessGroup: "",
      phoneNumber: "",
      page_copy: "",
    };
  },
  beforeRouteLeave(to, from, next) {
    container.classList.remove(this.$route.meta.className);
    next();
  },
  created() {
    this.$watch(
      () => {
        if (this.$route.name == "reg_thanks") {
          container.classList.add(this.$route.meta.className);
        } else {
          return;
        }

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
    createRadioId(val) {
      return val.toLowerCase().split(" ").join("_");
    },
  },
  computed: {
    pageCopy() {
      return this.page_copy;
    },
  },
};
</script>
