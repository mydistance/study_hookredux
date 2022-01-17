import React, { createContext,useReducer } from "react";
import { act } from "react-dom/test-utils";

// 创建 context
export const ColorContext = createContext({});

// reducer
export const UPDATE_COLOR = "UPDATE_COLOR"
export const UPDATE_NUM  = 'UPDATE_NUM'
const redux_data = { color : "bule", list:[ ]}
const reducer = (state :any, action :any) => {
    console.log(action)
  switch(action.type) {
    case UPDATE_COLOR:
      return {...action}
    case UPDATE_NUM:
      return {...action}
    default:
      return state  
  }
}

/**
 * 创建一个 Color 组件
 * Color 组件包裹的所有子组件都可以通过调用 ColorContext 访问到 value
 */
export const Color = (props:any) => {
  const [ data , dispatch] = useReducer(reducer, redux_data )
  return (
    <ColorContext.Provider value={{ data ,dispatch }}>
      {props.children}
    </ColorContext.Provider>
  );
};
