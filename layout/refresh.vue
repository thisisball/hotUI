<template>
  <div class="dr-refresh"
       @touchmove="moveHandler"
       @touchstart="startHandler"
       @touchend="endHandler"
       @scroll="scrollHandler">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name:'dr-refresh',
    props:{
      list:{
        type:Array,
        default(){
          return []
        }
      },
      distance:{
        type:Number,
        default:30
      },
      refresh:{
        type:String,
        default:'none'
      }
    },
    data(){
      return {
        move:0,
        start:0,
        startFlag:false,
        endFlag:false,
        end:0,
        showLoading:false
      }
    },
    mounted(){
      console.log(this.$el.offsetHeight);
    },
    methods:{
      moveHandler(e){
        this.showLoading = true;
        this.end = e.changedTouches[0].clientY - this.start;
      },
      startHandler(e){
        this.start = e.changedTouches[0].clientY;
        this.startFlag = true;
      },
      endHandler(e){
        let ends = Math.abs(this.end);
        this.showLoading = false
        if(this.end >0 ){
          if(ends > this.distance ){
            this.$emit('refreshAction');
          }
        }else{
          if(ends  > this.distance ){
            this.$emit('refreshAction');
          }
        }
      },
      scrollHandler(e){
        let cH = e.target.scrollTop + this.$el.offsetHeight;
        let sH = e.target.scrollHeight;
        console.log(cH,sH);
        if(cH >= sH){
          console.log(21);
          this.$emit('pullDown')
        }

        if(this.refresh){
          this.$emit('refresh')
          return false
        }
      },
    }
  }
</script>
<style lang="less" scoped>
  .dr-refresh{
    width:100%;
    height:200px;
    border:1px solid black;
    overflow-y: scroll;
  }
</style>
