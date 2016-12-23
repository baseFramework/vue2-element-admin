<template>
  <div>
    <com-head></com-head>
    <com-navi v-bind:current="math"></com-navi>
    <com-datalist v-bind:items="mathlist" v-bind:ends="mathend" v-on:updatelist="updatemathlist"></com-datalist>
  </div>
</template>

<script>
  import head from '../../components/header/header.vue'
  import navi from '../../components/navi/navi.vue'
  import datalist from '../../components/datalist/datalist.vue'
  export default {
    name: 'math',
    data () {
      return {
        mathlist: [],
        mathend: 0
      }
    },
    components: {
      comHead: head,
      comNavi: navi,
      comDatalist: datalist
    },
    created: function () {
      // `this` 指向 vm 实例
      this.$store.dispatch('SET_MATHLIST', 0)
      this.$store.dispatch('SET_CURRENT', 'math');
    },
    computed: {
      mathlist(){
        return this.$store.getters.getMathList
      },
      mathend(){
        console.log(this.$store.getters.getMathEnd);
        return this.$store.getters.getMathEnd
      }
    },
    methods: {
      updatemathlist: function (start) {
        console.log('updatemathlist');
        this.$store.dispatch('SET_MATHEND', start);
        this.$store.dispatch('SET_MATHLIST', start)
      }
    }
  }
</script>
