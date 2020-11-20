<template>
  <div class="home">
    <Banner />
    <div class="indexMain container" v-cloak>
      <FlatCard />
    </div>
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import Banner from "@/components/Banner.vue";
import HelloWorld from "@/components/HelloWorld.vue";
import FlatCard from "../components/FlatCard.vue";

export default {
  name: "Home",
  components: {
    Banner,
    FlatCard,
    HelloWorld,
  },
};
</script>
<style lang="scss">
.indexMain {
  margin-top: 80px;
}
</style>
