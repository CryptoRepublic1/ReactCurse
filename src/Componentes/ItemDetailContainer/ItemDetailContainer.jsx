import { stock } from "../../Data/Stock"
import { useEffect, useState} from "react"
import { useParams } from "react-router-dom"
import { ProductPage } from "./productsPage"


export const ItemDetailContainer =function(){



  const [loading, setLoading] = useState(false)


  const [item, setItem] = useState(null)
  const { itemId } = useParams()
  


  const pedirDatos =() => {
    return new Promise((resolve)=> {
        setTimeout(() => {resolve(stock)}, 1000 )
    })
}

useEffect(async() => {
    setLoading(true)
    const res = await pedirDatos()
    console.log(res);
    console.log(itemId);


    const item2 = await res.find((el) => el.id === itemId)

    setItem(item2)
    setLoading(false)
    }

,[])


return(
    <>
    {/* <div>
        {item.map((el) => 
            <DisplayProducts nombre = {el.nombre} desc = {el.desc} precio = {el.precio} id={el.id} /> )}
       </div> */}

     <ProductPage {...item}/>
    
    </>
  )
 

}