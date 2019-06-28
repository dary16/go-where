<template>
  <div>
    <div
      class="banner"
      @click="showImgs"
    >
      <img :src="detailList.bannerImg" class="banner-img"/>
      <div class="banner-info">
        <div class="banner-title">{{detailList.sightName}}</div>
        <div class="banner-num">
          <span class="iconfont banner-icon">&#xe691;</span>
          {{detailList.bannerImg.length}}
        </div>
      </div>
    </div>
    <v-fade>
      <v-gallary
        :imgs="imgs"
        v-show="show"
        @close="closeFn"
      ></v-gallary>
    </v-fade>
  </div>

</template>

<script>
  export default {
    // 接收父级传递的参数
    props: ['detailList'],
    // 监听数据变化
    watch: {
      imgs() {
        this.imgs = this.detailList.gallaryImgs
      }
    },
    // 页面数据集合
    data() {
      return {
        imgs: [],
        show: false
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
      showImgs() {
        this.show = true;
      },
      closeFn() {
        this.show = false;
      }
    },
    // 加载完毕后触发
    mounted() { },
    // 路由退出时候调用
    beforeRouteLeave(to, from, next) { next() }
  }
</script>

<style scoped lang="stylus">
  .banner {
    position: relative;
    overflow: hidden;
    height: 0;
    padding-bottom: 50%;

    .banner-img {
      width: 100%;
    }

    .banner-info {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      line-height: 0.6rem;
      display: flex;
      color: #fff;
      background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8));

      .banner-title {
        flex: 1;
        font-size: 0.32rem;
        padding: 0 0.2rem;
      }

      .banner-num {
        margin-top: 0.14rem;
        padding: 0 0.4rem;
        line-height: 0.32rem;
        height: 0.32rem;
        font-size: 0.24rem;
        border-radius: 0.2rem;
        background: rgba(0, 0, 0, 0.8);

        .banner-icon {
          font-size: 0.24rem;
        }
      }
    }
  }
</style>
