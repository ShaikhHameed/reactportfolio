import React from "react";
import { NavLink } from "react-router-dom";



function BackupNav (){

   const navMenu = document.querySelector(".nav-menu");
   const mainMenu = document.querySelector(".main-nav");
   const bottomHome = document.querySelector(".bottom-home");



   const menuButton =()=>{
      navMenu.classList.toggle('active');
      mainMenu.classList.toggle("invert-object");
      bottomHome.classList.toggle("invert-object");
      console.log("Clicker");
   }

   var navTitleClick =()=>{
      navMenu.classList.remove("active");
      mainMenu.classList.remove("invert-object");
      bottomHome.classList.remove("invert-object");
      console.log("title Click");
   }

   var  navLinkClick =()=>{
      navMenu.classList.remove("active");
      mainMenu.classList.remove("invert-object");
      bottomHome.classList.remove("invert-object");
      console.log("Link Click");
   }



    return ( 
        <>
      

        <div className="main-nav ">
        <NavLink to="/"><div className="title-box d-flex" onClick={navTitleClick}>
           <h2 className="main-nav-title bebas-text m-0">Shaikh</h2>
           <h2 className="hidden-nav-title bebas-text m-0 ml-2">  Hameed</h2>
           <h2 className="dot-title m-0">.</h2>
       </div></NavLink>
       <div className="menu-button" onClick={menuButton}>
          <div className="menu-bar"></div>
          <div className="menu-bar"></div>
       </div>

    </div>
   

    <div className="nav-menu no-width" >
       
       <div className="menu-items-control">
           <NavLink to="/about" onClick={navLinkClick}><div className="menu-item">ABout</div></NavLink>
           <NavLink to="/work" onClick={navLinkClick}><div className="menu-item">Work</div></NavLink>
           <NavLink to="/Contact" onClick={navLinkClick}><div className="menu-item">Contact</div></NavLink>
       </div>

    </div>


    <div className="bottom-home">
<div className="sound-tab">Sound:<span className="sound-toggle bebas-text">ON</span></div>
<div className="download-tab">Click Here to <span className="bebas-text downloader-home">Download Resume</span></div>
</div>
        </>



     );


     
}


export default BackupNav;