<?php

	session_start();
	if ( !$_SESSION['thelot'] ) {
	
		include ( '../../hidden.php' );
		exit;
	
	}

?>
<div class="child_thumb_inner" style="background-image:url(portfolio/m201201_hsc/thumb.jpg)">
	<span class="date"><span class="date_m">Jan</span> <span class="date_y">2012</span></span> 
	<h3>Havant Sixth Form College <span>For MindWorks Marketing</span></h3>	
</div>