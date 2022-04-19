import { Component } from "react";


class Counter extends Component{

    constructor(){
        super();
        this.state={
            counter:0
        }
    }

    render(){
        return (
            <div>
                <h1>Counter: {this.state.counter}</h1>
                <button>Click</button>
            </div>
        );
    }
}

export default Counter;