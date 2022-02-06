import ShoppingCartTwoToneIcon from "@mui/icons-material/ShoppingCartTwoTone";
import "./CarWidget.css";
import { DisplayCart } from "./DisplayCart";
import { useState } from "react";

export const CarWidget = function() {

    let [cartDisplay, displayCart] = useState(false);


    const mostrar = () => {
        displayCart(!cartDisplay)
    }

    return <>
    <ShoppingCartTwoToneIcon onClick={mostrar} className = "cart" / >
    {cartDisplay === true ? <DisplayCart/> : null}

    
    
    </>
};