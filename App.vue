<template>
  <div>
    <TheHeader />
    <nav aria-role="navigation">
      <router-link to="/prelaunch">Prelaunch</router-link>
      <router-link to="/intro">Launched</router-link>
      <router-link to="/expired">Expired</router-link>
    </nav>
    <main id="container" class="container">
      <section class="main--section">
        <router-view />
      </section>
    </main>
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader.vue";
import TheFooter from "@/components/TheFooter.vue";
//import axiosInstance from "@/services/services.js";
//import copy from "@/assets/copy.json";

//console.log(copy);

export default {
  components: {
    TheHeader,
    TheFooter,
  },
  data() {
    return {
      publicPath: process.env.BASE_URL,
    };
  },
  // created() {
  //   axiosInstance
  //     .get("/copy")
  //     .then((response) => response.data)
  //     .catch((e) => {
  //       console.log(e);
  //     });
  // },
  /*mounted() {
    try {
      const response = this.$http.get(`@/assets/prelaunch.json`);
      console.log(response);
    } catch (e) {
      this.errors.push(e);
    }
  },*/
};
</script>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 0 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
