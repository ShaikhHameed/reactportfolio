import React from "react";
import Blur from "./blur";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";


function Home (){
 
   
    return(
    <>
   <Blur/>
   
    <div id="page-content">
 

<motion.div class="home-page-caption" 
initial={{opacity:0}}
animate ={{opacity:1}}
transition={{duration:0.7,delay:0.1}}
exit ={{opacity:0,duration:25}}
>
  <div class="text-white" >
    <h5 class="m-0 caption-small font-weight-light louis-light">Hi</h5>
    <h1  class="m-0 caption-big"><span class="font-weight-light louis-light ">I am </span><span class="caption-text-space bebas-text">Shaikh hameed</span></h1>
    <p class="m-0 caption-tiny louis-light">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti quidem voluptate facere molestiae, commodi non.</p>
</div>
 
<NavLink to="/about"><div class="enter-box position-relative">
<div class="enter-pointer">
    <img class="img-fluid invert-image" src={process.env.PUBLIC_URL + "/img/right-arrow-svgrepo-com.svg"} alt="arrow" />
  </div>
  <div class="enter-text bebas-text" >Lets Start</div>
</div></NavLink>
</motion.div>



</div>
    </>
);
}

export default Home;