import {useState} from 'react';
export default function ConditionalCOmponet(){

    const [display, setDisplay] = useState(true);
    let output;

    if(display){
        output = <h3>This is a ConditionalComponent</h3>
    }
    else{
        output = <h3>Nothing to show</h3>
    }

    return(<div>
        <li>{output}</li>
        <button onClick={()=>setDisplay(false)}>Change</button>
    </div>);

 

}