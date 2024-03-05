import {createApp} from 'vue'
import App from './App.vue'
import './style.css';
import PrimeVue from 'primevue/config'
import 'primevue/resources/themes/aura-light-green/theme.css'
import Toast from 'primevue/toast'
import Button from 'primevue/button'
import ToastService from 'primevue/toastservice'


const app = createApp(App)
app.use(PrimeVue)
app.use(ToastService)

app.component('Button', Button)
app.component('Toast', Toast)

app.mount('#app')