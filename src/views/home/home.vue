<template>
  <div class="hello">
    <v-home-header></v-home-header>
    <v-home-swiper :list="swiperList"></v-home-swiper>
    <v-home-icon :list="iconList"></v-home-icon>
    <v-home-comment :list="commentList"></v-home-comment>
    <v-weeked :list="weekedList"></v-weeked>
  </div>
</template>

<script>
  import { mapState } from 'vuex';
  import axios from 'axios'
  export default {
    name: 'home',
    data() {
      return {
        swiperList: [],
        iconList: [],
        commentList: [],
        weekedList: [],
        lastCity: ''
      }
    },
    mounted() {
      this.lastCity = this.city;
      this.getHomeInfo();
    },
    computed: {
      ...mapState(['city'])
    },
    methods: {
      getHomeInfo() {
        axios.get('/data?city=' + this.city)
          .then(this.getHomeInfoSucc)
      },
      getHomeInfoSucc(res) {
        res = res.data;
        if(res.ret && res.data) {
          this.swiperList = res.data.swiperList;
          this.iconList = res.data.iconList;
          this.commentList = res.data.recommendList;
          this.weekedList = res.data.weekendList;
        }

      }
    },
    activated() {
      if(this.lastCity !== this.city) {
        this.lastCity = this.city;
        this.getHomeInfo();
      }
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
