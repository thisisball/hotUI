<template>
  <div class="dr-dialog" v-show="visible" @click.self="visible = false ">
      <div class="dr-dialog_container">


        <div class="" v-text="header"></div>


        <div class="" v-if="type ==='alert'">
          <div class="" v-text="content"></div>
        </div>

        <div class="" v-if="type === 'prompt' ">
          <input type="text">
          <button>confirm</button>
          <button>cancel</button>
        </div>

        <div class="" v-if="type === 'confirm' ">
          <p>{{message}}</p>
          <button>confirm</button>
          <button>cancel</button>
        </div>

        <div class="" v-if=" type === 'custom' ">
          <slot></slot>
        </div>


        <div class="" v-text="footer" @click="clickFootHandler"></div>


      </div>
  </div>
</template>

<script>
  export default {
    name:'dr-dialog',
    props:{
      type:{
        type:String,
        default:'custom',
        validator(value){
          return ['alert','prompt','confirm','custom'].indexOf(value) > -1
        }
      }
    },
    mounted(){
      this.visible = true;
    },
    data(){
      return {
        header:'header',
        content:'content',
        footer:'footer',
        visible:false,
        message:'123'
      }
    },
    methods:{
      clickFootHandler(e){
        this.$emit('close',e);
      }
    }
  }
</script>

<style lang="less" scoped>
  .dr-dialog{
    width:100%;
    height:100%;
    position: fixed;
    bottom:0;
    left:0;
    top:0;
    right:0;
    background: rgba(0,0,0,0.4);
    display: flex;
    justify-content: center;
    align-items: center;
    .dr-dialog_container{
      width:270px;
      background: #ffffff;
      border-radius: 4px;
    }
  }
</style>
