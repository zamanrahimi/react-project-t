import { Component } from "react";


class Counter extends Component{

    constructor(){
        super();
        this.state={
            counter:0,
        }
        // First way: this this
        this.increament = this.increament.bind(this);
    }
    // second way is to change the method to an arrow function
    increament = () => {
        this.setState({
            counter: this.state.counter + 1,
        });
    }
    render(){
        return (
            <div>
                <h1>Counter: {this.state.counter}</h1>
                <button onClick={this.increament} >Click</button>
            </div>
        );
    }
}

export default Counter;