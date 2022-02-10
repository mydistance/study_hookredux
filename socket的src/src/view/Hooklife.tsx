import { useState,useEffect,useContext,useRef } from "react";
import React from 'react'


// // 模拟shouldComponentUpdate
// const areEqual = (prevProps, nextProps) => {
//     // 返回结果和shouldComponentUpdate正好相反
//     // 访问不了state
//     // React.memo()可接受2个参数，第一个参数为纯函数的组件，
//     //'第二个参数用于对比props控制是否刷新，与shouldComponentUpdate()功能类似。[2]
//     // 大致的意思是，父组件渲染更新，会导致无关的子组件也触发更新，消耗性能。
//     // 使用memo使无关的子组件不更新，
//   };
//   React.memo(areEqual);
  
// //   import React from "react";

// // function Child({seconds}){
// //     console.log('I am rendering');
// //     return (
// //         <div>I am update every {seconds} seconds</div>
// //     )
// // };

// // function areEqual(prevProps, nextProps) {
// //     if(prevProps.seconds===nextProps.seconds){
// //         return true
// //     }else {
// //         return false
// //     }

// // }
// // export default React.memo(Child,areEqual)

// // class View extends PureComponent<Props,{}>{
// // PureComponent 一句话就是减少render渲染
// // 使用方式就是把你原来的Component换成PureCompoent就可以了。
// // 在react性能优化中有个should. 而PureComponenty就相当于使用了should,在这PureComponent只是单纯做了一些浅层的比较
// // 大概原理是：PureComponent
// // 当组件更新时，如果组件的 props 和 state 都没发生改变， render 方法就不会触发，省去 Virtual DOM 的生成和比对过程，达到提升性能的目的。具体就是 React 自动帮我们做了一层浅比较


//   // 模拟componentDidMount
//   useEffect(() => {
//     // 这里在mount时执行一次
//   }, []);
  
//   // 模拟componentDidUnmount
//   useEffect(() => {
//     return () => {
//       // 这里在unmount时执行一次
//     };
//   }, []);
  
//   // 模拟componentDidUpdate
//   const mounted = useRef();
//   useEffect(() => {
//     if (!mounted.currentm ) {
//       mounted.current = true;
//     } else {
//       // 这里只在update是执行
//     }
//   });