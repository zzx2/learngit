<template>
    <div>
        <Header />
        <Homeswper />
        <Icons />
        <Hrecommend />
    </div>
</template>
<script>
import Header from './components/header'
import Homeswper from './components/Homeswper'
import Icons from './components/Icons'
import Hrecommend from './components/Hrecommend'
export default {
  name: 'home',
  components: {
    Header,
    Homeswper,
    Icons,
    Hrecommend
  }
}
</script>
<style>

</style>
