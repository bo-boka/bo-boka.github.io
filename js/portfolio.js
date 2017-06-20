
//tag canvas
window.onload = function() {
	try {
	  TagCanvas.Start('myCanvas','tags');
	} catch(e) {
	  // something went wrong, hide the canvas container
	  document.getElementById('myCanvasContainer').style.display = 'none';
	}
};

$(document).ready(function() {
   if( ! $('#myCanvas').tagcanvas({
	 textColour : '#ffffff',
	 outlineThickness : 1,
	 maxSpeed : 0.03,
	 depth : 0.75
   },'tags')) {
	 // TagCanvas failed to load
	 $('#myCanvasContainer').hide();
   }
   // your other jQuery stuff here...

 });


 //smooth scrolling

 $(document).ready(function(){

  $(".smooth-scroll").on('click', function(event) {

    if (this.hash !== "") {

      event.preventDefault();

      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        window.location.hash = hash;
      });
    }
  });
});
