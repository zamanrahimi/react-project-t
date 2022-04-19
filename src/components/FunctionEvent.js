function FunctionEvent(){
    // 1. one way of defining a function 

    // function eventHandeler(){
    //     console.log("Clicked!");
    // }

    // 2. second way 
    const eventHandeler = () =>{
        console.log("Clicked!");
    }
    return (<div>
            <h2>Hello fromf fucntionEvent compoent</h2>
            <button onClick={eventHandeler}>Click me!</button>
    </div>);

}

export default FunctionEvent;