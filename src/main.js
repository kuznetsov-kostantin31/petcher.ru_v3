import { createApp } from 'vue';
import App from './app/App.vue'; 
import { router } from './app/providers/index'; 
import '../src/shared/styles/global.css'; 

const app = createApp(App);

app.use(router);

app.mount('#app');