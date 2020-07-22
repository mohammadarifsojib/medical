jQuery(document).ready(function() {
	
	jQuery('.counter').counterUp({
            delay: 100,
            time: 3000
          });

	 //Slick Nav Custom Code
	$('.primary-menu').slicknav({
		'label'			:'',
		'duplicate'		: true,
		'prependTo'		: '.menu'
	});

	jQuery('.accordion-click').click(function(e){
		e.preventDefault();
		jQuery('.card-header').removeClass('active-accordion');
		jQuery('.accordion-one').addClass('active-accordion');
	});
	jQuery('.accordion-click-two').click(function(e){
		e.preventDefault();
		jQuery('.card-header').removeClass('active-accordion');
		jQuery('.accordion-two').addClass('active-accordion');
	});
	jQuery('.accordion-click-three').click(function(e){
		e.preventDefault();
		jQuery('.card-header').removeClass('active-accordion');
		jQuery('.accordion-three').addClass('active-accordion');
	});
	jQuery('.accordion-click-four').click(function(e){
		e.preventDefault();
		jQuery('.card-header').removeClass('active-accordion');
		jQuery('.accordion-four').addClass('active-accordion');
	});
});