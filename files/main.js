/* JS Document - Developed by Fabio Rocha (http://fabiorochafg.github.io | fabiorochafg@gmail.com) */

new WOW().init();

$(document).ready(function() {

	$("section.equal-height, section.equal-height > div").css("height", $(window).height());
	$("section[data-order='1'], section[data-order='1'] > div").css("height", $(window).height());

});