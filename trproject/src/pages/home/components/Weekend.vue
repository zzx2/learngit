<template>
   <div>
      <p class="retitle">周末去哪儿</p>
      <ul>
        <li class="item border-bottom" v-for='item in weList' :key='item.id'>
          <div class="item-img-wapper">
           <img class="item-img" :src='item.imgUrl'>
          </div>
          <div class="item-info">
            <p class="item-title">{{item.title}}</p>
            <p class="item-content">{{item.desc}}</p>
          </div>
        </li>
      </ul>
   </div>

</template>
<script>
export default {
  props: {
    weList: Array
  },
  name: 'WeeKend',
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
   .item-img-wapper
       overflow :hidden
       height :0
       padding-bottom :33.4%
       .item-img
         width :100%
    .item-info
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

</style>
