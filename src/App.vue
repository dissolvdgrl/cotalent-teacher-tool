<template>
  <div id="app">
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
