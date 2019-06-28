<template>
  <div
    class="list"
    ref="wrapper"
  >
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">{{this.city}}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div
            class="button-wrapper"
            v-for="item of hotCitys"
            :key="item.id"
            @click="changeCityFn(item.name)"
          >
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div
        class="area"
        v-for="(item,key) of citys"
        :key="key"
        :ref="key"
      >
        <div class="title  border-topbottom">{{key}}</div>
        <div class="item-list">
          <div
            class="item border-bottom"
            v-for="innerItem of item"
            :key="innerItem.id"
            @click="changeCityFn(innerItem.name)"
          >
            {{innerItem.name}}
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import { mapState, mapMutations } from 'vuex'
  import BScroll from 'better-scroll';
  export default {
    // 接收父级传递的参数
    props: ['citys', 'hotCitys', 'letter'],
    // 监听数据变化
    watch: {
      letter() {
        if(this.letter) {
          const ele = this.$refs[this.letter][0];
          this.scroll.scrollToElement(ele);
        }
      }
    },
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
    computed: {
      ...mapState(['city'])
    },
    // 执行方法
    methods: {
      ...mapMutations(['changeCity']),
      changeCityFn(city) {
        this.changeCity(city);
        this.$router.push('/');
      }
    },
    // 加载完毕后触发
    mounted() {
      this.scroll = new BScroll(this.$refs.wrapper);
    },
    // 路由退出时候调用
    beforeRouteLeave(to, from, next) { next() }
  }
</script>

<style scoped lang="stylus">
  @import '../../assets/styles/common.styl';

  .border-topbottom {
    &:before, &:after {
      border-color: #ccc;
    }
  }

  .border-topbottom {
    &:before {
      border-color: #ccc;
    }
  }

  .list {
    position: absolute;
    overflow: hidden;
    top: 1.58rem;
    left: 0;
    right: 0;
    bottom: 0;
  }

  .title {
    line-height: 0.44rem;
    background: #eeeeee;
    padding-left: 0.2rem;
    color: #666;
    font-size: 0.26rem;
  }

  .button-list {
    padding: 0.1rem;
    overflow: hidden;
    margin-right: 0.2rem;

    .button-wrapper {
      float: left;
      width: 33.33%;

      .button {
        text-align: center;
        margin: 0.1rem;
        padding: 0.1rem 0;
        border: 0.02rem solid #ccc;
        border-radius: 0.06rem;
      }
    }
  }

  .item-list {
    line-height: 0.76rem;
    padding-left: 0.2rem;
  }
</style>
