<?php
	
	session_start();
	
	// if we're asked to destroy the cookie
	if( $_GET['clear'] ) {
	
		session_destroy();
		setcookie( 'letmein', false , time()-3600, '/', 'craigmorey.co.uk' );
		header( 'Location:/' );
	
	}
	// if a cookie is stored
	if ( $_COOKIE['letmein'] ) {
		
		$_SESSION['thelot'] = true;
	
	}

?><!doctype html>
<html>
	<head>
		<meta charset="utf-8" />
		<title>Craig Morey :: Hello( you )</title>
		<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />

		
		<link rel="stylesheet" href="css/style.css" media="screen" />
		<link rel="stylesheet" href="css/zeptolbox.css" media="screen" />
		<link rel="stylesheet" href="css/style_big.css" media="screen AND (min-width: 1401px)" />
		<link rel="stylesheet" href="css/style_tall.css" media="screen AND (max-aspect-ratio:6/5)" />
		<link rel="stylesheet" href="css/style_small.css" media="screen AND (max-width: 640px)" />
		<link rel="stylesheet" href="css/style_small_tall.css" media="screen AND (max-width: 640px) AND (max-aspect-ratio:6/5)" />
		
		
		<script src="js/modernizr.js"></script>
		<script src="js/zepto.js"></script>
		<script src="js/scripts.js"></script>
		<script src="js/size.js"></script>

		<script type="text/javascript" src="http://use.typekit.com/nby3kvf.js"></script>
		<script type="text/javascript">try{Typekit.load();}catch(e){}</script>

		<script type="text/javascript">

		  var _gaq = _gaq || [];
		  _gaq.push(['_setAccount', 'UA-28959393-1']);
		  _gaq.push(['_setDomainName', 'craigmorey.co.uk']);
		  _gaq.push(['_trackPageview']);
		
		  (function() {
		    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
		    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
		    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
		  })();
		
		</script>
		
	</head>
	<body>
		
		<div id="container1">
			
			<header class="active">
				<a name="top" class="onlyprint"></a>
				<div class="column">
					<div class="column_inner">
						<h1>
							Craig<span class="onlyprint"> </span><em>Morey</em>
						</h1>
						<p>
							Hi, I'm Craig, nice to meet you.
						</p>
						<p>
							I build websites for a living, and you can <a href="#cv" id="home2cv">see my work here</a>
							or you could say hi to me on bucket-loads of <a href="#links" id="home2links">social sites</a>.
							Alternatively, visit my <a href="/blog" id="home2blog">blog</a>
							or <a href="#contact" id="home2contact">contact me</a> by email-form.
						</p>
						<p>
							Thanks for dropping by.
						</p>
					</div>
				</div>
			</header>
		
			<article id="cv">
				<a name="cv" href="#top" class="backtotop">back</a>
				<div class="column">
					<h1>
						my<span class="onlyprint"> </span><em>work</em>
					</h1>
					<div class="rotator" id="rotator_cv">
						<p>
							I've been in the web biz since the beginning, <span class="break1">and still giddy like a schoolboy about it.</span>
						</p>
						<p>
							I love bringing content, design & technology together <span class="break1">to fix the web - one site at a time.</span>
						</p>
						<p>
							Buzzword literate skills:<br>
							<em>HTML5 CSS3 JS PHP MySQL JQuery MooTools CMS Adobe Responsive Mobile Touch</em>
						</p>
					</div>
					
				</div>
					
				<section id="portfolio">
					<h2>Portfolio</h2>
					
					<div id="portfolio_list" class="port_container">
				
						<div class="child" id="b199806_adobe"><div class="child_thumb"></div></div>
						<div class="child" id="b199903_novell"><div class="child_thumb"></div></div>
						<div class="child" id="b200001_xnet"><div class="child_thumb"></div></div>
						<div class="child" id="c200103_eng"><div class="child_thumb"></div></div>
						<div class="child" id="c200201_uscar"><div class="child_thumb"></div></div>
						<div class="child" id="c200303_lordof"><div class="child_thumb"></div></div>
						<div class="child" id="l200406_ta"><div class="child_thumb"></div></div>
						<div class="child" id="g200504_tcp"><div class="child_thumb"></div></div>
						<div class="child" id="m200709_sgb2"><div class="child_thumb"></div></div>
						<div class="child" id="m200802_sgb2bking"><div class="child_thumb"></div></div>
						<div class="child" id="m200803_bc"><div class="child_thumb"></div></div>
						<div class="child" id="m200806_ptl"><div class="child_thumb"></div></div>
						<div class="child" id="l200908_h2o"><div class="child_thumb"></div></div>
						<div class="child" id="m200909_smc"><div class="child_thumb"></div></div>
						<div class="child" id="m200911_fab"><div class="child_thumb"></div></div>
						<div class="child" id="l201005_wn"><div class="child_thumb"></div></div>
						<div class="child" id="m201005_sgb250yrs"><div class="child_thumb"></div></div>
						<div class="child" id="m201101_sgb2"><div class="child_thumb"></div></div>
						<div class="child" id="a201102_bardot"><div class="child_thumb"></div></div>
						<div class="child" id="m201103_sd"><div class="child_thumb"></div></div>
						<div class="child" id="m201106_sgbmben"><div class="child_thumb"></div></div>
						<div class="child" id="a201108_histp"><div class="child_thumb"></div></div>
						<div class="child" id="m201111_ttj"><div class="child_thumb"></div></div>
						<div class="child" id="m201201_hsc"><div class="child_thumb"></div></div>
						<div class="child" id="a201202_cm"><div class="child_thumb"></div></div>
						<div class="child" id="a201202_nkcbt"><div class="child_thumb"></div></div>
						
					</div>
						
					<a id="portfolio_prev" class="button button_prev"></a>
					<a id="portfolio_next" class="button button_next"></a>
					
				</section>
			</article>
		
			<article id="links">
				<a name="links" href="#top" class="backtotop">back</a>
				<div class="column">
					<h1>
						Social<span class="onlyprint"> </span><em>Links</em>
					</h1>
					<p>
						Call me an early adopter, call me a compulsive signer-upper, but I'm spread thinly all over the web.
						<br><em>Join me.</em>
					</p>
				</div>
				
				<section id="social_links">
				
					<ul>
						<li>
							<a href="http://www.flickr.com/photos/pixelthing/" target="_blank" class="social_thumb" style="height:35px;background-position:0 -172px;"></a>
							<div>
								<h2><a href="http://www.flickr.com/photos/pixelthing/" target="_blank">Flickr</a></h2>
								<p>
									Any photo-taking geek is on flickr. On my site there's 2000 photos going back to 2004.
									<a href="http://www.flickr.com/photos/pixelthing/" target="_blank">go</a>
								</p>
							</div>
						</li>
					
						<li>
							<a href="https://twitter.com/pixelthing" target="_blank" class="social_thumb" style="height:31px;background-position:0 -489px;"></a>
							<div>
								<h2><a href="https://twitter.com/pixelthing" target="_blank">Twitter</a></h2>
								<p>
									Twitter - the ultimate time waster and opinion maker.<br>
									<a href="https://twitter.com/pixelthing" target="_blank">go to my @pixelthing stream</a>
								</p>
							</div>
						</li>
					
						<li>
							<a href="http://codepen.io/pixelthing" target="_blank" class="social_thumb" style="height:62px;background-position:0 -745px;"></a>
							<div>
								<h2><a href="http://codepen.io/pixelthing" target="_blank">Codepen</a></h2>
								<p>
									A public way of testing and sharing CSS/JS experiments
									<a href="http://codepen.io/pixelthing" target="_blank">go</a>
								</p>
							</div>
						</li>
					
						<li>
							<a href="https://github.com/pixelthing" target="_blank" class="social_thumb" style="height:59px;background-position:0 -686px;"></a>
							<div>
								<h2><a href="https://github.com/pixelthing" target="_blank">GitHub</a></h2>
								<p>
									Developers without github accounts are only halfway there. Most work I do is on private repositories, but there are a few public projects here.
									<a href="https://github.com/pixelthing" target="_blank">go</a>
								</p>
							</div>
						</li>
					
						<li>
							<a href="http://www.facebook.com/craig.morey" target="_blank" class="social_thumb" style="height:25px;background-position:0 -73px;"></a>
							<div>
								<h2><a href="http://www.facebook.com/craig.morey" target="_blank">Facebook</a></h2>
								<p>
									No surprise at all that I'm on Facebook.
									<a href="http://www.facebook.com/craig.morey" target="_blank">go</a>
								</p>
							</div>
						</li>
					
						<li>
							<a href="http://instagram.com/pixelthing" target="_blank" class="social_thumb" style="height:37px;background-position:0 -241px;"></a>
							<div>
								<h2><a href="http://web.stagram.com/n/pixelthing/" target="_blank">Instagram</a></h2>
								<p>
									I'm addicted to Instagram, the social photo app on the iPhone.
									<a href="http://web.stagram.com/n/pixelthing/" target="_blank">go</a>
								</p>
							</div>
						</li>
					
						<li>
							<a href="http://www.last.fm/user/craigm2" target="_blank" class="social_thumb" style="height:31px;background-position:0 -278px;"></a>
							<div>
								<h2><a href="http://www.last.fm/user/craigm2" target="_blank">Last.FM</a></h2>
								<p>
									Nearly 24,000 music scrobbles since 2006 - a history of listening to questionable music.
									<a href="http://www.last.fm/user/craigm2" target="_blank">go</a>
								</p>
							</div>
						</li>
					
						<li>
							<a href="http://8tracks.com/craigm" target="_blank" class="social_thumb" style="height:33px;background-position:0 0;"></a>
							<div>
								<h2><a href="http://8tracks.com/craigm" target="_blank">8tracks</a></h2>
								<p>
									A brilliant music discovery method - extremely random mixtapes made by people who actually care about music.
									<a href="http://8tracks.com/craigm" target="_blank">go</a>
								</p>
							</div>
						</li>
					
						<li>
							<a href="http://thisismyjam.com/pixelthing" target="_blank" class="social_thumb" style="height:60px;background-position:0 -627px;"></a>
							<div>
								<h2><a href="http://thisismyjam.com/pixelthing" target="_blank">This Is My Jam</a></h2>
								<p>
									What's on constant repeat in my earphones this week.
									<a href="http://thisismyjam.com/pixelthing" target="_blank">go</a>
								</p>
							</div>
						</li>
					
						<li>
							<a href="http://www.youtube.com/user/craigm2" target="_blank" class="social_thumb" style="height:47px;background-position:0 -553px;"></a>
							<div>
								<h2><a href="http://www.youtube.com/user/craigm2" target="_blank">YouTube</a></h2>
								<p>
									Who doesn't sign in and upload the occasional video to YouTube?
									<a href="http://www.youtube.com/user/craigm2" target="_blank">go</a>
								</p>
							</div>
						</li>
					
						<li>
							<a href="http://vimeo.com/user845067" target="_blank" class="social_thumb" style="height:33px;background-position:0 -520px;"></a>
							<div>
								<h2><a href="http://vimeo.com/user845067" target="_blank">Vimeo</a></h2>
								<p>
									More videos.
									<a href="http://vimeo.com/user845067" target="_blank">go</a>
									Or you could see videos associated with my Atomoco side project: 
									<a href="http://vimeo.com/atomoco" target="_blank">go</a>
								</p>
							</div>
						</li>
					
						<li>
							<a href="http://pinterest.com/pixelthing/" target="_blank" class="social_thumb" style="height:60px;background-position:0 -806px;"></a>
							<div>
								<h2><a href="http://pinterest.com/pixelthing/" target="_blank">Pinterest</a></h2>
								<p>
									Magpie-like coveting of interesting, useful and pretty things around the web. 
									<a href="http://pinterest.com/pixelthing/" target="_blank">go</a>
								</p>
							</div>
						</li>
					
						<li>
							<a href="http://www.spotify.com" target="_blank" class="social_thumb" style="height:43px;background-position:0 -407px;"></a>
							<div>
								<h2><a href="http://www.spotify.com" target="_blank">Spotify</a></h2>
								<p>
									Not content with sharing what Im listening to on Last.FM, Facebook friends can also see what I'm listening to on Spotify.
									<a href="http://www.spotify.com" target="_blank">go</a>
								</p>
							</div>
						</li>
					
						<li>
							<a href="http://dribbble.com/pixelthing" target="_blank" class="social_thumb" style="height:44px;background-position:0 -98px;"></a>
							<div>
								<h2><a href="http://dribbble.com/pixelthing" target="_blank">Dribbble</a></h2>
								<p>
									Tiny squares of work-in-progress - exposed to the critical world.
									<a href="http://dribbble.com/pixelthing" target="_blank">go</a>
								</p>
							</div>
						</li>
					
						<li>
							<a href="http://soundcloud.com/pixelthing" target="_blank" class="social_thumb" style="height:62px;background-position:0 -345px;"></a>
							<div>
								<h2><a href="http://soundcloud.com/pixelthing" target="_blank">SoundCloud</a></h2>
								<p>
									Yet more music - but stuff you won't find - well, anywhere else.
									<a href="http://soundcloud.com/pixelthing" target="_blank">go</a>
								</p>
							</div>
						</li>
					
						<li>
							<a href="http://www.linkedin.com/profile/view?id=101654680" target="_blank" class="social_thumb" style="height:36px;background-position:0 -309px;"></a>
							<div>
								<h2><a href="http://www.linkedin.com/profile/view?id=101654680" target="_blank">Linked In</a></h2>
								<p>
									Professional networking schmooze.
									<a href="http://www.linkedin.com/profile/view?id=101654680" target="_blank">go</a>
								</p>
							</div>
						</li>
					
						<li>
							<a href="http://forrst.com/people/pixelthing" target="_blank" class="social_thumb" style="height:34px;background-position:0 -207px;"></a>
							<div>
								<h2><a href="http://forrst.com/people/pixelthing" target="_blank">Forrst</a></h2>
								<p>
									Web design and developer community.
									<a href="http://forrst.com/people/pixelthing" target="_blank">go</a>
								</p>
							</div>
						</li>
					
						<li>
							<a href="https://gimmebar.com/loves/atomoco/collection/firehose" target="_blank" class="social_thumb" style="height:28px;background-position:0 -600px;"></a>
							<div>
								<h2><a href="https://gimmebar.com/loves/atomoco/collection/firehose" target="_blank">Gimme Bar</a></h2>
								<p>
									Random stuff on the web that I've found - and stuck in a scrapbook.
									<a href="https://gimmebar.com/loves/atomoco/collection/firehose" target="_blank">go</a>
								</p>
							</div>
						</li>
					</ul>
				
				</section>
			</article>
			
			<div id="contact">
				<h1>mail<em>me</em></h1>
				<form name="emailform" id="email_form" action="email.php">
					<div id="contact_label">
						<input type="text" name="name" placeholder="Your name" />
						<input type="email" name="email" placeholder="Your email" />
						<textarea name="message" placeholder="Your message"></textarea>
						<input type="image" id="contact_button" src="img/button.png" />
					</div>
				</form>
				<div id="contact_stamp"></div>
				<div id="contact_stamp2"></div>
				<div id="contact_close" title="click to cancel"></div>
			</div>
			
		</div>
			
		<div id="atomoco"></div>
		
		<div id="spinner"><div></div><span>loading</span></div>
		
		<script src="js/keymaster.min.js"></script>
		<script src="js/nav.js"></script>
		<script src="js/rotator.js"></script>
		<script src="js/portfolio.js"></script>
		<script src="js/zeptolbox.js"></script>
		
		<audio id="woosh" src="img/woosh.mp3" preload="auto" autobuffer="autobuffer"></audio>
						
		
	</body>
</html>