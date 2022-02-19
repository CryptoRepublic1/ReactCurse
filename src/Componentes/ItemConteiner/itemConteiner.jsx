import "./itemConteiner.css";
import { useEffect, useState } from "react";
import { stock } from "../../Data/Stock";
import { DisplayProducts } from "../CarWidget/DisplayCart";
import { useParams } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import {db} from "../../firebase/config"
import { collection, query } from "firebase/firestore";
import { getDocs } from "firebase/firestore";
import { where } from "firebase/firestore";


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


    useEffect(() => {

        setLoading(true)
      
        const productosRef = collection(db, "productos")
        console.log(catId);
        const q = catId ? query(productosRef, where("categoria", "==", catId)) : productosRef
        getDocs(q).then((resp)=>{setProductos(
            resp.docs.map((doc)=>{

                return{
                    id: doc.id,
                    ...doc.data()
                }
            }))
        }).finally(setLoading(false))

        console.log(productos);



    
        // const res = await pedirDatos()

        // if (catId) {
        //     setProductos( res.filter((el) => el.categoria === catId ) )
        //     setLoading(false)
        // } else {
        //     setProductos(res)
        //     setLoading(false)
        // }

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