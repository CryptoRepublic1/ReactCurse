import { Encabezado, Encabezado2 } from "./Componentes/NavBar/Encabezado";
import { ItemConteiner } from "./Componentes/ItemConteiner/itemConteiner";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Navigate, Route,Routes } from "react-router-dom";
import { DisplayCart } from "./Componentes/CarWidget/DisplayCart"
import { ItemDetailContainer } from "./Componentes/ItemDetailContainer/ItemDetailContainer";

function App() {
    return ( 
    <>
        <BrowserRouter>
            <Encabezado2/>
            <Routes>
                <Route path="/productos" element={ <ItemConteiner greating = "Todos los Productos" />}/>          
                <Route path='/productos/:catId' element={ <ItemConteiner greating = {"Categoria"}/> }/>
                <Route path='/detail/:itemId' element={ <ItemDetailContainer/> }/>



                {/* <Route path="*" element={<Navigate to="/"/>}/> */}
                <Route/>
             </Routes>
       
        </BrowserRouter>

    {/* <ItemConteiner greating = "hola soy coder" /> */}
    </>
    );
}



export default App;