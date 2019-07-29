<template>
  <div class="dr-list">
    <div class="dr-list_item" v-for="item in list">
      <p v-text="item.name"></p>
      <p v-text="item.action" @click="actionHandler(item,$event)"></p>
    </div>
  </div>
</template>

<script>
  export default {
    name:'dr-list',
    props:{
      list:{
        type:Array,
        default(){
          return []
        }
      }
    },
    data(){
      return {}
    },
    methods:{
      actionHandler(item,e){
        let params = {item,e};
        this.$emit('action',params);
      }
    }
  }
</script>

<style lang="less" scoped>
  .dr-list{
    .dr-list_item{
      height:44px;
      border-bottom:1px solid #f0f0f0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding:0 8px;
      font-size: 14px;
      color:#666;
    }

  }
</style>
