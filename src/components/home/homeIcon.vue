<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide
        v-for="(page,index) of pages"
        :key="index"
      >
        <div
          class="icon"
          v-for="item of page"
          :key="item.id"
        >
          <div class="icon-img">
            <img class="icon-img-content" :src="item.imgUrl" alt="">
        </div>
            <P class="icon-trav">{{item.desc}}</P>
          </div>
      </swiper-slide>
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
        iconList: [
          {
            id: '001',
            imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
            desc: '景点门票'
          },
          {
            id: '002',
            imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/f0f00d6dfe038c044dbc9a437f58b0eb.png',
            desc: '一日游'
          },
          {
            id: '003',
            imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
            desc: '北京必游'
          },
          {
            id: '004',
            imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/3e/86314b2af03b7502.png',
            desc: '水上乐园'
          },
          {
            id: '005',
            imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20191/0334cf5430b9b5505fd79e2b8d7e8670.png',
            desc: '爬长城'
          },
          {
            id: '006',
            imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/6c/9e54a8540fee0102.png',
            desc: '故宫'
          },
          {
            id: '007',
            imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png',
            desc: '动植物园'
          },
          {
            id: '008',
            imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/fa/2548667cb6e902.png',
            desc: '野生动物'
          },
          {
            id: '009',
            imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/b4511345827006994aa1980a3886f0ac.png',
            desc: '北京世园会'
          },
          {
            id: '010',
            imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/338c5b924c5809e8c7b14f60a953c3e2.png',
            desc: '北京欢乐谷'
          },
        ],
        swiperOption: {
          autoplay: false
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
    computed: {
      pages() {
        const pages = [];
        this.list.forEach((item, index) => {
          const page = Math.floor(index / 8);
          if(!pages[page]) {
            pages[page] = []
          }
          pages[page].push(item);
        });
        return pages;
      }
    },
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
  @import '../../assets/styles/mixin.styl';

  .icons >>> .swiper-container {
    height: 0;
    padding-bottom: 50%;
  }

  .icons {
    margin-top: 0.1rem;
  }

  .icon {
    width: 25%;
    height: 0;
    float: left;
    overflow: hidden;
    padding-bottom: 25%;
    position: relative;

    .icon-img {
      position: absolute;
      top: 0px;
      right: 0;
      left: 0;
      bottom: 0.44rem;
      box-sizing: border-box;

      .icon-img-content {
        display: block;
        margin: 0 auto;
        height: 100%;
      }
    }

    .icon-trav {
      position: absolute;
      right: 0;
      left: 0;
      bottom: 0;
      height: 0.44rem;
      line-height: 0.44rem;
      text-align: center;
      eclipsis();
    }
  }
</style>
