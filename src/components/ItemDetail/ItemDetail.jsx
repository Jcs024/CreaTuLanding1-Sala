import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import Swal from 'sweetalert2';

const ItemDetail = ({ product = {} }) => {
  const { addProductInCart, cart } = useContext(CartContext);

  // Buscar si ya hay unidades en el carrito
  const productInCart = cart.find(item => item.id === product.id);
  const quantityInCart = productInCart ? productInCart.quantity : 0;

  // Calcular el stock real disponible
  const availableStock = product.stock - quantityInCart;

  const addProduct = (quantity) => {
    const productCart = { ...product, quantity };
    addProductInCart(productCart);
  }

  return (
    <div className="item-detail">
      <img className="item-detail-img" src={product.image} alt="" />
      <div className="item-detail-text">
        <p className="item-detail-title">{product.title}</p>
        <p className="item-detail-description">{product.description}</p>
        <p className="item-detail-price">${product.price} USD</p>

        {
          availableStock > 0 
            ? <ItemCount stock={availableStock} addProduct={addProduct} />
            : <p style={{ color: "red", fontWeight: "bold" }}>SIN STOCK</p>
        }
      </div>
    </div>
  )
}

export default ItemDetail