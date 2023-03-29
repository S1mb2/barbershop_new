$(document).ready(function(){
    $('.slider').slick();
    // $('.slider').on('swipe', function(){
    //     console.log('huy');
    //   });
      $('.slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
        console.log(nextSlide);
    });

    console.log('huy');
});