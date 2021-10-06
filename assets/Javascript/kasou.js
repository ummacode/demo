// (function($) { "use strict";

//     //Switch dark/light

//     $(document).ready(function(){"use strict";

//         //Scroll back to top

//         var progressPath = document.querySelector('.progress-wrap path');
//         var pathLength = progressPath.getTotalLength();
//         progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
//         progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
//         progressPath.style.strokeDashoffset = pathLength;
//         progressPath.getBoundingClientRect();
//         progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';
//         var updateProgress = function () {
//             var scroll = $(window).scrollTop();
//             var height = $(document).height() - $(window).height();
//             var progress = pathLength - (scroll * pathLength / height);
//             progressPath.style.strokeDashoffset = progress;
//         }
//         updateProgress();
//         $(window).scroll(updateProgress);
//         var offset = 50;
//         var duration = 550;
//         jQuery(window).on('scroll', function() {
//             if (jQuery(this).scrollTop() > offset) {
//                 jQuery('.progress-wrap').addClass('active-progress');
//             } else {
//                 jQuery('.progress-wrap').removeClass('active-progress');
//             }
//         });
//         jQuery('.progress-wrap').on('click', function(event) {
//             event.preventDefault();
//             jQuery('html, body').animate({scrollTop: 0}, duration);
//             return false;
//         })


//     });

// })(jQuery);

// $(function () {
//     $('a[href^="#"]').click(function () {
//         let speed = 500;
//         let href = $(this).attr("href");
//         let target = $(href == "#" || href == "" ? 'html' : href);
//         let position = target.offset().top;
//         $("html, body").animate({
//             scrollTop: position
//         }, speed, "swing");
//         return false;
//     });
// });

(function ($) {
	"use strict";

	//Switch dark/light

	$(".switch").on('click', function () {
		if ($("body").hasClass("light")) {
			$("body").removeClass("light");
			$(".switch").removeClass("switched");
		}
		else {
			$("body").addClass("light");
			$(".switch").addClass("switched");
		}
	});

	$(document).ready(function () {
		"use strict";

		//Scroll back to top

		var progressPath = document.querySelector('.progress-wrap path');
		var pathLength = progressPath.getTotalLength();
		progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
		progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
		progressPath.style.strokeDashoffset = pathLength;
		progressPath.getBoundingClientRect();
		progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';
		var updateProgress = function () {
			var scroll = $(window).scrollTop();
			var height = $(document).height() - $(window).height();
			var progress = pathLength - (scroll * pathLength / height);
			progressPath.style.strokeDashoffset = progress;
		}
		updateProgress();
		$(window).scroll(updateProgress);
		var offset = 50;
		var duration = 550;
		jQuery(window).on('scroll', function () {
			if (jQuery(this).scrollTop() > offset) {
				jQuery('.progress-wrap').addClass('active-progress');
			} else {
				jQuery('.progress-wrap').removeClass('active-progress');
			}
		});
		jQuery('.progress-wrap').on('click', function (event) {
			event.preventDefault();
			jQuery('html, body').animate({ scrollTop: 0 }, duration);
			return false;
		})


	});

})(jQuery);

$(function () {
    $("img").attr("onmousedown", "return false");
    $("img").attr("onselectstart", "return false");
    $("img").attr("oncontextmenu", "return false");
  });
