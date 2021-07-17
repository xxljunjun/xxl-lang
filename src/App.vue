<template>
  <div id="app">
    <pop title="111111" :cancleBack="cancle" :comfireBack="comfire">
      <template slot="content"> 2222222222222222 </template>
    </pop>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {},
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
