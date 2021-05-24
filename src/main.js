// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import {Button} from "element-ui"
import {Select} from "element-ui"
import {Container} from "element-ui"
import {Aside} from "element-ui"
import {Menu} from "element-ui"
import {Submenu} from "element-ui"
import {MenuItem} from "element-ui"
import {Dropdown} from "element-ui"
import {DropdownMenu} from "element-ui"
import {DropdownItem} from "element-ui"
import {Main} from "element-ui"
import {Table} from "element-ui"
import {TableColumn} from "element-ui"
import {MenuItemGroup} from "element-ui"
import {Header} from "element-ui";
import {Avatar} from "element-ui";
import {Pagination} from "element-ui";
import {Link} from "element-ui";
import {Tabs} from "element-ui";
import {TabPane} from "element-ui";
import $ from "jquery";
import {Input} from "element-ui";
import {DatePicker} from "element-ui";
import ECharts from "vue-echarts";
import "echarts/lib/chart/bar";
import {Carousel} from "element-ui";
import {CarouselItem} from "element-ui";
import {Image} from "element-ui";
import {Scrollbar} from "element-ui";
import {Popover} from "element-ui";
import {Steps} from "element-ui";
import {Step} from "element-ui";
import {Progress} from "element-ui";
import {Rate} from "element-ui";
import {Form} from "element-ui";
import {FormItem} from "element-ui";
import {Option} from "element-ui";
import {Drawer} from "element-ui";
import {Dialog,MessageBox} from "element-ui";



//全局注册组件
Vue.component("v-chart",ECharts)

Vue.use(Dialog)
Vue.use(Drawer)
Vue.use(Option)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Rate)
Vue.use(Progress)
Vue.use(Steps)
Vue.use(Step)
Vue.use(Popover)
Vue.use(Scrollbar)
Vue.use(Image)
Vue.use(CarouselItem)
Vue.use(Carousel)
Vue.use(DatePicker)
Vue.use(Input)
Vue.use(TabPane)
Vue.use(Tabs)
Vue.use(Link)
Vue.use(Pagination)
Vue.use(Avatar)
Vue.use(Header)
Vue.use(router)
Vue.use(Button)
Vue.use(Select)
Vue.use(Container)
Vue.use(Aside)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(Submenu)
Vue.use(DropdownItem)
Vue.use(DropdownMenu)
Vue.use(Dropdown)
Vue.use(Main)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(MenuItemGroup)



Vue.config.productionTip = false
//使用弹出确认框
Vue.prototype.$confirm = MessageBox.confirm


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
