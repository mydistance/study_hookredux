// 我现在有一个需求，在每次修改 state 的时候，记录下来 修改前的 state ，为什么修改了，以及修改后的 state。我们可以通过重写 store.dispatch 来实现

const store = createStore(reducer);
 const next = store.dispatch;
 /*重写了store.dispatch*/
 store.dispatch = (action) => {
    console.log('this state', store.getState());
    console.log('action', action);
    next(action);
    console.log('next state', store.getState());
}

// 使用
store.dispatch({
  type: 'INCREMENT'
});

/* 日志输出为
this state { counter: { count: 0 } }
action { type: 'INCREMENT' }
1
next state { counter: { count: 1 } }
*/

// 我又有一个需求，需要记录每次数据出错的原因，我们扩展下 dispatch
const store = createStore(reducer);
 const next = store.dispatch;
 store.dispatch = (action) => {
   try {
     next(action);
   } catch (err) {
     console.error('错误报告: ', err)
   }
}