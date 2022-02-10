import { useReducer } from "react";
import { Form, Input, InputNumber, Button } from 'antd';
import { act } from "react-dom/test-utils";
import AntPropsBTN from './ButtonProps'


export function init(initialCount:any) {
    return {count: initialCount};
  }


  const validateMessages = {
    required: '${label} is required!',
    types: {
      email: '${label} is not a valid email!',
      number: '${label} is not a valid number!',
      password:'${label} is not a valid number!',
    },
    number: {
      range: '${label} must be between ${min} and ${max}',
    },
  };

  const initialState = {
    count : 0,
    user:"",
    password:""
  }
  // reducer其实就是一个函数，这个函数接收两个参数，一个是状态，一个用来控制业务逻辑的判断参数。
  function reducer(state:any, action:any) {
    // state状态  =>  initialState = { count: xxx }
    // action =>  dispatch调用传入的以对象形式的参数
    const { loginState } = action
    switch (action.type) {
      case 'increment':
        return { ...state, count: state.count + 1 };
      case 'decrement':
        return  { ...state, count: state.count - 1 };
      case 'login':
        return  { ...state, user:loginState.user, password:loginState.password }
      case 'reset':
        // return init(action.payload);
        return { ...state, count: action.payload - 1 }; 
      default:
        throw new Error();
    }
  }
  
  function Counter() {
    //第一个参数：reducer
    const [state, dispatch] = useReducer(reducer, initialState);
    const onFinish = (values: any) => {
      dispatch({type: 'login',loginState: values.user});
      console.log(values,values.user);
    };
  
    return (
      <>
      <Form  name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
      <Form.Item name={['user', 'user']} label="Name" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name={['user', 'password']} label="password" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Button type="primary" htmlType="submit">
          Submit
        </Button>
      
    </Form>


        Count: {state.count}
        User: {state.user}
        Password: {state.password}

        <button
          onClick={() => dispatch({type: 'reset', payload:'66' })}>
          Reset
        </button>
        <button onClick={()=> dispatch({type: 'login',}) }>login</button>
        <button onClick={() => dispatch({type: 'decrement'})}>-</button>
        <button onClick={() => dispatch({type: 'increment'})}>+</button>
        <AntPropsBTN type="primary" ></AntPropsBTN>
      </>
    );
  }
  
export default Counter