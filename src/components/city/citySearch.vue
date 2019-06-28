<template>
  <div>
    <div class="search">
      <input
        type="text"
        class="search-input"
        placeholder="请输入城市名或拼音"
        v-model="keyword"
      >
    </div>
    <div
      class="search-content"
      ref="search"
      v-if="keyword"
    >
      <ul>
        <li
          v-for="item of list"
          :key="item.id"
          @click="changeCityFn(item.name)"
          class="search-item border-bottom"
        >{{item.name}}</li>
        <li
          class="search-item border-bottom"
          v-show="!list.length"
        >没有找到匹配数据</li>
      </ul>
    </div>
  </div>

</template>

<script>
  import Bscroll from 'better-scroll';
  import { mapMutations } from 'vuex';
  export default {
    // 接收父级传递的参数
    props: ['citys'],
    // 监听数据变化
    watch: {
      keyword() {
        if(this.timer) {
          clearTimeout(this.timer)
        }
        if(!this.keyword) {
          this.list = [];
          return
        }
        this.timer = setTimeout(() => {
          const result = [];
          for(let i in this.citys) {
            this.citys[i].forEach((value) => {
              if(value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
                result.push(value);
              }
            })
          }
          this.list = result;
        }, 100)
      }
    },
    // 页面数据集合
    data() {
      return {
        keyword: '',
        timer: null,
        list: []
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
      ...mapMutations(['changeCity']),
      changeCityFn(city) {
        this.$store.dispatch('changeCity', city);
        this.$router.push('/');
      },
      changeCityFn(city) {
        this.changeCity(city);
        this.$router.push('/');
      }
    },
    // 加载完毕后触发
    mounted() {
      this.scroll = new Bscroll(this.$refs.search);
    },
    // 路由退出时候调用
    beforeRouteLeave(to, from, next) { next() }
  }
</script>

<style scoped lang="stylus">
  @import '../../assets/styles/common.styl';

  .search {
    height: 0.72rem;
    background: $bgColor;
    padding: 0 0.1rem;

    .search-input {
      box-sizing: border-box;
      padding: 0 0.1rem;
      height: 0.62rem;
      line-height: 0.62rem;
      width: 100%;
      text-align: center;
      border-radius: 0.06rem;
      color: #666;
    }
  }

  .search-content {
    position: absolute;
    overflow: hidden;
    top: 1.58rem;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    background: #eeeeee;

    .search-item {
      line-height: 0.62rem;
      background: #ffffff;
      padding: 0.1rem;
    }
  }
</style>
