window.binpar_update_size = function () {
	if ($('.binpar-resizeable').length) {
		$(".binpar-resizeable").css({width: $(".binpar-resizeable").parent().width()});
		$(".binpar-resizeable").dataTable().fnAdjustColumnSizing();
	}
};
$(window).resize(function () {
	clearTimeout(window.binpar_refresh_size);
	window.binpar_refresh_size = setTimeout(function () {
		window.binpar_update_size();
	}, 250);
});