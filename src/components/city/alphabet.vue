<template>
  <ul class="list">
    <li
      class="item"
      v-for="item of letters"
      :key="item"
      :ref="item"
      @click="letterClick"
      @touchStartFn="touchStartFn"
      @touchMoveFn="touchMoveFn"
      @touchEndFn="touchEndFn"
    >{{item}}</li>
  </ul>
</template>

<script>
  export default {
    // 接收父级传递的参数
    props: ['citys'],
    // 监听数据变化
    watch: {},
    // 页面数据集合
    data() {
      return {
        touchStatus: false,
        startY: 0,
        timer: null
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
    updated() {
      this.startY = this.$refs['A'][0].offsetTop;
    },
    // 实时监控data参数数据变化
    computed: {
      letters() {
        const letters = [];
        for(let i in this.citys) {
          letters.push(i);
        }
        return letters
      }
    },
    // 执行方法
    methods: {
      letterClick(e) {
        this.$emit("letterInfo", e.target.innerText);
      },
      touchStartFn() {
        this.touchStatus = true;
      },
      touchMoveFn(e) {
        if(this.touchStatus) {
          if(this.timer) {
            clearTimeout(this.timer);
          }
          this.timer = setTimeout(() => {
            const touchY = e.touches[0].clientY;
            const index = Math.floor((touchY - this.startY) / 20);
            if(index >= 0 && index < this.letters.length) {
              this.$emit('letterInfo', this.letters[index]);
            }
          }, 16)

        }
      },
      touchEndFn() {
        this.touchStatus = false;
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
  @import '../../assets/styles/common.styl';

  .list {
    position: absolute;
    top: 1.58rem;
    right: 0;
    bottom: 0;
    width: 0.4rem;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .item {
      text-align: center;
      line-height: 0.4rem;
      color: $bgColor;
    }
  }
</style>
