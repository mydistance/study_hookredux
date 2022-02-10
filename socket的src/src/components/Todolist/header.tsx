import { render } from "@testing-library/react";
import React, { useState }  from "react";

export default function head(props:any){
    const { addInput } =  props
    return(
        <>
            <header>
                Todolist   <button onClick={addInput}>添加</button>
            </header>
        </>

    )
} 