// If not iPhone, play first video and setup event handlers for  carousel rotations
// iPhone will not play videos inline, and will take control of the browser
if(!/iPhone/i.test(navigator.userAgent)) {
    $('.active > div > video').get(0).play();

    $('#vLifestyle').bind('slide.bs.carousel', function(e) {
      $(e.relatedTarget).find('video').get(0).play();
    });

    $('#vLifestyle').bind('slide.bs.carousel', function(e) {
      $('video').not('.active > div > video').each(function() {
        $(this).get(0).pause();
      });
    });
  }


(function() {

	//Function to animate slider captions 
	function doAnimations( elems ) {
		//Cache the animationend event in a variable
		var animEndEv = 'webkitAnimationEnd animationend';
		
		elems.each(function () {
			var $this = $(this),
				$animationType = $this.data('animation');
			$this.addClass($animationType).one(animEndEv, function () {
				$this.removeClass($animationType);
			});
		});
	}
	
	//Variables on page load 
	var $myCarousel = $('#vLifestyle'),
		$firstAnimatingElems = $myCarousel.find('.item:first').find("[data-animation ^= 'animated']");
		
		
	//Animate captions in first slide on page load 
	doAnimations($firstAnimatingElems);
	
	//Pause carousel  
	$myCarousel.carousel('pause');
	
	
	//Other slides to be animated on carousel slide event 
	$myCarousel.on('slide.bs.carousel', function (e) {
		var $animatingElems = $(e.relatedTarget).find("[data-animation ^= 'animated']");
		doAnimations($animatingElems);
	});  
	
})(jQuery);