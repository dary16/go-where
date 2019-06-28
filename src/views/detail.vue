<template>
  <div class="page">
    <v-detail-banner :detailList="detailList"></v-detail-banner>
    <v-detail-header></v-detail-header>
    <div class="content">
      <v-detail-list :detailList="detailList.categoryList"></v-detail-list>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    // 接收父级传递的参数
    props: [],
    // 监听数据变化
    watch: {},
    // 页面数据集合
    data() {
      return {
        detailList: []

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
      getDetailData() {
        axios.get('/detailData')
          .then(this.getDetailInfoSucc)
      },
      getDetailInfoSucc(res) {
        res = res.data;
        if(res.ret && res.data) {
          this.detailList = res.data;
        }
      }
    },
    // 加载完毕后触发
    mounted() {
      this.getDetailData();
    },
    // 路由退出时候调用
    beforeRouteLeave(to, from, next) { next() }
  }
</script>

<style scoped lang="stylus">
  .content {
    height: 50rem;
  }
</style>
