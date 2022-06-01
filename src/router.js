import { createRouter, createWebHistory } from 'vue-router';

import SiteTemp from './views/SiteTemp.vue';
import Results from './views/Results.vue';
import PathNotFound from './views/PathNotFound.vue';

const router = createRouter({
	history: createWebHistory('/'),
	routes: [
		{
			path: '/',
			component: SiteTemp,
			name: 'SiteTemp',
		},
        // 	{
		// 	path: '/results',
		// 	component: Results,
		// 	name: 'results',
		// },
		{
			path: '/:pathMatch(.*)*',
			component: PathNotFound 
		},
	],
});

export default router;
