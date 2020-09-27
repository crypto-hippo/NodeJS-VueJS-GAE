import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import './assets/scss/main.scss';
import axios from 'axios';

Vue.config.productionTip = false

axios.get('/api').then(resp => {
    console.log(resp);
}).catch(error => {
    console.log(error);
})

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
