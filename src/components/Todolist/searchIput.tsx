import { render } from "@testing-library/react";
import React, { useState,useRef } from "react";

import {
    Form,
    Input,
    Button,
    Row,
    Col,
    message,
    Select
} from 'antd'

 const Search = (props: any)=>  {
    const { addInput ,addItem} = props
    const [val, setVal] = useState({ conyentval: "" })
    const valRef:any = useRef()
    // console.log(valRef.current.value.trim())

    const handleSubmit = (val: any)=>{
        if(val.conyentval.length === 0){
            return;
        }else{
            addItem(val.conyentval)
            console.log(val.conyentval);
        }
           
    }
    return (
        <>
            {
                addInput &&
                <div>
                   <Form className="form-content">
                    <Row className="item">
                        <Col span={8}></Col>
                        <Col span={16}>
                            <Input type="text"
                                placeholder="填写内容"
                                maxLength={11}
                                value={val.conyentval}
                                name="val"
                                onChange={e=>setVal({
                                    ...val,
                                    conyentval: e.target.value
                                })}
                            />
                        </Col>
                    </Row>    
        </Form>
        <Button onClick={()=> handleSubmit(val)}>添加列表</Button>

                </div>
            }
        </>

    )
}

export default Search