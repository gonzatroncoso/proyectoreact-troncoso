import React, {useState} from 'react'


const ItemCount = ({stock, initial}) => {

    const[count, setCount]  =  useState (initial)

    const suma = ( ) =>  {
        if ( count < 10){
            setCount(count + 1)
           }
           else{
               alert("No contamos con stock")
           }       
    }


    const resta = ()  => {
       if(count > initial) setCount(count - 1)
    }


    const onAdd = ()  => {
        alert (` AGREGASTE ${count}  PRODUCTOS` )
    }

    return ( 
        <div>
         <button className= "btn btn-danger" onClick = {resta} > - </button>

         <label> cantidad {count} </label>

         <button className = "btn btn-success"  onClick = {suma}> + </button>

         <button className = "btn btn-dark"  onClick = {onAdd}> AGREGAR </button>
        </div>
    )

}

export default ItemCount;
