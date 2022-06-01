<template>
	<Results v-if="isResults" />
	<SiteTemp v-else />
</template>

<script setup>
import SiteTemp from './views/SiteTemp.vue'
import Results from './views/Results.vue';
import { computed } from '@vue/runtime-core';

const isResults = computed(() => window?.location?.pathname?.includes('results'));

console.log(window.location.href)
console.log(isResults.value)
if (isResults.value) window.history.pushState("", "", "/" + window.location.href.substring(window.location.href.lastIndexOf('/') + 1).split("?")[0]);
</script>

<style>
body {
	margin: 0;
}

#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}
</style>
