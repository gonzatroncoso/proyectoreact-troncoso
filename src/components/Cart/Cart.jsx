import React from "react";
//import  { useContext }  from 'react'
import {useCartContext } from "../../context/CartContext"

const Cart = () => {

  const {cartList, sacarProducto} = useCartContext ()


  console.log(cartList)

  return (
    <>
      <h1>carrito</h1>


{cartList.length === 0 ? (
  <div>
    <div>
      <h1>Su carrito esta vacio</h1>
      
    </div>
  </div>

) : (

  <div>
      
    {cartList.map((prod) => (
      <div>
        <ul key={prod.id} >
          <li>                 

          {prod.modelo} <br />
          ${prod.precio} 

            <div> 
              <span> Cantidad de celulares seleccionados: {prod.cantidad}</span> <br />
              <button onClick={() => sacarProducto(prod.id)}> Eliminar </button>
            </div>

          </li>
        </ul>

      </div>
    ))}
   
  </div>
  )}


  </>
  );
};

export default Cart;