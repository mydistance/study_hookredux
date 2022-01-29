// 使用发布-订阅模式来解决 修改state，数据不能收到通知问题
/*------count 的发布订阅者实践------*/
export const createStore = function (initState) {
let state = {
 count: 1
};
    let listeners = [];
    /*订阅*/
    function subscribe(listener) {
      listeners.push(listener);
   }
   
   function changeState(newState) {
       state = newState;
       /*通知*/
        for (let i = 0; i < listeners.length; i++) {
         const listener = listeners[i];
         listener();
       }
      }
    
    function getState() {
         return state;
      }
return {
       subscribe,
       changeState,
       getState
 }
}