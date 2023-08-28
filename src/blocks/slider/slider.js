new Swiper ('.slider__slider', {
    
    slidesPerView: 1,
    loop: true,
  
   
    pagination: {
    el: '.swiper-pagination',
    clickable: true,
    },
  
    
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    },
  
    
    scrollbar: {
    el: '.swiper-scrollbar',
    },
  
    spaceBetween: 22,
    observer: true,
    observeParents: true,
    observeSlideChildren: true,
});
  