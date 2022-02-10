import { render } from "@testing-library/react";
import React, { useState,useContext }  from "react";
import { myContext } from "./Conetnt";

export default function Item(props:any){
    const { id,content, keyId,splicelist} =  props
  
    console.log(props)
    console.log('------',myContext,splicelist)

    return(
        <>
            <li>
                {keyId} --- {id} -----  {content} <button onClick={()=>{splicelist(keyId)}}>删除</button> <button>编辑 </button> <button>置顶</button> 
            </li>
        </>

    )
} 