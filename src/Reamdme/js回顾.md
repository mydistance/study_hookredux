#
## 1. 闭包
【1】可以访问所在作用域 (所有变量等)；
【2】在所在作用域外被调用 (被另一个函数return出去)
优点 ： 原生 Js 并没有支持私有变量，可以使用闭包来模拟私有变量或者方法（封装方法 比如react）。私有变量不仅仅有利于限制对代码的访问，还提供了管理全局命名空间的强大能力，避免非核心的方法弄乱了代码的公共部分。

```js
(function (ROOT) {
     var jQuery = function(selector) {
        return new jQuery.fn.init(selector)
   }

   jQuery.fn = jQuery.prototype = {
        constructor: jQuery,
        init: function(selector) {
            var elem, selector;
             elem = document.querySelector(selector);
            this[0] = elem;
            return this;
        }
    }
   ....


  ROOT.jQuery = ROOT.$ = jQuery;
})(window);
```

在 ES6 引入块级作用域之前，在循环中有一个常见的创建问题。我们可以运用闭包解决下面这个异步问题，这里就贴一下代码。
```js
for (var i = 1; i <= 5; i++) {
  setTimeout( function timer() {
      console.log(i);  
  }, 1000 );
  }
//  闭包是一个有记忆的函数。每次会将变量缓存
 for (var i = 1; i <= 5; i++) {
    (function(i){
        setTimeout( function () {
              console.log(i);
          },  1000 );
    })(i);
 }

 for (let i = 1; i <= 5; i++) {
      setTimeout( function timer() {
               console.log(i);  
      }, 1000 );
  }
```
缺点：占内存，因为闭包的私有数据多的话，内存得不到释放。（垃圾回收机制）（手动清理 最后赋值为空）
  
# 垃圾回收
我们创建基本类型、对象、函数……所有这些都需要内存。JavaScript 中的内存管理是自动执行的，而且是不可见的。
JavaScript 中内存管理的主要概念是可达性。简单地说，“可达性” 值就是那些以某种方式可访问或可用的值，它们被保证存储在内存中。
1. 有一组基本的固有可达值，由于显而易见的原因无法删除。例如:

本地函数的局部变量和参数
当前嵌套调用链上的其他函数的变量和参数
全局变量
还有一些其他的，内部的
这些值称为根。

2. 如果引用或引用链可以从根访问任何其他值，则认为该值是可访问的。

