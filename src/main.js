import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from '@/App.vue';
import router from '@/router';
import PrimeVue from 'primevue/config';
import InputText from 'primevue/inputtext';

import 'primeicons/primeicons.css';
import 'primevue/resources/themes/lara-dark-teal/theme.css';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(PrimeVue);
app.component('InputText', InputText);

app.mount('#app');
