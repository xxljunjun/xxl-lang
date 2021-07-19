<template>
  <div id="app">
    <pop
      :isShow.sync="popShowStatus"
      title="我是标题"
      :cancleBack="cancle"
      :comfireBack="comfire"
    >
      <template slot="content"> 我是内容 </template>
    </pop>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      popShowStatus: true,
    }
  },
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
