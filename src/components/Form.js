import { Component } from "react";

class Form extends Component {
    state ={
        name: "",
    };
    handleChange = (event) =>{
           this.setState({
               name: event.target.value,
           }); 
           console.log(this.state.name);
    };
    render(){
        return(
            <div>

            <form>
            
            <input 
            onChange={this.handleChange}
            type="text"
            value={this.state.name}
            />
            
            </form>


            </div>
        );
    }
}

export default Form;