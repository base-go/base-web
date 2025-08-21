import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import ui from '@nuxt/ui/vue-plugin'
import './plugins/prism'
import Prism from './plugins/prism'

const app = createApp(App)

// Add prism directive for automatic syntax highlighting
app.directive('prism', {
  mounted(el) {
    Prism.highlightAllUnder(el)
  },
  updated(el) {
    Prism.highlightAllUnder(el)
  }
})

app
  .use(router)
  .use(ui)
  .mount('#app')
