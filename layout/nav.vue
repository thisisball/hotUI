<template>
  <div :class="navClass" :style="[navFontColor,navStyle]">
    <div class="dr-nav_left" v-if="hasLeft">
      <slot name="left"></slot>
    </div>
    <div class="dr-nav_center" v-if="hasCenter">
      <slot name="center"></slot>
    </div>
    <div class="dr-nav_right" v-if="hasRight">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name:'dr-nav',
    props:{
      type:{
        type:String,
        default:'light',
        validator(value){
          return ['light','dark','custom'].indexOf(value) > -1
        }
      },
      hasLeft:{
        type:Boolean,
        default:true
      },
      hasRight:{
        type:Boolean,
        default:true
      },
      hasCenter:{
        type:Boolean,
        default:true
      }
    },
    data(){
      return {}
    },
    computed: {
      navClass(){
        return [`dr-nav_${this.type}`]
      },
      navFontColor(){
        return this.type ==='dark' ? {'color':'#ffffff'} : {'color':'#666'}
      },
      navStyle(){
        return {
          'justify-content': !this.hasRight ? 'start' : 'space-between'
        }
      }

    },
    // methods:{
    //   clickLeftIconHandler(e){
    //     this.$emit('clickLeft',e)
    //   }
    // }

  }
</script>


<style lang="less" scoped>
  @import '../common/style/common.less';

  .dr-nav_light{
    background: @lightBack;
    .dr-nav()
  }
  .dr-nav_dark{
    background: @darkBack;
    .dr-nav()
  }

  .dr-nav{
    display: flex;
    height:45px;
    width:100%;
    align-items: center;
    color: #ffffff;
    .dr-nav_left{
    }
    .dr-nav_center{
    }
    .dr-nav_right{
    }

  }
</style>
