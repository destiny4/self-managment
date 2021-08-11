
<template>
  <div class="main-container">
    <Header class="header"></Header>
    <el-container class="self-absolute">
      <Menu :menu="routes" :collapse="false" />
      <el-container class="main-layout">
        <div class="nav-info">
          <SvgIcon @click="handBack" class="back" name="back"></SvgIcon>
          <span class="title">{{ name }}</span>
        </div>
        <ElMain>
          <router-view></router-view>
        </ElMain>
      </el-container>
    </el-container>
  </div>
</template>

<script lang='ts' setup>
import useTitle from '@/hooks/useTitle'
import { ElMain, ElContainer } from 'element-plus'
import Header from '@/components/layout/header.vue'
import Menu from '@/components/layout/sidemenu.vue'
import { routes } from '@/router'
import { useRouter } from 'vue-router'
import SvgIcon from '../SvgIcon/index.vue'
const name = useTitle()
const router = useRouter()
const handBack = () => {
  router.back()
}
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
  .back {
    margin-right: 10px;
  }
  .title {
    font-family: PingFangSC-Medium;
    font-size: 20px;
    color: #000000;
    letter-spacing: 0;
  }
}
</style>
  