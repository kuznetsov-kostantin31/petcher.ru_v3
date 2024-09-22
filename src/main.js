import { createApp } from 'vue'
import '../src/shared/styles/global.css'
import App from './app/App.vue'
import { router } from './app/providers/index'
const app = createApp(App)

app.use(router)
app.mount('#app')
