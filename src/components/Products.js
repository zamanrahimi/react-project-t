export default function Products() {

    const products =["Dell", "HP", "Toshiba"];
    return(
        <div>
            {products.map((product)=>(
                <li>{product}</li>
            ))}
        </div>
    );

}