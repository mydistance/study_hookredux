import { render } from "@testing-library/react";
import React, { useState }  from "react";
import TodoItem from './TodoItem'

const myContext = React.createContext({  })

const Content = (props:any)=>{
    const { todolist,splicelist} =  props
    const state = {name:""}
   

   console.log(props.children)
    return(
  
              
               
                     <ul>
   

                        {/* {props.children} */}
                        
                        {
                            todolist.length >0 ?
                            todolist.map((item: any, index: number) =>{
                                return ( <TodoItem  key={index} {...item} keyId={index} splicelist={splicelist} data-id="list" ></TodoItem> )
                            })
                            : <div>暂无do事件</div>
                             // <TodoItem  {...item} ></TodoItem>
                            
                        }
                               
                </ul>

               

    )
}
export default Content
export {  myContext };