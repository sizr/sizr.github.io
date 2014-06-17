(function ($, window, document, undefined) {

  'use strict';

  $(function () {
    // FireShell

		function Midway(){
	        var $centerHorizontal = $('.midway-horizontal'),
	            $centerVertical = $('.midway-vertical');

	        $centerHorizontal.each(function(){
	            $(this).css('marginLeft', -$(this).outerWidth()/2);
	        });
	        $centerVertical.each(function(){
	            $(this).css('marginTop', -$(this).outerHeight()/2);
	        });
	        $centerHorizontal.css({
	            'display' : 'inline',
	            'position' : 'absolute',
	            'left' : '50%'
	        });
	        $centerVertical.css({
	            'display' : 'inline',
	            'position' : 'absolute',
	            'top' : '50%',
	        });
		}
		$(window).on('load', Midway);
		$(window).on('resize', Midway);
		$(window).on('load', Midway);

		$('a[href^="#"]').on('click',function (e) {
		    e.preventDefault();

		    var target = this.hash,
		    $target = $(target);

		    $('html, body').stop().animate({
		        'scrollTop': $target.offset().top
		    }, 900, 'easeInSine', function () {
		        window.location.hash = target;
		    });
		});

		function setDates() {
			var d = new Date(),
				m = d.getMonth(),
				y = d.getFullYear();

			$('span.month').text(m);
			$('span.year').text(y);
		};
		$(window).on('load', setDates);

  });

})(jQuery, window, document);
