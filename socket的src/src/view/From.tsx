import { Form, Input, InputNumber, Button } from 'antd';
import Tree from '../components/Tree/TreeDemo'
import { treeList } from '../components/Tree/treeList.js'


const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};
/* eslint-enable no-template-curly-in-string */

const Demo = () => {
  const onFinish = (values: any) => {
    console.log(values);
  };
  const noblur = (values:any) =>{
    console.log('失焦',values);
  }
  const haveblur = (values:any) =>{
    console.log('聚焦',values);
  }
  const changeInput = (e:any)=>{
    console.log(e.target.value)
  }

  const myobj = {
    name:"鲁大师",
    age:"80",
    attribute:"1"
  }
  console.log(Object.keys(myobj),Object.values(myobj))


  return (
    <>
    <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
      <Form.Item name={['user', 'name']} label="Name" rules={[{ required: true }]}>
        <Input   onBlur = {noblur}  onFocus={haveblur } onChange={changeInput} />
      </Form.Item>
      <Form.Item name={['user', 'email']} label="Email" rules={[{ type: 'email' }]}>
        <Input />
      </Form.Item>
      <Form.Item name={['user', 'age']} label="Age" rules={[{ type: 'number', min: 0, max: 99 }]}>
        <InputNumber />
      </Form.Item>
      <Form.Item name={['user', 'website']} label="Website">
        <Input />
      </Form.Item>
      <Form.Item name={['user', 'introduction']} label="Introduction">
        <Input.TextArea />
      </Form.Item>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
    <Tree 
        treeList = {treeList}
    /> 
    </>
  );
};

export default Demo
