<template>
  <div>
    <v-city-header></v-city-header>
    <v-city-search :citys="citys"></v-city-search>
    <v-city-list
      :hotCitys="hotCitys"
      :citys="citys"
      :letter="letter"
    ></v-city-list>
    <v-alphabet
      :citys="citys"
      @letterInfo="changeFn"
    ></v-alphabet>
  </div>
</template>

<script>
  import axios from 'axios';
  export default {
    // 接收父级传递的参数
    props: [],
    // 监听数据变化
    watch: {},
    // 页面数据集合
    data() {
      return {
        hotCitys: [],
        citys: [],
        letter: ''
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
      getCityInfo() {
        axios.get('/cityData')
          .then(this.getCityInfoSucc)
      },
      getCityInfoSucc(res) {
        res = res.data;
        if(res.ret && res.data) {
          this.hotCitys = res.data.hotCities;
          this.citys = res.data.cities;
        }
      },
      changeFn(n) {
        this.letter = n;
      }
    },
    // 加载完毕后触发
    mounted() {
      this.getCityInfo();
    },
    // 路由退出时候调用
    beforeRouteLeave(to, from, next) { next() }
  }
</script>

<style scoped lang="less">
</style>
