$(document).ready(function(){  
	/* NUMBER OF FACEBOOK FANS */
    $.ajax({
        url: 'https://graph.facebook.com/YOUR_ID',
        dataType: 'jsonp',
        success: function(data) {
            $('#fans').html(data.likes);
       }
    }),
    /* NUMBER OF TWITTER FOLLOWERS */
    $.ajax({
        url: 'http://api.twitter.com/1/users/show.json',
        data: {screen_name: '@'},
        dataType: 'jsonp',
        success: function(data) {
            $('#followers').html(data.followers_count);
       }
    }),
    /* LASTS TWEETS */
	getTwitters('tweet', { 
    id: '', 
    count: 2, 
    enableLinks: true, 
    ignoreReplies: true, 
    clearContents: true,
    template: '<p>"%text%" <br><a href="http://twitter.com/%user_screen_name%/statuses/%id_str%/">%time%</a></p>'
	});
});