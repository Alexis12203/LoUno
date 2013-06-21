$(document).ready(function(){	
	$('.button_products').click(function(){
		/* RESET STYLE */
		$('.button_products').removeClass('active_product');
		$('#product').removeClass('ipad');$('#product').removeClass('imac');$('#product').removeClass('null');$('#product').removeClass('iphone5');
		$('#showcase').removeClass('ipad');$('#showcase').removeClass('imac');$('#showcase').removeClass('null');$('#showcase').removeClass('iphone5');
		/* END RESET STYLE */
	}),
	$('#button_products_kerian').click(function(){
		$('#button_products_kerian').addClass('active_product');
		$('.title_showcase').html('PORTFOLIO SCREEN'); /* YOUR TITLE */
		var product = 'iphone5'; /* CHOOSE YOUR PRODUCT */
		$('#product img').attr('src','images/' + product + '.png'); 
		$('#product').addClass(product);
		$('#showcase').addClass(product);
		$('#shadow_left').css('top',-450);
		$('#shadow_right').css('top',-450);
		/* YOUR SCREENSHOTS */
		$('#showcase').html('<img id="product_1" src="images/products/kerian/mamoru-movil.jpg" alt="Image 1">');
		/* THE PAGINATION */
		$('#pagination').html('<tr><td><div id="nav_left_showcase"></div></td><td><div class="pagination_showcase" id="dot_product_1"></div></td><td><div class="pagination_showcase" id="dot_product_2"></div></td><td><div class="pagination_showcase" id="dot_product_3"></div></td><td><div class="pagination_showcase" id="dot_product_4"></div></td><td><div class="pagination_showcase" id="dot_product_5"></div></td><td><div id="nav_right_showcase"></div></td></tr>');
		/* LEFT DESCRIPTION */
		$('.left_showcase').html('<p>This is Photoshop\'s version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. <br>Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit.</p>');
		/* RIGHT DESCRIPTION */
		$('.right_showcase').html('<p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum fermentum nunc.</p>');
	}),
	$('#button_products_oct').click(function(){
		$('#button_products_oct').addClass('active_product');
		$('.title_showcase').html('OCT SCREEN');
		var product = 'ipad';
		$('#product img').attr('src','images/' + product + '.png');
		$('#product').addClass(product);
		$('#showcase').addClass(product);
		$('#shadow_left').css('top',-473);
		$('#shadow_right').css('top',-473);
		$('#showcase').html('<img id="product_1" src="images/products/oct/mamoru.jpg" alt="Image 1">');
		$('#pagination').html('<tr><td><div id="nav_left_showcase"></div></td><td><div class="pagination_showcase" id="dot_product_1"></div></td><td><div class="pagination_showcase" id="dot_product_2"></div></td><td><div class="pagination_showcase" id="dot_product_3"></div></td><td><div class="pagination_showcase" id="dot_product_4"></div></td><td><div class="pagination_showcase" id="dot_product_5"></div></td><td><div id="nav_right_showcase"></div></td></tr>');
		$('.left_showcase').html('<p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum fermentum nunc.</p>');
		$('.right_showcase').html('<p>This is Photoshop\'s version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. <br>Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit.</p>');
	}),
	$('#button_products_cpconseil').click(function(){
		$('#button_products_cpconseil').addClass('active_product');
		$('.title_showcase').html('CP. CONSEIL');
		var product = 'imac';
		$('#product img').attr('src','images/' + product + '.png');
		$('#product').addClass(product);
		$('#showcase').addClass(product);
		$('#shadow_left').css('top',-450);
		$('#shadow_right').css('top',-450);
		$('#showcase').html('<img id="product_1" src="images/products/cpconseil/mamoru.jpg" alt="Image 1">');
		$('#pagination').html('<tr><td><div id="nav_left_showcase"></div></td><td><div class="pagination_showcase" id="dot_product_1"></div></td><td><div class="pagination_showcase" id="dot_product_2"></div></td><td><div class="pagination_showcase" id="dot_product_3"></div></td><td><div id="nav_right_showcase"></div></td></tr>');
		$('.left_showcase').html('<p>This is Photoshop\'s version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. <br>Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit.</p>');
		$('.right_showcase').html('<p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum fermentum nunc.</p>');
	}),
	$('#button_products_transaction').click(function(){
		$('#button_products_transaction').addClass('active_product');
		$('.title_showcase').html('TRANSACTION');
		var product = 'null';
		$('#product img').attr('src','images/' + product + '.png');
		$('#product').addClass(product);
		$('#showcase').addClass(product);
		$('#shadow_left').css('top',-477);
		$('#shadow_right').css('top',-477);
		$('#showcase').html('<img id="product_1" src="images/products/transaction/mamoru.jpg" alt="Image 1">');
		$('#pagination').html('<tr><td><div id="nav_left_showcase"></div></td><td><div class="pagination_showcase" id="dot_product_1"></div></td><td><div class="pagination_showcase" id="dot_product_2"></div></td><td><div class="pagination_showcase" id="dot_product_3"></div></td><td><div id="nav_right_showcase"></div></td></tr>');
		$('.left_showcase').html('<p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum fermentum nunc.</p>');
		$('.right_showcase').html('<p>This is Photoshop\'s version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. <br>Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit.</p>');
	});
	/* ADD A TAB HERE */
});