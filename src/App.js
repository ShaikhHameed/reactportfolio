import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Nav from "./commons/Nav";
import AnimateNav from "./commons/AnimateNav";


function App() {

    return ( 
        <>
        <Router>
            <Nav/>
            <AnimateNav/>
        </Router>    
        </> 
     );
}


export default App;