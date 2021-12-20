<template>
  <div id="app">
    <div class="container">
      <mt-header fixed :title="$route.meta.title" id="header">
        <span slot="left" v-show="showicon">
          <mt-button icon="back" @click="goback"></mt-button>
        </span>
      </mt-header>
      <div class="mui-input-row mui-search mui-active" v-show="showinput">
        <input type="search" class="mui-input-clear" placeholder="" @focus="goSearch">
      </div>
      <transition name="fade">
        <router-view />
      </transition>
      <tabbar></tabbar>
    </div>
  </div>
</template>
<script>
import tabbar from './components/tabbar.vue'

export default {
  data () {
    return {
      showicon: false,
      showinput: true
    }
  },
  created () {
    this.showicon = this.$route.path !== '/Home'
    this.showinput = this.$route.path === '/Home'
  },
  watch: {
    '$route.path' (newValue) {
      this.showicon = newValue !== '/Home'
      this.showinput = newValue === '/Home'
    }
  },
  components: {
    tabbar
  },
  methods: {
    goback () {
      this.$router.go(-1)
    },
    goSearch () {
      this.$router.push({ path: '/Search' })
    }
  }
}
</script>
<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  box-sizing: border-box;
}
.container {
  padding-top: 40px;
  padding-bottom: 50px;
  overflow-x: hidden;
  #header{
    background-color: rgb(198, 47, 46);
  }
}
.fade-enter {
  opacity: 0;
  transform: translateX(100%);
}
.fade-leave-to {
  opacity: 0;
  transform: translateX(-100%);
  position: absolute;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease;
}
</style>
