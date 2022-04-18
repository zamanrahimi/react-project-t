// two function component bellow 
// 1. javscript syntax
// function Hello() {

//     return <h1>Hello World Component!</h1>

// }


// 2. ES6 syntax which provides the same functionality of the above javascript code

const name ="Zaman";
const displayMessage = () => {
    return 'Function';
}
const Hello = () => {
    return  <h1>Hello- {displayMessage() } </h1>
}


export default Hello;
