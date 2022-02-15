import { Button } from "@mui/material"
import "./ProductPage.css"
import { ItemCount } from "../itemCount/itemCount"
import { useContext, useState } from "react"
import { useEffect } from "react"
import { CartContext } from "../context/cartContext"
import { Link } from "react-router-dom"

export const ProductPage = function({id, nombre, imagen, desc, precio, stock, categoria}){

  const [cantidad, setCantidad] = useState(0)


  const {cart, agregarAlCarrito, isInCar } = useContext(CartContext)



  const handleAgregar = () => {
    if(cantidad === 0 ) return 

    if(!isInCar(id)) {
      const addItem = {
        id,nombre,precio,stock, cantidad
      }
      agregarAlCarrito(addItem)
    }

 
  }

  return (
    
    <div className="row paginaProducto">
      <div className="col fotosProducto">
      <img src={imagen}/>
      </div>
      <div className="col detallesProducto">
            <h3>{nombre}</h3>
            <p>{desc}</p>
            <h5>Precio: ${precio}</h5>

            {/* <Button  onClick={handleAgregar}> Agregar al carrito</Button> */}
           
            {isInCar(id) ? 

            <Link to="/cart" className="btn btn-success my-3">
              Terminar mi compra
            </Link> : <>

            <Button  onClick={handleAgregar}> Agregar al carrito</Button> 
            <ItemCount max = {stock}  min= {0} counter = {cantidad} setCounter = {setCantidad} />
            
            
            
            </>}

            
      </div>
    </div>

  )
  
}