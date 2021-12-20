<template>
  <div class="home">
    <swiper :imageList="imgList"></swiper>
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3">
        <router-link to="/test">
          <img src="../assets/menu/1.png">
          <div class="mui-media-body">主题读物</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3">
        <router-link to="/test">
          <img src="../assets/menu/2.png">
          <div class="mui-media-body">新华惠农</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3">
        <router-link to="/test">
          <img src="../assets/menu/3.png">
          <div class="mui-media-body">新华优选</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3">
        <router-link to="/test">
          <img src="../assets/menu/4.png">
          <div class="mui-media-body">考试专区</div>
        </router-link>
      </li>
    </ul>
    <ul class="mui-table-view mui-grid-view">
      <li class="mui-table-view-cell mui-media mui-col-xs-6"><a href="#">
          <img class="mui-media-object" src="../assets/menu/6.png">
        </a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-6"><a href="#">
          <img class="mui-media-object" src="../assets/menu/7.png">
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import swiper from '../components/swiper.vue'
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      imgList: state => state.home.list
    })
  },
  components: {
    swiper
  },
  created () {
    this.$store.dispatch('home/getList')
  }
}
</script>

<style lang="scss" scoped>
.mui-grid-view.mui-grid-9 {
  background-color: rgb(255, 255, 255);
  border: none;
  img {
    width: 60px;
    height: 60px;
  }
}
.mui-table-view-cell > a.title {
  display: inline;
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell {
  border: 0;
}
.mui-media-body {
  font-size: 14px;
}
</style>
