//import React from 'react'
import {useState, useEffect} from 'react'
//import Item from '../Item/Item'
import {useParams} from 'react-router'
import ItemDetail from "../ItemDetail/ItemDetail";
//import { productos } from '../../services/getFetch';
 import { getFetch } from '../../services/getFetch';
    
  

const ItemDetailContainer = ()  => {

    const [item, setProductos]  =  useState({});
    const {id} = useParams();

    useEffect(() => {
        if(id){
            getFetch
                .then(res => {
                    setProductos(res.find(a => a.id === parseInt(id)))
                })
                .catch(err => console.log(err))
                
        }else{
            getFetch
                .then(res => {
                    setProductos(res)
                })
                .catch(err => console.log(err))
                
        }
    },[id]);

    return (
        <>
            
            <ItemDetail  prod = {item} />
        </>
    )
    
}
export default ItemDetailContainer;
