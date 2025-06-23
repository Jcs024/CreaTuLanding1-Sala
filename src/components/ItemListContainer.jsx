import "./ItemListContainer.css";

const ItemListContainer = ({ nombre, precio, foto }) => {
    return (
        <div className="pr_jg">
            <div className="img_jg">
                <img src={foto} alt={nombre} />
                <h2>{nombre}</h2>
                <h3>{precio}</h3>
            </div>
        </div>
    );
}

export default ItemListContainer;