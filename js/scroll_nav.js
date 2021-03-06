$(document).ready(function(){
	var positionElementInPage = $('#nav').offset().top;
	$(window).scroll(
	    function() {
	        if ($(window).scrollTop() >= positionElementInPage) {
	            // fixed
	            $('#nav').addClass("floatable");
	            $('#text_header_contain').css('display','none');
	            $('#text_header').addClass('animated hinge fadeIn');
				setTimeout(function(){
	          	    $('#text_header').removeClass('animated hinge fadeIn');
	          	},1500);
	          	$('#discover').addClass('animated fadeInUp');
				setTimeout(function(){
	          	    $('#discover').removeClass('animated fadeInUp');
	          	},1500);
	            $('#right_slide_head').css('display','none');
	            $('#left_slide_head').css('display','none');
	            $('#container_discover').css('display','none');
	            $('#container_nav_header').css('display','none');
	            $('#slides').css('display','none');
	        } else {
	            // relative
	            $('#nav').removeClass("floatable");
	            $('#text_header_contain').css('display','block');
	            $('#text_header').css('display','block');
	            $('#right_slide_head').css('display','block');
	            $('#left_slide_head').css('display','block');
	            $('#container_discover').css('display','block');
	            $('#container_nav_header').css('display','block');
	            $('#slides').css('display','block');
	    	}

		}	
	);	

	

	$("#top_content").click(function(){
		$("#menu_phone li").toggleClass("show");
	});
	$("#menu_phone li").click(function(){
		$("#menu_phone li").toggleClass("show");
	});
			
});

$(window).load(function () {

	$(function() {
        $('#nav #menu table tr td a').bind('click',function(event){
            var $anchor = $(this);
            
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top
            }, 1500,'easeInOutExpo');
            event.preventDefault();
        });
        $('#menu_phone ul a').bind('click',function(event){
            var $anchor = $(this);
            
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top
            }, 1500,'easeInOutExpo');
            event.preventDefault();
        });
        $('#discover a').bind('click',function(event){
            var $anchor = $(this);
            
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top
            }, 1500,'easeInOutExpo');
            event.preventDefault();
        });
        $('#contact_nav').bind('click',function(event){
            var $anchor = $(this);
            
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top
            }, 1500,'easeInOutExpo');
            event.preventDefault();
        });
        $('#team_contact').bind('click',function(event){
            var $anchor = $(this);
            
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top
            }, 1500,'easeInOutExpo');
            event.preventDefault();
        });
        $('#description_showcase a').bind('click',function(event){
            var $anchor = $(this);
            
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top
            }, 1500,'easeInOutExpo');
            event.preventDefault();
        });
    });

	var positionHeaderInPage = $('#header').offset().top;
	$(window).scroll(
	    function() {
	        if ($(window).scrollTop() >= positionHeaderInPage) {
	            // actif
	           $("#current_menu_phone").html("<br><strong>AGENCIA</strong>");
	        }
	    }
	);

	// listen for scroll
	var positionStoryInPage = $('#story').offset().top;
	$(window).scroll(
	    function() {
	        if (($(window).scrollTop() + 10) >= positionStoryInPage) {
	            // actif
	           $('#menu_story').addClass("active");
	           $("#current_menu_phone").html("<br><strong>nosotros</strong>");
	        } else {
	            // non actif
	            $('#menu_story').removeClass("active");
	        }
	    }
	);
	// listen for scroll
	// var positionTeamInPage = $('#team').offset().top;
	// $(window).scroll(
	//     function() {
	//         if ($(window).scrollTop() >= positionTeamInPage) {
	//             // actif
	//             $('#menu_story').removeClass("active");
	//            $('#menu_team').addClass("active");
	//            $("#current_menu_phone").html("nuestro<br><strong>EQUIPO</strong>");
	//         } else {
	//             // non actif
	//             $('#menu_team').removeClass("active");
	//         }
	//     }
	// );
	// listen for scroll
	
	var positionServicesInPage = $('#services').offset().top;
	$(window).scroll(
	    function() {
	        if (($(window).scrollTop() + 10) >= positionServicesInPage) {
	            // actif
	           $('#menu_story').removeClass("active");
	           $('#menu_services').addClass("active");
	           $("#current_menu_phone").html("<br><strong>servicios</strong>");
	        } else {
	            // non actif
	            $('#menu_services').removeClass("active");
	        }
	    }
	);

	var positionProductsInPage = $('#products').offset().top;
	$(window).scroll(
	    function() {
	        if (($(window).scrollTop() + 10) >= positionProductsInPage) {
	            // actif
	           $('#menu_services').removeClass("active");
	           $('#menu_products').addClass("active");
	           $("#current_menu_phone").html("<br><strong>portafolio</strong>");
	        } else {
	            // non actif
	            $('#menu_products').removeClass("active");
	        }
	    }
	);
	// listen for scroll
	
	// listen for scroll
	// var positionWorkInPage = $('#work').offset().top;
	// $(window).scroll(
	//     function() {
	//         if (($(window).scrollTop() + 2) >= positionWorkInPage) {
	//             // actif
	//             $('#menu_products').removeClass("active");
	//            $('#menu_work').addClass("active");
	//            $("#current_menu_phone").html("nuestros<br><strong>CLIENTES</strong>");
	//         } else {
	//             // non actif
	//             $('#menu_work').removeClass("active");
	//         }
	//     }
	// );
	// listen for scroll
	// var positionNewsInPage = $('#news').offset().top;
	// $(window).scroll(
	//     function() {
	//         if ($(window).scrollTop() >= positionNewsInPage) {
	//             // actif
	//             $('#menu_work').removeClass("active");
	//            $('#menu_news').addClass("active");
	//            $("#current_menu_phone").html("las<br><strong>NOVEDADES</strong>");
	//         } else {
	//             // non actif
	//             $('#menu_news').removeClass("active");
	//         }
	//     }
	// );
	// listen for scroll
	var positionContactInPage = $('#contact').offset().top;
	$(window).scroll(
	    function() {
	        if (($(window).scrollTop() + 10) >= positionContactInPage) {
	            // actif
	           $('#menu_products').removeClass("active");
	           $('#menu_team').addClass("active");
	           $("#current_menu_phone").html("<br><strong>contacto</strong>");
	        } else {
	        	$('#menu_team').removeClass("active");
	        }

	    }
	);

});