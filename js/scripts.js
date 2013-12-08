function domEscape ( str ) {

	str = str.replace( / /g , '' );
	str = str.replace( /\./g , '_' );
	return str.toLowerCase();

}

// make it safe to use console.log always
(function(b){function c(){}for(var d="assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,timeStamp,profile,profileEnd,time,timeEnd,trace,warn".split(","),a;a=d.pop();){b[a]=b[a]||c}})((function(){try
{console.log();return window.console;}catch(err){return window.console={};}})());

// placeholder polyfill (tweaked from jQuery to Zepto)
/*
Modernizr.load({
    test: Modernizr.input.placeholder,
    nope: [
            'placeholder_polyfill.jquery.js'
          ]
});
*/


// email
function sendEmail ( ) {

	event.preventDefault();

	var formName = document.forms['emailform'].elements['name'].value;
	var email = document.forms['emailform'].elements['email'].value;
	var message = document.forms['emailform'].elements['message'].value;
	
	// checks
	
	// send to processer
	$.ajax({
		type: 'POST',
		url: 'email.php',
		data: { 
			'name' : formName,
			'email' : email,
			'message' : message
		},
		dataType: 'json',
		success: function( data ) {
	
			// if the sending is a success
			if ( data.response == 'ok' ) {
			
				// stamp the letter
				$( '#contact_stamp2' ).addClass( 'active' );
				
				setTimeout( function () {
				
					// send the letter offscreen
					$( '#contact' ).removeClass( 'active' ).addClass( 'sent' );
					
					setTimeout( function () {
					
						// hide the letter
						$( '#contact' ).css( 'display', 'none' );
						//reset the letter
						$( '#contact' ).attr( 'class', '' );
						$( '#contact_stamp2' ).removeClass( 'active', '' );
						// un-hide the letter
						setTimeout( function () {
							$( '#contact' ).css( 'display', 'block' );
						}, 500 )
						
					}, 300 );
				
				}, 1000 )
				
				// play the woosh - tru to time it earlier than the move, as it has some latency
				setTimeout( function () {
				
					if ( Modernizr.audio.mp3 ) {
						var audio = new Audio();
						audio.src = 'img/woosh.mp3';
						audio.play();
					}
				
				}, 700 );

			} else if ( data.response == 'noname' ) {
			
				alert( 'oops - could you try again, entering your name this time?' );
			
			} else if ( data.response == 'noemail' ) {
			
				alert( 'oops - could you try again, entering your email this time?' );
			
			} else if ( data.response == 'bademail' ) {
			
				alert( 'oops - could you try again, entering a real email this time?' );
			
			}
			
		},
		error: function( xhr, type ) {
		
			if ( type == 'error' ) {
				console.error( 'can\'t be found' );
			}
		
		}
	})

}
$( document ).ready(function() {
			
	// home -> CV

	$('#email_form').bind(
		'submit',
		function( event ) {
			return sendEmail( );
		}
	);
	
	// get contact ready
	setTimeout( function() {
		$( '#contact' ).addClass( 'ready' );
	}, 500 )
	
})