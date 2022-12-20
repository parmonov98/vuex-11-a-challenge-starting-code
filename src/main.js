import { createApp } from 'vue';
import store from "./store/index.js";
import router from './router.js';
import App from './App.vue';
import BaseBadge from './components/ui/BaseBadge.vue';

const app = createApp(App)

app.use(router);
app.use(store);

import BaseSection from "./components/ui/BaseSection.vue";
import BaseButton from "./components/ui/BaseButton.vue";

app.component('base-badge', BaseBadge);
app.component('base-section', BaseSection);
app.component('base-button', BaseButton);

app.mount('#app');
