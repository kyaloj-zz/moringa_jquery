$(document).ready(function(){
  $('#triangle').fadeIn(2000);
  $('#square').slideDown(2000);
  $('#circle').slideDown(2000);
  $('#rounded-rectangle').fadeIn(2000);
  $('.shape').css('display', 'inline-block');
  // Your Code Here!

  $('li').css('color','red');

  $("#triangle").click(function(){
    $("#triangle").fadeOut();

    });


    $("#square").mouseenter(function(){
    $("#square").css('background-color', 'black');

   });


    $("#circle").mouseenter(function(){
    $("#circle").animate({height: '+=50px', width: '+=50px'});

   });


    $("#circle").mouseleave(function(){
    $("#circle").animate({height: '-=50px', width: '-=50px'});

   });

    $("#rounded-rectangle").click(function(){
    $("#rounded-rectangle").animate({
       height:'toggle'},

       100, function(){

    });

   });



   

});