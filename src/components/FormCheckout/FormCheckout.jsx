import { useNavigate } from "react-router-dom";


const FormCheckout = ({ dataForm, hangleChangeInput, sendOrder }) => {
    const navigate = useNavigate();

    const handleCancel = () => {
        navigate("/cart");
    };
    return(
        <div className="checkout-panel">
            <form onSubmit={sendOrder} className="checkout-form">
                <h2>Checkout</h2>
                
                <div>
                    <p>Nombre Completo:</p>
                    <input type="text" name="fullname" value={dataForm.fullname} onChange={hangleChangeInput} />
                </div>
                
                <div>
                    <p>Telefono:</p>
                    <input type="number" name="phone" value={dataForm.phone} onChange={hangleChangeInput} />
                </div>
                
                <div>
                    <p>Email:</p>
                    <input type="email" name="email" value={dataForm.email} onChange={hangleChangeInput} />
                </div>

                <div className="form-buttons">
                    <button type="submit" className="btn-submit">Confirmar</button>
                    <button type="button" className="btn-cancel" onClick={handleCancel}>Cancelar</button>
                </div>
            
            </form>
        </div>
    )
}

export default FormCheckout
