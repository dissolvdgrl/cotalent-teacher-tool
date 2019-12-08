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

window.scores;

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})


// https://stackoverflow.com/questions/7667958/clearing-localstorage-in-javascript
// https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API
// https://github.com/MrRio/jsPDF