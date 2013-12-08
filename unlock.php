<?php

	session_start();
	if ( strtolower( $_POST['password'] ) == 'london' ) {

		$expire = time()+60*60*24*30;
		setcookie( 'letmein', 1 , $expire, '/', 'craigmorey.co.uk' );
		
		$_SESSION['thelot'] = true;
		
		$response = array( 'success' => true );
		echo json_encode( $response );
	
	} else {
	
		$response = array( 'fail' => true );
		echo json_encode( $response );
	
	}
	exit;

?>