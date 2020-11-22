import React, { Component } from 'react';
import './button.css'

export default class Button extends Component {

    constructor(props) {
        super(props);
        this.state = {
            active: false,
            deltaX: 0,
            deltaY: 0
        }
        this.myRef = React.createRef();

    }

    render() {
        return (
            <button ref={this.myRef} className='botton1' onClick={this.X.bind(this)}>
                <span className="span1"> {this.props.value}</span>
                {this.state.active === true ? <span
                    className="circle"
                    onAnimationEnd={this.Y.bind(this)}

                    style={{ left: this.state.deltaX, top: this.state.deltaY }} /> : ''}
            </button>
        )
    }


    X(event) {
        // console.log(arguments[0])

        console.log(this.myRef.current.getBoundingClientRect())
        let { x, y } = this.myRef.current.getBoundingClientRect()
        let { clientX, clientY } = event
        let deltaX = clientX - x - 5
        let deltaY = clientY - y - 5
        console.log(deltaX, deltaY)
        this.setState({
            active: true,
            deltaX: deltaX,
            deltaY: deltaY
        })
    }
    Y() {
        this.setState({
            active: false,

        })
    }
}