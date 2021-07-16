// 导入组件，组件必须声明 name
import animateWave from './src/animate-wave.vue'

// 为组件提供 install 安装方法，供按需引入
animateWave.install = function (Vue) {
	if (!Vue) {
		window.Vue = Vue
	}
	Vue.component(animateWave.name, animateWave)
}

// 默认导出组件
export default animateWave