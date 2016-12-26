<template>
  <div id="app">
    <div class="app_header">
      <data-header></data-header>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
  import DataHeader from '../../components/head/head.vue'
  export default {
    name: 'dash',
    components:{
      DataHeader,
    }
  }
</script>

