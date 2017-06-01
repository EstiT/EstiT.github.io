window.addEventListener('load',function()
{
  var me = document.getElementById('me');
  me.style.borderRadius = me.clientWidth/2+"em";

  $('#australia').append("<img id = 'aussie' src='Australia.jpg' height='100px' width='120px' style='position: absolute; z-index: 3; display: none'>");


  $( "#australiaLink" ).mouseover(function() {
    $( "#australia" ).fadeIn( 175 );
  });

  $( "#climbingLink" ).mouseover(function() {
    $( "#climbing" ).fadeIn( 175 );
  });

  $( "#worldsLink" ).mouseover(function() {
    $( "#worlds" ).fadeIn( 175 );
  });

  $('a.back-to-top').click(function() {
	   $('html, body').animate({
		     scrollTop: 0
	      }, 700);
	       return false;
  });

});

$(window).scroll(function(){

  if ( $(window).scrollTop() > 100 ) {
		$('a.back-to-top').fadeIn('slow');
	}
  else {
		$('a.back-to-top').fadeOut('slow');
	}


  if (isInView($('#page1'))){
   history.pushState(null, null, '#home');
   $("#homeM").css({ "border-bottom": "4px solid #ffffff" });
   $("#aboutM").css({ "border-bottom": "none" });
   $("#eduM").css({ "border-bottom": "none" });
   $("#expM").css({ "border-bottom": "none" });
   $("#portfolioM").css({ "border-bottom": "none" });
   $("#contactM").css({ "border-bottom": "none" });
 }
 else if(isInView($('#page2'))){
   history.pushState(null, null, '#aboutMe');
   $("#homeM").css({ "border-bottom": "none" });
   $("#aboutM").css({ "border-bottom": "4px solid #ffffff" });
   $("#eduM").css({ "border-bottom": "none" });
   $("#expM").css({ "border-bottom": "none" });
   $("#portfolioM").css({ "border-bottom": "none" });
   $("#contactM").css({ "border-bottom": "none" });
 }
 else if(isInView($('#skills'))){
   history.pushState(null, null, '#skills');
   $("#homeM").css({ "border-bottom": "none" });
   $("#aboutM").css({ "border-bottom": "none" });
   $("#eduM").css({ "border-bottom": "none" });
   $("#expM").css({ "border-bottom": "none" });
   $("#portfolioM").css({ "border-bottom": "none" });
   $("#contactM").css({ "border-bottom": "none" });
 }
 else if(isInView($('#page3'))){
   history.pushState(null, null, '#education');
   $("#homeM").css({ "border-bottom": "none" });
   $("#aboutM").css({ "border-bottom": "none" });
   $("#eduM").css({ "border-bottom": "4px solid #ffffff" });
   $("#expM").css({ "border-bottom": "none" });
   $("#portfolioM").css({ "border-bottom": "none" });
   $("#contactM").css({ "border-bottom": "none" });
 }
 else if(isInView($('#page4'))){
   history.pushState(null, null, '#experience');
   $("#homeM").css({ "border-bottom": "none" });
   $("#aboutM").css({ "border-bottom": "none" });
   $("#eduM").css({ "border-bottom": "none" });
   $("#expM").css({ "border-bottom": "4px solid #ffffff" });
   $("#portfolioM").css({ "border-bottom": "none" });
   $("#contactM").css({ "border-bottom": "none" });
 }
 else if(isInView($('#portfolioCell'))){
   history.pushState(null, null, '#portfolio');
   $("#homeM").css({ "border-bottom": "none" });
   $("#aboutM").css({ "border-bottom": "none" });
   $("#eduM").css({ "border-bottom": "none" });
   $("#expM").css({ "border-bottom": "none" });
   $("#portfolioM").css({ "border-bottom": "4px solid #ffffff" });
   $("#contactM").css({ "border-bottom": "none" });
 }
 else if(isInView($('#page7'))){
   history.pushState(null, null, '#contactMe');
   $("#homeM").css({ "border-bottom": "none" });
   $("#aboutM").css({ "border-bottom": "none" });
   $("#eduM").css({ "border-bottom": "none" });
   $("#expM").css({ "border-bottom": "none" });
   $("#portfolioM").css({ "border-bottom": "none" });
   $("#contactM").css({ "border-bottom": "4px solid #ffffff" });
 }
})


function isInView(elem){
  var docViewTop = $(window).scrollTop();
  var docViewBottom = docViewTop + $(window).height();
  var elemTop = $(elem).offset().top;
  var elemBottom = elemTop + $(elem).height();

  return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}
