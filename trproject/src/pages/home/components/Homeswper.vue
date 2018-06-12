<template>
   <div class="Swper">
     <swiper :options="swiperOption" >
        <!-- slides -->
        <swiper-slide v-for="item in swiperList" :key="item.id">
            <img class="swper-img" :src="item.imgUrl" >
        </swiper-slide>
           <!-- Optional controls -->
        <div class="swiper-pagination"  slot="pagination"></div>
     </swiper>

   </div>
</template>
<script>
export default {
  name: 'HomeSwper',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      },
      swiperList: [
        {
          id: '0001',
          imgUrl: '//img1.qunarzz.com/vc/56/c2/bc/94cd92692289c78770403648b5.jpg'
        },
        {
          id: '0002',
          imgUrl: '//img1.qunarzz.com/vc/ba/f3/09/bb1aa2d86b3b29b1feddcd840c.jpg'
        }
      ]
    }
  }

}
</script>
<style lang="stylus" scoped>
  .Swper>>>.swiper-pagination-bullet-active
     background : #ffffff
  .Swper
     overflow : hidden
     width :100%
     height :0
     padding-bottom : 30.4%
     background :#eeeeee
     .swper-img
        width :100%

</style>
