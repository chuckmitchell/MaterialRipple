/* jQuery MaterialRipple Plugin */
/* 2014 Dominik Biedebach */

$.fn.materialripple = function(options) {
	var defaults = {
		rippleClass: 'ripple-wrapper'
	}
	$.extend(defaults, options);

	// add Ripple-Wrapper to all Elements
	$(this).append('<span class="'+defaults.rippleClass+'"></span>');
	$(this).addClass('has-ripple');

	// Let it ripple on click
	$(this).bind('click', function(e){
		$(this).find('.'+defaults.rippleClass).removeClass('animated');
		// get Mouse Position
		var mouseX = e.pageX;
		var mouseY = e.pageY;

		// for each ripple element, set sizes
		elementWidth = $(this).outerWidth();
		elementHeight = $(this).outerHeight();
		d = Math.max(elementWidth, elementHeight);
		$(this).find('.'+defaults.rippleClass).css({'width': d, 'height': d});

		console.log(mouseX);
		console.log(mouseY);

		var rippleX = e.clientX - $(this).offset().left - d/2 + $(window).scrollLeft();
		var rippleY = e.clientY - $(this).offset().top - d/2 + $(window).scrollTop();

		// Position the Ripple Element
		$(this).find('.'+defaults.rippleClass).css('top', rippleY+'px').css('left', rippleX+'px').addClass('animated');


	});
}
