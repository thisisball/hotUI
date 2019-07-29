<template>
  <div class="dr-sheet"  v-show="visible" @click.self="visible = false">
    <div class="dr-sheet_container" :style="positionStyle">



      <dr-list></dr-list>
      <!--<div v-for="item in list">-->
        <!--{{item.name}}-->
      <!--</div>-->

      <div class="dr-sheet_footer">
        <button>cancel</button>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name:'dr-sheet',
    props:{
      position:{
        type:String,
        default:'bottom'
      }
    },
    data(){
      return {
        list:[
          {name:'213',title:'123'},
          {name:'213',title:'123'},
          {name:'213',title:'123'},
          {name:'213',title:'123'},
        ],
        visible:true
      }
    },
    computed:{
      positionStyle(){
        if(this.position === 'left'){
          return {
            'width':'60%',
            'height':'100%',
            'left':'0',
            'bottom':'0',
            "top":'0'
          }
        }else if(this.position === 'right'){
          return {
            'width':'60%',
            'height':'100%',
            'right':'0',
            'bottom':'0',
            "top":'0'
          }
        }else{
          return {
            'width':'100%',
            'left':'0',
            'bottom':'0',
            "right":'0'
          }
        }
      }
    },
    methods:{

    }
  }
</script>

<style lang="less" scoped>
  .dr-sheet{
    position: fixed;
    bottom:0;
    top:0;
    left:0;
    right:0;
    width:100%;
    height:100%;
    background: rgba(0,0,0,0.4);
    .dr-sheet_container{
      background: #ffffff;
      position: fixed;
    }
  }
</style>
