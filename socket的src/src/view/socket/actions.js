
//用户相关
export const SET_USER_ID = "set_user_id";
export const SET_USER_NAME = "set_user_name";

//消息相关
export const ADD_MSG = "add_msg";

//-------------------------------

export function setUserId(ID){
    return{
        type:SET_USER_ID,
        value:ID
    };
}

export function setUserName(name){
    return{
        type:SET_USER_NAME,
        value:name
    };
}

export function addMsg(msg){
    return{
        type:ADD_MSG,
        msg
    }
}