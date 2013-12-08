<?php

	session_start();
	if ( !$_SESSION['thelot'] ) {
	
		include ( '../../hidden.php' );
		exit;
	
	}

?>
<div class="child_thumb_inner" style="background-image:url(portfolio/m200803_bc/thumb.jpg)">
	<span class="date"><span class="date_m">Mar</span> <span class="date_y">2008</span></span> 
	<h3>Brockenhurst College <span>For MindWorks Marketing</span></h3>	
</div>