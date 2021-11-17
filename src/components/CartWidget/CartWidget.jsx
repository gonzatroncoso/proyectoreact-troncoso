
import React from 'react'
import CartImg from './cart2.svg'

import "./Cart.css";

const CartWidget = () => {
    return (
        <div className="cart">
            <img  className="carts"   src= {CartImg}  alt="la imagen del carrito"  />
        </div>
    )
}

export default CartWidget
