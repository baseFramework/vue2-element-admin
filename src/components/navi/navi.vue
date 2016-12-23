<template>
  <div>
    <mu-tabs :value="current" @change="handleTabChange">
      <mu-tab value="index" title="生物" @click="handleActive"></mu-tab>
      <mu-tab value="math" title="数学" @click="handleActive"></mu-tab>
      <mu-tab value="internet" title="互联网" @click="handleActive"></mu-tab>
      <mu-tab value="interview" title="专访" @click="handleActive"></mu-tab>
    </mu-tabs>
  </div>
</template>

<script>
  export default {
    props:['current'],
    computed:{
      current(){
        console.log(this.$store.getters.getCurrent);
        return this.$store.getters.getCurrent
      }
    },
    methods: {
      handleTabChange (val) {
        this.activeTab = val;
      },
      handleActive () {
        var tabStr = this.activeTab;
        console.log(tabStr + '')
        this.$store.dispatch('SET_CURRENT', tabStr);
        this.$store.dispatch('SET_CLEARBIOLIST');
        this.$store.dispatch('SET_CLEARMATHLIST');
        location.href= '/#/'+tabStr
      }
    }
  }
</script>
