// ROTATOR
(function($){

	$.fn.zlBoxInit = function() {
	
		// no item found?
		if ( $( this ) == undefined ) {
			return;
		}
		
		// get all the possibles, store in a global
		zlBoxAllLinks = $('.child_detail_img');
		
		$( zlBoxAllLinks ).bind(
			'click',
			function( event ) {
				$( this ).zlBoxOpen( event );
				
				// stop text selection
				document.onselectstart = function() {return false;} // ie
				document.onmousedown = function() {return false;} // mozilla
			}
		);
	
	}

	$.fn.zlBoxOpen = function( event ) {

		// stop everything!
		if ( event ) {
			event.preventDefault();
		}
		
		//
		zlBoxThisLink = {};
	
		// get the link, if no link, exit
		zlBoxThisLink.link = $( this ).attr( 'href' );
		if ( zlBoxThisLink.link.length < 1 ) {
			return;
		}
		
		// get the thumb
		zlBoxThisLink.thumb = $( this ).children( 'img' ).first();
		
		// what type of link is it?
		zlBoxThisLink.type = false;
		if ( zlBoxThisLink.link.indexOf( '.jpg' ) >= 0 
			|| zlBoxThisLink.link.indexOf( '.JPG' ) >= 0 
			|| zlBoxThisLink.link.indexOf( '.jpeg' ) >= 0 
			|| zlBoxThisLink.link.indexOf( '.JPEG' ) >= 0 
			|| zlBoxThisLink.link.indexOf( '.png' ) >= 0 
			|| zlBoxThisLink.link.indexOf( '.PNG' ) >= 0 
			|| zlBoxThisLink.link.indexOf( '.gif' ) >= 0 
			|| zlBoxThisLink.link.indexOf( '.GIF' ) >= 0 ) {
			
			zlBoxThisLink.type = 'img';
			
		} else if ( zlBoxThisLink.link.indexOf( 'youtube' ) >= 0 || zlBoxThisLink.link.indexOf( 'youtu.be' ) >= 0 ) {
			
			zlBoxThisLink.type = 'youtube';
			
			if ( zlBoxThisLink.link.indexOf( 'youtube' ) >= 0 ) {
			
				var temp = zlBoxThisLink.link.split( '&' );
				temp = temp[0];
				temp = temp.split( '=' );
				zlBoxThisLink.videoId = temp[1];
			
			} else {
			
				var temp = zlBoxThisLink.link.replace( 'http://', '' ).replace( 'https://', '' ).split( '/' );
				zlBoxThisLink.videoId = temp[1];
			
			}
			
			// set ration between 16/9 and 4/3
			zlBoxThisLink.ratio = '16_9';
			if ( $( this ).attr( 'rel' ) == '4_3' ) {
				zlBoxThisLink.ratio = '4_3';
			}
		
		} else if ( zlBoxThisLink.link.indexOf( 'vimeo' ) >= 0 ) {
			
			zlBoxThisLink.type = 'vimeo';
			
			var temp = zlBoxThisLink.link.replace( 'http://', '' ).replace( 'https://', '' ).split( '/' );
			zlBoxThisLink.videoId = temp[1];
			
			// set ration between 16/9 and 4/3
			zlBoxThisLink.ratio = '16_9';
			if ( $( this ).attr( 'rel' ) == '4_3' ) {
				zlBoxThisLink.ratio = '4_3';
			}
		
		}
		
		// popup window title
		zlBoxThisLink.title = $( this ).attr( 'title' );
		if ( !zlBoxThisLink.title ) {
			zlBoxThisLink.title = $( zlBoxThisLink.thumb ).attr( 'title' );
		}
		
		// popup window text
		zlBoxThisLink.text = $( this ).attr( 'rel' );
		if ( !zlBoxThisLink.text && ( zlBoxThisLink.text != '4_3' || zlBoxThisLink.text != '16_9' ) ) {
			zlBoxThisLink.text = $( zlBoxThisLink.thumb ).attr( 'rel' );
		}
		
		//console.log( zlBoxThisLink );
		
		// set up the mask
		if ( $( '#zeptolbox_mask' ).length < 1 ) {
		
			var mask = document.createElement('div');
			mask.id = 'zeptolbox_mask';
			$("body").append(mask);
			
		}
		
		// fade in mask
		$( '#zeptolbox_mask' ).addClass('front');
		setTimeout( function() {
			$( '#zeptolbox_mask' ).addClass('up');
			$( '#zeptolbox_mask' ).bind(
				'click',
				function( event ) {
					$( this ).zlBoxClose( event );
				}
			);
		}, 0 );
		
		// set up spinner
		if ( $( '#zeptolbox_spinner' ).length < 1 ) {
		
			var spinnerCont = document.createElement( 'div' );
			spinnerCont.id = 'zeptolbox_spinner';
			$( 'body' ).append(spinnerCont);
			var spinnerInn = document.createElement( 'div' );
			$( '#zeptolbox_spinner' ).append(spinnerInn);
			var spinnerTxt = document.createElement( 'span' );
			spinnerTxt.innerHTML = 'loading…';
			$( '#zeptolbox_spinner' ).append(spinnerTxt);
			
		}
		
		// fade in spinner
		$( '#zeptolbox_spinner' ).addClass( 'front' );
		
		// find this link's position in the order of all available links
		var counter = 0;
		zlBoxPosition = false;
		zlBoxPrevEl = false;
		zlBoxNextEl = false;
		$.each( zlBoxAllLinks, function( key, el ) {
		
			// has this sycle got the same href as the link we've clicked on? Then we've found it's position.
			if ( $( el ).attr( 'href' ) == zlBoxThisLink.link ) {
				zlBoxPosition = counter;
			}
			counter++;
			
			// set the previous link
			if ( zlBoxPosition === false ) {
				zlBoxPrevEl = el;
			// set the next link
			} else if ( counter > ( zlBoxPosition + 1 ) && zlBoxNextEl == false ) {
				zlBoxNextEl = el;
			}
		})
		
		//console.log ( ( zlBoxPosition + 1 ) + ' of ' + zlBoxAllLinks.length );
		
		// for images 
		if ( zlBoxThisLink.type == 'img' ) {
		
	 		objImage = new Image();
	     	objImage.onload = $.fn.zlBoxImgLoaded;
	     	objImage.src = zlBoxThisLink.link;
	     	
		} else if ( zlBoxThisLink.type == 'vimeo' || zlBoxThisLink.type == 'youtube' ) {
		
			$.fn.zlBoxVideoLoad ( zlBoxThisLink.type, zlBoxThisLink.videoId, zlBoxThisLink.ratio );
		
		}
	
	}

	$.fn.zlBoxClose = function ( event ) {

		// stop everything!
		if ( event ) {
			event.preventDefault();
		}
		
		// fade picture
		$( '#zeptolbox_box' ).removeClass( 'front' );
		setTimeout( function() {
			$( '#zeptolbox_box_container' ).remove();
		}, 300 );
		
		// kill the spinner
		$( '#zeptolbox_spinner' ).removeClass( 'front' );
		
		// fade mask
		$( '#zeptolbox_mask' ).removeClass('up');
		setTimeout( function()  {
			$( '#zeptolbox_mask' ).removeClass('front');
		}, 300 )
	}

	$.fn.zlBoxImgLoaded = function () {
		
		// set up the basic lightbox
		$.fn.zlBoxCreateBox ();
		
		// create lightbox info panel
		$.fn.zlBoxCreateInfoBox ();
		
		// open the info box
		$.fn.zlBoxInfoToggle( 'open' );
		
		// lightbox info panel title/text insert
		$( '#zeptolbox_info_title' ).text( zlBoxThisLink.title );
		$( '#zeptolbox_info_text' ).text( zlBoxThisLink.text );
		
		// set up the prev/next buttons
		$.fn.zlBoxPrevNext ();
		
		// insert image
		$( '#zeptolbox_box_inner' ).css( 'background-image', 'url(' + objImage.src + ')' );
		
		// calcsize
		newSize = $.fn.zlBoxCalcSize ( objImage.width, objImage.height )
		
		// resize
		$.fn.zlBoxReSize ( newSize.w, newSize.h );
		
		// kill spinner
		$( '#zeptolbox_spinner' ).removeClass( 'front' );
		
		// fade up
		setTimeout( function() {
			$( '#zeptolbox_box' ).addClass( 'front' );
		}, 300 );
		
	}

	$.fn.zlBoxVideoLoad = function ( type, videoId, ratio ) {
		
		// set up the basic lightbox
		$.fn.zlBoxCreateBox ();
		
		// create lightbox info panel
		$.fn.zlBoxCreateInfoBox ();
		
		// close the info box
		$.fn.zlBoxInfoToggle( 'close' );
		
		// lightbox info panel title/text insert
		$( '#zeptolbox_info_title' ).text( zlBoxThisLink.title );
		$( '#zeptolbox_info_text' ).text( zlBoxThisLink.text );
		
		// set up the prev/next buttons
		$.fn.zlBoxPrevNext ();
		
		// calcsize
		var width = 960;
		var height = 540;
		if ( ratio == '4_3' ) {
			width = 720;
		}
		
		// set up the iframe
		if ( type == 'vimeo' ) {
			var iFrame = '<iframe src="http://player.vimeo.com/video/' + videoId + '" width="' + width + '" height="' + height + '" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>';
		} else {
			var iFrame = '<iframe width="' + width + '" height="' + height + '" src="http://www.youtube.com/embed/' + videoId + '" frameborder="0" allowfullscreen></iframe>';
		}
		
		// insert the iframe into the lightbox
		$( '#zeptolbox_box_inner' ).html( iFrame );
		
		// recalc the size
		newSize = $.fn.zlBoxCalcSize ( width, height )
		
		// resize
		$.fn.zlBoxReSize ( newSize.w, newSize.h );
		
		// kill spinner
		$( '#zeptolbox_spinner' ).removeClass( 'front' );
		
		// fade up
		setTimeout( function() {
			$( '#zeptolbox_box' ).addClass( 'front' );
		}, 300 );
		
		
	}
	
	// create and set up the pre/next buttons
	$.fn.zlBoxPrevNext = function ( ) {
		
		// create buttons if necessary
		if ( $( '#zeptolbox_next' ).length < 1 ) {
		
			// next button
			var infoNext = document.createElement( 'a' );
			infoNext.id = 'zeptolbox_next';
			infoNext.className = 'zeptolbox_button_off';
			$( '#zeptolbox_box' ).append( infoNext );
						
		}
		if ( $( '#zeptolbox_prev' ).length < 1 ) {
		
			// prev button
			var infoPrev = document.createElement( 'a' );
			infoPrev.id = 'zeptolbox_prev';
			infoPrev.className = 'zeptolbox_button_off';
			$( '#zeptolbox_box' ).append( infoPrev );
		}
	
		// if there is a next pop-up, set it up
		if ( zlBoxNextEl ) {
			$( '#zeptolbox_next' ).removeClass( 'zeptolbox_button_off' ).addClass( 'zeptolbox_button' );
			setTimeout( function() {
				// set-up click
				$( '#zeptolbox_next' ).unbind( 'click' ).bind(
					'click',
					function( event ) {
						$( zlBoxNextEl ).zlBoxOpen( event );
					}
				);
				// set up swipe
				$('#zeptolbox_box').swipeLeft(
					function(){
						$( zlBoxNextEl ).zlBoxOpen( );
					}
				);

			}, 200 );
		// if there isn't a next pop-up, set it up
		} else {
			$( '#zeptolbox_next' ).removeClass( 'zeptolbox_button' ).addClass( 'zeptolbox_button_off' );
			$( '#zeptolbox_next' ).unbind( 'click' );
		}
		// if there is a prev pop-up, set it up
		if ( zlBoxPrevEl ) {
			$( '#zeptolbox_prev' ).removeClass( 'zeptolbox_button_off' ).addClass( 'zeptolbox_button' );
			setTimeout( function() {
				// set-up click
				$( '#zeptolbox_prev' ).unbind( 'click' ).bind(
					'click',
					function( event ) {
						$( zlBoxPrevEl ).zlBoxOpen( event );
					}
				);
				// set up swipe
				$('#zeptolbox_box').swipeRight(
					function(){
						$( zlBoxPrevEl ).zlBoxOpen( );
					}
				);
			}, 200 );
		// if there isn't a next pop-up, set it up
		} else {
			$( '#zeptolbox_prev' ).removeClass( 'zeptolbox_button' ).addClass( 'zeptolbox_button_off' );
			$( '#zeptolbox_prev' ).unbind( 'click' );
		}
		
	}
	
	// create the basic lightbox
	$.fn.zlBoxCreateBox = function ( ) {
		
		// create the lightbox
		if ( $( '#zeptolbox_box' ).length < 1 ) {
		
			var boxOut = document.createElement( 'div' );
			boxOut.id = 'zeptolbox_box_container';
			$( 'body' ).append( boxOut );
			var box = document.createElement( 'div' );
			box.id = 'zeptolbox_box';
			$( '#zeptolbox_box_container' ).append( box );
			var boxInn = document.createElement( 'div' );
			boxInn.id = 'zeptolbox_box_inner';
			$( '#zeptolbox_box' ).append( boxInn );
			var boxClose = document.createElement( 'a' );
			boxClose.id = 'zeptolbox_close';
			boxClose.className = 'zeptolbox_button';
			$( '#zeptolbox_box' ).append( boxClose );
			
			// close button
			$( '#zeptolbox_close' ).bind(
				'click',
				function( event ) {
					$.fn.zlBoxClose( event );
				}
			);
			
		} else {
		
			// kill the previous image
			$( '#zeptolbox_box_inner' ).css( 'background-image', 'none' );
			if ( $( '#zeptolbox_box_inner iframe' ).length > 0 ) {
				$( '#zeptolbox_box_inner iframe' ).remove();
			}
		
		}
	}
	
	// create the basic lightbox
	$.fn.zlBoxCreateInfoBox = function ( ) {
		
		// create the lightbox info panel
		
		if ( $( '#zeptolbox_info_outer' ).length < 1 ) {
		
			// set-up receptacles for title/text
		
			var infoOut = document.createElement( 'div' );
			infoOut.id = 'zeptolbox_info_outer';
			$('#zeptolbox_box').append( infoOut );
			var infoInn= document.createElement( 'div' );
			infoInn.id = 'zeptolbox_info_inner';
			$( '#zeptolbox_info_outer' ).append( infoInn );
			var infoTitle = document.createElement( 'h3' );
			infoTitle.id = 'zeptolbox_info_title';
			$( '#zeptolbox_info_inner' ).append( infoTitle );
			var infoText = document.createElement( 'div' );
			infoText.id = 'zeptolbox_info_text';
			$( '#zeptolbox_info_inner' ).append( infoText );
			var infoClose = document.createElement( 'a' );
			infoClose.id = 'zeptolbox_info_close';
			infoClose.className = 'zeptolbox_button';
			$( '#zeptolbox_info_outer' ).append( infoClose );
			
			// close button
			$( '#zeptolbox_info_close' ).bind(
				'click',
				function( event ) {
					$.fn.zlBoxInfoToggle();
				}
			);
		
		}
	}
	
	$.fn.zlBoxCalcSize = function ( width, height ) {
	
		var output = {};
		var client = {};
		// size of screen
		client.w = document.documentElement.clientWidth;
		client.h = document.documentElement.clientHeight;
		// size of outer margin
		var margin1 = parseInt( $( '#zeptolbox_box_container' ).css( 'padding-top' ).replace( 'px', '' ).replace( 'em', '' ).replace( '%', '' ) );
		// size of inner margin
		var margin2 = parseInt( $( '#zeptolbox_box_inner' ).css( 'margin-top' ).replace( 'px', '' ).replace( 'em', '' ).replace( '%', '' ) );
		// size of adjusted space to use
		client.wa = client.w - ( margin1 * 2 ) - ( margin2 * 2 );
		client.ha = client.h - ( margin1 * 2 ) - ( margin2 * 2 );
		// if it's smaller than tha space allowed, set it as that size
		if ( width < client.wa && height < client.ha ) {
			
			output.w = width;
			output.h = height;
		
		// calc new size if the image is more landscape than the screen
		} else if ( width/height > client.wa/client.ha ) {
		
			output.w = client.wa;
			output.h = Math.round ( ( client.wa * height ) / width );
		
		// calc new size if the image is more portrait than the screen
		} else {
		
			output.h = client.ha;
			output.w = Math.round ( ( client.ha * width ) / height );

		}
		
		return output;
	
	}
	
	$.fn.zlBoxReSize = function ( width, height ) {
	
		// size of inner margin
		var margin = parseInt( $( '#zeptolbox_box_inner' ).css( 'margin-top' ).replace( 'px', '' ).replace( 'em', '' ).replace( '%', '' ) );
		$( '#zeptolbox_box' ).css( 'left', '-' + Math.round ( ( width/2 ) + margin ) + 'px' );
		$( '#zeptolbox_box' ).css( 'top', '-' + Math.round ( ( height/2 ) + margin ) + 'px' );
	
		$( '#zeptolbox_box_inner' ).css( 'width', width + 'px' );
		$( '#zeptolbox_box_inner' ).css( 'height', height + 'px' );
		
		// videos
		if ( $( '#zeptolbox_box_inner iframe' ).length > 0 ) {
			
			$( '#zeptolbox_box_inner iframe' ).css( 'width', width + 'px' );
			$( '#zeptolbox_box_inner iframe' ).css( 'height', height + 'px' );
			
		}
	
	}

	$.fn.zlBoxInfoToggle = function ( openClose ) {
		
		if ( !openClose ) {
			if ( $( '#zeptolbox_info_outer' ).hasClass( 'closed' ) ) {
				openClose = 'open';
			} else {
				openClose = 'close';
			}
		}
	
		if ( openClose == 'close' ) {
		
			$( '#zeptolbox_info_outer' ).addClass( 'closed' );
		
		} else {
		
			$( '#zeptolbox_info_outer' ).removeClass( 'closed' );
		
		}
	
	}

})(Zepto);



// RUN IT
$(document).ready(function() {

	$( '.child_detail_img' ).zlBoxInit();
	zlBoxReSizeTimer = false;
	
});

// ON RESIZE
$(window).resize(function() {

	if ( $('#zeptolbox_box' ).length > 0 ) {
		
		if ( zlBoxReSizeTimer ) {
			clearTimeout( zlBoxReSizeTimer );
		}
		zlBoxReSizeTimer = setTimeout( function() {
					
			// calcsize
			newSize = $.fn.zlBoxCalcSize ( objImage.width, objImage.height )
			
			// resize
			$.fn.zlBoxReSize ( newSize.w, newSize.h );
			
		}, 500 );
	}
	
	
});