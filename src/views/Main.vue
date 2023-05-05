<template>
  <Landing />
  <About />
  <Experience />
</template>

<script setup>
import About from '../components/About.vue';
import Experience from '../components/Experience.vue';
import Landing from '../components/Landing.vue';
import { mobile, desktop } from '../utils/Breakpoints';

</script>

<style scoped lang="scss">
@import "../styles/mixins.scss";
</style>
