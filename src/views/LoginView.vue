<template>
  <div class="login-wrap">
    <LoginBk></LoginBk>
    <div class="login">
      <Login></Login>
    </div>
    <div class="icp">赣ICP备2023000728号-1</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import LoginBk from '@/components/login/LoginBk.vue'
import Login from '@/components/login/Login.vue'

export default defineComponent({
  components: {
    LoginBk,
    Login,
  },
  setup() {
    return {}
  },
})
</script>

<style scoped lang="scss">
.login-wrap {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  > .login {
    position: absolute;
    width: 400px;
    height: 250px;
    left: 50%;
    top: 10%;
    transform: translateX(-50%);
  }
  > .icp {
    position: absolute;
    bottom: 0;
    font-size: 12px;
    color: #fff;
  }
}
</style>
