<template>
  <div class="dr-toast" v-if="visible">
    <div :style="toastStyle" >
      {{message}}
    </div>
  </div>
</template>

<script>
  export default {
    name:'dr-toast',
    props:{
      type:{
        type:String,
        default:'none'
      },
      message:{
        type:String,
        default:''
      },
      position:{
        type:String,
        default:'center'
      },
      visible:{
        type:Boolean,
        default:false
      }
    },
    mounted(){
      console.log(this.message);
    },
    computed:{
      toastStyle(){
        return {

        }
      }
    },
    data(){
      return {

      }
    },
    methods:{

    }
  }
</script>

<style lang="less" scoped>
  .dr-toast{
    position: fixed;
    top:50%;
    left:30%;
    background:rgba(0,0,0,0.4);
    padding:6px 10px;
  }
</style>
