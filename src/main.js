import App from './App.vue'

import { createApp } from 'vue'
import Icons from './components/Icons'
import '@/styles/main.less'
import router from './router'

const app = createApp(App)
app.use(Icons)
app.use(router)

app.mount('#app')
