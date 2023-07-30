import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import cv from "../file/Shaikh hameed CV May Updated.pdf";

gsap.registerPlugin(ScrollTrigger);

function About() {
   
    const bigSkill = useRef(null);

    useEffect (()=>{
    gsap.utils.toArray(".skill-big").forEach(element => {
    gsap.to(element, {
        scrollTrigger: {
        //   scroller: ".skill-section",
          trigger: element,
          start: 'bottom 100%',
          end:'top 25%',
          toggleActions: 'play complete restart',
          scrub: true
        }, 
        rotation: 0,
        opacity:1,
        scale:1,
        duration: 1,
        ease: 'back'
      });
    });
    });

    useEffect (()=>{     
    gsap.utils.toArray(".skill-small").forEach(small => {
        gsap.from(small,{
            opacity:0,
            y:100,
        })
        gsap.to(small, {
            scrollTrigger: {
            //   scroller: ".skill-section",
              trigger: small,
              start: 'bottom 90%',
              end:'top 50%',
              toggleActions: 'play complete restart',
              scrub: true
            }, 
            opacity:1,
            y:0,
            duration: 1,
            ease: 'back'
          });
        });
    })


    useEffect (()=>{
      gsap.to(".image-parallax", {
                yPercent: 100,
                ease: "none",
                scrollTrigger: {
                  start:"top 0",
                  end:"bottom 0",
                  scrub: true,
                }, 
              });
    });

    useEffect (()=>{
      gsap.to(".download-parallax", {
                yPercent: 1000,
                ease: "none",
                scrollTrigger: {
                  start:"top 0",
                  end:"bottom 0",
                  scrub: true,
                }, 
              });
    });


    return ( 
        <>
       <motion.div id="about-content" 
       initial={{opacity:0}}
       animate={{opacity:1}}
       transition={{duration:1, delay:0.2}}
       exit={{opacity:0}}
       >


        <div class="about-height">
      <div class="row text-white mt-5">
        <div class="col-md-7">
            <div class="d-flex flex-column justify-content-center h-100">
                <div class="row justify-content-center">
                  <h4 className="col-12  text-uppercase" >About Me</h4>
                  <h1 class="bebas-text d-block col-12 big-about-text">I am a Web Developer</h1>
                    <div class="col-md-6">I am a Web Developer Currently living in Mumbai (India) Who Loves JavaScript. I am Always Looking for Challenges. My Motto is to Create Designs which are Unique and Give the Users a rich Experince.</div>
                    <div class="col-md-6">Desingning UI/UX in Photoshop/ Adobe XD and turning them into beautiful Web Page using HTML,CSS & Javascript is my Speciality</div>

                    <div class="col-12 my-5 download-parallax"><a download="CV_SHaikh_Hameed.pdf" target="_blank" href={cv}><div class="resume-circle text-uppercase cursor-pointer "><span className="louis-bold">Download</span> My resume for More About Me</div></a></div>
                </div>
            </div>
            </div>

            <div class="col-md-4">
            <div class="p-5">
              <div class="image-parallax bg-light">
                <motion.div class="image-about-overlay"
                initial={{x:0}}
                animate={{x:"-100%"}}
                transition={{duration:1, delay:0.2}}
                exit={{x:0}}
                ></motion.div>
            <img class="w-100 about-image" src={process.env.PUBLIC_URL + "/img/port-image.webp"} alt="man"  />
            </div>
        </div>
        </div>
        </div>
        
      </div>
      
      <div class="skill-section">
        <h1 class="fixed-title">MY Skills</h1>
        <div class="skill-tiltle-control">
           <div class="container">
            <div class="skill-parent mr-md-auto">
                <h1 class="skill-big html-title" ref={bigSkill}>HTML</h1>
            </div>

            <div class="skill-parent ml-md-auto">
                <h1 class="skill-big m-0 css-title" ref={bigSkill}>.CSS</h1>
                <h4 class="skill-small text-center m-0">Boostrap</h4>
            </div>

            <div class="skill-parent mr-md-auto">
                <h1 class="skill-big" ref={bigSkill}>JavaScript</h1>
                <h4 class="skill-small m-0">Jquery</h4>
                <h4 class="skill-small m-0">ReactJs</h4>
            </div>

            </div>
        </div>
      </div>

    </motion.div>
        </>
     );
}

export default About;