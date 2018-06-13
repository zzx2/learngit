<template>
    <div>
        <Header />
        <Homeswper />
        <Icons />
        <hrecommend />
        <weekend />
    </div>
</template>
<script>
import Header from './components/header'
import Homeswper from './components/Homeswper'
import Icons from './components/Icons'
import hrecommend from './components/hrecommend'
import weekend from './components/Weekend'
export default {
  name: 'home',
  components: {
    Header,
    Homeswper,
    Icons,
    hrecommend,
    weekend
  }
}
</script>
<style>

</style>
