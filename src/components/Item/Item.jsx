import React from 'react'

import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'

import { Row } from 'react-bootstrap'
 // import { getFetch } from '../../services/getFetch'
//  import { Link } from 'react-router-dom'
 // import { useParams } from "react-router-dom";
 
 import Container from 'react-bootstrap/Container'
 import ListGroup from 'react-bootstrap/ListGroup'


import "./Item.css";

 const Item = ({prod}) => {
    return (
      <div className=" col-sm-12 col-md-6 col-lg-4 item">
          <div className="card mb-3 ">
              <p className="card-header text-dark">{prod.modelo} </p>
          <img src={prod.imagen} className="card-img-top container mb-3 mt-2"
              style={{ width: "250px", height: "250px" }} alt="img" />
              <ul className="list-group list-group-flush">
                  <li className="list-group-item text-dark">Precio: $ {prod.precio} </li>
              </ul>
              <Link to={`/detail/${prod.id}`}>
                  <Button>Mostrar detalle</Button>
              </Link>
          </div>
  </div>
)
}

export default Item

{/* <Card style={{ width: '18rem' }} key={prod.id} >
<Card.Img variant="top" src={prod.imagen} />


<Card.Body>
  <Card.Title>{prod.modelo}</Card.Title>
  <Card.Text>
    Some quick example text to build on the card title and make up the bulk of
    the card's content.
  </Card.Text>
</Card.Body>


<ListGroup className="list-group-flush">
  <ListGroupItem>{prod.memoria}</ListGroupItem>
  <ListGroupItem>${prod.precio}</ListGroupItem>                                
</ListGroup> 


<Link to={`/detail/${prod.id}`}>
    <Button>Mostrar detalle</Button>
</Link>
</Card> */}