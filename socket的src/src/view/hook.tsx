import { useState,useEffect,useContext } from "react";
import React from 'react'
import { title } from "process";

const ThemeContext = React.createContext('balick')



export default ()=>{
    const [count, setCount] = useState(0);
    const theme = useContext(ThemeContext);
    
    
    useEffect(()=>{
        console.log('触发了useEffect',count)
        document.title = `You clicked ${count} times`;
        // componentWillUnmount 生命周期
        return () => {
        console.log("componentWillUnmount");
        };
    },)
    interface keyword{
        // ?:表示该属性可有可无
        key?:string,
        title?:object
    }
    function setrandom(){
        const arr :any[]  = [];
        for(let i=0;i<20;i++){
            var obj:keyword = {
                key:"",
                title:{}
            }
            let idx = i.toString()
            obj.key = idx;
            obj.title = {}
            arr.push(obj )
        }
        console.log(arr)
        return arr
    }
   

    return(
        <>
        { setrandom()[0].key}
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>Click me</button>
        <div>当前主题:{theme}</div>;
      
        </>
    )
}


