import React from "react";
import { motion } from "framer-motion";
import cv from "../file/Shaikh hameed CV May Updated.pdf";

function Contact() {
    return ( 
        <>
        <motion.div id="contact-content" class="page_content"
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration:1, delay:0.2,ease:"easeIn"}}
        exit={{opacity:0,transition:{duration:0.8, delay:0,ease:"easeInOut"}}}
        >
      
      <div class="mt-5 py-5">
          <h1 class="bebas-text contact-title">Contact Me</h1>
      </div>

      <div class="px-5">
          <div class="contact-box">
          <h4 class="m-0 bebas-text">Mail Me:</h4>
          <a href="mailto:hamidkshaikh@gmail.com"><h1 class="contact-big">hamidkshaikh@gmail.com</h1></a>
          </div>
          <div class="contact-box">
              <h4 class="m-0 bebas-text">Call Me:</h4>
              <a href="tel:+919150830564"><h1 class="contact-big">+91 915083064</h1></a>
          </div>
          <div class="contact-box">
              <h4 class="m-0 bebas-text">Download</h4>
              <a download="CV_SHaikh_Hameed.pdf" target="_blank" href={cv}><h1 class="contact-big">Resume</h1></a>
          </div>
      </div>

  </motion.div>
        </>
     );
}

export default Contact;