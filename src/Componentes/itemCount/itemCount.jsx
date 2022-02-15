import { useState } from "react"
import { Button } from "react-bootstrap"


export const ItemCount = function({ max, min,counter, setCounter } ){

  const handleSumar = function(){
    return (counter < max && setCounter(counter + 1))
  }

  const handleRestar = function(){ 
    if( counter == 0 ) return

    setCounter(counter - 1)}
  

  return (


    <div>
      <Button onClick={handleRestar}> - </Button>
      <span className="mx-3"> {counter}</span>
      <Button onClick={handleSumar}> + </Button>



    </div>



  )



}