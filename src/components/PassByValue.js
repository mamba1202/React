

import '../components/PassByValue.css'
import React, { Component } from 'react'


class AppPass extends Component {
    constructor() {
        super()
        this.state = {
            result1: 0,
            result2: 0,
        }
        // this.t0 = new Date()
    }

    success1() {
        console.log('兔子跑完了')
        let t1 = new Date - 0
        this.setState({
            result1: t1
        })
    }
    success2() {
        console.log('乌龟跑完了')
        let t1 = new Date - 0
        this.setState({
            result2: t1
        })
    }

    render() {
        return (
            <div>

                <div className="header">
                    <Time1 result={this.state.result1}></Time1>
                    <Judge></Judge>
                    <Time2 result={this.state.result2}></Time2>
                </div>
               <PlayGround success1={this.success1.bind(this)}
               success2={this.success2.bind(this)}
               />
            </div>

        )
    }
}

function Time1(props) {
    return (
        <div>
            <h2>🐇用时</h2>
            <div>{props.result}</div>
        </div>
    )
}

function Time2(props) {
    return (
        <div>
            <h2>🐢用时</h2>
            <div>{props.result}</div>
        </div>
    )
}
function Judge() {
    return (
        <div>裁判</div>
    )
}

function PlayGround(props){
    let success1 =props.success1
    let success2 =props.success2
    return (
        <div className="playground">
            <Track1 success={success1}></Track1>
            <Track2 success={success2}></Track2>
        </div>
    )
}

class Track1 extends Component {
    constructor(props) {
        super(props)
        let n = 0
        this.state = {
            style: {
                transform: `translate(${n}%)`
            }
        }

        let playerId = setInterval(() => {

            n += 10

            this.setState({
                style: {
                    transform: `translate(${n}%)`
                }
            })
            if (n >= 50) {
                window.clearInterval(playerId)
                console.log(this.props)
                this.props.success()
            }

        }, 1000)


    }

    render() {
        return (
            <div>
                <div className="player" style={this.state.style}>🐇</div>
                <div className="track"></div>
            </div>
        )
    }

}
class Track2 extends Component {
    constructor(props) {
        super(props)
        let n = 0
        this.state = {
            style: {
                transform: `translate(${n}%)`
            }
        }

        let playerId = setInterval(() => {

            n += 2

            this.setState({
                style: {
                    transform: `translate(${n}%)`
                }
            })
            if (n > 50) {
                window.clearInterval(playerId)
                console.log(this.props)
                this.props.success()

            }

        }, 1000)


    }

    render() {
        return (
            <div>
                <div className="player" style={this.state.style}>🐢</div>
                <div className="track"></div>
            </div>
        )
    }

}

export default AppPass