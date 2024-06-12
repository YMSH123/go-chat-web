<script setup>
</script>
<template>
  <div class="msg">
    <div class="avatar">
      <img src="/Users/j/Downloads/images/20220226175136_ff5d7.jpeg" alt="">
    </div>
    <div class="info">
      <div class="head">
        <div class="nickname">江帝伟</div>
        <div class="time">下午 02:00</div>
      </div>
      <div class="content">abc</div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.msg {
  display: flex;
  width: 200px;
  height: 50px;
  padding: 2px 0;
  background-color: aquamarine;

  .avatar {
    width: 45px;
    height: 45px;
    margin: 0 10px;


    img {
      width: 45px;
      height: 45px;
      border-radius: 50%;
    }
  }

  .info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-right: 10px;
    width: 135px;
    padding: 3px 0;

    .head {
      display: flex;
      justify-content: space-between;
      display: flex;
      align-items: baseline;

      .nickname {
        font-size: 13px;
      }

      .time {
        font-size: 11px;

        color: #aaa;
      }
    }



    .content {
      font-size: 11px;
      color: #aaa;
    }
  }

}
</style>