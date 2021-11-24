import React from 'react'

import  Item  from '../Item/Item'


 const ItemList = ({productos}) => {
    return ( 
    <> 
     
     <div className="container">
          <div className="row">
               { //map me devuelve el array de todos los productos
                    productos.map( prod =>  <Item prod= {prod} key={prod.id}/> ) 
               }

          </div>
         
     </div> 

    </>
            )
                                   }

export default ItemList ;