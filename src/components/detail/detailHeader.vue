<template>
  <div class="page">
    <router-link
      to="/"
      tag="div"
      class="header-abs"
      v-show="showAbs"
    >
      <div class="iconfont back">&#xe624;</div>
    </router-link>
    <div
      class="header-fixed"
      v-show="!showAbs"
      :style="opacityStyle"
    >
      <div class="iconfont header-back">&#xe624;</div>
      景点详情
    </div>
  </div>
</template>

<script>
  export default {
    // 接收父级传递的参数
    props: ['bannerImg'],
    // 监听数据变化
    watch: {},
    // 页面数据集合
    data() {
      return {
        showAbs: true,
        opacityStyle: {
          opacity: 0
        }
      }
    },
    // 模板组件
    components: {

    },
    // 实例化之前触发事件
    beforeCreate() {

    },
    // 实例化之后触发事件
    created() { },
    // 实时监控data参数数据变化
    computed: {},
    // 执行方法
    methods: {
      handleScroll() {
        const top = document.documentElement.scrollTop;
        if(top > 60) {
          let opacity = top / 140;
          opacity = opacity > 1 ? 1 : opacity;
          this.opacityStyle = {
            opacity
          }
          this.showAbs = false;
        } else {
          this.showAbs = true;
        }
      }
    },
    // 加载完毕后触发
    mounted() { },
    // 路由退出时候调用
    beforeRouteLeave(to, from, next) { next() },
    activated() {
      window.addEventListener('scroll', this.handleScroll);
    },
    deactivated() {
      window.removeEventListener('scroll', this.handleScroll);
    },
  }
</script>

<style scoped lang="stylus">
  @import '../../assets/styles/common.styl';

  .header-abs {
    position: absolute;
    left: 0.2rem;
    top: 0.2rem;
    width: 0.8rem;
    height: 0.8rem;
    border-radius: 0.4rem;
    text-align: center;
    line-height: 0.8rem;
    background: rgba(0, 0, 0, 0.8);

    .back {
      color: #fff;
      font-size: 0.4rem;
    }
  }

  .header-fixed {
    z-index: 2;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 0.86rem;
    line-height: 0.86rem;
    text-align: center;
    color: #fff;
    background: $bgColor;
    font-size: 0.32rem;

    .header-back {
      position: absolute;
      top: 0;
      left: 0;
      width: 0.64rem;
      text-align: center;
      font-size: 0.4rem;
      color: #fff;
    }
  }
</style>
