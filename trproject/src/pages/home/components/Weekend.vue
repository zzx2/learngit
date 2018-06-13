<template>
   <div>
      <p class="retitle">周末去哪儿</p>
      <ul>
        <li class="item border-bottom" v-for='item in reList' :key='item.id'>
          <div class="item-img-wapper">
           <img class="item-img" :src='item.imgUrl'>
          </div>
          <div class="item-info">
            <p class="item-title">{{item.title}}</p>
            <p class="item-content">{{item.content}}</p>
          </div>
        </li>
      </ul>
   </div>

</template>
<script>
export default {
  name: 'WeeKend',
  data () {
    return {
      reList: [
        {
          id: '01',
          imgUrl: 'https://imgs.qunarzz.com/vc/33/99/f2/9b8c391353739013629ec85b12.jpg_224x85x92.jpg',
          title: '尊享普吉岛7天5晚',
          content: '3晚精品泰式五星+2晚洲际假日沙滩酒店'

        },
        {
          id: '02',
          imgUrl: 'https://imgs.qunarzz.com/vc/33/99/f2/9b8c391353739013629ec85b12.jpg_224x85x92.jpg',
          title: '尊享普吉岛7天5晚',
          content: '3晚精品泰式五星+2晚洲际假日沙滩酒店'

        },
        {
          id: '03',
          imgUrl: 'https://imgs.qunarzz.com/vc/33/99/f2/9b8c391353739013629ec85b12.jpg_224x85x92.jpg',
          title: '尊享普吉岛7天5晚',
          content: '3晚精品泰式五星+2晚洲际假日沙滩酒店'

        }
      ]
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
