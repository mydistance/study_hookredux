import React, { Component } from 'react';
import {connect} from 'react-redux'
import {setUserName} from '../../view/socket/actions'
import { Link, Route,  } from 'react-router-dom'
class Login extends React.Component<any,any>{
    constructor(props:any){
        super(props);
        this.state = {
            rnd: Math.floor(Math.random()*1000000),
            username:""
        }
       
    }
    login = () => {
        let username = this.state.username;
        this.props.setUserName(username);
        this.setState({
            username:''
        })
    }
    setUsername = (e:any)=>{
        let username = e.target.value
        this.setState({
            username:username
        })
    }
    render() {
        const  { rnd } = this.state
        return (
            <div className="panel panel-primary">
                <div className="panel-heading">
                    <h2 className="panel-title">
                        登录
                    </h2>
                </div>
                <div className="panel-body">
                    <div className="from-group">
                        <label htmlFor={'username'+rnd}></label>
                        
                             <input onChange={ (e)=>{this.setUsername(e)  } } className="from-control" type="text" id={'username'+ rnd} ref="username" placeholder="请输入用户名"/>  
                    </div>
                    <div className="from-group" style={{'marginTop':'10px'}}>
                    <Link to={'/msg'}>
                       <button type="button" className="btn btn-default"  onClick={this.login}>登录</button>
                       </Link> 
                    
                    </div>
                </div>
            </div>
        );
    }
}

export default connect((state,props) => Object.assign({},props,state),{
    setUserName
})(Login);
