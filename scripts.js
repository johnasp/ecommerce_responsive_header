$( document ).ready(function() {
// TOGGLE DESKTOP/MOBILE CLASS ON THE SITE WRAPPER DIV
  $(".toggle-nav").click(function() {
 	    $( ".site-wrapper").toggleClass( "desktop off-canvas" );
	});
// ANIMATE MOBILE MENUS
	var noOfCats = $(".main-nav").children('li').length;
	for ( var i = 1; i < noOfCats; i++ ) {
			$( ".category" + [i] + " a.header" ).click(function() {
				  $ (this).siblings(".off-canvas .inner-nav").slideToggle( "250" );
				  $ (this).toggleClass("opened");
		});     
	}
// MAINTAIN HOVER STATE ON THE CATEGORY BUTTON WHEN HOVERING OVER DROP DOWN
	for ( var i = 0; i < noOfCats; i++ ) {
	    $(".category" + [i] + " .inner-nav").hover(function () {
	       $ (this).siblings(".desktop .header").css("background", "#ba0047");
	       $ (this).siblings(".desktop .header").css("color", "#fff");
 	    });	 
 			$(".category" + [i] + " .inner-nav").mouseleave(function () {
   		   $(this).siblings(".header").css("background", "");
   		   $(this).siblings(".header").css("color", "");
   		});   
	}
});