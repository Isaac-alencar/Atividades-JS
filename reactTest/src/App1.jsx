import React , {useEstate} from "react";
import './App1.css'
import Banner from "./components1/Banner";

import Formulario from "./components1/Formulario";

export default function App(){
    return (
        <div className="App1">
            <Banner/>
            <Formulario/>
        </div> 
    )
}