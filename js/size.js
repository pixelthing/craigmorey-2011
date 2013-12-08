
$(document).ready(function() {

	revealPanels ();
	resizeEm();
	reSizeTimer = false;
})

$(window).bind(
	'resize', 
	function() {
		
		if ( reSizeTimer ) {
			clearTimeout( reSizeTimer );
		}
		reSizeTimer = setTimeout( function() {
			resizeEm();
		}, 300 );
	
	}
);

function resizeEm () {

	// make text size changes instant (part of stopping window resizes appear slow)
	$('header').css( '-webkit-transition-duration', '0ms' );
	$('article').css( '-webkit-transition-duration', '0ms' );
	$('.column').css( '-webkit-transition-duration', '0ms' );
	
	var widthDefault = 1024;
	var widthActual = document.documentElement.clientWidth;
	var heightActual = document.documentElement.clientHeight;
	
	// the default font-size for different screens was previously in the stylesheet and looked up in js, but on iOS, the look-up is so slow it can stall or crash the browser
	fontDefault = 18;
	if ( widthActual <= 640 ) {
		fontDefault = 30;
		if ( ( widthActual/heightActual ) < ( 6/5 ) ) {
			fontDefault = 45;
		}
	} else if ( ( widthActual/heightActual ) < ( 6/5 ) ) {
		fontDefault = 28;
	} else if ( widthActual >= 1401 ) {
		fontDefault = 14;
	}
	
	//var fontDefault = parseInt( $( 'html' ).css( 'font-size' ).replace( 'px', '' ) );
	var fontActual = Math.round( widthActual/widthDefault * fontDefault );
	
	$('body').css( 'font-size' , fontActual + 'px' );
	
	// put transitions back to normal (part of stopping window resizes appear slow)
	setTimeout( function() {
		var frozenArray = $('header').concat( $('article'), $('.column') );
		$.each( frozenArray, function( key, el ) {
			el.style.webkitTransitionDuration = '';
		} );
	
	}, 500 )

}

var panelTimer1 = 0
function revealPanels () {
	
	// if we've gone round this loop 5 times, give up
	if ( panelTimer1 >= 5 ) {
		$('header .column').css( 'opacity', 1 );
		$('#spinner').remove();
		return;
	}
	
	// else
	var panelTimer2 = setTimeout( function() {
		// check to see if typekit is still loading
		if ( $('html').hasClass('wf-active') ) {
			$('header .column').css( 'opacity', 1 );
			$('#spinner').remove();
		} else {
			clearTimeout( panelTimer2 );
			panelTimer1 += 1;
			revealPanels();
			return;
		}
	}, 800 );
}