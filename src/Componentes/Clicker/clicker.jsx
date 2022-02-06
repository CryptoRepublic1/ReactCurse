import { Button } from "@mui/material";
import { useEffect, useState } from "react";
 

export const Clicker = function() {
    let [clicks, setClick] = useState(0);

    const aumentar = () => setClick(clicks + 1);

    useEffect(()=>{
        console.log('clicker actualizado')
    }, [clicks])

    return ( 

    <>
        <Button variant="text" onClick={aumentar}>Click me</Button>
        <p > Click: { clicks } </p>
     </>

    );

};