
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

    //borrar celular
    const sacarProducto = (id) => {
        setCartList(cartList.filter((item) => item.id !== id));
      };
   
      
    const cantidadItem = () => {
        return cartList.reduce(  (acum, item ) => acum = acum + item.cantidad, 0)
    }  

    //borrar carrito
    const borrarCarrito = () => {
        setCartList([])
    }

  
    const total = () => {
        return cartList.reduce((acum, item) => (acum += item.cantidad * item.precio ), 0)
    }



    return (
        <CartContext.Provider  value ={{
            cartList,
           
            agregarItem,
            cantidadItem,          
            sacarProducto,
            borrarCarrito,
            total
        }
        }>
            
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;