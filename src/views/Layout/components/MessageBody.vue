<script setup>
import { useUserStore } from '@/stores/user'
const msg = defineProps({
  ID: Number,
  Message: String,
  UserID: Number,
  Nickname: String
})
const userStore = useUserStore()
const user = userStore.userInfo.user
</script>

<template>
  <div :class="{ re: msg.UserID != user.ID, send: msg.UserID == user.ID }">
    <img class="avatar" src="/Users/j/Downloads/images/20220226175136_ff5d7.jpeg" alt="">
    <div :class="{ msgBody: true, leftBody: msg.UserID != user.ID, rightBody: msg.UserID == user.ID }">
      <div :class="{ nickname: true, leftNickname: msg.UserID != user.ID, rightNickname: msg.UserID == user.ID }">
        <p>{{ msg.Nickname }}</p>
      </div>
      <div class="msg">
        {{ msg.Message }}
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.msg {
  border: 1px solid black;
  border-radius: 5px;
  max-width: 500px;
  word-wrap: break-word;
  font-size: 18px;
  padding: 5px; // 添加一些内边距
  // display: inline-block; // 让 .msg 容器宽度根据内容变化
}

.avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}

.nickname {
  display: flex;
  font-size: 15px;
  margin-bottom: 5px;
  max-width: 200px; // 限制昵称的最大宽度
  white-space: nowrap; // 防止昵称换行
  overflow: hidden;
  text-overflow: ellipsis;
}

.re {
  display: flex;
  align-items: flex-start;
  width: 100%;
  margin: 5px 0;


  .avatar {
    margin-right: 5px;
  }
}

.send {
  display: flex;
  flex-direction: row-reverse;
  align-items: flex-start;
  width: 100%;

  .avatar {
    margin-left: 5px;
    margin-right: 10px;
  }
}

.msgBody {
  display: flex;
  flex-direction: column;
}

.leftBody {
  align-items: flex-start;
}

.rightBody {
  align-items: flex-end;
}

.leftNickname {
  align-self: flex-start;
}

.rightNickname {
  align-self: flex-end;
}
</style>