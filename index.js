import Button from './button/button.vue';
import Flex from './layout/flex.vue';
import FlexItem from './layout/flex_item.vue';
import Nav from './layout/nav.vue';
import Popover from './layout/popover.vue';
import Search from './layout/search.vue';
import TabBar from './layout/tabBar.vue';
import SelectTab from './layout/selectTab.vue';
import CheckBox from './layout/checkbox.vue';
import Carousel from './layout/carousel.vue';
import Swiper from './layout/swiper.vue';
import Refresh from './layout/refresh.vue';
import Toast from './toast/index.js';
import Dialog from './toast/dialog.vue';
import ActionSheet from './layout/actionSheet.vue';
import List from './layout/list.vue';
import Picker from './layout/picker.vue';


const install = function(Vue, config = {}) {
  if (install.installed) return;
  Vue.component(Button.name, Button);
  Vue.component(Flex.name,Flex);
  Vue.component(FlexItem.name,FlexItem);
  Vue.component(Nav.name,Nav);
  Vue.component(Popover.name,Popover);
  Vue.component(Search.name,Search);
  Vue.component(TabBar.name,TabBar);
  Vue.component(SelectTab.name,SelectTab);
  Vue.component(CheckBox.name,CheckBox);
  Vue.component(Carousel.name,Carousel);
  Vue.component(Swiper.name,Swiper);
  Vue.component(Refresh.name,Refresh);
  Vue.component(Dialog.name,Dialog);
  Vue.component(ActionSheet.name,ActionSheet);
  Vue.component(List.name,List);
  Vue.component(Picker.name,Picker);


  Vue.$toast = Vue.prototype.$toast = Toast;

};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
};


export default {
  install
}





