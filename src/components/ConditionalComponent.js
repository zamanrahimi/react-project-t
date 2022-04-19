import {useState} from 'react';
export default function ConditionalCOmponet(){

    const [display, setDisplay] = useState(true);

    if(display){
        return(<div>
            <h3>This is a ConditionalComponent</h3>
            <button onClick={()=>setDisplay(false)}>Hide</button>
        </div>);
    
    }
    else{
        return(<div>
            <h3>There is nothing to be displayed</h3>
            <button onClick={()=>setDisplay(true)}>Show</button>
        </div>);
    }

}