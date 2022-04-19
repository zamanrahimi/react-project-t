export default function Products() {

    const products =["Dell", "HP", "Toshiba"];
    const list = products.map((product)=>(<h4>{product}</h4>));
    return(
        <div>
            {list}
        </div>
    );

}