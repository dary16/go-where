<template>
  <div class="header">
    城市选择
    <router-link to="/">
      <div class="iconfont header-back">&#xe624;</div>
    </router-link>

  </div>
</template>

<script>
  export default {
    // 接收父级传递的参数
    props: [],
    // 监听数据变化
    watch: {},
    // 页面数据集合
    data() {
      return {

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
    },
    // 加载完毕后触发
    mounted() { },
    // 路由退出时候调用
    beforeRouteLeave(to, from, next) { next() }
  }
</script>

<style scoped lang="stylus">
  @import '../../assets/styles/common.styl';

  .header {
    position: relative;
    overflow: hidden;
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
