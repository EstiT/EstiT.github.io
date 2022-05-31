import { createApp } from '../node_modules/vue'
import App from './App.vue'

const app = createApp(App)

import router from './router';
app.use(router);

app.mount('#app');