import { stock } from "../../Data/Stock"
import { useEffect, useState} from "react"
import { useParams } from "react-router-dom"
import { ProductPage } from "./productsPage"
import { db } from "../../firebase/config"
import { getDoc } from "firebase/firestore"

import { doc } from "firebase/firestore"

export const ItemDetailContainer =function(){



  const [loading, setLoading] = useState(false)


  const [item, setItem] = useState(null)
  const { itemId } = useParams()
  


  const pedirDatos =() => {
    return new Promise((resolve)=> {
        setTimeout(() => {resolve(stock)}, 1000 )
    })
}

useEffect(() => {
    // setLoading(true)
    // const res = await pedirDatos()
    // const item2 = await res.find((el) => el.id === itemId)

    // setItem(item2)
    // setLoading(false)  
    setLoading(true)

    

    const docRef= doc(db,"productos", itemId)

    getDoc(docRef).then((doc)=> {
      setItem({id:doc.id , ...doc.data()})
    }).finally(setLoading(false))
    }

,[])


return(
    <>
     <ProductPage {...item}/>
    </>
  )
 

}