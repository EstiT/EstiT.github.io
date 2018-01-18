var salmonPink = "#e1949f";
var darkPurpleTransparent  = "rgba(59,65,86,0.85)";




window.addEventListener('load',function(){
   $("#homeM").css({ "border-bottom": "4px solid "+salmonPink});
  $('#australia').append("<img id = 'aussie' src='images/Australia.jpg' height='100px' width='120px' style='position: absolute; z-index: 3; display: none'>");

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

  $("#ac-6").prop('checked', true);
  $("#ac-8").prop('checked', true);
});

$(window).scroll(function(){

  if ( $(window).scrollTop() > 100 ) {
		$('a.back-to-top').fadeIn('slow');
	}
  else {
		$('a.back-to-top').fadeOut('slow');
	}

  if($('#home').offset().top >= -50){
    $("#menu").css('background-color', '');
  }
  else{
    $("#menu").css('background-color', darkPurpleTransparent);
  }


  if (isInView($('#page1'))){
   history.pushState(null, null, '#home');
   clearUnderline();
   $("#homeM").css({ "border-bottom": "4px solid "+salmonPink});
 }
 else if(isInView($('#page2'))){
   history.pushState(null, null, '#aboutMe');
   clearUnderline();
   $("#aboutM").css({ "border-bottom": "4px solid "+salmonPink});
 }
 else if(isInView($('#skills'))){
   history.pushState(null, null, '#skills');
   clearUnderline();
   $("#homeM").css({ "border-bottom": "4px solid transparent" });
 }
 else if(isInView($('#page3'))){
   history.pushState(null, null, '#education');
   clearUnderline();
   $("#eduM").css({ "border-bottom": "4px solid "+salmonPink});
 }
 else if(isInView($('#page4'))){
   history.pushState(null, null, '#experience');
   clearUnderline();
   $("#expM").css({ "border-bottom": "4px solid "+salmonPink});
 }
 else if(isInView($('#portfolioCell'))){
   history.pushState(null, null, '#portfolio');
   clearUnderline();
   $("#portfolioM").css({ "border-bottom": "4px solid "+salmonPink});
 }
 else if(isInView($('#page7'))){
   history.pushState(null, null, '#contactMe');
   clearUnderline();
   $("#contactM").css({ "border-bottom": "4px solid "+salmonPink});
 }
})

function clearUnderline(){
  $("#homeM").css({ "border-bottom": "none" });
  $("#aboutM").css({ "border-bottom": "none" });
  $("#eduM").css({ "border-bottom": "none" });
  $("#expM").css({ "border-bottom": "none" });
  $("#portfolioM").css({ "border-bottom": "none" });
  $("#contactM").css({ "border-bottom": "none" });
}


function isInView(elem){
  var docViewTop = $(window).scrollTop();
  var docViewBottom = docViewTop + $(window).height();
  var elemTop = $(elem).offset().top;
  var elemBottom = elemTop + $(elem).height();
  return ((elemBottom <= docViewBottom + 10) && (elemTop >= docViewTop));
}
