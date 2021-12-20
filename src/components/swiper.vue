<template>
  <div>
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in imageList" :key="item.id">
        <img :src="item.img"/>
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>

export default {
  props: ['imageList']
}
</script>

<style lang="scss" scoped>
.mint-swipe {
  height: 200px;
  color: white;
  .mint-swipe-items-warp {
    .mint-swipe-item {
      text-align: center;
    }
  }
  img {
    width: 100%;
    height: 100%;
  }
}
</style>
