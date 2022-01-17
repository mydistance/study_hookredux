// Buttons.jsx
import React, { useContext, useLayoutEffect, useState ,useCallback,useEffect} from "react";
import { ColorContext, UPDATE_COLOR ,UPDATE_NUM} from "./Color";

interface AuthContextType {
  dispatch: any;
  data:any;
  // signOut: () => void;
  // signIn: () => void;
}


const Buttons = (props:any) => {
  const { dispatch , data  } = useContext(ColorContext) as AuthContextType ;
  const [list , setlist ] = useState<any>( data.list )

  const addItem =  useCallback((values:any)=>{
    var i =  Number(Math.random()*10).toFixed(0)
    setlist((list:any)=> [  ...list , i ]   )

  },[list]) 
 
  const delItem = ()=>{
    list.splice(0,1) 
    setlist([ ...list ]  )

  }


  useEffect(()=>{
    console.log(list)
    dispatch({ type: UPDATE_NUM, list:list });
  },[list])



  return (
    <React.Fragment>
      <button onClick={() => {
          dispatch({ type: UPDATE_COLOR, color: "red"});
        }}>红色</button>
      <button onClick={() => {
          dispatch({ type: UPDATE_COLOR, color: "yellow" });
        }}>黄色</button>
      <button onClick={() => {
          dispatch({ type: UPDATE_COLOR, color: "pink" });
        }}>粉色</button>
      <button onClick={ addItem }> i ++</button>
      <button onClick={ delItem }> i -- </button>

    </React.Fragment>
  );
};

export default Buttons;
