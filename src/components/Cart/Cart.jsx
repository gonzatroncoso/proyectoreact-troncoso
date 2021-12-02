import React from "react";

import { useState } from 'react'
import {useCartContext } from "../../context/CartContext"
import { Link} from  'react-router-dom'
import Table from 'react-bootstrap/Table'
import firebase from 'firebase'
//import Button from 'react-bootstrap/Button'

import Modal from '../Modal/Modal'
import { getFetch } from '../../services/getFetch';
import { getFirestore } from '../../services/getFirestore'  


const Cart = () => {

  const [nombre, setNombre] = useState('')
  const [tel, setTel] = useState('')
  const [email, setEmail] = useState('')
  const [idOrden, setIdOrden] = useState()

  const [showModal, setShowModal] = useState(false)


  const {cartList, sacarProducto, borrarCarrito, total } = useCartContext ()


  
  const generarOrden = (e) => {

    e.preventDefault();

    const orden = {}

    orden.buyer = { nombre, tel ,email } 
    orden.total = total()
    orden.date = firebase.firestore.Timestamp.fromDate(new Date())

    orden.items = cartList.map(cartItem => {
        const id = cartItem.id
        const modelo = cartItem.modelo
        const precio = cartItem.precio * cartItem.cantidad

        return { id, modelo, precio }
    })


    const dbQuery = getFirestore()
    
    dbQuery
      .collection("orders")
      .add(orden)
      .then((respuesta) => setIdOrden(respuesta.id))
      .catch((err) => console.log(err))
  

 console.log(orden)

  };

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
                  <button className="btn btn-danger"  onClick={() => sacarProducto(prod.id)}> Eliminar </button>
              </p>
          </tr>
          </tbody>
      
    </Table>
   
    ))}
      <div>
      <p className="card-text">Total: ${total()}  </p>
      </div>

      <div>
          <button className="btn btn-danger"  onClick={borrarCarrito}> Borrar Carrito </button>
      </div>

  <form
      onSubmit={generarOrden}
        className="container">
          <div class="col-md-8">
              <label for="nombre">Nombre</label>
              <input type="text" placeholder="Leo Messi" value={nombre} onChange={(e) => setNombre(e.target.value)} className="form-control" id="nombre" />
          </div>

          <div class="col-md-8">
              <label for="email" >Email</label>
              <input type="email" placeholder="ejemplo@gmail.com" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" id="email" />
          </div>

          <div class="col-md-8">
                <label for="tel" >Telefono</label>
                <input type="text" placeholder="01148963690" value={tel} onChange={(e) => setTel(e.target.value)} className="form-control" id="tel" />
            </div>

              <button className="btn btn-success" disabled={nombre.length === 0 || email.length === 0 || tel.length === 0}
              onClick={() => setShowModal(true)} >

                Terminar compra         
              </button>

    </form>
    
    
        <Modal
          nombre={nombre}
          email={email}
          tel={tel}
          idOrden={idOrden}
          total={total()}
          
        />
       
  </div>
  

  )}


  </>
  );
};

export default Cart;




