<template>
    <div class="header">
        <div class="header-left">
            <div class="iconfont backicon">&#xe624;</div>
        </div>
        <div class="header-input">
         <span class="iconfont">
            &#xe632;输入城市/地点/景点
         </span>
        </div>
        <div class="header-right">
         <span class="iconfont">
             城市&#xe8d2;
         </span>
        </div>
    </div>
</template>
<script>
export default {
  name: 'Header'

}
</script>
<style lang="stylus" scoped>
@import '~styles/varable.styl'
.header
   display:flex;
   height:.86rem;
   line-height:.86rem;
   background :$bgcolor;
   color:#ffffff;
   .header-left
     width:.64rem;
     .backicon
      text-align:center;
      font-size:.4rem;
   .header-input
     flex:1;
     height:.64rem;
     line-height :.64rem;
     padding-left:.2rem;
     background:#ffffff;
     color:#cccccc;
     border-radius:.1rem;
     margin: .12rem .2rem
   .header-right
     width:1.24rem;
     text-align:center;

</style>
