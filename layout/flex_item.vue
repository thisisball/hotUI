<template>
  <div class="ft-flexItem">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name:'dr-fitem',
    props:{

    },
    data(){
      return {

      }
    },
    computed:{

    }
  }
</script>

<style lang="less" scoped>
  @import "../common/style/common.less";
  .ft-flexItem{
    display: flex;
    overflow: hidden;
    width:100%;
    height:100%;
    padding:4px 6px;
    background: @background;

  }
</style>
