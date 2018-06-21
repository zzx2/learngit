<template>
   <div>
      <p class="retitle">推荐景点</p>
      <ul>
        <li class="item border-bottom" v-for='item in reList' :key='item.id'>
          <img class="item-img" :src='item.imgUrl'>
          <div class="item-info">
            <p class="item-title">{{item.title}}</p>
            <p class="item-content">{{item.desc}}</p>
            <button class="item-button">查看详情</button>
          </div>
        </li>
      </ul>
   </div>

</template>
<script>
export default {
  name: 'hrecommend',
  props: {
    reList: Array
  },
  data () {
    return {
    }
  }

}
</script>
<style lang='stylus' scoped>
@import '~styles/mixin.styl';
  .retitle
     margin-top :.2rem
     line-height :.8rem
     background :#eeee
     text-indent:.2rem
  .item
       display :flex
       overflow :hidden
       height :1.9rem
       .item-img
         height :1.7rem
         width :1.7rem
         padding:.1rem
       .item-info
          flex :1
          padding :.1rem
          min-width :0
          .item-title
            line-height :.54rem
            font-size :.32rem
            ellips()
          .item-content
             line-height :.4rem
             color :#cccc
             ellips()
          .item-button
             line-height :.44rem
             margin-top :.16rem
             background :#ff9300
             padding :0 0.1rem
             border-radius :.06rem
             color:#ffffff

</style>
