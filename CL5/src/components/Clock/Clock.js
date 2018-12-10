import React, { Component } from 'react';

class Clock extends Component {

    constructor(){
        super();
        this.DateObject = new Date();
        this.state = {
            time: this.DateObject.toLocaleTimeString()
        }
    }

    componentDidMount(){
        setInterval(() => {
            this.setState({time: new Date().toLocaleTimeString()})
        }, 1000)
    }

    render() {
        const {time} = this.state;
        return (
            <div>{time}</div>
        )
    }
}

export default Clock;