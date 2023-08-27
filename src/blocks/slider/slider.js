/*$(document).ready(function(){
    $(".slider__slider").slick({
        //prevArrow:".portfolio__button-prev",
        //nextArrow:".portfolio__button-next",
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        arrows: true,
        
    })
})*/

/*$(document).ready(function(){
    $(".slider__swiper-wrapper").slick({
      prevArrow: '.slider__swiper-button-prev',
      nextArrow: '.slider__swiper-button-next',
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
     
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            
          }
        },
        {
          breakpoint: 600,
          settings: {
          
          }
        },
        {
          breakpoint: 480,
          settings: {
           
          }
        }
      
      ]
    })
  
})*/


new Swiper ('.slider__slider', {
    // Optional parameters
    slidesPerView: 1,
    loop: true,
  
    // If we need pagination
    pagination: {
    el: '.swiper-pagination',
    clickable: true,
    },
  
    // Navigation arrows
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
    el: '.swiper-scrollbar',
    },
  
    spaceBetween: 22,
    observer: true,
    observeParents: true,
    observeSlideChildren: true,
});
  