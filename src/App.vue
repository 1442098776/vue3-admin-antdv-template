<script setup>
// 导入中文包
import zhCN from 'ant-design-vue/es/locale/zh_CN'
const theme = {
  token: {
    colorPrimary: '#e15536',
  },
}
</script>

<template>
  <!--组件库全局配置-->
  <a-config-provider :theme="theme" :locale="zhCN">
    <a-button type="primary">主色按扭</a-button>
    <StepBackwardOutlined />
    <StepForwardOutlined />

    <a-pagination :total="500" show-quick-jumper />
  </a-config-provider>
</template>

<style lang="" scoped></style>
