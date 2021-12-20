<template>
  <div>
    <div class="menu">
      <div class="menu-left">
        <ul>
          <li class="menu-item" v-for="(item, index) in menus" :key="index" @click="onfocus(index)"
            :class="{current:currentindex === index}">
            <p class="text">{{item.name}}</p>
          </li>
        </ul>
      </div>
      <div class="menu-right" ref="itemList">
        <ul>
          <li class="cate" v-for="(menu, index1) in menus" :key="index1">
            <h4 class="cate-title">{{menu.name}}</h4>
            <ul class="cate-item">
              <li v-for="(item, index2) in menu.sub" :key="index2">
                <router-link :to="'/goodslist/'+item.id" class="cate-item-wrapper">
                  <div class="cate-item-img">
                    <img :src="item.img" />
                  </div>
                  <span>{{ item.name }}</span>
                </router-link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import BScroll from 'better-scroll'

export default {
  computed: {
    ...mapState({
      menusList: state => state.category1.list
    })
  },
  data () {
    return {
      currentindex: 0,
      menus: [],
      rightLiTops: []
    }
  },
  created () {
    this.$store.dispatch('category1/getList')
    this.menus = this.menusList
  },
  methods: {
    onfocus (index) {
      this.currentindex = index
      const y = -this.rightLiTops[index]
      this.rightBscroll.scrollTo(0, y)
    },
    _initBscroll () { // 初始化滚动效果
      this.leftBscroll = new BScroll('.menu-left', {
        click: true, // 点击滚动
        mouseWheel: true // 鼠标滑轮滚动
      })
      this.rightBscroll = new BScroll('.menu-right', {
        click: true,
        mouseWheel: true,
        probeType: 3 // 同时监听点击和滑轮滚动
      })
      this.rightBscroll.on('scroll', pos => {
        const scrollY = Math.abs(pos.y)
        for (var i = 0; i < this.rightLiTops.length - 1; i++) {
          if (scrollY >= this.rightLiTops[i] - 150 && scrollY < this.rightLiTops[i + 1]) {
            this.currentindex = i
          }
        }
      })
    },
    _initRightHeight () {
      const itemArray = []
      let top = 0
      itemArray.push(top)
      const allList = this.$refs.itemList.getElementsByClassName('cate')
      for (var i = 0; i < allList.length; i++) {
        top += allList[i].clientHeight
        itemArray.push(top)
      }
      this.rightLiTops = itemArray
    }
  },
  watch: {
    menusList () {
      this.menus = this.menusList
    },
    menus () {
      this.$nextTick(() => { // 在页面渲染完成后执行
        this._initBscroll()
        this._initRightHeight()
      })
    }
  }
}
</script>

<style lang="scss" scoped>
ul {
  margin: 0;
  padding: 0;
}
li {
  list-style: none;
}
.menu {
  display: flex;
  position: absolute;
  text-align: center;
  top: 40px;
  bottom: 50px;
  width: 100%;
  overflow: hidden;
  .menu-left {
    flex: 0 0 80px;
    width: 80px;
    background: #f3f5f7;
    .menu-item {
      height: 54px;
      width: 100%;
      .text {
        width: 100%;
        line-height: 54px;
        margin-bottom: 0;
      }
    }
    .current {
      width: 100%;
      background: #fff;
      .text {
        color: red;
      }
    }
  }
  .menu-right {
    flex: 1;
    background: #fff;
    .cate {
      height: 100%;
      .cate-title {
        margin: 0;
        text-align: left;
        font-size: 14px;
        color: #333;
        font-weight: bold;
        padding: 10px;
      }
      .cate-item {
        padding: 7px 10px 10px;
        display: flex;
        overflow: hidden;
        flex-flow: row wrap;
        li {
          width: 33.3%;
          .cate-item-wrapper {
            .cate-item-img {
              width: 100%;
              img {
                width: 70px;
                height: 70px;
              }
            }
            span {
              display: inline-block;
              font-size: 14px;
              color: #333;
            }
          }
        }
      }
    }
  }
}
</style>
