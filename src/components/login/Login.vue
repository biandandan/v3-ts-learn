<template>
  <el-form class="login" ref="loginRef" :model="form" status-icon :rules="rules" label-width="70px">
    <h1>账号登录</h1>
    <el-form-item label="账号：" prop="username">
      <el-input v-model="form.username" type="password" />
    </el-form-item>
    <el-form-item label="密码：" prop="password">
      <el-input v-model="form.password" type="password" />
    </el-form-item>
    <el-form-item>
      <el-button @click="submitForm">登 录</el-button>
    </el-form-item>
  </el-form>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
import { InitData } from '@/types/login'
import { useRouter } from 'vue-router'

export default defineComponent({
  setup() {
    const data = reactive(new InitData())
    const router = useRouter()
    const rules = {
      username: [
        { required: true, message: '请输入账号', trigger: 'blur' },
        { min: 2, max: 10, message: '账号长度需要在2-10之间', trigger: 'blur' },
      ],
      password: [
        { required: true, message: '请输入密码', trigger: 'blur' },
        { min: 1, max: 16, message: '密码长度需要在1-16之间', trigger: 'blur' },
      ],
    }
    const submitForm = () => {
      data.loginRef?.validate((valid) => {
        if (valid) {
          router.push('/home')
        } else {
        }
      })
    }
    return {
      ...toRefs(data),
      rules,
      submitForm,
    }
  },
})
</script>

<style scoped lang="scss">
.login {
  position: absolute;
  width: 400px;
  height: 250px;
  border-radius: 10px;
  padding: 25px 30px 30px;
  background-color: rgba(255, 255, 255, 0.3);
  box-shadow: 5px rgba(255, 255, 255, 0.3);
  box-sizing: border-box;
  > h1 {
    margin-bottom: 20px;
    text-align: center;
    color: rgba(35, 96, 202, 0.7);
  }
  .el-button {
    width: 100%;
    color: #fff;
    letter-spacing: 5px;
    background-image: linear-gradient(0.9turn, #4a84db, #e1e7f8, #3479e1);
  }
}
</style>
