<template>
  <div>
    <div class="comment-title">
      热销推荐
    </div>
    <ul>
      <router-link
        tag="li"
        :to="'/detail/'+item.id"
        class="item border-bottom"
        v-for="item of list"
      >
        <img class="item-img" :src="item.imgUrl" alt="">

        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </router-link>

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
            imgUrl: 'http://img1.qunarzz.com/sight/p0/1508/89/895a1b7add84f23faca053ce9e3153db.water.jpg_200x200_99ae30ee.jpg',
            title: '北京海洋公园北京首站',
            desc: '北京首站，浪漫的海洋主题公园'
          },
          {
            id: '002',
            imgUrl: 'http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_200x200_1bc99086.jpg',
            title: '故宫',
            desc: '世界五大宫之首，穿越与您近在咫尺'
          },
          {
            id: '003',
            imgUrl: 'http://img1.qunarzz.com/sight/p0/1708/2b/2b3b94de99c0a425a3.img.jpg_200x200_2458ffb2.jpg',
            title: '八达岭长城',
            desc: '不到长城非好汉'
          },
          {
            id: '004',
            imgUrl: 'http://img1.qunarzz.com/sight/p0/1604/78/78873494f26e554090.water.jpg_200x200_331422ad.jpg',
            title: '京东石林峡',
            desc: '京东石林峡京东石林峡京东石林峡'
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

  .item {
    height: 1.9rem;
    display: flex;

    .item-img {
      width: 1.7rem;
      height: 1.7rem;
      padding: 0.1rem;
    }

    .item-info {
      flex: 1;
      padding: 0.1rem;
      min-width: 0;

      .item-title {
        line-height: 0.54rem;
        font-size: 0.32rem;
        eclipsis();
      }

      .item-desc {
        line-height: 0.4rem;
        color: #bbb;
        eclipsis();
      }

      .item-button {
        line-height: 0.44rem;
        padding: 0 0.2rem;
        background: #ff9300;
        border-radius: 0.06rem;
        margin-top: 0.16rem;
        color: #fff;
      }
    }
  }
</style>
