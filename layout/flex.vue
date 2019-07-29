<template>
  <div class="ft-layout" :style="nowStyle">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name:'dr-flex',
    props:{
      direction:{
        type:String,
        default:'row'
      },
      wrap:{
        type:String,
        default:'nowrap'
      },
      justify:{
        type:String,
        default:'space-around'
      },
      align:{
        type:String,
        default:'center'
      },
      alignItem:{
        type:String,
        default:'stretch'
      }
    },
    computed:{
      nowClass(){

      },
      nowStyle(){
        return {
          'flex-direction':this.direction,
          'justify-content':this.justify
        }
      }
    }
  }
</script>

<style lang="less" scoped>
  .ft-layout{
    display: flex;
    width:100%;
    height:100%;
  }
</style>
