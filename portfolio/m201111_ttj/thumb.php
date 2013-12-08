<?php

	session_start();
	if ( !$_SESSION['thelot'] ) {
	
		include ( '../../hidden.php' );
		exit;
	
	}

?>
<div class="child_thumb_inner" style="background-image:url(portfolio/m201111_ttj/thumb.jpg)">
	<span class="date"><span class="date_m">Nov</span> <span class="date_y">2011</span></span> 
	<h3>Trevor Towner <span>For MindWorks Marketing</span></h3>	
</div>