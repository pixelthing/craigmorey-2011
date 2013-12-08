<div class="child_detail">
	<div class="child_detail_inner">
		<div class="date">
			<span class="date_m">Feb</span> <span class="date_y">2012</span>
			for myself
		</div> 
		<h3>Portfolio site</h3>
		
		<div id="child_detail_imgs">
			<div id="child_detail_imgs_inner">
				<a href="http://vimeo.com/37688240" class="child_detail_img"><img src="portfolio/a201202_cm/pic4s.jpg" alt="" title="Movie" rel="A quick shaky movie to show the site running on all sizes of screen" /></a>
				<a href="portfolio/a201202_cm/pic1.jpg" class="child_detail_img"><img src="portfolio/a201202_cm/pic1s.jpg" alt="" title="Homepage" rel="Another responsive site, where the format and font size change to match the screen available - a presentation thats made for whatever screen you have." /></a>
				<a href="portfolio/a201202_cm/pic3.jpg" class="child_detail_img"><img src="portfolio/a201202_cm/pic3s.jpg" alt="" title="Contact form" rel="And when you glick send, the letter is stamped and sent with a woosh. Just a bit of to add to a normally dull process." /></a>
				<a href="portfolio/a201202_cm/pic2.jpg" class="child_detail_img"><img src="portfolio/a201202_cm/pic2s.jpg" alt="" title="The portfolio" rel="It's not just about geeky features. The content is the heart of the site. If someone is interested in the work I'm doing, they need to know what my involvement was, and my thoughts on the project." /></a>
			</div>
		</div>
		
		<div class="child_detail_text">

<p>It was time to sort out a portfolio site that showed work, plus demonstrated creative and technical skills. And, in a geeky webdev style, here's the interesting bits:</p>

<ul>
<li>I obviously used webfonts fonts (museo slab 500 and Web corpulent 900 from typekit)</li>
<li>I used the zepto.js framework. Faster and so much lighter than jQuery, but with largely the same syntax, plus it targeted the same platforms I did - I'm afraid IE was left out, but this was a pretty targeted audience.</li>
<li>Javascript trickery and EMs dimensioning to scale and fit to any screen, plus media queries to alter the layout to fit the context of the screen shape and form factor. Run it as a full screen pres on your desktop, or read it on your smartphone. The whole thing, nothing missed out.</li>
<li>Keyboard controls built in. They give a slick feel if you're presenting in person, and it was just something I wanted to try.</li>
<li>Touch controls. I used the built in zepto swipe commands to give more natural controls on a touch device. I wanted to take it further and give pixel-for-pixel touch feedback like I've done before, but you've got to draw a line somewhere. Maybe later.</li>
<li>"Peeking" links. Hover over a link with a mouse and it gives you an idea of what it's going to do. We're getting so used to doing it with touch (eg, pull to refresh, sliding to reveal the the next page as you read the current one), that I thought I'd bring the idea back to the desktop.</li>
<li>Textures everywhere to give that attention to detail feel.</li>
<li>Apart from modernizr, zepto and key-commands, I wanted to roll my own scripts, including site resizing, responsive lightboxes, carousels, navigation, lazy loading of portfolio content, etc, etc.</li>
<li>Hardware accelerated 3D CSS transitions - just a sprinkle and just in webkit I'm afraid (I tried in FF, but it was just too slow at the moment - so that has CSS 2d transitions).</li>
<li>A tiny bit of SVG (the "back" button). It was the best way to have a widget that properly scaled! Appropriate technology used for the right purpose!
<li>Postmarkapp API to run the email form. Just something I wanted to learn. It's awesome. Plus there's a nice animation and a woosh sound on sending.</li>
<li>Selectively passworded and unindexable portfolio. That might sound stupid in a portfolio site. But you can easily or mistakenly portray yourself as the sole person responsible for many projects, and google will rank you alongside (or above) your employer. And even if I'm looking for another job, I don't want to disprespect my colleagues.</li>
<li>content. Crikey lets not forget that. Not just a few screenshots and urls, but short stories about every job I chose to add, with images and pictures to back them up. Lots of content that could start a conversation.</li>
</ul>

		</div>
	</div>
	<a href="javascript:portfolioUnLoadDetail()" class="button child_close"></a>
</div>