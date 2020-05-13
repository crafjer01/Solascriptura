import Vue from 'vue'
import App from './App.vue'
import router from './router';
import JQuery from 'jquery';
import {fb} from './firebase';

window.$ = window.JQuery = JQuery;

import 'popper.js';
import 'bootstrap';
import './assets/materialize.min.css';
import './assets/materialize.min.js';
import './assets/app.scss';

import Swal from 'sweetalert2';
window.Swal = Swal;

Vue.config.productionTip = false;

let app = '';

fb.auth().onAuthStateChanged(() => {
   
    if(! app ) {
       new Vue({
          router,
          render: h => h(App)
        }).$mount('#app') 
    }
});


