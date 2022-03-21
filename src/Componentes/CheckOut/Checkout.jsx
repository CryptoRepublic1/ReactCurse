import { useContext } from "react"
import { CartContext } from "../context/cartContext"
import { useState } from "react"
import { Navigate } from "react-router"
import { Link } from "react-router-dom"
import { generarOrden } from "../../firebase/GenerarOrden"

 

export const Checkout = () => {
  const {cart, totalCart, vaciarCarrito} = useContext(CartContext)
  const [orderId, setOrderId] = useState(null)

  


     const [values, setValues] = useState({
        nombre: '',
        email: '',
        tel: '',
      })

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value })}


    const handleSubmit = (e) => {
        e.preventDefault()

        if (values.nombre.length <5){
          alert("El Nombre es demasiado corto")
          return 
        }

        if (values.email.length <7){
          alert("El Nombre es demasiado corto")
          return  
      
        }

        if (values.tel.length <9){
          alert("El Nombre es demasiado corto")
          return 
        }

        generarOrden(values, cart, totalCart, setOrderId, vaciarCarrito)
    
      } 

      if(orderId) {
        return (

          <div className="conteiner my-5"> 
            <h2> Gracias por tu compra!</h2>
            <hr/>
            <h3> Tu numero de orden es: {orderId}</h3>
            <Link to="/" className="btn btn-primary"> Volver</Link>

          </div>
        )
      }

      if (cart.length === 0 ){
        return <Navigate to="/"/>
      }

  



  return (
      <div className="container my-5">

        <h2> Checkout</h2>
        <hr/>

                  <form onSubmit={handleSubmit}>

                <input
                    className="form-control my-2"
                    type='text'
                    placeholder="Tu nombre"
                    value={values.nombre}
                    onChange={handleInputChange}
                    name='nombre'
                />

                
                <input
                    className="form-control my-2"
                    type='email'
                    placeholder="Tu email"
                    value={values.email}
                    onChange={handleInputChange}
                    name='email'
                />
                <input
                    className="form-control my-2"
                    type='tel'
                    placeholder="Tu Telefono"
                    value={values.tel}
                    onChange={handleInputChange}
                    name='tel'
                />

                <button type="submit" className="btn btn-primary">
                    Enviar
                </button>
            </form>


        
        
      </div>
      


  
  )
}
