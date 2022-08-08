<template>
  <footer class="footer">
    <menu class="footer-list">
      <li>
        <a href="">OFFICIAL RULES</a>
      </li>
      <li>
        <a href="">PRIVACY POLICY</a>
      </li>
      <li>
        <a href="">FAQ</a>
      </li>
      <li>
        <a href="">HOW TO SPOT A SWEEPSTAKES SCAM</a>
      </li>
      <li>
        <a href="">JOIN/RENEW AARP NOW</a>
      </li>
      <li>
        <a href="">INFRINGEMENT NOTIFICATION PROCESS</a>
      </li>
    </menu>
    <div v-html="disclaimer" />
  </footer>
</template>

<script>
import axiosInstance from "@/services/services.js";

export default {
  name: "TheFooter",
  data() {
    return {
      copy: "",
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      axiosInstance
        .get("/footer.json")
        .then((response) => {
          console.log(response.data);
          this.copy = response.data;
        })
        .catch((err) => console.error(err));
    },
  },
  computed: {
    disclaimer() {
      return this.copy.disclaimer;
    },
  },
};
</script>
