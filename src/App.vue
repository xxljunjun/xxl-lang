<template>
  <div id="app">
    <Xxl title="111111" :cancleBack="cancle" :comfireBack="comfire">
      <template slot="content"> 2222222222222222 </template>
    </Xxl>
  </div>
</template>

<script>
import Xxl from '../modules/src/pop.vue'
export default {
  name: 'App',
  components: {
    Xxl,
  },
  methods: {
    cancle() {
      console.log('取消')
    },
    comfire() {
      console.log('确认')
    },
  },
}
</script>

<style>
body,
html {
  margin: 0;
  padding: 0;
}
#app {
  color: #000;
}
</style>
