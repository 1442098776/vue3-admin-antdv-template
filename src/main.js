import App from './App.vue'

import { createApp } from 'vue'
import Icons from './components/Icons'

const app = createApp(App)
app.use(Icons)

app.mount('#app')
