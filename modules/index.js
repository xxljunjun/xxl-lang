// 导入组件，组件必须声明 name
import pop from './src/pop.vue'

// 为组件提供 install 安装方法，供按需引入
pop.install = function (Vue) {
	if (!Vue) {
		window.Vue = Vue
	}
	Vue.component(pop.name, pop)
}

// 默认导出组件
export default pop