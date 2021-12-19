import React, { useState }  from 'react'
import Card from 'react-bootstrap/Card'
import ItemCount from "../ItemCount/ItemCount"
import { Link} from  'react-router-dom'
import "./ItemDetail.css";
import { useCartContext } from '../../context/CartContext'


  const ItemDetail = ({prod}) => {
    const [wasClicked, setWasClicked] = useState(false)

    const {cartList, agregarItem} = useCartContext(useCartContext)


    const handleAdd = (cantidad) => {

      setWasClicked(cantidad);

      agregarItem({...prod, cantidad: cantidad})
    };

    console.log(cartList)

      return (
        <div className="contenedor" >       
            <Card className="imagenDetalle"  key={prod.id}>
                <img  src={prod.imagen} alt="cel" />
                <Card.Body>
                    <Card.Title> {prod.modelo} </Card.Title>
                    
                    <p>
                    {prod.descripcion}
                    </p>

                    <p>
                      ${prod.precio}
                    </p>
                
                </Card.Body>
            </Card>

            {wasClicked === false ?  

                  <ItemCount  initial = {1} stock={20}  producto={prod.modelo} onAdd={handleAdd}/>
                    :
              <botonesAgregar className= "botones">
                  <Link to='/cart'><button type="button" class="btn btn-danger btnMas">Finalizar su compra</button></Link>
                  <Link to='/'><button type="button" class="btn btn-success ">Continuar comprando</button></Link>
              </botonesAgregar>
            }
            
        </div>
            )
      }
  
  export default ItemDetail;
