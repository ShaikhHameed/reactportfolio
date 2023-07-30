import { motion } from "framer-motion";

function Blur() {
    return ( 
        <>
        <motion.div class="blur-object-canvas" 
        initial={{opacity:0,scale:5}}
        animate={{opacity:1,scale:1}}
        transition={{duration:1,delay:0.3,}}
        exit={{scale:5}}
        
        >
      
      
      <div class="home-circle" id="blur-object"></div>
    </motion.div>
        </>
     );
}

export default Blur;