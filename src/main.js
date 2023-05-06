import { createApp } from '../node_modules/vue';
import VueGtag from "vue-gtag";
import App from './App.vue';

const app = createApp(App);

app.use(VueGtag, {
    config: { id: "G-619LEKWW4C" }
});

app.mount('#app');