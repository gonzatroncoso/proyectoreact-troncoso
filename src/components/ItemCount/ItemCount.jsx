import React, {useState} from 'react'
import "./ItemCount.css";

const ItemCount = ({initial, onAdd}) => {

    const[count, setCount]  =  useState (initial)


    const handleOp = (suma) => {
        suma ? setCount (count +1) : setCount (count -1)
    }

    return ( 
        <div className='botones'>
         <button className= "btn btn-danger btnMenos"   onClick={ () => handleOp(false)}   disabled={count === 0} > - </button>

         <label> Cantidad: {count} </label>

         <button className = "btn btn-success btnMas"   onClick={ () => handleOp(true)} > + </button>

         <button className = "btn btn-dark btnAgregar" onClick={ () => onAdd(count)}   disabled={count === 0} > AGREGAR </button>
        </div>
    )

}

export default ItemCount;
