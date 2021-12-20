<template>
  <div class="goods-list">
    <div class="goods-item" v-for="(item, index) in bookslist" :key="index">
      <router-link :to="{name: 'book_info', params: {id: item.id}}">
        <img :src="item.img">
        <h1 class="title">{{item.name}}</h1>
        <p class="info">
          <span class="price">￥{{item.price}}</span>
        </p>
      </router-link>
    </div>
    <mt-button class="more" size="large">加载更多</mt-button>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  props: ['category_id'],
  computed: {
    ...mapState({
      bookslist: state => state.books.list
    })
  },
  data () {
    return {
      books: []
    }
  },
  created () {
    this.$store.dispatch('books/getList', this.category_id)
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
