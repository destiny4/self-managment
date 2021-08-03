
<template>
  <div class="main-container">
    <Header class="header"></Header>
    <el-container class="self-absolute">
      <Menu :menu="test" :collapse="false" />
      <el-container class="main-layout">
        <div class="nav-info">
          {{ name }}
        </div>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang='ts' setup>
import useTitle from '@/hooks/useTitle'
import Header from '@/components/layout/header.vue'
import Menu from '@/components/layout/sidemenu.vue'
import test from '@/router/test'
const name = useTitle()
</script>

<style scoped lang='scss'>
$header-height: 56px;
.main-container {
  display: flex;
  flex-direction: column;
}
.header {
  color: #ffffff;
  letter-spacing: 0;
  font-family: PingFangSC-Semibold;
  height: $header-height;
  background: #004fe0;
}
.self-absolute {
  position: absolute;
  top: $header-height;
  bottom: 0;
  left: 0;
  right: 0;
}
.el-main {
  background-color: #e9eef3;
  color: #333;
}

.main-layout {
  flex-direction: column;
}
.nav-info {
  display: flex;
  align-items: center;
  height: $header-height;
  margin: 0 24px;
  background: #ffffff;
  box-shadow: inset 0 -1px 0 0 #e6e6e6;
  font-family: PingFangSC-Medium;
  font-size: 20px;
  color: #000000;
  letter-spacing: 0;
}
</style>
  