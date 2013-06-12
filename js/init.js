$(document).ready(function(){

	/* INIT SLIDE HEADER */

	$(function(){
		var slides = $('#slides');
		slides.slidesjs({
			width: 2000,
		    height: 2000
		});
	});

	/* ANIMATION OF DISCOVER */

	var textheadercontain = $('.text_header_contain');
	var discover = $('#discover');
	  textheadercontain.addClass('animated bounceInRight');
	  discover.addClass('animated fadeInUpBig');
	 setTimeout(function(){
	  discover.removeClass('animated fadeInUpBig');
	},2000);

	/* COLOR SWITCHER */

	var linkcolorswitcher = $("link.color_switcher"); 
	if($.cookie("css")) {
		linkcolorswitcher.attr("href",$.cookie("css"));
	}
	$("#color_choice li a").click(function() { 
		linkcolorswitcher.attr("href",$(this).attr('rel'));
		$.cookie("css",$(this).attr('rel'), {expires: 1, path: '/'});
		return false;
	});

	/* PHOTOS SLIDE */

	var flexslider = $('.flexslider');
	flexslider.flexslider({
		animation: "fade",
		startAt: 0, 
		controlNav: false,               
		directionNav: true,             
		prevText: "<img src='images/arrow-slide_prev.png'>",           
		nextText: "<img src='images/arrow-slide_next.png'>",
		animationLoop: true,
		animationSpeed: 1500,
	});

	/* ANIMATION SERVICES */

	var allservices = $('.all_services');
	allservices.mouseenter(function(){
		$(this).animate({top: '-20'}, 250, function(){

		});
	}),
	allservices.mouseleave(function(){
		$(this).animate({top: '0'}, 250, function(){

		});
	});

	/* BUTTONS WORK */

	var displaywork2 = $('#display_work_2');
	var displaywork4 = $('#display_work_4');
	var rbgridli = $('.rb-grid li');
	var superboxlist = $('.superbox-list');
	displaywork2.click(function(){
		displaywork4.removeClass('current_display_work');
		displaywork2.addClass('current_display_work');
		rbgridli.addClass('rb-span-2');
		superboxlist.addClass('dis-2');
	}),
	displaywork4.click(function(){
		displaywork2.removeClass('current_display_work');
		displaywork4.addClass('current_display_work');
		rbgridli.removeClass('rb-span-2');
		superboxlist.removeClass('dis-2');
	});
	var overlayeffect = $('#overlay_effect');
	var expandingeffect = $('#expanding_effect');
	var superbox = $('.superbox');
	var rbgrid = $('#rb-grid');
	overlayeffect.click(function(){
		expandingeffect.removeClass('current_effect_work');
		overlayeffect.addClass('current_effect_work');
		superbox.css('display','none');
		rbgrid.css('display','block');
	}),
	expandingeffect.click(function(){
		overlayeffect.removeClass('current_effect_work');
		expandingeffect.addClass('current_effect_work');
		rbgrid.css('display','none');
		superbox.css('display','inline-block');
	})

	/* READ MORE */

	var showText='READ MORE';
	var hideText='READ LESS';
	var is_visible = false;
	 
	var more = $('.more');
	more.next().append('<div class="read_more"><a href="#" class="toggleLink">'+showText+'</a></div>');
	 
	more.hide();
	 
	$('a.toggleLink').click(function() {
		is_visible = !is_visible;
		$(this).html( (!is_visible) ? showText : hideText);
		$(this).parent().parent().prev('.more').slideToggle('slow');

		return false;
	});

	/* HOVER SIDEBAR */

	var sidebarap = $('#sidebar a p');
	var imgrecentposts = $('.img_recent_posts');
	sidebarap.hover(
		function(){
			$(this).next(imgrecentposts).css('background-image','url(images/arrow2-hover.png)');
		},
		function(){
			imgrecentposts.css('background-image','url(images/arrow2.png)');
		});

});