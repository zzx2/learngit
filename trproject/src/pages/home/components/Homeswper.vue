<template>
   <div class="Swper">
     <swiper :options="swiperOption" >
        <!-- slides -->
        <swiper-slide v-for="item in list" :key="item.id">
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
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      }
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
