// 当前文件用于把图标组件注册成全局组件
import { StepBackwardOutlined, StepForwardOutlined } from '@ant-design/icons-vue'

// 注册全局组件
const icons = [StepBackwardOutlined, StepForwardOutlined]

// app.use({install(){}})
export default {
  install(app) {
    // 遍历图标集合
    icons.forEach((icon) => {
      // 注册全局组件
      app.component(icon.displayName, icon)
    })
  },
}
