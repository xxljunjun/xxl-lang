### 新注册 npm 账号

### vue/cli 新建项目

### modules/ 下创建 src 和 index.js

- 踩坑：vue 组件必须命名（例：name:"pop"）

### 在 index.js 文件下

```js
// 导入组件，组件必须声明 name
import animateWave from "./src/animate-wave.vue";

// 为组件提供 install 安装方法，供按需引入
animateWave.install = function (Vue) {
  if (!Vue) {
    window.Vue = Vue;
  }
  Vue.component(animateWave.name, animateWave);
};

// 默认导出组件
export default animateWave;
```

### npm run lib

```json
"lib": "vue-cli-service build --target lib --name elisewave --dest lib modules/index.js"
```

### 配置 package.json 发布到 npm

```
private：false,
main : 入口文件，该字段需指向我们最终编译后的包文件;

```

### 发布

```
npm login --registry http://registry.npmjs.org
npm publish --registry http://registry.npmjs.org

```

### 总结

```js
//在 vue/cli 创建的 vue 项目中通过 install 方法进行安装，全局注册祖册，再修改 package.json,配置 npm run lib 和 private：false（并非私有），执行 npm 命令把自己的项目 push 到 npm 上面。
```
