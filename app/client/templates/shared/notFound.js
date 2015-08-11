Template.notFound.rendered = function() {
	$.fn.animateRotate = function(start,end, duration, easing, complete) {
		return this.each(function() {
			var $elem = $(this);

			$({deg: start}).animate({deg: end}, {
				duration: duration,
				easing: easing,
				step: function(now) {
					$elem.css({
						transform: 'rotate(' + now + 'deg)'
					});
				},
				complete: complete || $.noop
			});
		});
	};

	function rotateUp() {
		$("#avion").animateRotate(60,0, 500, 'swing', rotateDown);
	}

	function rotateDown() {
		$("#avion").animateRotate(0,60, 500, 'swing', rotateUp);
	}

	rotateDown();
}