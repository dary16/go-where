<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>输入城市/景点/游玩主题</div>
    <router-link to="/city">
      <div class="header-right">
        {{this.city}}
        <span class="iconfont arrow-icon">&#xe64a;</span>
      </div>
    </router-link>

  </div>
</template>

<script>
  import { mapState, mapGetters } from 'vuex'
  export default {
    props: {
    },
    computed: {
      ...mapState(['city']),
      ...mapGetters(['doubleCity'])
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
  @import '../../assets/styles/common.styl';

  .header {
    line-height: 0.86rem;
    display: flex;
    background: $bgColor;
    color: #fff;

    .header-left {
      width: 0.64rem;
      float: left;

      .back-icon {
        text-align: center;
        font-size: 0.4rem;
      }
    }

    .header-input {
      flex: 1;
      background: #fff;
      border-radius: 0.1rem;
      margin-top: 0.12rem;
      height: 0.64rem;
      line-height: 0.64rem;
      margin-left: 0.2rem;
      color: #ccc;
      padding-left: 0.2rem;
    }

    .header-right {
      min-width: 1.04rem;
      padding: 0 0.1rem;
      float: right;
      text-align: center;
      color: #fff;

      .arrow-icon {
        font-size: 0.24rem;
        margin-left: -0.04rem;
      }
    }
  }
</style>
