$(document).ready(function() {
console.log('document ready');
var images = $(".move");
$("#btnMove").off('click').on('click', function(){
   
   $('#moveOne').animate({left: '+=250px'}),
   $('#moveTwo').animate({left: '+=250px'}), 
   $('#moveThree').animate({left: '+=250px'}),
   $('#moveFour').animate({left: '+=250px'}),
   $('#moveFive').animate({left: '+=250px'})
    });

}); 





    
