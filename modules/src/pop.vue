<template>
  <div class="main" v-if="isShow">
    <div class="mask" @click="close"></div>
    <div class="box">
      <div class="title">{{ title }}</div>
      <div class="header">
        <div @click="close" class="close-box">关闭</div>
      </div>
      <div class="content">
        <slot name="content"></slot>
      </div>
      <div class="bottom">
        <div @click="cancle" class="cancle btn">取消</div>
        <div @click="comfire" class="comfire btn">确认</div>
      </div>
    </div>
  </div>
</template>

<script>
/**
 * 弹窗组件
 * @description 该组件是仿elementUI的弹窗组件
 * @property {Boolen} isShow 是否弹出组件
 * @property {Boolen} title 是否中奖以及是否已经领奖
 * @property {Array} cancleBack 关闭弹窗的回调函数
 * @property {Object} comfireBack 确认弹窗的回调函数
 * @example 用法
 */
export default {
  name: 'pop',
  props: {
    isShow: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: '我是标题',
    },
    cancleBack: {
      type: Function,
      default: null,
    },
    comfireBack: {
      type: Function,
      default: null,
    },
  },
  data() {
    return {
      popStatus: true,
    }
  },
  methods: {
    close() {
      if (typeof this.cancleBack === 'function') {
        this.cancleBack()
      }
      this.$emit('update:isShow', false)
    },
    cancle() {
      if (typeof this.cancleBack === 'function') {
        this.cancleBack()
      }
      this.$emit('update:isShow', false)
    },
    comfire() {
      if (typeof this.comfireBack === 'function') {
        this.comfireBack()
      }
      this.$emit('update:isShow', false)
    },
  },
  components: {},
  computed: {},
}
</script>

<style scoped>
.main {
  font-size: 16px;
}
.block {
  height: 100vh;
  width: 100vw;
  position: relative;
}
.mask {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 998;
  background-color: #000;
  opacity: 0.6;
}
.box {
  width: 400px;
  height: 200px;
  background: #fff;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  margin: auto;
  z-index: 999;
  border-radius: 10px;
  padding: 20px;
  border: 1px solid #ccc;
  box-shadow: 0 2px 8px #ccc;
}
.title {
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
}
.header {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  cursor: pointer;
}
.close-box {
  position: relative;
  top: -30px;
}
.bottom {
  display: flex;
  position: absolute;
  bottom: 20px;
  align-items: center;
  justify-content: center;
  width: 100%;
}
.btn {
  height: 30px;
  width: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  cursor: pointer;
  color: #fff;
  font-size: 14px;
}
.cancle {
  background: #ccc;
  margin-right: 20px;
}
.comfire {
  background: #409eff;
}
.content {
  width: 400px;
  word-wrap: break-word;
}
</style>