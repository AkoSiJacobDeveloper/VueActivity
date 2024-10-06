<template>
  <div>
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from './components/Header/Header.vue';

export default {
    components: {
      Header,
    }
}
</script>


<style lang="scss" scoped>
div {
    background-color: #002233;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
    z-index: -10;
}
</style>