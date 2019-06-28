<template>
  <div class="page">

    <div
      class="item"
      v-for="(item,index) of detailList"
      :key="index"
    >
      <div class="item-title">
        <span class="item-title-icon"></span>
        {{item.title}}
      </div>
      <div
        class="item-children"
        v-if="item.children"
      >
        <v-detail-list :detailList="item.children"></v-detail-list>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    // 接收父级传递的参数
    props: ['detailList'],
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
  .item-title-icon {
    position: relative;
    left: 0.06rem;
    top: 0.06rem;
    display: inline-block;
    width: 0.36rem;
    height: 0.36rem;
    background: url('http://s.qunarzz.com/piao/image/pc/detail/qunar2.png');
    background-size: 0.4rem 0.4rem;
    margin-top: 0.1rem;
  }

  .item-title {
    line-height: 0.8rem;
    font-size: 0.32rem;
    padding: 0 0.2rem;
  }

  .item-children {
    padding: 0 0.2rem;
  }
</style>
