import React from 'react'

const Modal = ({ nombre, email, tel, idOrden, total }) => {
     
    return (
      <>
          
            <h1>Tu orden</h1>
            <div>
              <h2>
                Nombre:<p>{nombre}</p>
              </h2>
              <h2>
                Email:<p>{email}</p>
              </h2>
              <h2>
                Telefono:<p>{tel}</p>
              </h2>
              <h2>
                Numero de orden:<p>{idOrden}</p>
              </h2>
              <h2>
                Total abonado: <p>${total}</p>
              </h2>
            </div>
        
      </>
    );
  };
  
  export default Modal;