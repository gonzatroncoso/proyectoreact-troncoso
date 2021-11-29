//import React from 'react'
import {useState, useEffect} from 'react'
import {useParams} from 'react-router'
import ItemDetail from "../ItemDetail/ItemDetail";

import { getFetch } from '../../services/getFetch';
import { getFirestore } from '../../services/getFirestore'    
  
const ItemDetailContainer = ()  => {

    const [item, setProductos]  =  useState({});

  //  const [prod, setProd] = useState({})
    const {id} = useParams();

    useEffect(() => {

    const dbQuery = getFirestore()    

    //trae un producto segun ID
      dbQuery.collection("items").doc(id).get()
      .then(respuesta => setProductos({ id:respuesta.id, ...respuesta.data()  }))

    },[id]);
 

    return (
        <>
            
            <ItemDetail  prod = {item} />
        </>
    )
    
}
export default ItemDetailContainer;
