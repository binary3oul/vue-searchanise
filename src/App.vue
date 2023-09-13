<template>
  <div id="app">
    <search-component></search-component>
  </div>
</template>

<script>

import SearchComponent from '@/components/SearchComponent.vue';

export default {
  name: 'App',
  // mounted() {
  //   const script = document.createElement('script');
  //   script.src = 'https://searchserverapi.com/js/init.js';
  //   script.async = true;
  //   document.body.appendChild(script);
  // },

  components: {
    SearchComponent
  },
}
</script>

<style>

</style>
