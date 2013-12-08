// start up the portfolio list
function portfolioInit () {

	// get all the children
	var children = $('#portfolio_list').children( '.child' );
	var childrenSize = children.length;
	var startPos = childrenSize - 1;
	
	// each child in the portfolio
	$.each( children, function( key, el ) {
	
		// START THE PORTFOLIO SLIDES IN THE RIGHT PLACE

			// set "active" state
			if ( key == ( startPos ) ) {
			
				$( el ).attr( 'class', '' ).addClass( 'child' ).addClass( 'active' );
			
			// set all the elements before this element to the "offright" state
			} else if( key == startPos + 1 ) {
			
				$( el ).attr( 'class', '' ).addClass( 'child' ).addClass( 'post' );
			
			// set all the elements before this element to the "offright" state
			} else if( key > startPos + 1 ) {
			
				$( el ).attr( 'class', '' ).addClass( 'child' ).addClass( 'offright' );
			
			// set all the elements less than 9 items before the active element to the appropriate frame
			} else if( key >= ( startPos - 9 ) ) {
			
				$( el ).attr( 'class', '' ).addClass( 'child' ).addClass( 'f' + ( 10 + ( parseInt( key ) - parseInt( startPos ) ) ) );
			
			// set all the elements more than 9 items before the active element to "offleft"
			} else {
			
				$( el ).attr( 'class', '' ).addClass( 'child' ).addClass( 'offleft' );
			
			}
		
		// set the click action
		
			$( el ).bind(
				'click',
				function() {
					portfolioClick( el, key );
				}
			);
			
	} )
		
	// load the thumbs
		
		setTimeout( function() {
			portfolioLoadAllThumbs();
		}, 200 );
		
	// set the "back to top" click as clearing any portfolio item
	
		$( '.backtotop' ).bind(
			'click',
			function() {
				portfolioUnLoadDetail( );
			}
		);
	
	// set the prev/next buttons
	
		$( '#portfolio_prev' ).bind(
			'click',
			function() {
				portfolioPrevNext( 'next' );
			}
		);
		$( '#portfolio_next' ).bind(
			'click',
			function() {
				portfolioPrevNext( 'prev' );
			}
		);
		
	// set up swipes
	
		$('.child').swipeLeft(
			function(){
				portfolioPrevNext( 'prev' );
			}
		);
		$('.child').swipeRight(
			function(){
				portfolioPrevNext( 'next' );
			}
		);
		

	
}


function portfolioClick ( el, key ) {
	
	//console.log( key + ':' + el );
	var wasOpen = $('.expand');
	
	// item is already active?
	if ( $( el ).hasClass( 'active' ) && !$( el ).hasClass( 'expand' ) ) {
	
		portfolioLoadDetail( el );
	
	// item is already expanded
	} else if ( $( el ).hasClass( 'active' ) && $( el ).hasClass( 'expand' ) ) {
	
		// nothing!
	
	// other items	
	} else {
	
		// kill any expanded item
		portfolioUnLoadDetail();
	
		// get all the children
		var children = $('#portfolio_list').children( '.child' );
		
		// if no key is given, find it
		if ( !key ) {
			
			$.each( children, function( key2, el2 ) {
				if ( el == el2 ) {
					var key = key2;
					return;
				}
			})
		} 
		
		// each child in the portfolio
		$.each( children, function( key2, el2 ) {
		
			// move the clicked on element to "active" state
			if ( key2 == key ) {
			
				// the delay is because when you're paging backwards, the order this fires seems to fail to make the window repaint.
				setTimeout( function() {
					$( el2 ).attr( 'class', '' ).addClass( 'child' ).addClass( 'active' );
					
					// if a slide was previously open, ping the new slide open
					if ( wasOpen.length > 0 ) {
						setTimeout( function() {
							portfolioLoadDetail( );
						}, 300 )	
					}
					
				}, 0 )
			
			// move all the elements before this element to the "offright" state
			} else if( key2 == key + 1 ) {
			
				$( el2 ).attr( 'class', '' ).addClass( 'child' ).addClass( 'post' );
				portfolioLoadThumb( $( el2 ).attr( 'id' ) );
			
			// move all the elements before this element to the "offright" state
			} else if( key2 > key ) {
			
				$( el2 ).attr( 'class', '' ).addClass( 'child' ).addClass( 'offright' );
				portfolioUnLoadThumb( $( el2 ).attr( 'id' ) );
			
			// move all the elements less than 9 items before the active element to the appropriate frame
			} else if( key2 >= ( key - 9 ) ) {
			
				$( el2 ).attr( 'class', '' ).addClass( 'child' ).addClass( 'f' + ( 0 - ( parseInt( key ) - parseInt( key2 ) - 10 ) ) );
				portfolioLoadThumb( $( el2 ).attr( 'id' ) );
			
			// move all the elements more than 9 items before the active element to "offleft"
			} else {
			
				$( el2 ).attr( 'class', '' ).addClass( 'child' ).addClass( 'offleft' );
				portfolioUnLoadThumb( $( el2 ).attr( 'id' ) );
			
			}
			
		} )
	}
	
	// stop text selection
	//document.onselectstart = function() {return false;} // ie
	//document.onmousedown = function() {return false;} // mozilla
}

