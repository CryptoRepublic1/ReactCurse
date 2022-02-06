import "./ProductPage.css"


export const ProductPage = function({id, nombre, img, desc, precio, stock, categoria}){

  return (
    <div className="row paginaProducto">
      <div className="col fotosProducto">
        <h3> hola</h3>
        {console.log(nombre)}
      </div>
      <div className="col detallesProducto">
       
            <h3>{nombre}</h3>
            <p>{desc}</p>
            <h5>Precio: ${precio}</h5>

            {/* CONTADOR */}
        
      </div>
    </div>

  )
  
}