// import React from 'react';
// import logo from './logo.svg';
// import { Button } from 'antd';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <Button type="primary">Button</Button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


import React, { Component } from 'react';
import {connect} from 'react-redux'
import {Route,Navigate,Routes} from 'react-router-dom'
import Login from './components/Login'
import Msg from './components/Msg'
import {setUserId,addMsg} from './view/socket/actions'
import socket from './view/socket/socket'

const SignInWrapper = ( props:any ) => {
  return props.currentUser ? <Msg></Msg>  :  <Navigate to="/" replace /> ;
};


class App extends Component<any,any> {
  constructor(props:any){
    super(props)
  }

  componentDidMount(){
    console.log('ID')

    //得到初始化用户ID socket.on(eventName, callback)：监听一个 emit 发射的事件
    socket.on('ID',(ID) => {
      this.props.setUserId(ID);
      console.log('ID',ID)
    })
    //接收消息 socket.on(eventName, callback)：监听一个 emit 发射的事件
    socket.on('broadcast',(from, fromUser, msg) => {
      console.log("返回broadcast")
      this.props.addMsg({from, fromUser, msg})
    })
  }

  render() {
  
    return (
      <div>
      <Routes>
        <Route
          path='/msg'
          element= {<SignInWrapper currentUser={this.props.user.name}>
            
          </SignInWrapper>}
        />
         <Route path="/" element={<Login />}></Route>
         <Route path="/msg" element={<Msg />}></Route>
         </Routes>
      </div>
      
    );
  }
}

export default connect((state,props) => Object.assign({},props,state),{
  setUserId,
  addMsg
})(App);


