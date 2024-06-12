<script setup>
import { ref } from 'vue';
import { Search } from '@element-plus/icons-vue'
import Message from './Message.vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const input = ref("")
const onClick = () => {
  router.replace("/content")
}
</script>

<template>
  <div class="message">
    <!-- 最近联系人列表 -->
    <div class="left">
      <div class="search">
        <el-input :prefix-icon="Search" v-model="input" placeholder="搜索" />
      </div>
      <el-scrollbar height="550px">
        <div v-for="item in 7" :key="item" @click="onClick">
          <Message class="active" />
        </div>
      </el-scrollbar>
    </div>

    <!-- 聊天窗口 -->
    <div class="right">
      <div class="msg-window">
        <RouterView />
      </div>
    </div>
  </div>


</template>

<style scoped lang="scss">
.message {
  display: flex;
  width: 200px;
  height: 600px;
  background-color: blue;

  .search {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 50px;
    border-bottom: 1px solid black;
    background-color: #fff;

    .el-input {
      width: 170px;
    }
  }
}

.active {
  background-color: white;
}

.msg-window {
  width: 640px;
  height: 600px;
  border-left: 1px solid;
}
</style>