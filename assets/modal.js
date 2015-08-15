//<![CDATA[
$(function(){
	var selectOpen = false;
	$(document).on('click', function(event) {

		if (!$(event.target).closest('.colorSelect').length && selectOpen) {
			$('.colorSelect').removeClass("open");
			$('.selectOverlay').removeClass("enabled");
		}
		if ($(event.target).closest('#open-color-selector').length) {
			$('.colorSelect').addClass("open");
			$('.selectOverlay').addClass("enabled");
			selectOpen = true;
		}

	});
});//]]> 

