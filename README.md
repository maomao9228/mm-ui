# vue-cli3

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### 刷新首屏加载动画
```

index.html 
```

### /**   history模式  **/###

## <div id="app">再此添加标签动画以及文字，刷新时会出现</div> 

## Vue Cli3安装使用配置全程说明（https://www.jianshu.com/p/450217c125cc）

## 创建vue.config.js 配置参数

## .browsersListRc
**设置浏览器的兼容**

    > 1%,
    last 2 versions,
    not ie <= 8,
    safari >= 7

* 对于部分配置参数做一些解释:
* " >1%" :代表着全球超过1%人使用的浏览器
* “last 2 versions” : 表示所有浏览器兼容到最后两个版本
* “not ie <=8” :表示IE浏览器版本大于8（实则用npx browserslist 跑出来不包含IE9 ）
* “safari >=7”:表示safari浏览器版本大于等于7
