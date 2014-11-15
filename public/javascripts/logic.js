$(document).ready(function() {
	placeFooter();
});

$(window).resize(function() {
	placeFooter();
})

function placeFooter() {
	var documentHeight = $(document).height();
	var windowHeight = $(window).height();
	
	if (documentHeight <= windowHeight) {
		$("body").css("overflow", "hidden");
		$(".footer").css({
			"position": "fixed",
			"bottom": 0,
			"left": 0,
			"width": "100%"
		});
	}
}