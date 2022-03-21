import {  Encabezado2 } from "./Componentes/NavBar/Encabezado";
import { ItemConteiner } from "./Componentes/ItemConteiner/itemConteiner";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route,Routes } from "react-router-dom";
import { ItemDetailContainer } from "./Componentes/ItemDetailContainer/ItemDetailContainer";
import {  CartProvider } from "./Componentes/context/cartContext";
import { CartDisplay } from "./Componentes/cartDisplay/cartDisplay";
import { Checkout } from "./Componentes/CheckOut/Checkout";
function App() {
    
    return ( 
    <>
    <CartProvider>
        <BrowserRouter>
            <Encabezado2/>
            <Routes>
                <Route path="/" element={ <ItemConteiner greating = "Todos los Productos" />}/>          
                <Route path='/productos/:catId' element={ <ItemConteiner greating = {"Categoria"}/> }/>
                <Route path='/detail/:itemId' element={ <ItemDetailContainer/> }/>
                <Route path='/cart' element={<CartDisplay/>}/>
                <Route path='/Checkout' element={<Checkout/>}/>
                {/* <Route path="*" element={<Navigate to="/"/>}/> */}
                <Route/>
             </Routes>
        </BrowserRouter>
    </CartProvider>
    
    {/* <ItemConteiner greating = "hola soy coder" /> */}
    </>
    );
}



export default App;