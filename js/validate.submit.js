$(function() {
  $(".button").click(function() {
		// validate and process form
		// first hide any error messages
    
		
	  var name = $("input#name").val();
		if (name == "") {
      $('#submit_btn').addClass('animated shake');
      $("input#name").focus();
      setTimeout(function(){
            $('#submit_btn').removeClass('animated shake');
      },1000);
      return false;
    }
		var email = $("input#email").val();
		if (email == "") {
      $('#submit_btn').addClass('animated shake');
      $("input#email").focus();
      setTimeout(function(){
            $('#submit_btn').removeClass('animated shake');
      },1000);
      return false;
    }
		var message = $("#message").val();
		if (message == "") {
      $('#submit_btn').addClass('animated shake');
      $("#message").focus();
      setTimeout(function(){
            $('#submit_btn').removeClass('animated shake');
      },1000);
      return false;
    }
		
		var dataString = 'name='+ name + '&email=' + email + '&message=' + message;
		//alert (dataString);return false;
		
		$.ajax({
      type: "POST",
      url: "contact.php",
      data: dataString,
      success: function() {
          $('#contact_form').find('input:text').val('');
          $('#contact_form').find('textarea').val('');
          $('#contact_form').find('input:submit').val('DONE');
          $('#contact_form').find('input:submit').css('background-color','#8fc745');

          setTimeout(function(){
              $('#contact_form').find('input:submit').val('SEND');
              $('#contact_form').find('input:submit').css('background-color','rgba(0,0,0,0.2)');
          },2500);
          return false;
      }
     });
    return false;
	});
});
