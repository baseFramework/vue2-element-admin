<template>
  <div class="demo-infinite-container">
    <mu-grid-list class="gridlist-demo">
      <!--<mu-sub-header>图片展示</mu-sub-header>-->
      <mu-grid-tile v-for="item in items" :rows=1 :cols=1>
        <img :src="item.listimg"/>
        <span class="datalist-span" slot="title">{{item.summary}}</span>
        <!--<span slot="subTitle">by <b>222</b></span>-->
      </mu-grid-tile>
    </mu-grid-list>
    <mu-flat-button v-if="isEnd === true"  label="已经加载完成" class="demo-flat-button" disabled/>
    <mu-flat-button v-if="isEnd === false" label="加载更多" @click="loadMore" class="demo-flat-button" primary/>
  </div>
</template>

<style lang="css">
  @import './datalist.styl';
</style>

<script>
  export default {
    data () {
      return {
        scroller: null,
        isEnd:false
      }
    },
    props: ['items','ends'],
    created: function () {
      this.items = this.items ? this.items : [];
      this.ends = this.ends ? this.ends : 0;
    },
    mounted () {
      this.scroller = this.$el;
     // this.ends =
      // console.log('length: '+this.items);
    },
    methods: {
      loadMore () {
        var _me = this;
        var dataindex = _me.ends + 10;
        if(dataindex > 60){
          this.isEnd = true;
          return;
        }
        setTimeout(function () {
          console.log(dataindex);
          _me.$emit('updatelist', dataindex);
        }, 200)

      }
    }
  }
</script>

