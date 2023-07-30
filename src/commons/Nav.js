import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import song from "../aud/bg-website-dreamer.mp3";
import file from "../file/Shaikh hameed CV May Updated.pdf";



class Nav extends Component {



   
  state = {audio: new Audio(song),
   isPlaying: false,
 };

 playPause = () => {

   let isPlaying = this.state.isPlaying;

   if (isPlaying) {
     this.state.audio.pause();
   } else {
     this.state.audio.play();
   }
   this.setState({ isPlaying: !isPlaying });
   this.setText({ "On" : "OFF" })
 };


 


render(){

    return ( 
   <>
      

        <div className="main-nav ">
        <NavLink to="/"><div className="title-box d-flex" >
           <h2 className="main-nav-title bebas-text m-0">Shaikh</h2>
           <h2 className="hidden-nav-title bebas-text m-0 ml-2">  Hameed</h2>
           <h2 className="dot-title m-0">.</h2>
       </div></NavLink>
       <div className="menu-button" >
          <div className="menu-bar cross-up "></div>
          <div className="menu-bar cross-down "></div>
       </div>

         </div>
   

         <div className="nav-menu no-width" >
       
       <div className="menu-items-control">
           <NavLink to="/about" ><div className="menu-item">ABout</div></NavLink>
           <NavLink to="/work" ><div className="menu-item">Work</div></NavLink>
           <NavLink to="/Contact" ><div className="menu-item">Contact</div></NavLink>
       </div>

         </div>

     

      <div className="bottom-home py-2">
      <div className="sound-tab cursor-pointer" onClick={this.playPause} >Music:<span className="sound-toggle bebas-text" >OFF</span></div>
      <a download="CV_SHaikh_Hameed.pdf" target="_blank" href={file}><div className="download-tab">Click Here to <span className="bebas-text downloader-home">Download Resume</span></div></a>

      {/* <embed src={song} loop="true" autostart="true" width="2" height="0"/> */}
{/* 
      <audio
            ref="audio_tag"
            autoPlay="true" >
            <source type="audio/mp3" src={song} />
        </audio> */}
 
      </div>
   </>



     );

   }
     
}


export default Nav;