import Toast from './toast.vue';
import Vue from 'vue';

let instanceArr = [];
const extendToast = Vue.extend(Toast);



let instance = new extendToast({
  el:document.createElement('div')
});




extendToast.prototype.close = function(){
  instance.visible = false
};
let instanceToast = function(options = {}){
  console.log(options);
  instance.visible = true;
  instance.message = options.message || '';
  instance.position = options.positin || 'center';
  instance.type = options.type || 'none';
  document.body.appendChild(instance.$el);

  instance.timer = setTimeout( ()=>{
    instance.close();
  },5000)

};

export default instanceToast;




