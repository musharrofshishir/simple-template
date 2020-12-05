$('.client-slider').owlCarousel({
    loop:true,
    margin:30,
    nav:false,
    stagePadding: 20,  
    autoplay: true,
    autoplayTimeout:1600,  
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:3
        }
    }
})