import React from 'react'


import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'



import "./Item.css";

 const Item = ({prod}) => {
    return (
      <div className=" col-sm-12 col-md-6 col-lg-4 item container">
          <div className="card mb-3 row">
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
