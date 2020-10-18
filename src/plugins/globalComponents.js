import ElementUI from 'element-ui'
import mavonEditor from 'mavon-editor'
import 'element-ui/lib/theme-chalk/index.css'
import 'mavon-editor/dist/css/index.css'

export default {
  install (Vue) {
    Vue.use(ElementUI)
    Vue.use(mavonEditor)
  }
}
