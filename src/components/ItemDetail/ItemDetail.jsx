import React, { useState }  from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import ItemCount from "../ItemCount/ItemCount"

import { Link} from  'react-router-dom'
import "./ItemDetail.css";
import { useCartContext } from '../../context/CartContext'


  const ItemDetail = ({prod}) => {
    const [wasClicked, setWasClicked] = useState(false)

    const {cartList, agregarItem} = useCartContext(useCartContext)


    const handleAdd = (cantidad) => {

     // console.log(cantidad);

      setWasClicked(cantidad);

      agregarItem({...prod, cantidad: cantidad})
    };

    console.log(cartList)

      return (
        <>       
            <Card className="imagenDetalle"  key={prod.id}>
                <img  className="" src={prod.imagen} alt="cel" />
                <Card.Body >
                    <Card.Title> {prod.modelo} </Card.Title>
                    <Card.Text>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure, fugiat et eius deleniti itaque laboriosam officia magni? Deleniti inventore repellat totam provident alias! Vero beatae quae laudantium reprehenderit eum eos?
                    </Card.Text>
                <Button variant="primary">BOTON</Button> 
                </Card.Body>
            </Card>

            {wasClicked === false ?  

                  <ItemCount  initial = {1} stock={20}  producto={prod.modelo} onAdd={handleAdd}/>
                    :
              <>
                  <Link to='/cart'><button type="button" class="btn btn-danger">Finalizar su compra</button></Link>
                  <Link to='/'><button type="button" class="btn btn-success ">Continuar comprando</button></Link>
              </>
            }
            
        </>
            )
      }
  
  export default ItemDetail;
