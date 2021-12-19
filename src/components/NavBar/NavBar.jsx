import React from 'react';
import Nav from 'react-bootstrap/Nav'
import CartWidget from '../CartWidget/CartWidget';
import "./NavBar.css";
import { Link} from  'react-router-dom'
import { useCartContext } from '../../context/CartContext';

  const  NavBar = () => {

    const {cantidadItem}  = useCartContext()
   

    return (
      <Nav className="header ">
        <div className="container">
          <div className=" header">
          <Link to="/">
            <img className="imagen" src="https://i.ibb.co/TT0QMvN/logocelulares1.jpg" alt="logo" />
          </Link>
          </div>

        </div>


        <Link  className="nav categorias" to="/"> Home </Link>
        
      
        <Link className="nav"  to="/marca/samsung" >
          <p className="categorias"> Samsung </p>  
        </Link>
      
        <Link  className="nav" to="/marca/iphone" >
        <p className="categorias"> Iphone </p> 
        </Link>
           
        <Link className="nav"  to="/marca/motorola" >
        <p className="categorias"> Motorola </p> 
        </Link>
      
      <Link to="/cart">
        {cantidadItem()}
        <CartWidget  />
      </Link>

    </Nav>
   );
  }

export default NavBar;