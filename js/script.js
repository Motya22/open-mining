$(document).ready(function() {
	$('.mainscreen__burger').click(function(event) {
		$('.mainscreen__burger, .mainscreen__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
});