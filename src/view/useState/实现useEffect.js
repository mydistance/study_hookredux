// every() 方法用于检测数组所有元素是否都符合指定条件（通过函数提供）。

// every() 方法使用指定函数检测数组中的所有元素：

// 如果数组中检测到有一个元素不满足，则整个表达式返回 false ，且剩余的元素不会再进行检测。
// 如果所有元素都满足条件，则返回 true。
var React_zhy = (function(){
    let _val, _deps
    return {
        useState(initialValue) {
            _val = _val || initialValue
            function setVal(value) {
              _val = value
            }
            return [_val, setVal]
          },
          useEffect(callback, deps) {
            const ifUpdate = !deps
            // 判断 Deps 中的依赖是否改变
            const ifDepsChange = _deps ? !_deps.every((r, index) => r === deps[index]) : true
            if (ifUpdate || ifDepsChange) {
              callback()
              _deps = deps || []
            }
          }
    }
})()

// 测试代码
var {useState, useEffect} = React
function Counter() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    console.log('useEffect', count)
  }, [count])
  return {
    render: () => console.log('render', count),
    click: () => setCount(count + 1),
    noop: () => setCount(count), // 保持不变, 观察 useEffect 是否被调用
  }
}
Counter().render() // 'useEffect' 0, 'render', 0
Counter().noop()
Counter().render() // 'render', 0
Counter().click()
Counter().render() // 'useEffect' 1, 'render', 1

// 处理多个

const React = (function() {
    const hooks = []
    let currentHook = 0
    return {
      render(Component) {
        const component = Component()
        component.render()
        currentHook = 0 // 重置, 这里很关键, 将 hooks 的执行放到 hooks 队列中, 确保每次执行的顺序保持一致。
        return component
      },
      useState(initialValue) {
        hooks[currentHook] = hooks[currentHook] || initialValue
        function setVal(value) {
          hooks[currentHook] = value
        }
        return [hooks[currentHook++], setVal]
      },
      useEffect(callback, deps) {
        const ifUpdate = !deps
        // 判断 Deps 中的依赖是否改变
        const ifDepsChange = hooks[currentHook] ? !hooks[currentHook].every((r, index) => r === deps[index]) : true
        if (ifUpdate || ifDepsChange) {
          callback()
          hooks[currentHook++] = deps || []
        }
      }
    }
  })()