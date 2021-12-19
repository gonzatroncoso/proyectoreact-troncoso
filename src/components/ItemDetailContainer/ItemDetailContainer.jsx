//import React from 'react'
import {useState, useEffect} from 'react'
import {useParams} from 'react-router'
import ItemDetail from "../ItemDetail/ItemDetail";
import { getFirestore } from '../../services/getFirestore'    
  
const ItemDetailContainer = ()  => {

    const [item, setProductos]  =  useState({});

  
    const {id} = useParams();

    useEffect(() => {

    const dbQuery = getFirestore()    

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
