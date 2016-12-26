<template>
  <div id="app">
    <div class="app_header">
      <data-header></data-header>
    </div>
    <div class="app_content">
      <div class="app_nav">
        <side-nav></side-nav>
      </div>
      <div class="app_text">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>
  require('./dash.css')
  import DataHeader from '../../components/head/head.vue'
  import SideNav from '../../components/navi/navi.vue'
  export default {
    name: 'dash',
    components: {
      DataHeader,
      SideNav
    }
  }
</script>

