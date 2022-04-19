import {useState} from 'react';
function FunctionalCounter() {

    const [color,setColor] = useState(0);
    
    return (<div>
        <h3> My color is:  {color} </h3> 
        <button onClick={()=>setColor(color + 1)}>Click</button>
        </div>);

}

export default FunctionalCounter;