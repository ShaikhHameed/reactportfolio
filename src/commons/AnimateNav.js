import About from "./About";
import Work from "./Work";
import Contact from "./Contact";
import Home from './Home';
import { Route, Routes ,useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

function AnimateNav (){
        
    const location = useLocation();
    return(
        <>
        <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
             <Route path="/" element={<Home/>} />  
             <Route path="/about" element={<About/>} />  
             <Route path="/work" element={<Work/>} />  
             <Route path="/contact" element={<Contact/>} />  
          </Routes>  
          </AnimatePresence>
          </>
    )
}

export default AnimateNav;