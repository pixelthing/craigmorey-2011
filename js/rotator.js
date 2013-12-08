// ROTATOR
(function($){

	$.fn.rotateInit = function() {
	
		if ( !$(this).attr('id') ) {
			$(this).attr( 'id', 'rotate' + Math.floor(Math.random()*11) )
		}
	
		var rotateId = $(this).attr('id');
		// is the current slide "active?"
		var parentActive = $(this).parents('.active');
		
		// if the current slide is active, run the rotator one cycle
		if ( parentActive.length > 0 ) {
			//console.log('run');
			$( '#' + rotateId ).rotateRun();
		// if the current slide is NOT active, reset the rotator
		} else {
			//console.log('reset');
			$( '#' + rotateId ).rotateReset();
		}
		
		// check again in 8 seconds
		setTimeout( (function() {
			$( '#' + rotateId ).rotateInit();
		}) , 8000 );
	
	}
	
	// reset the rotator
	$.fn.rotateReset = function () {
	
		var children = $(this).children();
		var childrenHidden = children.not(':first-child');
		
		$(children).addClass('rotate_child').removeClass('rotate_hide');
		$(childrenHidden).addClass('rotate_hide');
	
	}
	
	// run the rotator one cycle
	$.fn.rotateRun = function () {
	
		var rotateId = $(this).attr('id');
		var children = $(this).children();
		var nextChild = false;
		var success = false;
		
		children.each( function( key, el ) {
		
			// if we've asked the next child to be shown, show it.
			if ( nextChild == true ) {
				$(el).removeClass('rotate_hide');
				success = true;
				nextChild = false;
			// else if the current child is shown, tell the routine to show the next one.
			} else if ( !$(el).hasClass('rotate_hide') ) {
				nextChild = true;
				$(el).addClass('rotate_hide');
			}
		})
		
		// if the last child is the one that was shown, show the first child again.
		if ( success != true ) {
		
			children.first().removeClass('rotate_hide');
			
		}
	
	}
	
})(Zepto);


// on domready
$(document).ready(function() {

	$('.rotator').rotateInit();
	
});