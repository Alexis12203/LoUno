$(document).ready(function(){

 function reloadEvents(){
  $('a[data-remote="true"]').off('click');
  $('a[data-delete-remote="true"]').off('click');

     $('a[data-remote="true"]').on('click', function(e){
         e.preventDefault();
         
         $.ajax({
             url: $(this).attr('href'),
             context: this
         }).done(function(){
             var div = $(this).find('div.likes')
             div.addClass('red');
              var count = parseInt(div.text()) + 1;
              div.html('<p>' + count +'</p>');

              $(this).removeAttr('data-remote');
              $(this).attr('data-delete-remote', true);
     reloadEvents();
         });
     });

     $('a[data-delete-remote="true"]').on('click', function(e){
         e.preventDefault();

         $.ajax({
             url: $(this).attr('href'),
             context: this
         }).done(function(){
             var div = $(this).find('div.likes')
             div.removeClass('red');
             var count = parseInt(div.text()) - 1;
             div.html('<p>' + count +'</p>');

             $(this).removeAttr('data-delete-remote');
             $(this).attr('data-remote', true);
     reloadEvents();
         });
     }); 
 }

 reloadEvents();

});