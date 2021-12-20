<template>
  <div class="goods-info">
    <!-- 图片 -->
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <img :src="bookinfo.img" />
        </div>
      </div>
    </div>
    <!-- 购买区域 -->
    <div class="mui-card">
      <div class="mui-card-header">{{ bookinfo.name }}</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p class="price">
            定价：
            <span>¥{{ bookinfo.price }}</span>
          </p>
          <div>
            <p class="go-num">
              购买数量
              <numbox @count="countChange" :max="100" initcount="1" :goodsid="bookinfo.id"></numbox>
            </p>
            <p class="go-buy">
              <mt-button type="primary" size="small">立即购买</mt-button>
              <mt-button type="danger" size="small">加入购物车</mt-button>
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- 附加信息 -->
    <div class="mui-card">
      <div class="mui-card-header">商品参数</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p>作者：{{ bookinfo.author }}</p>
          <p>出版社：{{ bookinfo.press }}</p>
        </div>
      </div>
      <div class="mui-card-header">简介</div>
      <div class="good-desc">
        <div class="content" v-html="bookinfo.info"></div>
      </div>
      <div class="mui-card-header">内容推荐</div>
      <div class="good-desc">
        <div class="content" v-html="bookinfo.content"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import numbox from '../../components/numbox'
export default {
  props: ['id'],
  data () {
    return {
    }
  },
  computed: {
    ...mapState({
      bookinfo: state => state.books.bookinfo
    })
  },
  components: {
    numbox
  },
  methods: {
    countChange (val) { }
  },
  created () {
    this.$store.dispatch('books/getbookInfo', this.id)
  },
  watch: {
    bookinfo () {
      console.log(this.bookinfo)
    }
  }
}
</script>

<style lang="scss" scoped>
.mui-card-content-inner {
  img {
    height: 300px;
  }
}
.goods-info {
  background: #f1f1ff;
  overflow: hidden;
  .price {
    span {
      color: red;
      font-size: 14px;
      font-weight: bold;
    }
  }
  .go-buy {
    display: flex;
    margin: 10px 0 0px;
    justify-content: center;
    button {
      margin: 0 5px;
    }
  }
  .good-desc {
    background: #fff;
    padding: 5px;
    h3 {
      font-size: 16px;
      color: #226aff;
      text-align: center;
      margin: 15px 0;
    }
    .content {
      font-size: 14px;
      line-height: 28px;
      text-align: left;
      img {
        width: 100%;
      }
    }
  }
  .go-num {
    div {
      margin-left: 10px;
    }
  }
  .ball {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    position: absolute;
    background: red;
    z-index: 99;
    left: 132px;
    top: 390px;
    transform: translate(93px, 230px);
  }
}
</style>
