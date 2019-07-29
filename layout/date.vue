<template>
  <div class="">
    <div class="">
      <table>
        <tbody>
          <tr>
            <td v-for="row in rows"></td>
          </tr>
        </tbody>
      </table>

    </div>

  </div>
</template>

<script>
  export default {
    name:'',
    props:{
      startDayOfWeek:{
        type:Number,
        default:7,
        validator(value){
          return value>=1 && value <=7;
        }
      }
    },
    mounted(){

    },
    data(){
      return{
        rows:[],
        month:2,
        year:2018,
        day:30,
        offset:0
      }
    },
    methods:{
      getCurrentTime(){
        let date = new Date();
        return {
          year:date.getFullYear(),
          month:date.getMonth()+1
        }
      },
      createDatePanel(){
        let arr = [1,3,5,7,8,10,12];
        let arr1 = [4,6,9,11];
        if(this.isLeapYear() && this.month == 2 ){
            this.day = 28;
        }

      },

      isLeapYear(){
        if (((Year % 4)==0) && ((Year % 100)!=0) || ((Year % 400)==0)) return true;
        else false
      },

      offsetDay(){
        this.offset = new Date().getDay(); // 0 -6

      },
      preYear(date,count=1){
        return new Date().getFullYear() - count;
      }










    }
  }
</script>
