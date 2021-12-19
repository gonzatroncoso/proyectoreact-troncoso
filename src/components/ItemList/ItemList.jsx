import React from 'react'
import  Item  from '../Item/Item'


 const ItemList = ({productos}) => {
    return ( 
    <>      
     <div className="container">
          <div className="row">
               { 
                    productos.map( prod =>  <Item prod= {prod} key={prod.id}/> ) 
               }
          </div>         
     </div> 

    </>
            )
                                   }

export default ItemList ;