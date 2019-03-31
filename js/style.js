 $(document).ready(function(){


   /*preloader*/

   $(document).ready(function() {
         setTimeout(function() {

           $("body").removeClass("cut");
           $("#pulsar").addClass("hide");
           $("#preloader").addClass("moveUp");

       }, 3000)
   })
   /*preloader*/




   // navbar active class
  $('ul li').click(function(){
    $('li').removeClass("active1");
    $(this).addClass('active1');
  });

   /*shrink nav*/
  $(window).scroll(function() {
   if ($(document).scrollTop() > 50) {
     $('nav').addClass('shrink');
   } else {
     $('nav').removeClass('shrink');
   }
 });
 /*shrink nav*/

   /*humbergur menu*/
 $('.navbar .navbar-toggler').click(function(){
   $(this).toggleClass('open');
 });
 /*humbergur menu*/


   $(window).mousemove(function(e) {
   var change;
   var xpos=e.clientX;var ypos=e.clientY;var left= change*20;
   var  xpos=xpos*2;ypos=ypos*2;
   $('#home_area .para').css('top',((0+(ypos/50))+"px"));
   $('#home_area .para').css('left',(( 0+(xpos/80))+"px"));

 });


 $('.owl-carousel').owlCarousel({
     loop:true,
     margin:10,
     responsiveClass:true,
     autoplay: true,
    autoplayTimeout: 4000,
    smartSpeed: 500,
    dots: false,
    nav: true,
    navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
     responsive:{
         0:{
             items:1,
         },
         600:{
             items:1,
         },
         1000:{
             items:1,
         }
     }
 })









  //wow js active
  new WOW().init();

    // read more active
  $('#features .myElement').collapser({
  	mode: 'words',
  	truncate: 20,
    mode: 'lines',
    truncate: 3,
    showText: 'Read more'
  });
// read more active

});
