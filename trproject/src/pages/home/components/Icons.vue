<template>
  <div class="icons">
   <swiper :options="swiperOption">
    <swiper-slide v-for="(page,index) in pages" :key="index">
      <div class="icon" v-for="item in page" :key="item.id">
          <div class="icon-img">
             <img class="icon-img-content" :src="item.imgUrl">
          </div>
          <p class="icon-font">{{item.desc}}</p>
      </div>
    </swiper-slide>
   </swiper>
  </div>

</template>
<script>
export default {
  name: 'Icons',
  props: {
    icon: Array
  },
  data () {
    return {
      swiperOption: {
        autoplay: false
      }
    }
  },
  computed: {
    pages: function () {
      const pages = []
      this.icon.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }

}
</script>
<style lang="stylus" scoped>
  @import '~styles/mixin.styl'
  .icons
     margin-top :.1rem
     overflow :hidden
     height :0
     padding-bottom :50%
     .icon
      position :relative
      float :left
      width :25%
      height :0
      padding-bottom:25%
      .icon-img
       position :absolute
       top :0
       left :0
       right :0
       bottom :0.44rem
       box-sizing :border-box
       padding :0.1rem
       .icon-img-content
          display :block
          margin : 0 auto
          height :100%
      .icon-font
         position :absolute
         left:0
         right:0
         bottom :0
         line-height :0.44rem
         text-align :center
         color :#333333
         ellips()
</style>
