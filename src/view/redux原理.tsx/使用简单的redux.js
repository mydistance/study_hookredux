let initState = {
  counter: {
    count: 0
  },
  info: {
    name: '',
    description: ''
  }
}

   let store = createStore(initState);
   
   store.subscribe(() => {
    let state = store.getState();
    console.log(`${state.info.name}：${state.info.description}`);
   });
   store.subscribe(() => {
   let state = store.getState();
   console.log(state.counter.count);
   });
   
   store.changeState({
     ...store.getState(),
     info: {
       name: '前端九部',
      description: '我们都是前端爱好者！'
     }
   });
   
   store.changeState({
    ...store.getState(),
     counter: {
      count: 1
     }
});


// 用 combineReducers 函数来把多个 reducer 函数合并成一个 reducer 函数。大概这样用
// const reducer = combineReducers({
//    counter: counterReducer,
//        info: InfoReducer
// });

function combineReducers(reducers) {
    
      /* reducerKeys = ['counter', 'info']*/
      const reducerKeys = Object.keys(reducers)
    
      /*返回合并后的新的reducer函数*/
      return function combination(state = {}, action) {
        /*生成的新的state*/
        const nextState = {}
   
       /*遍历执行所有的reducers，整合成为一个新的state*/
       for (let i = 0; i < reducerKeys.length; i++) {
         const key = reducerKeys[i]
         const reducer = reducers[key]
         /*之前的 key 的 state*/
         const previousStateForKey = state[key]
         /*执行 分 reducer，获得新的state*/
         const nextStateForKey = reducer(previousStateForKey, action)
   
         nextState[key] = nextStateForKey
       }
       return nextState;
     }
}