import React from 'react'

import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import "./Modal.css";



const Modal = ({ nombre, email, tel, idOrden, total }) => {
     
  const { borrarCarrito } = useCartContext();

    return (
      
      <>
      <div className="modal">
        <div className="descripcionModal">
          <div>
            <Link to={"/"} onClick={borrarCarrito}>
              <p className="x"> X </p>
            </Link>
            <h1>
              <p>Compra realizada <br/> con exito</p>
              
            </h1>
          </div>
          <h2>Tu Orden Compra</h2>
          <div>
            <h3>
              Nombre: {nombre}
            </h3>
            <h3>
              Email: {email}
            </h3>
            <h3>
              Telefono:{tel}
            </h3>
            <h3>
              ID de orden: <br/> {idOrden}
            </h3>
            <h3>
              Total pagado: ${total}
            </h3>
          </div>          
        </div>
      </div>
    </>

    );
  };
  
  export default Modal;