function portfolioPrevNext ( direction ) {
	
	// get all the children
	var children = $('#portfolio_list').children( '.child' );
	
	// if no key is given, find it	
	$.each( children, function( key, el ) {
		if ( $( el ).hasClass( 'active' ) ) {
			if ( direction=='prev' ) {
				var nextKey = key + 1;
			} else {
				var nextKey = key - 1;
			}
			if ( children[ nextKey ] ) {
				var nextEl = children[ nextKey ];
				portfolioClick ( nextEl, nextKey );
				children = false; // kill any further loop
				return;
			} else {
				portfolioShudder ();
				children = false; // kill any further loop
				return;
			}
		} 
	})
	
}

function portfolioShudder ( ) {

	if ( $( '#portfolio_pop_up' ).length > 0 ) {
	
		$( '#portfolio_pop_up' ).addClass( 'shudder' );
		setTimeout( function() {
			$( '#portfolio_pop_up' ).removeClass( 'shudder' );
		}, 500 );
		
	} else {
	
		$( '#portfolio_list .active' ).addClass( 'shudder' );
		setTimeout( function() {
			$( '#portfolio_list .active' ).removeClass( 'shudder' );
		}, 500 );
	
	}


}


function portfolioLoadAllThumbs () {

	$( '.child_thumb_inner' ).remove();
	$( '.hidden_outer' ).remove();
	
	var children = $('#portfolio_list').children( '.child' );
	
	// each child in the portfolio
	$.each( children, function( key, el ) {
	
		// load the visible portfolio slides
		
			if ( !$( el ).hasClass( 'offleft' ) && !$( el ).hasClass( 'offright' ) ) {
			
				var id = $( el ).attr( 'id' );
				if ( id != undefined && id != '' ) {
				
					portfolioLoadThumb( id );
					
				}
			
			}
	})
}
function portfolioUnlock ( event ) {

	// stop the form from running
	event.preventDefault();
	
	// FF
	if ( event.originalTarget ) {
		var password = event.originalTarget.children[0].value;
	// webkit
	} else {
		var password = event.srcElement.children[0].value;
	}
	
	if ( password.length < 4 || password.length > 10 ) {
		alert( 'Sorry, no-luck. Would you like to try again?' );
	}

	$.ajax({
		type: 'POST',
		url: 'unlock.php',
		data: { 'name': 'Zepto', 'password': password },
		dataType: 'json',
		success: function( data ) {
		
			// all good, reload the thumbnails
			if ( data.success ) {
				portfolioLoadAllThumbs ();
			} else {
				alert( 'Sorry, no-go. Would you like to try again?' );
			}
			
		},
		error: function( xhr, type ) {
		
			if ( type == 'error' ) {
				alert( 'oops - an error occurred!' );
			}
		
		}
	})

}

function portfolioLoadThumb ( id ) {

	// if it already exists, exit;
	if ( $( '#' + id + ' .child_thumb_inner' ).length > 0 ) {
		return;
	}

	$.ajax({
		type: 'POST',
		url: 'portfolio/' + id +  '/thumb.php',
		data: {name: 'Zepto'}, // can be a string or object (objects are automatically serialized to JSON)
		dataType: 'html',
		success: function( data ) {
	
			// load the thumb into the area
			$( '#' + id + ' .child_thumb' ).html( data )
			
		},
		error: function( xhr, type ) {
		
			if ( type == 'error' ) {
				console.error( '#' + id + ' can\'t be found' );
			}
		
		}
	})
}

function portfolioUnLoadThumb ( id ) {

	$( '#' + id + ' .child_thumb' ).text( '' )

}

