<template>
    <div>
        <Header />
        <Homeswper />
        <Icons />
    </div>
</template>
<script>
import Header from './components/header'
import Homeswper from './components/Homeswper'
import Icons from './components/Icons'
export default {
  name: 'home',
  components: {
    Header,
    Homeswper,
    Icons
  }
}
</script>
<style>

</style>
