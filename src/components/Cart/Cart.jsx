import React from "react";
//import  { useContext }  from 'react'
import {useCartContext } from "../../context/CartContext"
import { Link} from  'react-router-dom'
import Table from 'react-bootstrap/Table'

const Cart = () => {

  const {cartList, sacarProducto, borrarCarrito, total } = useCartContext ()


  console.log(cartList)

  return (
    <>
      


{cartList.length === 0 ? (
  <div>
    <div>
      <h1>Su carrito esta vacio</h1>
      
      <Link to='/'><button type="button" class="btn btn-success "> Ver mas Celulares </button></Link>
    </div>
  </div>

) : (

  <div>
      
    {cartList.map((prod) => (
     

    <Table striped bordered hover>
        <thead>
          <tr>
            <th></th>
            <th>Celular</th>
            <th>Cantidad</th>
            <th>Precio</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><img src={prod.imagen} style={{ width: "130px", height: "130px" }} alt="celular" /></td>
            <td>{prod.modelo}</td>
            <td>{prod.cantidad}</td>
            <td>${prod.precio}</td>
            <td> ${prod.precio * prod.cantidad} </td>
            <p>
                  <button onClick={() => sacarProducto(prod.id)}> Eliminar </button>
              </p>
          </tr>
          </tbody>
      
    </Table>
   
    ))}


      <div>
      <p className="card-text">Total: ${total()}  </p>
      </div>

      <div>
          <button onClick={borrarCarrito}> Borrar Carrito </button>
      </div>
   
  </div>

  )}


  </>
  );
};

export default Cart;