function portfolioLoadDetail ( el ) {
	
	// clear everything!
	$( '#portfolio_pop_up' ).remove();
	clearTimeout( loadingTimeOut );
	
	if ( !el ) {
		el = $( '#portfolio_list .active' );
	}
	var id = $( el ).attr( 'id' );
	
	// if it doesn't exist, exit
	if ( id == undefined ) {
		return;
	}
	
	// if the thumb doesn't have a correct thumb, exit
	if ( $( '#' + id + ' .child_thumb_inner' ).length < 1 ) {
		return;
	}

	// if it already exists, exit
	if ( $( '#' + id + ' .child_detail' ).length > 0 ) {
		return;
	}
	
	// kill the the image scroll clicker
	clicksLeft = 0; 
	
	// hide rotator
	$( '#rotator_cv' ).addClass( 'hide' );
	
	// create the container
	var popup = document.createElement( 'div' );
	popup.id = 'portfolio_pop_up';
	$( '#container1' ).append( popup );
	
	// expand
	setTimeout( function() {
		$( '#portfolio_pop_up' ).addClass( 'expand' );
	}, 0 )

	loadingTimeOut = setTimeout( function() {
		$.ajax({
			type: 'POST',
			url: 'portfolio/' + id +  '/index.php?' + ( Math.random() * 10000 ),
			data: {name: 'Zepto'}, // can be a string or object (objects are automatically serialized to JSON)
			dataType: 'html',
			success: function( data ) {
		
				// load the thumb into the area
				$( '#portfolio_pop_up' ).append( data );
				
				// start-up the lightbox links
				$('.child_detail_img img').zlBoxInit();
				
				// set up the prev/next buttons on the portfolio pictures
				portfolioPrevNextInit();
				
			},
			error: function( xhr, type ) {
			
				if ( type == 'error' ) {
					console.error( '#' + id + ' can\'t be found' );
				}
			
			}
		})
	}, 500 )

}

function portfolioUnLoadDetail ( ) {

	$( '#portfolio_pop_up .child_detail' ).remove();
	$( '#portfolio_pop_up' ).addClass( 'out' );
	setTimeout( function() {
		$( '#portfolio_pop_up' ).remove();
	}, 250 );
	
	// re-instate rotator
	$( '#rotator_cv' ).removeClass( 'hide' );
	
	// kill the the image scroll clicker
	clicksLeft = 0;

}


function portfolioPrevNextInit () {

	var size_bucket = $( '#child_detail_imgs' ).width();
	var size_rocks = $( '#child_detail_imgs_inner' ).width();
	var rock = $( '.child_detail_img' )[0];
	var size_rock = $( rock ).width();
	
	/*
	console.log( 'bucket:' + size_bucket )
	console.log( 'rocks:' + size_rocks )
	console.log( 'rock:' + size_rock )
	console.log( 'left:' + clicksLeft )
	//*/
	
	// prev button
		if ( clicksLeft > 0 ) {
		
			portfolioPrevInit();
		
		} else {
		
			$( '#child_detail_imgs .prev' ).remove();
		
		}
	
	// next button
		if ( size_bucket < ( size_rocks - ( clicksLeft * size_rock ) ) ) {
		
			portfolioNextInit();
		
		} else {
		
			$( '#child_detail_imgs .next' ).remove();
		
		}
	
	// set up swipes
	
		$('#child_detail_imgs').swipeLeft(
			function(){
				portfolioPrevNextScroll( 'next' );
			}
		);
		$('#child_detail_imgs').swipeRight(
			function(){
				portfolioPrevNextScroll( 'prev' );
			}
		);

}

function portfolioPrevInit () {

	if ( $( '#child_detail_imgs .prev' ).length > 0 ) {
		return;
	}

	var button = document.createElement( 'div' );
	button.className = 'button prev';
	button.title = 'click to scroll';
	$( '#child_detail_imgs' ).append( button );
	
	$( button ).bind(
		'click',
		function() {
			portfolioPrevNextScroll( 'prev' );
		}
	);

}

function portfolioNextInit () {

	if ( $( '#child_detail_imgs .next' ).length > 0 ) {
		return;
	}

	var button = document.createElement( 'div' );
	button.className = 'button next';
	button.title = 'click to scroll';
	$( '#child_detail_imgs' ).append(button);
	
	$( button ).bind(
		'click',
		function() {
			portfolioPrevNextScroll( 'next' );
		}
	);

}

function portfolioPrevNextScroll ( dir ) {

	var children = $('#portfolio_list').children( '.child' );
	
	if ( Modernizr.csstransforms ) {
	
		if ( dir == 'next' ) {
		
			clicksLeft++ ;
			if ( clicksLeft > children.length ) {
				clicksLeft = children.length;
				return;
			}
			
		} else {
		
			clicksLeft-- ;
			if ( clicksLeft < 0 ) {
				clicksLeft = 0;
				return;
			}
		
		}
		var emsLeft = clicksLeft * 9.5;
	
		$( '#child_detail_imgs_inner' ).css( '-webkit-transform', 'translateX(-' + emsLeft + 'em)' )
		.css( '-moz-transform', 'translateX(-' + emsLeft + 'em)' )
		.css( '-ms-transform', 'translateX(-' + emsLeft + 'em)' )
		.css( 'transform', 'translateX(-' + emsLeft + 'em)' );
	
	}
	
	setTimeout( function() {
	
		portfolioPrevNextInit();
		
	}, 500 )

}


// on domready
$(document).ready(function() {

	clicksLeft = 0;

	loadingTimeOut = false;

	// ready the portfolio;
	portfolioInit();
	
});