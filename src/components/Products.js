export default function Products() {

    //1. list
    // const products =["Dell", "HP", "Toshiba"];

    // 2. key value: dictionary 
    // const products =[
    //     {id:1, name:'Dell', price:500},
    //     {id:2, name:'HP', price:502},
    //     {id:3, name:'Toshiba', price:503},
    // ];
    //     const list =products.map((product)=>
    //         <h3 key={product.id}>{product.name} - {product.price}</h3>
    //     );

    //3. Render array with its index

    const products = ["Apple", "Banana", "Orange"];

    const list = products.map((product, index)=>
    <h3 key={index}>{index+1} - {product}</h3>
    );

    return(
        <div>
            {list}
        </div>
    );

}