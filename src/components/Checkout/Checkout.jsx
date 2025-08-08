import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"
import FormCheckout from "../FormCheckout/FormCheckout";
import { addDoc, collection } from "firebase/firestore";
import db from "../../db/db.js";
import Swal from 'sweetalert2';
import '../Checkout/checkout.css';

const Checkout = () => {
    const [dataForm, setDataForm] = useState({
        fullname: "",
        phone: "",
        email: ""
    });
    const [ orderId, setOrderId ] = useState(null);

    const { cart, totalPrice } = useContext(CartContext)
    const hangleChangeInput = (event) => {
        setDataForm( { ...dataForm, [event.target.name] : [event.target.value] } );
    }

   const sendOrder = (event) => {
        event.preventDefault();

        if (!dataForm.fullname || !dataForm.phone || !dataForm.email) {
            Swal.fire({
                title: "Formulario incompleto",
                text: "Por favor, completá todos los campos.",
                icon: "error",
                background: 'rgb(13, 32, 51)',
                color: 'white',
                iconColor:'rgba(255, 82, 82, 0.8)',
                confirmButtonColor: 'rgba(4, 217, 255, 0.71)'
            });
            return;
        }

        if (!/\S+@\S+\.\S+/.test(dataForm.email)) {
            Swal.fire({
                title: "Email inválido",
                text: "Por favor, ingresá un email válido.",
                icon: "warning",
                background: 'rgb(13, 32, 51)',
                color: 'white',
                iconColor:'rgba(255, 214, 102, 0.9)'
            });
            return;
        }

        const order = {
            buyer: {...dataForm},
            products: [...cart],
            total: totalPrice()
        }

        uploadOrder(order);
    }


    const uploadOrder = async(order) =>{
        try {
            const orderRef = collection(db, "orders");
            const response = await addDoc(orderRef, order);
            Swal.fire({
                title: "Compra realizada",
                text: `Tu ID de orden es: ${response.id}`,
                icon: "success",
                confirmButtonText: "Aceptar",
                background: 'rgb(13, 32, 51)',
                color: 'white',
                iconColor:'rgba(82, 255, 168, 0.8)'
            });
            setOrderId(response.id);
        } catch (error) {
            
        }
    }
    return(
        <div>
            {
               orderId ? (
                <div>
                    <h2>Order generada correctamente!</h2>
                    <p>guarde el identificador de su orden: {orderId}</p>
                </div>
               ) : (
                   <FormCheckout dataForm={dataForm} hangleChangeInput={hangleChangeInput} sendOrder={sendOrder}/>
               )
            }
        </div>
    )
}

export default Checkout
