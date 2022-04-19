import {useState} from 'react';
function FunctionalCounter() {

    const [counter, setCounter] = useState(0);
    const increament = () =>{
        setCounter(counter + 1);
    };

    return (<div>
        <h3> counter {counter} </h3> 
        <button onClick={increament}>Click</button>
        </div>);

}

export default FunctionalCounter;