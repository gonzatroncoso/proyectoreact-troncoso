import {useState, useEffect} from 'react'
import ItemCount from '../ItemCount/ItemCount'
import {useParams} from 'react-router-dom'
import { getFetch } from '../../services/getFetch'
import  ItemList  from '../ItemList/ItemList'


//componente
const  ItemListContainer = ({saludo}) => {
  const [productos, setProductos] = useState([])

  const {marcaID} = useParams()

  useEffect(() => {
  //hago de cuenta que llamo a una api
    if (marcaID) {
      
      getFetch
      
      .then (aceptar => { 
        setProductos(aceptar.filter (prod => prod.marca === marcaID ))
      } ) 
        .catch(err => console.log(err)) 


    } else {
      
      getFetch
      .then (aceptar => { setProductos(aceptar)
      } ) 
        .catch(err => console.log(err)) 
    }

    },[marcaID])
    console.log(marcaID)


    return (
       <>
        <h1>{saludo}</h1>
        
        <ItemList productos={productos}/>
        
        
         <ItemCount  initial = {0} stock={10} />
       </>
   );
  }


export default ItemListContainer;