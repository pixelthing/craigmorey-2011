// start up the portfolio list
function portfolioInit () {

	// amount of children already showing
	var children = $('#portfolio_list').children( '.child' );
	var modDate = $('#portfolio_list').attr( 'rel' );

	// get the starting json data
	
	$.ajax({
		type: 'POST', // defaults to 'GET'
		url: 'portfolio.php?length=' + children.length + '&mod_date=' + escape( modDate ),
		data: {name: 'Zepto'}, // can be a string or object (objects are automatically serialized to JSON)
		dataType: 'json',
		success: function( data ) {
	
			//console.log( data );
			
			// if the JSON shows no change, exit
			if ( data.status == 'nochange' ) {
				return;
			}
			
			// set up three columns
			
			var frag = document.createElement('div');
			frag.id = 'port_col1';
			frag.className = 'col';
			$("#portfolio_list").append(frag);
			var frag = document.createElement('div');
			frag.id = 'port_col2';
			frag.className = 'col';
			$("#portfolio_list").append(frag);
			var frag = document.createElement('div');
			frag.id = 'port_col3';
			frag.className = 'col';
			$("#portfolio_list").append(frag);
			
			// give the columns time to complete, before we start adding items from the portfolio into them
			setTimeout( function () {
			
				// loop
				$.each( data.items, function( key, item ){
				
					portfolioChildCheck( key , item );
				
				})
				
			} ,500 )
			
			// change the "rel" attr of the list to the new modDate, for later comparisons
			$('#portfolio_list').attr( 'rel' , data.modDate );
		
		},
		error: function( xhr, type ) {
		
			if ( type == 'error' ) {
				alert( 'HTTP error (website can\'t be reached?)' )
			} else if ( type == 'parsererror' ) {
				alert( 'JSON parsing error' );
			}
		
		}
	})
	
}

function portfolioChildCheck ( key , data ) {

	var childId = "#port_" + domEscape( data.key );
	if ( $( childId ).length < 1 ) {
		console.log( 'portfolio item NOT FOUND, building' );
		portfolioChildBuild ( key , data )
	} else {
		console.log( 'portfolio item FOUND, rechecking' );
	}

}

function portfolioChildBuild ( key , data ) {

	// date of the item
	var d = new Date( 
		data.date.substr( 0, 4 ), 
		data.date.substr( 5, 2 ), 
		data.date.substr( 8, 2 ), 
		data.date.substr( 11, 2 ), 
		data.date.substr( 14, 2 ), 
		data.date.substr( 17, 2 )
	);

	// id of the child
	var childId = '#port_' + domEscape( data.key );
	
	// url to thumb
	var thumb = data.pics[0].url_thumb;
	if ( thumb.indexOf( 'http' ) < 0 ) {
		thumb = escape( 'portfolio/' + data.key + '/' + thumb );
	}

	// build the dom element and append it
	var frag = document.createElement('a');
	frag.id = childId;
	frag.className = 'child';
	frag.innerHTML = '<figure><img src="' + thumb + '" alt="' + data.title + '" ><figcaption><h3>' + data.title + '</h3><div>' + d.getFullYear() + '/' + d.getMonth() + '</div></figcaption></figure>';
	
	portfolioChildPlace( frag );

}

function portfolioChildPlace ( frag ) {

	var portCol1Height = document.getElementById('port_col1').offsetHeight;
	var portColMin = 1;
	var portCol2Height = document.getElementById('port_col2').offsetHeight;
	if ( portCol2Height < portCol1Height ) { portColMin = 2; }
	var portCol3Height = document.getElementById('port_col3').offsetHeight;
	//console.log( portCol1Height + ':' + portCol2Height + ":" + portCol3Height );
	if ( portCol3Height < portCol1Height && portCol3Height < portCol2Height ) { portColMin = 3; }
	
	$("#port_col" + portColMin ).append(frag);
	
	

}


// on domready
$(document).ready(function() {

	// ready the portfolio;
	portfolioInit();
	
});