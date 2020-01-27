import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue';
import Survey from './components/Survey.vue';
import Start from './components/Start.vue';
import Results from './components/Results.vue';

Vue.use(VueRouter); // routing is now enabled

const routes = [
  { path: '/', component: Start },
  { path: '/survey', component: Survey },
  { path: '/results', component: Results }
];

const router = new VueRouter({
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  routes,
  mode: 'history' // removes the # in url
});

Vue.scores_a = Vue.prototype.scores_a = []; // inner chart
Vue.scores_b = Vue.prototype.scores_b = []; // outer chart

// SCORES ARRAYS
Vue.characteristicAScore = Vue.prototype.characteristicAScore = [];

Vue.charA = Vue.prototype.charA = [0.041, 0.122, 0, 0.122, 0.061, 0, 0.041, 0, 0.041, 0, 0, 0, 0, 0, 0, 0, 0.061, 0, 0, 0.041, 0, 0.122, 0, 0, 0, 0.061, 0, 0, 0, 0, 0, 0.122, 0, 0, 0.041, 0.061, 0.061, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
Vue.charB = Vue.prototype.charB = [0.286, 0, 0, 0, 0, 0, 0, 0.286, 0, 0, 0.429, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
Vue.charC = Vue.prototype.charC = [0.133, 0, 0, 0, 0.2, 0, 0, 0.133, 0.133, 0, 0.2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
Vue.charD = Vue.prototype.charD = [0, 0, 0.375, 0, 0, 0, 0.125, 0, 0, 0.125, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.188, 0, 0, 0, 0, 0.188, 0, 0, 0, 0];
Vue.harE = Vue.prototype.charE = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.231, 0.115, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.231, 0.231, 0.115, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.077, 0, 0, 0, 0, 0, 0, 0];
Vue.charF = Vue.prototype.charF = [0, 0, 0, 0, 0, 0, 0.074, 0.074, 0.074, 0.074, 0, 0, 0, 0, 0, 0, 0.111, 0, 0, 0.074, 0, 0, 0, 0, 0, 0.111, 0, 0, 0, 0, 0, 0, 0.111, 0.074, 0.074, 0, 0, 0.074, 0, 0, 0, 0, 0.074, 0, 0, 0, 0, 0, 0];
Vue.charG = Vue.prototype.charG = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0.067, 0, 0, 0.1, 0, 0, 0.1, 0, 0.067, 0.1, 0.067, 0, 0, 0, 0, 0, 0, 0.2, 0.1, 0, 0, 0, 0, 0, 0, 0, 0.1, 0, 0, 0.1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
Vue.charH = Vue.prototype.charH = [0, 0, 0, 0, 0, 0.182, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.091, 0, 0.061, 0, 0, 0, 0, 0.182, 0.091, 0.182, 0, 0, 0, 0, 0, 0.091, 0, 0, 0.061, 0, 0, 0, 0, 0, 0, 0, 0, 0.061, 0, 0, 0, 0, 0, 0];
Vue.charI = Vue.prototype.charI = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.214, 0, 0.429, 0, 0, 0.214, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.143, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
Vue.charJ = Vue.prototype.charJ = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.167, 0, 0.25, 0.167, 0, 0, 0.25, 0.167, 0, 0, 0, 0, 0, 0, 0];
Vue.charK = Vue.prototype.charK = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.095, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.143, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.095, 0.143, 0.143, 0.143, 0.095, 0, 0.143, 0, 0, 0, 0, 0];
Vue.charL = Vue.prototype.charL = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.4, 0.4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.2, 0, 0, 0, 0];
Vue.charM = Vue.prototype.charM = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.069, 0.103, 0, 0.207, 0.207, 0.207, 0.207];

// Descriptions
Vue.descA = Vue.prototype.descA = '';

window.scores;

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});

// https://github.com/MrRio/jsPDF