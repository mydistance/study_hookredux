// 这里使用闭包
  const React_HOOK = (function() {
    let _val
    return {
      useState(initialValue) {
        _val = _val || initialValue
        function setVal(value) {
          _val = value
        }
        return [_val, setVal]
      }
    }
  })()

  function Counter() {
    const [count, setCount] = React_HOOK.useState(0)
    return {
      render: () => console.log(count),
      click: () => setCount(count + 1)
    }
  }


  Counter().render() // 0
  Counter().click()  // 模拟点击
  Counter().render() // 1