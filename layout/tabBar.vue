<template>
  <div class="dr-tab">
      <div class="dr-tab_item" v-for="(item,index) in list" @click="selectTabHandler(item,$event)">
        <img :src="item.src" alt="">
        <p class="dr-tab_item--text" v-text="item.title"></p>
      </div>
  </div>
</template>

<script>
  export default {
    name:'dr-tab',
    props:{
      tabList:{
        type:Array,
        default(){
          return []
        }
      }
    },
    data(){
      return {
        list:[
          {title:'icon',src:'src'},
          {title:'icon',src:'123456'},
          {title:'icon',src:'123456'},
          ]
      }
    },
    methods:{
      selectTabHandler(item,e){
        let params = {
          item:item,
          event:e
        };
        this.$emit('selectTab',params)
      }
    }

  }
</script>

<style lang="less" scoped>
  .dr-tab{
    position:fixed;
    bottom:0;
    height:40px;
    width:100%;
    border-top:1px solid #f0f0f0;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    .dr-tab_item{
      padding-bottom:4px;
      .dr-tab_item--text{
        font-size: 14px;
        color:#666;
      }
    }
  }
</style>
