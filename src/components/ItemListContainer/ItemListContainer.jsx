import {useState, useEffect} from 'react'

import {useParams} from 'react-router-dom'

import  ItemList  from '../ItemList/ItemList'
import { getFirestore } from '../../services/getFirestore'


//componente
const  ItemListContainer = ({saludo}) => {
  const [productos, setProductos] = useState([])

  const {marcaID} = useParams()

  useEffect(() => {
    const dbQuery = getFirestore()
    

    if(marcaID){

      dbQuery.collection("items").where("marca", "==", `${marcaID}` ).get() 
        .then(data => setProductos (data.docs.map (pro => ({id: pro.id, ...pro.data() }) ) ))
        .catch(err => console.log(err))
        
    
      }  
      

    else{

      dbQuery.collection("items").get() 
      .then(data => setProductos (data.docs.map (pro => ({id: pro.id, ...pro.data() }) ) ))
      .catch(err => console.log(err))
      

    }

  },[marcaID])
  
    

    return (
       <>
        <h1>{saludo}</h1>
        
        <ItemList productos={productos}/>
       </>
   );
  }


export default ItemListContainer;