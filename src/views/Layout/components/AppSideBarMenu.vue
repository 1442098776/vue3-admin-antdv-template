<script lang="jsx">
// jsx 语法: jsx = js + xml(=html),
import { defineComponent, h, resolveComponent } from 'vue'
export default defineComponent({
  name: 'AppSideBarMenu',
  setup() {
    // 返回一个函数，函数返回一个jsx(不用写template)
    return () => (
      <a-menu theme="light" mode="inline">
        <a-sub-menu title={'基础数据管理'} key="1" icon={h(resolveComponent('HomeOutlined'))}>
          <a-menu-item key="11">机构管理</a-menu-item>
          <a-menu-item key="12">机构作业范围</a-menu-item>
          <a-menu-item key="13">运费管理</a-menu-item>
        </a-sub-menu>
        <a-sub-menu title={'国辆管理'} key="2" icon={h(resolveComponent('PartitionOutlined'))}>
          <a-menu-item key="21">车辆管理</a-menu-item>
          <a-menu-item key="22">车辆列表</a-menu-item>
          <a-menu-item key="23">回车管理</a-menu-item>
        </a-sub-menu>
      </a-menu>
    )
  },
})
</script>

<style lang="scss" scoped></style>
