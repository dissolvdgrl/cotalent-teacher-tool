<template>
  <div id="app">
    <hr>
    <router-link to="/">Start</router-link>
    <router-link to="/survey">Survey</router-link>
    <router-link to="/results">Results</router-link>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
import start from './components/Start.vue';
import survey from './components/Survey.vue';
import results from './components/Results.vue';

export default {
  name: 'app',
  components: { survey, results }
}
</script>

<style lang="scss">
  @import '/assets/sass/main.scss'; 
</style>
