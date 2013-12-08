<?php

	session_start();
	if ( !$_SESSION['thelot'] ) {
	
		include ( '../../hidden.php' );
		exit;
	
	}

?>
<div class="child_thumb_inner" style="background-image:url(portfolio/m200806_ptl/thumb.jpg)">
	<span class="date"><span class="date_m">June</span> <span class="date_y">2008</span></span> 
	<h3>Powertraveller <span>For MindWorks Marketing</span></h3>	
</div>