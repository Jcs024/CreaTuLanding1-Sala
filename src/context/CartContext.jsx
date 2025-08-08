import { createContext, useState } from "react";
import Swal from 'sweetalert2';


const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
   const addProductInCart = (product) => {
        const existingProduct = cart.find((item) => item.id === product.id);
        const currentQuantityInCart = existingProduct ? existingProduct.quantity : 0;
        const totalAfterAdd = currentQuantityInCart + product.quantity;

        if (totalAfterAdd > product.stock) {
            Swal.fire({
                icon: "error",
                title: "Stock insuficiente",
                text: `Solo hay ${product.stock} unidades disponibles.`,
                confirmButtonColor: 'rgba(4, 217, 255, 0.71)',
                background: 'rgb(13, 32, 51)',
                color: 'white',
                iconColor:'rgba(255, 82, 82, 0.8)'
            });
            return;
        }

        if (existingProduct) {
            const updatedCart = cart.map((item) =>
                item.id === product.id
                    ? { ...item, quantity: item.quantity + product.quantity }
                    : item
            );
            setCart(updatedCart);

            Swal.fire({
                icon: "success",
                title: "Cantidad actualizada",
                text: `Se aumentó la cantidad de "${product.title}" en el carrito.`,
                confirmButtonColor: 'rgba(4, 217, 255, 0.71)',
                background: 'rgb(13, 32, 51)',
                color: 'white',
                iconColor:'rgba(82, 255, 168, 0.8)',
                timer: 1500
            });

        } else {
            setCart([...cart, product]);

            Swal.fire({
                icon: "success",
                title: "Producto agregado",
                text: `"${product.title}" fue agregado al carrito.`,
                confirmButtonColor: 'rgba(4, 217, 255, 0.71)',
                background: 'rgb(13, 32, 51)',
                color: 'white',
                iconColor:'rgba(82, 255, 168, 0.8)',
                timer: 1500
            });
        }
    };



    const totalQuantity = () => {
       const total = cart.reduce((total, product)  => total + product.quantity, 0);    
       return total;
    }
    
    const totalPrice = () => {
        const total = cart.reduce((total, product)=> total + (product.price * product.quantity), 0);
        return total;
    }

    const deleteProductById = (id) => {
        const productsFilter = cart.filter( (product) => product.id !== id );
        Swal.fire({
            title: "Producto eliminado",
            icon: "info",
            timer: 1200,
            background: 'rgb(13, 32, 51)',
            color: 'white',
            iconColor:'rgba(255, 214, 102, 0.9)',
            showConfirmButton: false
        });
        setCart(productsFilter);
    }

    const emptyCart = () => {
        Swal.fire({
            title: "Carrito vaciado",
            icon: "info",
            timer: 1200,
            background: 'rgb(13, 32, 51)',
            color: 'white',
            iconColor:'rgba(255, 214, 102, 0.9)',
            showConfirmButton: false
        });
        setCart([]);
    };

    const updateProductQuantity = (id, newQuantity) => {
    const product = cart.find((product) => product.id === id);
    if (!product) return;

    if (newQuantity <= 0 || newQuantity > product.stock) {
        return;
    }

    const updatedCart = cart.map((product) =>
        product.id === id ? { ...product, quantity: newQuantity } : product
    );

    setCart(updatedCart);
    };


    return(
        <CartContext.Provider value={ { cart, addProductInCart, totalQuantity, totalPrice, deleteProductById, emptyCart, updateProductQuantity } }>
            {children}
        </CartContext.Provider>
    )
}

export { CartContext, CartProvider };