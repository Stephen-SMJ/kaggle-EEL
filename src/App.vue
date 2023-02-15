<template>
  <div id="app">
      <navbar></navbar>
      <router-view />
      <end></end>
  </div>
</template>

<script>
import navbar from '@/components/nav.vue'
import end from "@/components/footer"
export default {
  name: 'App',
  components: {
      navbar,
      end,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
