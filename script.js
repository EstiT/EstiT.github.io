window.addEventListener('load',function()
{

  var me = document.getElementById('me');
  console.log("width:"+me.clientWidth);
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



});
