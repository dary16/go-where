<template>
  <div class="wrapper">
    <swiper
      :options="swiperOption"
      v-if="list.length"
    >
      <!-- slides -->
      <swiper-slide
        :key="item.id"
        v-for="item of list"
      >
        <img class="swiper-img" :src="item.imgUrl"/>
    </swiper-slide>
        <div
          class="swiper-pagination"
          slot="pagination"
        ></div>
    </swiper>
  </div>

</template>

<script>
  export default {
    // 接收父级传递的参数
    props: {
      list: Array
    },
    // 监听数据变化
    watch: {},
    // 页面数据集合
    data() {
      return {
        swiperOption: {
          pagination: '.swiper-pagination',
          loop: true
        },
        swiperList: [{
          id: '001',
          imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1707/6a/ef538175bc41a802.jpg'
        },
        {
          id: '002',
          imgUrl: 'https://imgs.qunarzz.com/sight/p0/1508/db/dbd0bef45fbc36b3.img.jpg_256x160_073f03de.jpg'
        }]
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
  .wrapper >>> .swiper-pagination-bullet-active {
    background: #fff !important;
  }

  .wrapper {
    width: 100%;
    height: 0;
    padding-bottom: 31.25%;
    overflow: hidden;

    .swiper-img {
      width: 100%;
      height: 120px;
    }
  }
</style>

