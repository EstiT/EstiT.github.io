var salmonPink = "#e1949f";
var darkPurpleTransparent  = "rgba(59,65,86,0.85)";




window.addEventListener('load',function(){
  setMenuUnderline();
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


function smoothScroll(target){
    document.getElementById(target).scrollIntoView({
      behavior: 'smooth', block: "start", inline: "nearest"
  });
  history.pushState(null, null, "#"+target);
}

$(window).scroll(function(){
  //show/hide bring to top arrow
  if ( $(window).scrollTop() > 100 ) {
		$('a.back-to-top').fadeIn('slow');
	}
  else {
		$('a.back-to-top').fadeOut('slow');
	}
  //menu oppacity
  if($(window).scrollTop() < document.getElementById("home").offsetTop + 60){
    $("#menu").css('background-color', '');
  }
  else{
    $("#menu").css('background-color', darkPurpleTransparent);
  }

  setMenuUnderline();
})

function setMenuUnderline(){
  if (isInView($('#home'))){
   clearUnderline();
   $("#homeM").css({ "border-bottom": "4px solid "+salmonPink});
 }
 else if(isInView($('#aboutMe'))){
   clearUnderline();
   $("#aboutM").css({ "border-bottom": "4px solid "+salmonPink});
 }
 else if(isInView($('#skills'))){
   clearUnderline();
   $("#homeM").css({ "border-bottom": "4px solid transparent" });
 }
 else if(isInView($('#education'))){
   clearUnderline();
   $("#eduM").css({ "border-bottom": "4px solid "+salmonPink});
 }
 else if(isInView($('#experience'))){
   clearUnderline();
   $("#expM").css({ "border-bottom": "4px solid "+salmonPink});
 }
 else if(isInView($('#portfolioCell'))){
   clearUnderline();
   $("#portfolioM").css({ "border-bottom": "4px solid "+salmonPink});
 }
 else if(isInView($('#contactMe'))){
   clearUnderline();
   $("#contactM").css({ "border-bottom": "4px solid "+salmonPink});
 }
}

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

function animateMenuIcon(menu) {
    if($("#mobileMenu").is(':visible')){
      $("#header").height(50);
      $("#home").css({"top": 0});
    }
    else{
      $("#header").height(250);
      $("#home").css({"top": 200});
    }
    menu.classList.toggle("change");
    $("#mobileMenu").slideToggle();
}
