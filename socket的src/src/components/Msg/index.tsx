import React, { Component } from 'react';
import {connect} from 'react-redux'
import {addMsg} from '../../view/socket/actions'
// import msg from '../../view/socket/store/msg';
import socket from '../../view/socket/socket'

import io from 'socket.io-client';


class Msg extends React.Component<any,any>{
    constructor(props:any){
        super(props)
        this.state = {
            msg :" xxx"
        }

    } 
     componentDidUpdate(){
        const mysocket = io('ws://10.0.3.69:8442');

        mysocket.emit('send', { text: '我发送过去'}); 

        console.log('ID')

        // 广播
        socket.on('to-client', function(data) {
            console.log(data);
          })
    
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
    
    send = () => {
        console.log('this.props.user.username:',this.props.user.name)
       
        // this.props.addMsg({ from:this.props.user.ID , fromUser:this.props.user.name ,   'aaa'})
        // socket.emit(eventName[, ...args])：发射（触发）一个事件
        socket.emit('msg',this.props.user.name,this.state.msg);
    }
    setMSG = (e:any)=>{
        let msg = e.target.value
        this.setState({
            msg:msg
        })
    }
    render() {
        return (
            <div>
                <div>
                    <div className="from-group">
                        <textarea className="from-control" onChange={ (e) =>{this.setMSG(e) }}></textarea>
                    </div>
                    <div className="from-group">
                        <button className="btn btn-default" type="button" onClick={this.send}>发送</button>
                    </div>
                </div>
                <ul>
                    {
                        this.props.msg.map(({from,fromUser,msg}:any,index:any) => (
                            <li key={index}>
                                <h3 className="list-group-item-heading" style={{color:from==this.props.user.ID ? 'red':''}}>{fromUser}</h3>
                                <p className="list-group-item-text">{msg}</p>
                            </li>
                        ))
                    }
                </ul>
            </div>
        );
    }
}

// 使action的方法可以用props获取
export default connect((state,props) => Object.assign({},props,state),{
    addMsg
})(Msg);