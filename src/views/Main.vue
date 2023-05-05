<template>
  <Landing />
  <About />
</template>

<script setup>
import About from '../components/About.vue';
import Landing from '../components/Landing.vue';
import { mobile, desktop } from '../utils/Breakpoints';

</script>

<style scoped lang="scss">
@import "../styles/mixins.scss";
</style>
