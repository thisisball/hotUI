<template>
    <div class="dr-search">
      <input type="text"
             placeholder="search"
             class="dr-search_input"
             :style="inputStyle"
             @focus="focusHandler"
             @blur="blurHandler"/>
      <span v-if="showCancelBtn"
            class="dr-search_text">取消</span>
    </div>
</template>

<script>
  export default {
    name:'dr-search',
    props:{},
    data(){
      return {
        showCancelBtn:false
      }
    },
    computed:{
      inputStyle(){
        return {
          width: this.showCancelBtn ? '80%' : '100%'
        }
      }
    },
    methods:{
      focusHandler(e){
        this.showCancelBtn = true;

      },
      blurHandler(e){
        this.showCancelBtn = false;
      }
    }
  }
</script>

<style lang="less" scoped>
  .dr-search{
    height:30px;
    width:100%;
    .dr-search_input{
      height:100%;
      border:1px solid #f0f0f0;
      outline: none;
      border-radius: 4px;
    }

    .dr-search_input:focus{
      transition:  width linear 1s,transform 2s;
      /*animation:ani 1s;*/
      width:80%;
    }


    .dr-search_text{
      width:20%
    }

  }
  .dr-search:before{

  }

  @keyframes ani {
    0%   {background: red;}
    25%  {background: yellow;}
    50%  {background: blue;}
    100% {background: green;}
  }



</style>
