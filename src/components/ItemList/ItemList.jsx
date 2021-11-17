import React from 'react'

import  Item  from '../Item/Item'


 const ItemList = ({productos}) => {
    return ( 
    <>
    { //map me devuelve el array de todos los productos
         productos.map( prod =>  <Item prod= {prod} key={prod.id}/> ) 
    }

    </>
            )
                                   }

export default ItemList ;