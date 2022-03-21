import React from 'react'
import { useContext } from 'react'
import { Button } from 'react-bootstrap'
import { CartContext } from '../context/cartContext'

import { Link } from 'react-router-dom'

export const CartDisplay = () => {
  const {cart, totalCart, vaciarCarrito, eliminarItem} = useContext(CartContext)



  return (


    <div className='container my-4'>
      <h2> Tu compra</h2>
      <hr/>
      {
        cart.map((item)=> (
        
        <div key={item.id}> 

          <h4> {item.nombre}</h4>
          <p> Cantidad: {item.cantidad}</p>
          <p> Precio: ${item.precio *item.cantidad}</p>
          <div className='"my-2'>
        <Button className='btn btn-danger' onClick={() => {eliminarItem(item.id)}}
        > Eliminar Item</Button>

      </div>
            
        </div>))

  

      }
      <hr/>
      <h2> Total: ${totalCart()}</h2>



      <div className='"my-2'>
        <Button className='btn btn-danger' onClick={vaciarCarrito}> Vaciar Carrito</Button>
        <Button as={Link} to="/Checkout" className='btn btn-success mx-2'> Finalizar mi compra</Button>
    

  
      </div>


    </div>
  )
}
