<template>
  <canvas id="myCanvas"></canvas>
</template>
<script>
export default {
  name: 'animateWave',
  methods: {
    draw(ctx, width, height) {
      ctx.clearRect(0, 0, width, height)
      const TIME = (TIME + 1) % CYCLEvar
      const angle = SCALE * TIME // 当前正弦角度var dAngle = 100 // 两个波峰相差的角度
      ctx.beginPath()
      ctx.moveTo(0, height * 0.5 + distance(WAVE_HEIGHT, angle, 0))
      ctx.bezierCurveTo(
        width * 0.4,
        height * 0.2 + distance(WAVE_HEIGHT, angle, dAngle),
        width * 0.6,
        height * 0.3 + distance(WAVE_HEIGHT, angle, 2 * dAngle),
        width,
        height * 0.5 + distance(WAVE_HEIGHT, angle, 4 * dAngle)
      )
      ctx.bezierCurveTo(
        width * 0.6,
        height * 0.7 + distance(WAVE_HEIGHT, angle, dAngle - 30),
        width * 0.7,
        height * 0.7 + distance(WAVE_HEIGHT, angle, 2 * dAngle - 30),
        0,
        height * 0.8 + distance(WAVE_HEIGHT, angle, 0)
      )
      ctx.lineTo(0, height * 0.5 + distance(WAVE_HEIGHT, angle, 0))
      ctx.fillStyle = 'rgba(156,39, 176, 0.1)'
      ctx.fill()
      ctx.beginPath()
      ctx.moveTo(0, height * 0.2 + distance(WAVE_HEIGHT, angle, 0))
      ctx.bezierCurveTo(
        width * 0.4,
        height * 0.2 + distance(WAVE_HEIGHT, angle, dAngle),
        width * 0.6,
        height * 0.3 + distance(WAVE_HEIGHT, angle, 2 * dAngle),
        width,
        height * 0.4 + distance(WAVE_HEIGHT, angle, 4 * dAngle)
      )
      ctx.bezierCurveTo(
        width * 0.6,
        height * 0.7 + distance(WAVE_HEIGHT, angle, dAngle - 30),
        width * 0.7,
        height * 0.7 + distance(WAVE_HEIGHT, angle, 2 * dAngle - 30),
        0,
        height * 0.6 + distance(WAVE_HEIGHT, angle, 0)
      )
      ctx.lineTo(0, height * 0.5 + distance(WAVE_HEIGHT, angle, 0))
      ctx.fillStyle = 'rgba(64,158, 255, 0.1)'
      ctx.fill()
      function distance(height, currAngle, diffAngle) {
        return (
          height * Math.cos((((currAngle - diffAngle) % 360) * Math.PI) / 180)
        )
      }
      window.requestAnimationFrame(function () {
        draw(ctx, width, height)
      })
    },
  },
  mounted() {
    var WAVE_HEIGHT = 200
    // 波浪变化高度
    var SCALE = 0.5
    // 绘制速率var
    CYCLE = 360 / SCALEvar
    TIME = 0
    function initCanvas() {
      var c = document.getElementById('myCanvas')
      var width = window.screen.widthvar
      var height = window.screen.heightvar
      ctx = c.getContext('2d')
      c.width = width
      c.height = height
      startwindow.requestAnimationFrame(function () {
        draw(ctx, width, height)
      })
    }

    initCanvas()
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>