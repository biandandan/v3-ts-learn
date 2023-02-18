import type { FormInstance } from 'element-plus'
import { ref } from 'vue'

export interface LoginForm {
  username: string
  password: string
}

export class InitData {
  form: LoginForm = {
    username: '',
    password: '',
  }
  loginRef = ref<FormInstance>()
}

// module.exports = {
//   LoginForm
//   InitData,
// }
