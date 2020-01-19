$(document).ready(function(){

// Slider_our-contents

	$('.slideshow-container').slick({
		dots: true,
  		infinite: true,
  		speed: 500,
  		fade: true,
  		cssEase: 'linear'
	});	


	// Header-menu_mobile
	
	$('.menu_icon').on('click', function() {
  		$(this).closest('.nav_menu').toggleClass('menu_state_open');
    });	

	
	// Slider-1_get_it_right_now
	
	$('.slider').bxSlider();


   // Tabs_what_our_features

	 $('#menu-tabs li').click(function(){
		var thisClass = this.className.slice(0,2);
		$('div.t1').hide();
		$('div.t2').hide();
		$('div.t3').hide();
		$('div.' + thisClass).fadeIn(500);
		$('#menu-tabs li').removeClass('active');
		$(this).addClass('active');
		return false;
	});
	$('.hover1').hover(
		function() {
			$('.front').addClass('active');
			$('hover2').removeClass('active');
			$('.behind').addClass('open');
		},
		function(){
			$('.front').removelass('active');
			$('hover2').addClass('active');
			$('.behind').removeClass('open');
		}
	 );


  // Slider-2_get_it_right_now

	$('.slider3').slick({
	slidesToShow: 4,
	infinite: true,
	slidesToScroll: 4,
	arrows:false,
	autoplay:true,
	autoplaySpeed:1000,
	responsive: [
    {
      breakpoint: 1020,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true
      }
    },
    {
      breakpoint: 350,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true
      }
    },
    {
      breakpoint: 320,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true
      }
    },
    ]
});


});