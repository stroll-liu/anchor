# anchor
vue anchor

## 安装

```js
npm i @stroll/anchor

```
## 引入
```js
import Vue from 'vue'
import Anchor from '@stroll/anchor'

Vue.use(Anchor)

// or
import {scrollAnchor, routerAnchor} from '@stroll/anchor'


```
## 调用
```js
data () {
  return {
    v: '123456789',
    Selected: {
      index: 0
    }
  }
},
mounted () {
  // 渲染完毕后执行
  this.$nextTick(() => {
    // 进入页面后定位锚点或写成点击定位
    // doc 滚动条所在 元素Id，若在 window 上可不传
    // id 锚点Id
    this.$sAnchor.routerAnchor({doc: 'content', id: `ass8`})
    // 注册监听滚动事件，document.getElementById('content') 获取滚动条元素，
    document.getElementById('content').addEventListener('scroll', this.startAnchor)
    // 如果滚动条在 window 上，则写成 window.addEventListener('scroll', this.startAnchor)
  })
},
destroyed () {
  // 销毁监听事件，如果滚动条在 window 上，则写成 window.removeEventListener
  document.getElementById('content').removeEventListener('scroll', this.startAnchor)
},
methods: {
  startAnchor () {
    // 锚点事件
    // doc 获取滚动条元素Id, 在 window 上可不传
    // els 需定位的锚点元素
    // Selected.index 当前锚点Id （可用此参数做吸顶，高亮。。。）
    this.$sAnchor.scrollAnchor({doc: 'content', els: '.ul li', Selected: this.Selected})
  },
  setIndex (index) {
    this.Selected.index = index
  }
}
```

## 例子 ./example