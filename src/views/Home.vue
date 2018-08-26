<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Weather/>
    <News/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Weather from "@/components/Weather.vue";
import News from "@/components/News.vue"; // @ is an alias to /src

@Component({
  components: {
    Weather,
    News
  }
})
export default class Home extends Vue {}
</script>
