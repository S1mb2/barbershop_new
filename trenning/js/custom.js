// alert("Before load");
$(document).ready(function(){
    
     $('.cap__slider').slick({
         navigation: false,
         arrows: false
     });
     $('.cap__slider').on('swipe', function(){
         console.log('huy');
     });
});





