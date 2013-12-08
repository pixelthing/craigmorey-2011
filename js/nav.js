// on domready
$(document).ready(function() {
			
	// home -> CV

	$('#home2cv').bind(
		'mouseover',
		function() {
			$('header').addClass('peek_cv');
		}
	);
	$('#home2cv').bind(
		'mouseout',
		function() {
			$('header').removeClass('peek_cv');
		}
	);
	$('#home2cv').bind(
		'click',
		function() {
			$('header').addClass('hide_cv').removeClass('peek_cv').removeClass('active');
			$('#cv').addClass('active');
			$('#links').removeClass('active');
		}
	);

	// home -> social

	$('#home2links').bind(
		'mouseover',
		function() {
			$('header').addClass('peek_li');
		}
	);
	$('#home2links').bind(
		'mouseout',
		function() {
			$('header').removeClass('peek_li');
		}
	);
	$('#home2links').bind(
		'click',
		function() {
			$('header').addClass('hide_li').removeClass('peek_li').removeClass('active');
			$('#cv').removeClass('active');
			$('#links').addClass('active');
		}
	);
			
	// home -> contact

	$('#home2contact').bind(
		'mouseover',
		function() {
			$('#contact').addClass('peek');
		}
	);
	$('#home2contact').bind(
		'mouseout',
		function() {
			$('#contact').removeClass('peek');
		}
	);
	$('#home2contact').bind(
		'click',
		function() {
			$('#contact').removeClass('peek').addClass('active');
		}
	);
	$('#contact_close').bind(
		'click',
		function() {
			$('#contact').removeClass('peek').removeClass('active');
		}
	);
	
	// back to home

	$('#cv .backtotop').bind(
		'mouseover',
		function() {
			$('header').addClass('peekback_cv');
		}
	);
	$('#cv .backtotop').bind(
		'mouseout',
		function() {
			$('header').removeClass('peekback_cv');
		}
	);
	$('#links .backtotop').bind(
		'mouseover',
		function() {
			$('header').addClass('peekback_li');
		}
	);
	$('#links .backtotop').bind(
		'mouseout',
		function() {
			$('header').removeClass('peekback_li');
		}
	);
	$('.backtotop').bind(
		'click',
		function() {
			$('header').removeClass('peek_cv').removeClass('peekback_cv').removeClass('hide_cv').removeClass('peek_li').removeClass('peekback_li').removeClass('hide_li').addClass('active');
			setTimeout( function() {
				$('#cv').removeClass('active').removeClass('peek');
				$('#links').removeClass('active').removeClass('peek');
			}, 600 );
		}
	);


//
// KEY PRESSES
// 

	
	// key press left
	key('left', function(){
		
		// if the lightbox is open
		if ( $( '#zeptolbox_box' ).length > 0 ) {
		
			// if there's a previous lightbox ready
			if ( zlBoxPrevEl ) {
							
				$( zlBoxPrevEl ).zlBoxOpen();
			
			} else {
			
				$.fn.zlBoxClose();
			
			}
	
		// homepage, first click left to Links
		} else if ( $('header').hasClass('active') && !$('header').hasClass('peek_li') && !$('header').hasClass('peek_cv') ) {
		
			$('header').addClass('peek_li');
			$('#home2links').addClass('active');
		
		// homepage, second click left to Links
		} else if ( $('header').hasClass('active') && $('header').hasClass('peek_li') ) {
		
			$('#home2links').removeClass('active');
			$('header').addClass('hide_li').removeClass('peek_li').removeClass('active');
			$('#cv').removeClass('active');
			$('#links').addClass('active');
		
		// homepage, return from first click right
		} else if ( $('header').hasClass('active') && $('header').hasClass('peek_cv') ) {
		
			$('header').removeClass('peek_cv');
			$('#home2cv').removeClass('active');
		
		// social links, left back to home
		} else if ( $('#links').hasClass('active') ) {
		
			$('header').removeClass('peek_cv').removeClass('peekback_cv').removeClass('hide_cv').removeClass('peek_li').removeClass('peekback_li').removeClass('hide_li').addClass('active');
			setTimeout( function() {
				$('#cv').removeClass('active').removeClass('peek');
				$('#links').removeClass('active').removeClass('peek');
			}, 600 );
			
		// cv, go through portfolio
		} else if ( $('#cv').hasClass('active') ) {
		
			portfolioPrevNext( 'next' );
		
		}
	
	})
	
	
	// key press right
	key('right', function(){
		
		// if the lightbox is open
		if ( $( '#zeptolbox_box' ).length > 0 ) {
		
			// if there's a previous lightbox ready
			if ( zlBoxNextEl ) {
							
				$( zlBoxNextEl ).zlBoxOpen();
			
			} else {
			
				$.fn.zlBoxClose();
			
			}
	
		// homepage, first click right to CV
		} else if ( $('header').hasClass('active') && !$('header').hasClass('peek_cv') && !$('header').hasClass('peek_li') ) {
		
			$('header').addClass('peek_cv');
			$('#home2cv').addClass('active');
		
		// homepage, second click right to CV
		} else if ( $('header').hasClass('active') && $('header').hasClass('peek_cv') ) {
		
			$('#home2cv').removeClass('active');
			$('header').addClass('hide_cv').removeClass('peek_cv').removeClass('active');
			$('#cv').addClass('active');
			$('#links').removeClass('active');
		
		// homepage, return from first click left
		} else if ( $('header').hasClass('active') && $('header').hasClass('peek_li') ) {
		
			$('header').removeClass('peek_li');
			$('#home2links').removeClass('active');
		
		// social links, right back to home
		} else if ( $('#links').hasClass('active') ) {
		
			$('header').removeClass('peek_cv').removeClass('peekback_cv').removeClass('hide_cv').removeClass('peek_li').removeClass('peekback_li').removeClass('hide_li').addClass('active');
			setTimeout( function() {
				$('#cv').removeClass('active').removeClass('peek');
				$('#links').removeClass('active').removeClass('peek');
			}, 600 );
			
		// cv, go through portfolio
		} else if ( $('#cv').hasClass('active') ) {
		
			portfolioPrevNext( 'prev' );
		
		}
	
	})
		
		
	// key press return
	key('return', function(){
		
		// if the lightbox is open
		if ( $( '#zeptolbox_box' ).length > 0 ) {
		
			$.fn.zlBoxClose();
	
		// homepage, already peeking cv, return opens page
		} else if ( $('header').hasClass('active') && $('header').hasClass('peek_li') ) {
		
			$('#home2links').removeClass('active');
			$('header').addClass('hide_li').removeClass('peek_li').removeClass('active');
			$('#cv').removeClass('active');
			$('#links').addClass('active');
		
		// homepage, already peeking links, return opens page
		} else if ( $('header').hasClass('active') && $('header').hasClass('peek_cv') ) {
		
			$('#home2cv').removeClass('active');
			$('header').addClass('hide_cv').removeClass('peek_cv').removeClass('active');
			$('#cv').addClass('active');
			$('#links').removeClass('active');
			
		// cv, open the current portfolio item
		} else if ( $('#cv').hasClass('active') ) {
		
			// if the project pop up is open, try to pop up the first image
			if ( $( '#portfolio_pop_up' ).length > 0 && $( '.child_detail_img' ).length > 0 ) {
			
				var firstPop = $( '.child_detail_img' )[0];
				$( firstPop ).zlBoxOpen();
			
			// if the prorject isn't open, pop it up
			} else if ( $( '#portfolio_pop_up' ).length < 1 ) {
		
				portfolioLoadDetail ( )
			
			}
		
		}
		
	})
		
	
	// dontGo is used to give a pause between the two states where esacpe can be used in the CV
	dontGo = false;
	
	// key press escape
	key('escape', function(){
		
		// if the lightbox is open
		if ( $( '#zeptolbox_box' ).length > 0 ) {
		
			$.fn.zlBoxClose();
	
		// cv, go through portfolio, and we're looking at an expanded portfolio item
		} else if ( $('#cv').hasClass('active') && $( '#portfolio_pop_up' ).length > 0 ) {
			
			dontGo = true;
			portfolioUnLoadDetail ( )
			setTimeout( function() {
				dontGo = false;
			}, 200 )
		
		// social links or cv, escape back to home
		} else if ( $('#links').hasClass('active') || ( $('#cv').hasClass('active') && dontGo == false ) ) {
		
			$('header').removeClass('peek_cv').removeClass('peekback_cv').removeClass('hide_cv').removeClass('peek_li').removeClass('peekback_li').removeClass('hide_li').addClass('active');
			setTimeout( function() {
				$('#cv').removeClass('active').removeClass('peek');
				$('#links').removeClass('active').removeClass('peek');
			}, 600 );
			
		} 
		
	})
	
})