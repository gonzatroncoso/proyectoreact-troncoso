
import React from 'react'
 import {createContext, useState, useContext} from "react"

const CartContext = createContext ([])

export const useCartContext = () =>{
    return useContext (CartContext)
}




 const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([])



    const agregarItem = (item) => {

        const index = cartList.findIndex(x => x.id === item.id);

        if (index > -1) {
            const oldQ = cartList[index].cantidad

            cartList.splice (index, 1)
            
            setCartList([...cartList, {...item, cantidad: item.cantidad + oldQ } ])
        } else {
            setCartList([...cartList, item ])

        }

    }

    const sacarProducto = (id) => {
        setCartList(cartList.filter((item) => item.id !== id));
      };
   
    const cantidadItem = ( ) => {
        return cartList.reduce(  (acum, item ) => acum = acum + item.cantidad, 0)
    }  



    return (
        <CartContext.Provider  value ={{
            cartList,
           
            agregarItem,
            cantidadItem,
            
            sacarProducto
        }
        }>
            {/* children es una prop que puedo usar dentro del componente. En este caso seria en (App) */}
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;