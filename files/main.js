/* JS Document - Developed by Fabio Rocha (http://fabiorochafg.github.io | fabiorochafg@gmail.com) */

new WOW().init();

$(document).ready(function() {

	$("#go-to-top").click(function(){
		$('html, body').animate({scrollTop:0}, 'slow');
		return false;
	});

	if (window.innerWidth <= 800 && window.innerHeight <= 600) {
		$('p.date').removeClass("wow");
	}

});

/* Google Analyctis: SolutiBrasil */
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-41737928-11', 'auto');
ga('send', 'pageview');