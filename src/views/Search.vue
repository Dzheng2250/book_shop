<template>
  <div>
    <div class="mui-input-row mui-search mui-active">
      <input type="search" class="mui-input-clear" placeholder="" data-input-clear="1" data-input-search="1"
        v-model="query">
      <span class="mui-icon mui-icon-clear" @click="clear"></span>
      <span class="mui-placeholder"><span class="mui-icon mui-icon-search">
        </span><span></span></span>
    </div>
    <transition-group class="goods-list" tag="div" name="item" @before-enter="beforeEnter" @enter="enter" @leave="leave">
      <div class="goods-item" v-for="(item, index) in ComputedList" :key="index">
        <router-link :to="{name: 'book_info', params: {id: item.id}}">
          <img :src="item.img">
          <h1 class="title">{{item.name}}</h1>
          <p class="info">
            <span class="price">￥{{item.price}}</span>
          </p>
        </router-link>
      </div>
    </transition-group>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import Velocity from 'velocity-animate'

export default {
  props: ['category_id'],
  computed: {
    ...mapState({
      bookslist: state => state.books.book
    }),
    ComputedList () {
      var vm = this.query// 获取到input输入框中的内容
      var nameList = this.bookslist// 数组
      return nameList.filter(function (item) {
        return item.name.toLowerCase().indexOf(vm.toLowerCase()) !== -1
      })
    }
  },
  data () {
    return {
      books: [],
      query: '',
      height: 2
    }
  },
  created () {
    this.$store.dispatch('books/getbook')
  },
  methods: {
    beforeEnter (el) {
      el.style.opacity = 0
      el.style.height = 0
    },
    enter (el, done) {
      var delay = el.dataset.index * 150
      setTimeout(function () {
        Velocity(el, { opacity: 1, height: '300px' }, { complete: done })
      }, delay)
    },
    leave (el, done) {
      var delay = el.dataset.index * 150
      setTimeout(function () {
        Velocity(el, { opacity: 0, height: 0 }, { complete: done })
      }, delay)
    },
    clear () {
      this.query = ''
    }
  }
}
</script>

<style lang="scss" scoped>
.goods-list {
  display: flex;
  flex-wrap: wrap;
  padding-left: 10px;
  .goods-item {
    width: calc(calc(100% / 2) - 10px);
    margin: 10px 10px 0 0;
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 10px;
    padding: 10px;
    img {
      width: 100%;
    }
    .title {
      font-size: 14px;
      color: #333;
      margin: 10px 0;
    }
    .info {
      display: flex;
      justify-content: space-between;
      margin-bottom: 0;
      .price {
        color: red;
        font-weight: bold;
        font-size: 16px;
      }
      .sell {
        font-size: 13px;
      }
    }
  }
}
</style>
