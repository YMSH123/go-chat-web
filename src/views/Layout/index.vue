<script setup>
import { ChatDotRound, UserFilled } from '@element-plus/icons-vue'
import { useUserStore } from '@/stores/user';
import { onMounted } from 'vue'
import { getMessageListAPI } from '@/apis/message';
// import { useWebSocket } from '@vueuse/core'
// import { useRouter } from 'vue-router'
const userStore = useUserStore()
// const router = useRouter()
// const avatar = ref(userStore.userInfo.user.avatar ?? "/Users/j/Downloads/images/20220226175136_ff5d7.jpeg")

const getMessageList = async () => {
  const res = await getMessageListAPI(userStore.userInfo.user.ID)
  console.log(res)
}
// const token = userStore.userInfo.user.Token
// const { data: wsData, send, status, open, close } = useWebSocket('ws://localhost:54264/talk/conn', {
//   // autoReconnect: true,
//   onConnected: () => {
//     send(token)
//   },
//   onDisconnected: () => {
//     console.log('连接断开')
//     // router.replace("/login")
//   },
//   onError: (error) => console.log('WebSocket Error:', error),
//   onMessage: (msg) => {
//     console.log(msg)
//     // const parsedMsg = JSON.parse(msg.data)
//     // messages.value.push(parsedMsg)
//   },
// })
// console.log(wsData)
// console.log(status)
// console.log(open)
// console.log(close)



onMounted(() => {
  getMessageList()
})
</script>

<template>
  <div class="box">
    <div class="sidebar">
      <div class="mine">
        <img src="/Users/j/Downloads/images/20220226175136_ff5d7.jpeg" alt="">
      </div>
      <div class="option">

        <RouterLink to="/">
          <el-icon :size="40">
            <ChatDotRound />
          </el-icon>
        </RouterLink>

        <RouterLink to="/link">
          <el-icon :size="40">
            <UserFilled />
          </el-icon>
        </RouterLink>
      </div>
    </div>

    <div>
      <div>

      </div>
      <div>
        <RouterView />
      </div>
    </div>
  </div>

</template>

<style lang="scss" scoped>
.box {
  display: flex;
  width: 900px;
  height: 600px;
  margin: 50px auto;
  background-color: pink;
}

.sidebar {
  width: 60px;
  height: 600px;
  background-color: green;

  .mine {
    margin-top: 5px;
    margin-bottom: 20px;

    img {
      width: 60px;
      height: 60px;
      border-radius: 50%;
    }
  }

  .option {
    display: flex;
    height: 100px;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
}
</style>