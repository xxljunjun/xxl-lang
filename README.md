
#### Examples
```
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
```

#### Attributes
参数|说明|类型|可选值|默认值
:-|:-|:-|:-|:-
/title|标题|String|-|我是标题
/isShow|是否显示 pop，支持 .sync 修饰符|Boolean|-|true

#### Events
时间名称|说明|回调参数
:-|:-|:-
/cancleBack|pop关闭的回调|-
/comfireBack|pop打开的回调|-

