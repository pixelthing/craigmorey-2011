<?php

	session_start();
	if ( !$_SESSION['thelot'] ) {
	
		include ( '../../hidden.php' );
		exit;
	
	}

?>
<div class="child_thumb_inner" style="background-image:url(portfolio/m200911_fab/thumb.jpg)">
	<span class="date"><span class="date_m">Nov</span> <span class="date_y">2009</span></span> 
	<h3>Fabulous &amp; Poor <span>For MindWorks Marketing</span></h3>	
</div>