

import '../components/PassByValue.css'
import React, { Component } from 'react'

function AppPass() {
    return (
        <div>

            <div className="header">
                <Time1></Time1>
                <Judge></Judge>
                <Time2></Time2>
            </div>
            <Track1></Track1>
            <Track2></Track2>
        </div>

    )
}

function Time1() {
    return (
        <div>
            <h2>🐇用时</h2>
            <div>0</div>
        </div>
    )
}

function Time2() {
    return (
        <div>
            <h2>🐢用时</h2>
            <div>0</div>
        </div>
    )
}
function Judge() {
    return (
        <div>裁判</div>
    )
}

class Track1 extends Component {
    constructor() {
        super()
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
    constructor() {
        super()
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
            if (n >50) {
                window.clearInterval(playerId)
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