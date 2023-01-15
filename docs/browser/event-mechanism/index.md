---
title: 事件机制
description: 事件机制
---

# 事件机制

## 1. 事件的定义

*@def* **事件** 是在编程时系统内发生的动作或者发生的事情-系统会在事件出现时产生或触发某种信号，并提供一个自动加载的某种动作的机制。[^1]

[^1]: 事件介绍，MDN，<https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript/Building_blocks/Events>

其实事件就像是：
1. 用鼠标点击按钮
2. 提交表单

对网页进行的一切操作，都应该称为是事件。

因为，事件触发就需要某种响应，这时候我们就需要事件监听器（事件处理器）。

## 2. 事件注册

1. 事件处理属性

    例如：

    > 需求：点击按钮，使背景颜色发生改变

    ```html
    <button onclick="bgChange()">
        按钮
    </button>
    ```

    ```js
    function bgChange() {
        let rndCol = 'rgb('+random(255)+','+random(255)+','+random(255)+")";
        document.body.style.backgroundColor = rndCol
    }
    ```

2. 使用 `addEventListener(type,listner,useCapture/options)`

    > 将监听器注册到 `eventTarget` 身上，当这个 `Target` 被触发时，那么会调用 `Listener` 回调函数

    **可以对 `eventTarget` 多次绑定**

    + `type`：触发类型

    + `listener`：触发以后会干什么事情

    + `useCapture`：布尔值

        + `true`：事件捕获
        + `false`：事件冒泡，**默认为 `false`**

    + `options`：一个可选参数对象

        + `capture`：布尔值，作用和 `useCapture` 一样

        + `once`：布尔值，`true` 表示这个监听器最多只可以触发一次

        + `passive`：布尔值，当为 `true` 时，回调函数不会调用 `preventDefault`

        + `preventDefault`：阻止默认行为

        + `signal`：`AbortSignal`

        > `AbortSignal` 的 `abort()` 方法被调用时，监听器会被移除

## 事件触发阶段

一共分为三个阶段:

1. 捕获阶段

    事件从根节点向目标节点，途中经过各个DOM节点，在每个节点上进行捕获，直到到达目标节点

2. 目标阶段

    事件到达目标节点，就是目标阶段，事件在目标阶段被触发

3. 冒泡阶段

    事件在目标节点触发后，会一层层向上冒泡，直到达到根节点

## 事件代理

其实利用的是事件冒泡，当有很多子元素都需要点击，我们可以不必一个个为子元素注册事件，可以在他的父元素身上注册事件，让子元素发生的事件冒泡到父元素节点上。

```html
<ul class="list">
    <li class="first">1</li>
    <li>2</li>
    <li>3</li>
    <li>4</li>
    <li>5</li>
</ul>
```

```javascript
const ul = document.querySelector(".list");
const first = document.querySelector(".first");

ul.addEventListener("click", (e) => {
    console.log(e.target)
    console.log(e.currentTarget)
    // console.log("ul触发")
})
// first.addEventListener("click",()=>{
//     console.log("first触发")
// })
```

我们可以看到，当你点击第一个 `li`，`e.target` 显示的就是第一个 `li`

+ `e.target`：事件触发的元素
+ `e.currentTarget`：事件注册的元素

那么这样做就带来了好处

+ 节省内存：不用每个子结点个个去注册事件
+ 也就需要为子节点去消除事件 `removeEventListener(type,listener,options/useCapture)`

补充：

`removeListener()`

+ 删除事件监听器是需要匹配的

    意思就是：如果你设置了捕获时的监听器，那么你的删除监听器也必须在捕获时删除

    ```js
    element.addEventListener("mousedown", handleMouseDown, true);
    ```

    ```js
    element.removeEventListener("mousedown", handleMouseDown, false);     // 失败
    element.removeEventListener("mousedown", handleMouseDown, true);      // 成功
    ```

+ 使用 `options`

    ```js
    element.addEventListener("mousedown", handleMouseDown, { passive: true });
    ```

    ```js
    element.removeEventListener("mousedown", handleMouseDown, { passive: true });
    // 成功
    element.removeEventListener("mousedown", handleMouseDown, { capture: false });
    // 成功
    element.removeEventListener("mousedown", handleMouseDown, { capture: true });
    // 失败
    element.removeEventListener("mousedown", handleMouseDown, { passive: false });
    // 成功
    element.removeEventListener("mousedown", handleMouseDown, false);
    // 成功
    element.removeEventListener("mousedown", handleMouseDown, true);
    // 失败
    ```

    我的理解：

    + `passive`：这个是用来限制默认事件的，和事件捕获还是事件冒泡没啥关系
    + 现代浏览器，一般采用事件冒泡
    + 但是 `useCapture` 本身就是用来判断，捕获还是冒泡的
    + `capture` 和 `useCapture` 一样的意思

    > 所以总的来说，事件监听器和删除事件监听器要是对应的。

你可能会对回调函数里面的 `e` 疑惑，这个 `e` 其实是一个事件对象。

## 事件对象

> 这个事件对象是用来自动传递给事件处理函数，我的理解就是：会自动传给那些回调函数。

这个事件对象在：多个元素设置相同事件处理程序的时候比较好用。

参考链接：

[浏览器事件机制中 事件触发的三个阶段 - 掘金 (juejin.cn)](https://juejin.cn/post/6844903936223084557)

[javascript - 简单聊聊浏览器JS事件触发机制 - 贤者时间 - SegmentFault 思否](https://segmentfault.com/a/1190000018358609)

[EventTarget.removeEventListener() - Web API 接口参考 | MDN (mozilla.org)](https://developer.mozilla.org/zh-CN/docs/Web/API/EventTarget/removeEventListener)
