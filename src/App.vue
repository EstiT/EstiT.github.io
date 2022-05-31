<script setup>
import SiteTemp from './views/SiteTemp.vue'
import { useRoute, useRouter } from 'vue-router';
import { onMounted } from 'vue';
const route = useRoute();

</script>

<template>
  <div class="router-wrapper">
		<router-view v-slot="{ Component }">
			<transition mode="out-in">
				<component :is="Component" class="router-component" />
			</transition>
		</router-view>
	</div>
</template>

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
