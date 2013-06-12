/*  DISPLAY MEMBERS TEAM */

$(document).ready(function(){

	$('.members').css('display','none');
	$('#members-kerian').css('display','block');

	$("#button_team_kerian").click(function(){
		$(".button_team").removeClass("active_team");
		$(this).addClass("active_team");
		$('.members').css('display','none');
		$('#members-kerian').css('display','block');
	});
	$("#button_team_oct").click(function(){
		$(".button_team").removeClass("active_team");
		$(this).addClass("active_team");
		$('.members').css('display','none');
		$('#members-oct').css('display','block');
	});
	$("#button_team_cpconseil").click(function(){
		$(".button_team").removeClass("active_team");
		$(this).addClass("active_team");
		$('.members').css('display','none');
		$('#members-cpconseil').css('display','block');
	});
	$("#button_team_transaction").click(function(){
		$(".button_team").removeClass("active_team");
		$(this).addClass("active_team");
		$('.members').css('display','none');
		$('#members-transaction').css('display','block');
	});
	/* ADD A TAB HERE */


	/* SETTINGS */
	$('#display_team_2').click(function(){
		$('#display_team_3').removeClass("current_display");
		$(this).addClass("current_display");
		$('.description-member p').css('display','block');
		$('.hover-zoom img').css('top','37%');
		$('.hover-mail img').css('top','37%');

		var largeur = window.innerWidth ;

		if(largeur>768){
			$('.member').css('width','45%');
		} else {
			$('.member').css('width','95%');
		}
	}),

	$('#display_team_3').click(function(){
		$('#display_team_2').removeClass("current_display");
		$(this).addClass("current_display");
		$('.member').css('width','28%');
		$('.description-member p').css('display','none');
		$('.hover-zoom img').css('top','27%');
		$('.hover-mail img').css('top','27%');

		var largeur = window.innerWidth ;

		if(largeur>768){
			$('.member').css('width','28%');
		} else {
			$('.member').css('width','45%');
		}
	});

	$(window).resize(function() {
		var largeur = window.innerWidth ;

		if(largeur>768){
			if(document.getElementById('display_team_2').className == "current_display") {
				$('.member').css('width','45%');
			} else if(document.getElementById('display_team_3').className == "current_display") {
				$('.member').css('width','28%');
			}
		} else {
			if(document.getElementById('display_team_2').className == "current_display") {
				$('.member').css('width','95%');
			} else if(document.getElementById('display_team_3').className == "current_display") {
				$('.member').css('width','45%');
			}
		}
	});

	
});