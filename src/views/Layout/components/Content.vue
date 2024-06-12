<script setup>
import MsgBody from './MessageBody.vue'
import { onMounted, ref } from 'vue'
const items = ref()
const input = ref(null)
const sendMsg = () => {
  if (input.value.trim() === "") {
    input.value = ''
    return
  }
  console.log(input.value)
  input.value = ''
}
const setItems = () => {
  items.value = [
    {
      ID: 4,
      Message: "你好",
      UserID: 1,
      Nickname: "zhangsan"
    },
    {
      ID: 5,
      Message: "你好",
      UserID: 4,
      Nickname: "lisi"
    },
    {
      ID: 6,
      Message: "hello",
      UserID: 4,
      Nickname: "lisi"
    },
    {
      ID: 7,
      Message: "world",
      UserID: 1,
      Nickname: "zhangsan"
    },
    {
      ID: 7,
      Message: "world",
      UserID: 1,
      Nickname: "zhangsan"
    },
    {
      ID: 7,
      Message: "world",
      UserID: 1,
      Nickname: "zhangsan"
    },
    {
      ID: 7,
      Message: "world",
      UserID: 1,
      Nickname: "zhangsan"
    },
    {
      ID: 7,
      Message: "world",
      UserID: 1,
      Nickname: "zhangsan"
    },
  ]
}
onMounted(() => {
  setItems()
})

</script>

<template>
  <div>
    <div class="msg-content">
      <el-scrollbar height="400px">
        <MsgBody v-for="item in items" :key="item.ID" :UserID="item.UserID" :Message="item.Message"
          :Nickname="item.Nickname" class="scrollbar-demo-item">
        </MsgBody>
      </el-scrollbar>
    </div>
    <div class="input">
      <el-scrollbar height="200px">
        <textarea class="chat-input" autofocus @keyup.enter="sendMsg()" v-model="input"></textarea>
      </el-scrollbar>
    </div>
  </div>
</template>

<style scoped lang="scss">
.msg-content {
  display: flex;
  flex-direction: column;
  width: 638px;
  height: 400px;
  background-color: green;
}

.input {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 100%;
  height: 200px;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: #333;
}

.chat-input {
  width: 100%;
  height: 200px;
  border: none;
  outline: none;
  resize: none;
  /* 禁止用户手动调整大小 */
  font-size: 16px;
  line-height: 1.5;
  border-radius: 5px;
  box-sizing: border-box;
  /* 内容超出时隐藏 */
}

.chat-input::placeholder {
  color: #888;
}

.chat-input::before {
  color: #888;
  pointer-events: none;
  /* 禁止占位符响应鼠标事件 */
  display: block;
}
</style>