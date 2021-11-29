import {useState, useEffect} from 'react'
import ItemCount from '../ItemCount/ItemCount'
import {useParams} from 'react-router-dom'
import { getFetch } from '../../services/getFetch'
import  ItemList  from '../ItemList/ItemList'
import { getFirestore } from '../../services/getFirestore'


//componente
const  ItemListContainer = ({saludo}) => {
  const [productos, setProductos] = useState([])
//  const [prod, setProd] = useState({})

  const {marcaID} = useParams()



  useEffect(() => {
    const dbQuery = getFirestore()

    dbQuery.collection("items").get() // me trae todos
      .then(data => setProductos (data.docs.map (x => ({id: x.id, ...x.data() }) ) ))
      .catch(err => console.log(err))
      
  
    },[marcaID])
  //  console.log(marcaID)
    

    return (
       <>
        <h1>{saludo}</h1>
        
        <ItemList productos={productos}/>
        
        
         {/* <ItemCount  initial = {0} stock={10} /> */}
       </>
   );
  }


export default ItemListContainer;