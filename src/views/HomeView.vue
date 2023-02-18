<template>
  <el-container class="common-layout">
    <el-header>
      <el-row :gutter="20">
        <el-col :span="4"><img class="icon" src="../assets/logo.png" alt="" /></el-col>
        <el-col :span="16" class="title">后台管理</el-col>
        <el-col :span="4" class="user"><span>biandan</span></el-col>
      </el-row>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <el-menu router active-text-color="#ffd04b" class="el-menu-vertical-demo" default-active="defaultActive" text-color="#fff" @select="handleSelect">
          <el-menu-item v-for="item in menuList" :key="item.path" :index="item.path">
            {{ item.meta.title }}
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main>
        <div class="tabs-wrapper">
          <router-link v-for="item in openedViews" :key="item.path" :to="item.path">
            <span class="tab-container">
              <span>{{ item.title }}</span>
              <el-icon @click.prevent="handleClose(item)"><Close /></el-icon>
            </span>
          </router-link>
        </div>
        <div class="content-container">
          <router-view></router-view>
        </div>
      </el-main>
    </el-container>
    <el-footer>赣ICP备2023000728号-1</el-footer>
  </el-container>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
import { useRouter } from 'vue-router'
import { OpenedView, InitData } from '@/types/home'
import { el } from 'element-plus/es/locale'

export default defineComponent({
  name: 'HomeView',
  components: {},
  setup() {
    const data = reactive(new InitData())
    const router = useRouter()
    const menuList = router.getRoutes().filter((item) => item.meta.isShow)
    console.log(menuList)

    const handleSelect = (index: string) => {
      const isOpened = data.openedViews.some((item) => item.path === index)
      if (!isOpened) {
        const route = menuList.find((item) => item.path === index)
        const item: OpenedView = { path: index, title: route?.meta.title as string }
        data.openedViews.push(item)
      }
      console.log(data.openedViews, 'data.openedViews')
    }

    const handleClose = (item: OpenedView) => {
      const { path } = item
      const { openedViews } = data
      const index = openedViews.findIndex((item) => item.path === path)
      openedViews.splice(index, 1)
      const length = openedViews.length
      if (length !== 0) {
        data.defaultActive = index === length ? openedViews[index - 1].path : openedViews[index].path
        router.push(data.defaultActive)
      } else {
        data.defaultActive = ''
        router.push('/home')
      }
    }

    return { ...toRefs(data), menuList, handleSelect, handleClose }
  },
})
</script>

<style scoped lang="scss">
@import '@/styles/variables.scss';
.common-layout {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  background: radial-gradient(ellipse at center, #d1e4ea 0%, #bae4f4 100%);
  > .el-header {
    color: #fff;
    height: 60px;
    .el-col {
      height: 60px;
      line-height: 60px;
      .icon {
        height: 60px;
      }
      .title {
        text-align: center;
      }
      .user {
        text-align: right;
        font-size: 12px;
      }
    }
  }
  > .el-container {
    height: 0;
    flex: 1;
    .el-menu {
      height: 100%;
      background-color: transparent;
    }
    .el-main {
      display: flex;
      flex-direction: column;
      padding: 5px 10px 5px;
      background-color: #ffffffce;
      > .tabs-wrapper {
        height: 30px;
        a {
          height: 100%;
          text-decoration: none;
          font-size: 13px;
          .tab-container {
            display: flex;
            margin-right: 2px;
            display: inline-block;
            border: 1px solid #bae4f4;
            border-radius: 2px;
            height: 25px;
            padding: 0 5px;
            line-height: 25px;
            text-align: center;
            background-color: #fff;
            .el-icon {
              margin-left: 5px;
            }
          }
        }
      }
      > .content-container {
        height: 0;
        flex: 1;
        padding: 10px 16px;
        overflow: hidden;
        background-color: #fff;
        box-sizing: border-box;
      }
    }
  }
  > .el-footer {
    height: 50px;
    background-color: #ddd;
    line-height: 50px;
    font-size: 12px;
    text-align: center;
    color: #fff;
  }
}
</style>
