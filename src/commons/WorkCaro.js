import React,{Component} from "react";
import Slider from "react-slick";

class WorkCarousel extends Component {
 
    render() { 
       
       const setting ={
        slidesToShow: 3,
        arrows:false,
        infinite:false,
        slidesToScroll:4,
        responsive:[
            {
                breakpoint: 768,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll:1,
                }
              },
        ]

       }

        return (
            <>
        
             <Slider  {...setting}>
            <div class="mx-0 mx-md-5 px-3 px-md-5 work-box-parent">
                <div class="visit-box"><div class="click-text">Click to Visit</div></div>
                <div class="work-box">
                    <h1 class="font-weight-light text-uppercase louis-light">Ace360Degree</h1>
                    <h5 class="font-weight-light text-uppercase louis-light">Design & Development</h5>
                    <h6 class="float-right font-weight-light louis-light">2022</h6>                    
                <img class="w-100" src={"./img/poster.png"} alt={"work"}/>
                </div>
            </div>

            <div class="mx-0 mx-md-5 px-3 px-md-5 work-box-parent">
                <div class="work-box">
                <img class="w-100" src={"./img/poster.png"} alt={"work"}/>
                <h6 class="float-right font-weight-light louis-light mt-3">2022</h6>  
                    <h1 class="font-weight-light text-uppercase louis-light mt-3">SportKonnect</h1>
                    <h5 class="font-weight-light text-uppercase louis-light">Design & Development</h5>
                </div>
            </div>

            <div class="mx-0 mx-md-5 px-3 px-md-5 work-box-parent">
                <div class="work-box">
                    <h1 class="font-weight-light text-uppercase louis-light">HRUB</h1>
                    <h5 class="font-weight-light text-uppercase louis-light">Design & Development</h5>
                    <h6 class="float-right font-weight-light louis-light">2022</h6>                    
                <img class="w-100" src={"./img/poster.png"} alt={"work"}/>
                </div>
            </div>

            <div class="mx-0 mx-md-5 px-3 px-md-5 work-box-parent">
                <div class="work-box">
                <img class="w-100" src={"./img/poster.png"} alt={"work"}/>
                <h6 class="float-right font-weight-light louis-light mt-3">2022</h6>  
                    <h1 class="font-weight-light text-uppercase louis-light mt-3">AMIGO Academey</h1>
                    <h5 class="font-weight-light text-uppercase louis-light">Design & Development</h5>
                </div>
            </div>
            

            
        </Slider>
            </>
        );
    }
}
 
export default WorkCarousel;