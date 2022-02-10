// ShowArea.jsx
import React,{useContext} from 'react'
import { ColorContext } from "./Color";

interface AuthContextType {
    data: any;
  
    // signOut: () => void;
    // signIn: () => void;
  }

const render_list = (list:any )=>{
    const newlist =  list.map((item:any,index:string)=>{
        return (
               <li key={index}> -- {item} -- </li>
        )
    })
    return newlist
}

const ShowArea = (props:any) => {
  const { data } = useContext(ColorContext) as AuthContextType ;
  const { color ,list } = data
  return (
      <>
    <div style={{color:color}}>字体颜色展示为{color}</div>
    {/* {{color: textColor} */}
     {list.length > 0   &&   render_list(list)  }


    </>
  )
}

export default ShowArea
