import "./itemConteiner.css";
import { useEffect, useState } from "react";
import { stock } from "../../Data/Stock";
import { DisplayProducts } from "../CarWidget/DisplayCart";
import { useParams } from "react-router-dom";
import { Spinner } from "react-bootstrap";

export const ItemConteiner = function({ greating }) {


    // DISPLAY STOCK
    const [productos, setProductos] = useState([])

    const[Loading, setLoading] = useState(false)

    const { catId } = useParams()

    const pedirDatos =() => {
        return new Promise((resolve)=> {
            setTimeout(() => {resolve(stock)}, 1000 )
        })
    }


    useEffect(async() => {
        setLoading(true)
        const res = await pedirDatos()

        if (catId) {
            setProductos( res.filter((el) => el.categoria === catId ) )
            setLoading(false)
        } else {
            setProductos(res)
            setLoading(false)
        }

    },[catId])

    // Clicker 
    // let [clicker, setClicker] = useState(false);
    // const mostrar = () => {
    //     setClicker(!clicker)
    // }

    return ( 
    <>
        <div className = "headerItem" >
        <h1 > { catId ? catId : greating } </h1> </div> 
        <hr/>
        {/* <Button onClick={mostrar}> Button</Button>
        {clicker === true ? <Clicker/> : null} */}
       {/* <div className="Productos">
        {productos.map((el) => 
            <DisplayProducts nombre = {el.nombre} desc = {el.desc} precio = {el.precio} id={el.id} /> )}
       </div> */}

       {
                Loading 
                    ? <Spinner animation="border" className="Spinner1" />
                    :  <div className="Productos">
                    {productos.map((el, i) => 
                        <DisplayProducts key={i} nombre = {el.nombre} desc = {el.desc} precio = {el.precio} id={el.id} /> )}
                   </div>
    } 

       

    </>

       
    );
};