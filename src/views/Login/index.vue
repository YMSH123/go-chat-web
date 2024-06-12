<script setup>
import { ref } from "vue";
import { User, Lock } from '@element-plus/icons-vue'
import { sendCodeAPI, registerAPI } from "@/apis/login";
import { useUserStore } from "@/stores/user";
import { useRouter } from 'vue-router'
const router = useRouter()
const userStore = useUserStore()
const loginForm = ref({
  email: '',
  password: ''
})
const registerForm = ref({
  email: '',
  code: ''
})
// 登录验证
const loginRules = {
  email: [
    { required: true, message: '账号不能为空', trigger: 'blur' },
    {
      validator: (rule, value, callback) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailRegex.test(value)) {
          callback()
        } else {
          callback(new Error('邮箱不合法,请重新输入'))
        }
      }
    }
  ],
  password: [
    { required: true, message: '密码不能为空', trigger: 'blur' },
    { min: 6, max: 14, message: '密码要在6-14个字符内', trigger: 'blur' }
  ]
}
// 注册验证
const registerRules = {
  email: [
    { required: true, message: '账号不能为空', trigger: 'blur' },
    {
      validator: (rule, value, callback) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailRegex.test(value)) {
          callback()
        } else {
          callback(new Error('邮箱不合法,请重新输入'))
        }
      }
    }
  ],
  code: [
    { required: true, message: '验证码不能为空', trigger: 'blur' },
    { size: 4, message: '验证码错误,请重新输入', trigger: 'blur' }
  ]
}
const registerRef = ref(null)
const loginRef = ref(null)
const isActive = ref(1)


const doLogin = async () => {
  loginRef.value.validate(async (valid) => {
    if (valid) {
      await userStore.getUserInfo(loginForm.value)
      router.replace("/")
    }
  })
}

const register = async () => {
  registerRef.value.validate(async (valid) => {
    if (valid) {
      await registerAPI(registerForm.value)
    }
  })
}

const sendCode = async () => {
  registerRef.value.validateField('email', async (valid) => {
    if (valid) {
      isButtonDisabled.value = true
      startCountdown()
      await sendCodeAPI(registerForm.value.email)
    }
  })
}

const isButtonDisabled = ref(false)
const buttonText = ref('发送验证码')
const countdown = ref(60)
let timer = null;
const startCountdown = () => {
  timer = setInterval(() => {
    if (countdown.value > 0) {
      countdown.value--
      buttonText.value = `${countdown.value}秒后重新发送`
    } else {
      clearInterval(timer)
      buttonText.value = '发送验证码'
      isButtonDisabled.value = false
      countdown.value = 60
    }
  }, 1000);
};


</script>
<template>
  <div class="box">
    <div class="content">
      <div class="option">
        <ul>
          <li :class="{ active: isActive == 1 }" @click="isActive = 1"><span>登录</span></li>
          <li :class="{ active: isActive == 0 }" @click="isActive = 0"><span>注册</span></li>
        </ul>
      </div>
      <div class="form">
        <!-- 登录页面 -->
        <el-form :model="loginForm" v-if="isActive == 1" class="login" :rules="loginRules" status-icon ref="loginRef">
          <el-form-item prop="email">
            <el-input :prefix-icon="User" v-model="loginForm.email" placeholder="请输入账号" />
          </el-form-item>
          <el-form-item prop="password">
            <el-input :prefix-icon="Lock" v-model="loginForm.password" placeholder="请输入密码" type="password" />
          </el-form-item>
          <el-button size="large" class="subBtn" @click="doLogin()">点击登录</el-button>
          <a href="/forget" class="forget-password">忘记密码?</a>
        </el-form>
        <!-- 注册页面 -->
        <el-form :model="registerForm" v-else class="register" :rules="registerRules" ref="registerRef">
          <el-form-item prop="email">
            <el-input :prefix-icon="User" v-model="registerForm.email" placeholder="请输入邮箱" />
          </el-form-item>
          <el-form-item prop="code">
            <el-input v-model="registerForm.code" placeholder="请输入验证码" class="code-input" />
          </el-form-item>
          <el-button @click="sendCode" :disabled="isButtonDisabled">{{ buttonText }}</el-button>
          <el-form-item>
            <el-button size="large" class="subBtn" @click="register()">点击注册</el-button>
          </el-form-item>
        </el-form>
      </div>


    </div>
    <div class="bg one"></div>
    <div class="bg two"></div>
    <div class="bg three"></div>
    <div class="bg four"></div>
    <div class="bg five"></div>
    <div class="bg six"></div>
  </div>
</template>

<style lang="scss" scoped>
.box {
  position: relative;
  height: 100vh;
  background-color: #027db4;
  overflow: hidden;

  .content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 472px;
    height: 300px;
    background-color: #fff;
    border: 1px solid #797979;
    border-radius: 10px;
    z-index: 999;

    .option ul {
      display: flex;
      justify-content: space-around;
      margin-top: 35px;
    }
  }
}

.login {
  position: relative;
  padding-bottom: 30px;

  .forget-password {
    position: absolute;
    right: 0;
    bottom: 0;
    color: #1890ff;
    border-bottom: 1px solid #1890ff;
  }
}

.option ul span {
  font-size: 30px;
}

.active {
  border-bottom: 3px solid #1890ff;
}

.form {
  margin: 40px 60px 20px 60px;
}

.subBtn {
  width: 100%;
  background-color: #1890ff;
  color: #fff;
  border: 1px solid;
}

.register {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  .el-form-item {
    width: 100%;
  }

  :nth-child(2) {
    width: 180px;
    flex-wrap: nowrap;
    // flex: 1 1 50%;
    // display: flex;
    // justify-content: space-between;
  }

  :nth-child(3) {
    // width: 130px;
    flex-wrap: nowrap;
    // flex: 1 1 50%;
    // display: flex;
    // justify-content: space-between;
  }

  :nth-child(2) {
    margin-right: 20px;
    flex-wrap: nowrap;
  }

  // :nth-child(2) {
  //   display: flex;

  // }

  // :nth-child(3) .el-button {
  //   width: 100%;
  //   background-color: #1890ff;
  //   color: #fff;
  // }
}

.bg {
  position: absolute;
  background-color: #2a91c0;
}

.one {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  top: 50px;
  left: 100px;
}

.two {
  width: 150px;
  height: 100px;
  border-radius: 75px / 50px;
  top: 300px;
  left: 400px;
}

.three {
  width: 150px;
  height: 100px;
  border-radius: 75px / 50px;
  top: 200px;
  right: 400px;
}

.four {
  width: 200px;
  height: 50px;
  border-radius: 200px / 50px;
  bottom: 100px;
  right: 400px;
}

.five {
  width: 200px;
  height: 50px;
  border-radius: 200px / 50px;
  bottom: 50px;
  left: -100px;

}

.six {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  bottom: 100px;
  right: 50px;
}
</style>