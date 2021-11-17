import React, {useState} from 'react'


const ItemCount = ({initial, stock, onAdd}) => {

    const[count, setCount]  =  useState (initial)


    const handleOp = (suma) => {
        suma ? setCount (count +1) : setCount (count -1)
    }

    return ( 
        <div>
         <button className= "btn btn-danger"   onClick={ () => handleOp(false)}   disabled={count === 0} > - </button>

         <label> cantidad {count} </label>

         <button className = "btn btn-success"   onClick={ () => handleOp(true)} > + </button>

         <button className = "btn btn-dark" onClick={ () => onAdd(count)}   disabled={count === 0} > AGREGAR </button>
        </div>
    )

}

export default ItemCount;
