import React from 'react'

interface Iprops {
    data ?: any
}

interface IState {

    data ?: any
}
class View extends React.Component<Iprops, IState>{
    constructor(props: Iprops) {
        super(props)
        this.state = {
            data:{
                name:"hello集美们"
            }
        }
    }
    setDate = () =>{
        // this.state = { 不可以直接修改，需要修改this.state的数据 然后使用setstate({})触发更新
        //     data:{
        //         name:"hello集美们,我又来圈钱了"
        //     }
        // }
        const obj  = this.state.data
        obj.name="是我,集美们，哈哈哈哈哈哈哈哈哈"

        this.setState(
            { 
                    ...obj
            }
        )
    }
    render() {
        const { name } = this.state.data
        return (
            <div className="button">
                {name}
                <button onClick={()=> this.setDate()} >setState</button>
            </div>
        )
    }
}

export default View;    