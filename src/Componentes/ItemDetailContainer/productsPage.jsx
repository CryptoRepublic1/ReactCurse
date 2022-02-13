import { Button } from "@mui/material"
import "./ProductPage.css"


export const ProductPage = function({id, nombre, imagen, desc, precio, stock, categoria}){

  return (
    
    <div className="row paginaProducto">
      <div className="col fotosProducto">
      
      <img src={imagen}/>

      </div>
      <div className="col detallesProducto">
            {console.log(imagen)}
            <h3>{nombre}</h3>
            <p>{desc}</p>
            <h5>Precio: ${precio}</h5>

            <Button> Agregar al carrito</Button>

            {/* CONTADOR */}
        
      </div>
    </div>

  )
  
}