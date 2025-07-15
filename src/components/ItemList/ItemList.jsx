import Item from "../Item/Item.jsx";
const ItemList = ({ products }) => {
    return(
        <ul className="item-list">
            {
                products.map((product) => (
                        <Item product={product} key={product.id}/>
                ))
            }
        </ul>    
    )
}
export default ItemList