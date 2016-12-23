<template>
  <mu-appbar v-bind:title="title"></mu-appbar>
</template>

<style lang="stylus" scoped>
  @import './header.styl';
</style>
<script>
  export default {
    data () {
      return {
        title: '果壳'
      }
    }
  }
</script>
