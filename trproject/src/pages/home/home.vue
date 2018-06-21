<template>
    <div>
        <Header />
        <Homeswper :list="swiperList" />
        <Icons :icon="iconList"/>
        <hrecommend :reList="recommendList"/>
        <weekend :weList="weekendList"/>
    </div>
</template>
<script>
import Header from './components/header'
import Homeswper from './components/Homeswper'
import Icons from './components/Icons'
import hrecommend from './components/hrecommend'
import weekend from './components/Weekend'
import axios from 'axios'
export default {
  name: 'home',
  data () {
    return {
      iconList: [],
      swiperList: [],
      recommendList: [],
      weekendList: []
    }
  },
  components: {
    Header,
    Homeswper,
    Icons,
    hrecommend,
    weekend
  },
  methods: {
    getinfo () {
      axios.get('/api/index.json')
        .then(this.getinfosucc)
    },
    getinfosucc (rs) {
      rs = rs.data
      if (rs.ret && rs.data) {
        const data = rs.data
        this.swiperList = data.swiperList
        this.iconList = data.iconList
        this.recommendList = data.recommendList
        this.weekendList = data.weekendList
      }
    }
  },
  mounted () {
    this.getinfo()
  }
}
</script>
<style>

</style>
