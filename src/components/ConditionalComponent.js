import {useState} from 'react';
export default function ConditionalCOmponet(){

    const [display, setDisplay] = useState(true);
    //  Conditional Rendering using Ternary
    return display ? (
        <h3>There is something to show</h3>
    ):
    (
        <h3>There is nothing to show</h3>
    );

    

 

}