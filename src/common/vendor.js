import Vue from 'vue'

import {
  Container,
  Menu,
  Submenu,
  MenuItem,
  Header,
  Main,
  Footer,
  Aside,
  Form,
  FormItem,
  Input,
  Button,
  Tag,
  Badge,
  Table,
  TableColumn,
  Select,
  Option,
  Notification,
} from 'element-ui'

Vue.use(Container)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(Header)
Vue.use(Main)
Vue.use(Footer)
Vue.use(Aside)
Vue.use(MenuItem)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Button)
Vue.use(Tag)
Vue.use(Badge)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Select)
Vue.use(Option)

Vue.prototype.$notify = Notification
