<template>
  <div
    class="container"
    @click="closeFn"
  >
    <div class="wrapper">
      <swiper :options="swiperOptions">
        <!-- slides -->
        <swiper-slide
          v-for="(item,index) of imgs"
          :key="index"
        >
          <img class="gallary-img" :src="item"/>
        </swiper-slide>
          <div
            class="swiper-pagination"
            slot="pagination"
          ></div>
      </swiper>
    </div>
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
        swiperOptions: {
          pagination: '.swiper-pagination',
          paginationType: 'fraction',
          observeParents: true,
          observer: true
        },
        imgs: ["http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_800x800_70debc93.jpg", "http://img1.qunarzz.com/sight/p0/1709/76/7691528bc7d7ad3ca3.img.png_800x800_9ef05ee7.png"]
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
      closeFn() {
        this.$emit('close');
      }

    },
    // 加载完毕后触发
    mounted() {

    },
    // 路由退出时候调用
    beforeRouteLeave(to, from, next) { next() }
  }
</script>

<style scoped lang="stylus">
  .container >>> .swiper-container {
    overflow: inherit;
  }

  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    z-index: 99;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #000;

    .wrapper {
      width: 100%;
      height: 0;
      padding-bottom: 100%;

      .gallary-img {
        width: 100%;
      }

      .swiper-pagination {
        color: #fff;
        bottom: -1rem;
      }
    }
  }
</style>
