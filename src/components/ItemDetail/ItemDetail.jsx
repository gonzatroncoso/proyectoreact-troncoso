import React  from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
//  import ItemCount from "../ItemCount/ItemCount"
import "./ItemDetail.css";


  const ItemDetail = ({prod}) => {
      return (

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
       ) }
  
  export default ItemDetail;

