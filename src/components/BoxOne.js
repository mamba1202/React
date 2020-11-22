import React, { Component } from 'react';
import './BoxOne.css'
class Button extends Component {
    render() {
        console.log(this.props)

        return (
            <div className="box-one">
                <div>{this.props.fristLine || 'Box One'}</div>
            </div>
        )
    }
}




// 使用组件的好处
// 1.不需要拷贝及复制粘贴
// 2.多处使用只需一个标签搞定
// 3.要修改只需改一处
// 4.要个性化只需传参

export default Button