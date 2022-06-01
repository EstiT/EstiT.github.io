<template>
	<Results v-if="isResults" />
	<SiteTemp v-else />
</template>

<script setup>
import SiteTemp from './views/SiteTemp.vue'
import Results from './views/Results.vue';
import { computed } from '@vue/runtime-core';

const isResults = computed(() => window?.location?.pathname?.includes('results'));

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
