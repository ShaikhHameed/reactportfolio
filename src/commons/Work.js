import React from "react";
import { motion } from "framer-motion";
import Headergap from "./HeaderGap"; 
import Workdata from "./WorkData";
import { Link } from "react-router-dom";
function Work() {
    return ( 
        <>
<motion.div initial={{opacity:0}}
       animate={{opacity:1}}
       transition={{duration:1, delay:0.2}}
       exit={{opacity:0}}>
        <Headergap/>
           <div id="work-content" class="page_content">
      <div class="work-gap"></div>

     <motion.div
     initial={{opacity:0}}
     animate={{opacity:1}}
     transition={{duration:1.5,delay:1}}
     >
       <div className="work-gallery container">
        {Workdata.map((val)=>{
          return(
            <>
              <div className="row work-main-box">
                <div className="col-md-6 p-0">
                <img class="w-100 about-image" src={process.env.PUBLIC_URL + "/img/new-work/"+val.image } alt="man"  />
                </div>
                <div className="col-md-6 p-0">
                  <div class="work-gallery-box">
                    <div className="work-gallery-small-title">{val.type}</div>
                    <h1 className="company-name">{val.name}</h1>
                    <a href={val.link} target="_blank"><button className="work-button mt-5"><div>Visit Site</div></button></a>
                  </div>
                </div>
              </div>
            </>
          )
        })
        }
       
       </div>

     </motion.div>
    </div>

  
    <div class="bg-animation">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
        <div id="stars4"></div>
    </div>
    </motion.div>
        </>
     );
}

export default Work;