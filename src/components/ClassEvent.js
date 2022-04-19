import { Component } from 'react';

class ClassEvent extends Component {
        //  cHandeler(){
        //     console.log("Clickd");
        // }
        cHandeler = () => {
            console.log("Clickd");
        }
        render(){

            return(
                <div>
                    <h3>This is a class Component!</h3>
                    <button onClick={this.cHandeler}>Click me!</button>
                </div>
            );

        }

}

export default ClassEvent;