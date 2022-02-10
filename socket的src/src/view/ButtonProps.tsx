import React from 'react'
import classnames  from 'classnames';



export type ButtonType = 'primary' | 'ghost' | 'dashed' | 'danger';
export type ButtonShape = 'circle' | 'circle-outline';
export type ButtonSize = 'small' | 'large';

// typescript语法，这里表示的是一些参数，参数后面跟上 ? 是可选参数的意思，不跟就是必须参数
// 参数后面所跟的就是参数的类型，类型可以是自定义的类型，就如‘ButtonType’，‘ButtonShape’，‘ButtonSize’
// 也可以是函数或者类，如React.FormEventHandler<any> 
// 详情请看这里 https://www.tslang.cn/docs/handbook/interfaces.html
export interface ButtonProps {
    type?: ButtonType;
    htmlType?: string;
    icon?: string;
    shape?: ButtonShape;
    size?: ButtonSize;
    onClick?: React.FormEventHandler<any>;
    onMouseUp?: React.FormEventHandler<any>;
    onMouseDown?: React.FormEventHandler<any>;
    loading?: boolean | { delay?: number };
    disabled?: boolean;
    style?: React.CSSProperties;
    prefixCls?: string;
    className?: string;
    ghost?: boolean;
}
export default class Button extends React.Component<ButtonProps, any>{
    constructor(props: ButtonProps) {
        super(props)
    }
    // 接下来是render()
  render() {
    // 将参数从props解构出来
    const {
      type, shape, size = '', className, htmlType, children, icon, prefixCls, ghost,
    } = this.props;
    // 将loading和clicked两个状态从state解构
    // const { loading, clicked } = this.state;
    return (
        <React.Fragment>
            1
            <div className={classnames({
                //这里可以根据各属性动态添加，如果属性值为true则为其添加该类名，如果值为false，则不添加。这样达到了动态添加class的目的
                'zhy-base-primary': type === 'primary', //只要是true类型
                'zhy-base-ghost': type === 'ghost', //只要是true类型
                'zhy-base':type? false : true,
                'zhy-inProgress': false,
                'zhy-error': 1, //只要是true类型
                'zhy-disabled': 1, //只要是true类型
                })}>
                    2222222222222我是封装好的Ui组件
            </div>
        </React.Fragment>
    )
  }



}