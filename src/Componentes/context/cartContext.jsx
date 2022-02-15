import { createContext } from "react";
import React from 'react'
import { useState } from "react";

export const CartContext = createContext()



export const CartProvider = ({children}) => {

  const [cart, setCart] = useState([])

  const agregarAlCarrito = (item) => {
      setCart([...cart, item]) }
      
  const isInCar = (id) => {
      return cart.some((prod)=> prod.id === id )  }

  const cantidadCart = () => {
      return cart.reduce((acc,prod) => acc+ prod.cantidad,0)}

  const totalCart = () => {
      return cart.reduce((acc,prod) => acc + prod.cantidad*prod.precio,0)
  }

  const vaciarCarrito = () => {
    return setCart([])
  }


  const eliminarItem =(id) => {
    return setCart(cart.filter((prod)=> prod.id !== id))


  }
  return (
  
  <CartContext.Provider value={{
    cart, 
    agregarAlCarrito, 
    isInCar,
    totalCart,
    cantidadCart,
    vaciarCarrito,
    eliminarItem

    }}>

      {children}
  </CartContext.Provider>)
}