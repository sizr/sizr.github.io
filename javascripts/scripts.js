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

		var month = [];

		month[0] = "January";
		month[1] = "February";
		month[2] = "March";
		month[3] = "April";
		month[4] = "May";
		month[5] = "June";
		month[6] = "July";
		month[7] = "August";
		month[8] = "September";
		month[9] = "October";
		month[10] = "November";
		month[11] = "December";

		function setDates() {
			var d = new Date(),
				m = d.getMonth(),
				y = d.getFullYear();

			$('span.month').text(month[m]);
			$('span.year').text(y);
		};
		$(window).on('load', setDates);

  });

})(jQuery, window, document);
