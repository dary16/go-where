<template>
  <div>
    <div class="comment-title">
      周末去哪儿
    </div>
    <ul>
      <li
        class="item border-bottom"
        v-for="item of list"
        :key="item.id"
      >
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl" alt="">
      </div>

          <div class="item-info">
            <p class="item-title">{{item.title}}</p>
            <p class="item-desc">{{item.desc}}</p>
          </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    // 接收父级传递的参数
    props: ['list'],
    // 监听数据变化
    watch: {},
    // 页面数据集合
    data() {
      return {
        commentList: [
          {
            id: '001',
            imgUrl: 'http://img1.qunarzz.com/sight/source/1811/f3/86173f863bef61.jpg_r_640x214_52b003ac.jpg',
            title: '京城周末撒欢',
            desc: '在帝都过周末，不仅仅是城中游！'
          },
          {
            id: '002',
            imgUrl: 'http://img1.qunarzz.com/sight/source/1811/7e/476589267ebb41.jpg_r_640x214_bf599709.jpg',
            title: '京城溜娃必去',
            desc: '德智体美劳全面发展的亲子日，这些地方该去看看…'
          },
          {
            id: '003',
            imgUrl: 'http://img1.qunarzz.com/sight/source/1505/aa/7baaf8a851d221.jpg_r_640x214_1431200f.jpg',
            title: '帝都必打卡',
            desc: '来北京必去的景点非这些地方莫属'
          },
          {
            id: '004',
            imgUrl: 'http://img1.qunarzz.com/sight/source/1505/9e/21df651e19af5d.jpg_r_640x214_3ea5bb38.jpg',
            title: '寻找北京的皇城范儿',
            desc: '数百年的宫廷庙宇，至今依旧威严霸气'
          }
        ]
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
  @import '../../assets/styles/mixin.styl';

  .comment-title {
    line-height: 0.8rem;
    background: #eee;
    margin-top: 0.2rem;
    text-indent: 0.2rem;
  }

  .item-img-wrapper {
    overflow: hidden;
    height: 0;
    padding-bottom: 33.9%;
  }

  .item-img {
    width: 100%;
  }

  .item-info {
    flex: 1;
    padding: 0.1rem;
    min-width: 0;

    .item-title {
      line-height: 0.54rem;
      font-size: 0.28rem;
      eclipsis();
      color: #212121;
    }

    .item-desc {
      line-height: 0.4rem;
      color: #616161;
      font-size: 0.24rem;
      eclipsis();
    }
  }
</style>
