import { render } from "@testing-library/react";
import React, { useCallback, useEffect, useState ,useContext}  from "react";
import  Head  from "../components/Todolist/header";
import  Search  from "../components/Todolist/searchIput";
import  Content  from "../components/Todolist/Conetnt";
import  TodoItem  from "../components/Todolist/TodoItem";




export default function TodoView(props:any){



const [ addInput,setaddInput ] = useState<Boolean>(false)
const [ todolist,settodolist ] = useState<Array<any>>([])  // useState<Array<{id: string;...}>>([]) 
const [ setInput,settodoInput ] = useState<object>({})




interface TodoItem{
    // ?:表示该属性可有可无
    key?:string, // obj.key属性的值必须为string
 
}


const addItem =  useCallback((values:any)=>{
    const dataItem =  {
        id:new Date().getTime(),
        content:values
    }
    settodolist((todolist)=> [...todolist, dataItem ]   )
    // 返回一个被缓存的函数
    console.log('todolist',todolist)
},[]) 

useEffect(()=>{
    console.log('todolist',todolist)
},[addInput,todolist])


interface Item {
    id?:number,
    content?:string
}
const data = [{name:"小妹",age:18},];
const xiaojie=[//:{name:string,age:number}[]
    　{name:"小妹",age:18},
    　{name:"小妹",age:18}
]

 const tod = todolist.forEach = ((item:any)=>{
    return <div>111</div>
})

 interface Cb<K, V> {
    /**
     * 键值对的 key 和 val, 无返回
     */
    (key: K, val: V): void;
  }

    return(
        <>
            <Head addInput={()=>setaddInput(true)}></Head>
            <Search addInput={addInput} addItem ={addItem}></Search>
            <Content todolist={todolist}>
                <TodoItem></TodoItem>
            </Content>
            {
                todolist.map((item: any, index: number) =>
                    <h6 style={{ color: 'red' }} key={index}>{index}:{item.id}</h6>
                )
            }
           
        </>

    )
}