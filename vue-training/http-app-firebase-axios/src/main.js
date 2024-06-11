import { createApp } from 'vue'
import App from './App.vue'
import BaseCard from './shared/BaseCard.vue'
import BaseButton from './shared/BaseButton.vue'
import axios from 'axios'

const app = createApp(App)
app.config.globalProperties.$axios = axios
// axios.defaults.baseURL = 'https://capone-vue-training-default-rtdb.firebaseio.com/survey.json'
axios.defaults.baseURL = 'http://localhost:4000/addData'

axios.interceptors.request.use((config) => {
    console.log(config);
    return config;
});

// axios.interceptors.response.use((response) => {
//     console.log(response.data = { users: { title: 'admin', email: 'admin@mail.com' } })
//     return response;
// });


app.component('base-card', BaseCard)
app.component('base-button', BaseButton)
app.mount('#app')