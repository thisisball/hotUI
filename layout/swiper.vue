<template>
  <div class="dr-swiper" style="width:100%;height:100%;display: flex;">

      <div class="container" style="width:100%;height:100px;overflow: hidden;border:1px solid red;">
        <div class="" style="width:100%;height:100px;"

             v-for="(item,index) in list"
             v-show="index == current "
             @touchstart="startHandler"
             @touchmove="moveHandler"
             @touchend="endHandler">
          {{item.title}}
        </div>

      </div>
    <div class="" v-for="(item,index) in list"
         style="width:10px;height:10px;border:1px solid red;border-radius: 100%;"
         @click="selectItemHandler(item,index)">

    </div>
    <!--:style="{-->
    <!--msTransform: `translateX(${ translate }px) scale(${ scale })`,-->
    <!--webkitTransform: `translateX(${ translate }px) scale(${ scale })`,-->
    <!--transform: `translateX(${ translate }px) scale(${ scale })`-->
    <!--}"-->


  </div>
</template>

<script>
  export default {
    name:'dr-swiper',
    props:{
      autoPlay:{
        type:Boolean,
        default:true
      },
      setInterval:{
        type:Number,
        default:5000
      }
    },
    data(){
      return {
        list:[
          {title:'234'},
          {title:'2343'},
          {title:'234222'},
          {title:'23444444'},
        ],
        current:2,
        timer:null,
        translate:300,
        scale:1
      }
    },
    mounted(){
      this.startTimer();
    },
    methods:{
      startHandler(e){
        console.log(e);
        clearInterval(this.timer)
      },
      moveHandler(e){

      },
      endHandler(e){
        this.startTimer();
      },
      startTimer(){
        this.timer =  setInterval( ()=>{
          this.current ++;
          if(this.current >= this.list.length){
            this.current = 0;
          }
        },5000 )
      },
      selectItemHandler(item,index){
        clearInterval(this.timer);
        this.current = index;
        this.startTimer();
      }

    }
  }
</script>

<style scoped lang="less">

</style>
