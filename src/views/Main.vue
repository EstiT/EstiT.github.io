<template>
  <Landing />
  <About />
  <Experience />
  <Education />
</template>

<script setup>
import About from '../components/About.vue';
import Education from '../components/Education.vue';
import Experience from '../components/Experience.vue';
import Landing from '../components/Landing.vue';
import { mobile, desktop } from '../utils/Breakpoints';

</script>

<style scoped lang="scss">
@import "../styles/mixins.scss";
</style>
