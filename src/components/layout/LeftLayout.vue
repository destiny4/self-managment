
<template>
  <div class="main-container">
    <el-aside class="all-absolute aside">Aside</el-aside>
    <el-container class="all-absolute flex-column left">
      <header>Header123</header>
      <el-container class="main-layout">
        <div class="nav-info">{{ name }}</div>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang='ts' setup>
import useTitle from '@/hooks/useTitle'
const name = useTitle()
</script>

<style scoped lang="scss">
$aside-width: 232px;
.main-container {
  display: flex;
}
.aside{
  width:$aside-width
}
header {
  color: #ffffff;
  letter-spacing: 0;
  font-family: PingFangSC-Semibold;
  height: 56px;
  background: #004fe0;
}
.flex-column{
  flex-direction: column;
}
.all-absolute {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
.left{
  left:$aside-width
}
.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
}

.main-layout {
  flex-direction: column;
}
.nav-info {
  height: 56px;
  background: #ffffff;
  box-shadow: inset 0 -1px 0 0 #e6e6e6;
}
</style>
  