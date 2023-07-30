
$(document).ready(function(){


    $(".title-box").hover(function(){
       $(".hidden-nav-title").addClass("active");
    },function(){
        $(".hidden-nav-title").removeClass("active");
    });



    $(".sound-tab").click(function() {
        if ($(this).children("span").text() == "OFF") {
            $(this).children("span").text("ON"); 
        } else {
            $(this).children("span").text("OFF"); 
        }; 
    });

    $(".menu-button").click(function(){
        $(".nav-menu").toggleClass("active");
        $(".main-nav").toggleClass("invert-object");
        $(".bottom-home").toggleClass("invert-object");
        $(".cross-up").toggleClass("active");
        $(".cross-down").toggleClass("active");

    });

    $(".title-box").click(function(){
        $(".nav-menu").removeClass("active");
        $(".main-nav").removeClass("invert-object");
        $(".bottom-home").removeClass("invert-object");
        $(".cross-up").removeClass("active");
        $(".cross-down").removeClass("active");
    });

    $(".menu-item").click(function(){
        $(".nav-menu").removeClass("active");
        $(".main-nav").removeClass("invert-object");
        $(".bottom-home").removeClass("invert-object");
        $(".cross-up").removeClass("active");
        $(".cross-down").removeClass("active");
    });


    // gsap.registerPlugin(ScrollTrigger);

    // gsap.utils.toArray(".skill-big").forEach(element => {
    // gsap.to(element, {
    //     scrollTrigger: {
    //     //   scroller: ".skill-section",
    //       trigger: element,
    //       start: 'bottom 100%',
    //       end:'top 15%',
    //       toggleActions: 'play complete restart',
    //       scrub: true
    //     }, 
    //     rotation: 0,
    //     opacity:1,
    //     scale:1,
    //     duration: 1,
    //     ease: 'back'
    //   });
    // });
    

    // gsap.utils.toArray(".skill-small").forEach(small => {
    //     gsap.from(small,{
    //         opacity:0,
    //         y:100,
    //     })
    //     gsap.to(small, {
    //         scrollTrigger: {
    //         //   scroller: ".skill-section",
    //           trigger: small,
    //           start: 'bottom 90%',
    //           end:'top 50%',
    //           toggleActions: 'play complete restart',
    //           scrub: true
    //         }, 
    //         opacity:1,
    //         y:0,
    //         duration: 1,
    //         ease: 'back'
    //       });
    //     });
        



        // gsap.to(".about-image", {
        //     yPercent: -500,
        //     ease: "none",
        //     scrollTrigger: {
        //       // start: "top bottom", // the default values
        //       end: "top 25%",
        //       scrub: true
        //     }, 
        //   });

});

