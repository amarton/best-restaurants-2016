// @codekit-prepend "modernizr.js"
// @codekit-prepend "jquery-1.10.2.min.js"

var app = {

	init: function(){

		app.share();
		app.show_video();

	},

	show_video: function(){

		$(".featured-video").on("click", function(e){
		var el = $(e.srcElement || e.target),
			id = el.attr('id');
				$(".fv__overlay, .fv__play-btn").removeClass("is-hidden");
				$(".overlay-"+id).addClass("is-hidden");
				$(".btn-"+id).addClass("is-hidden");
		});
		//$(".featured-video").find(".fv__overlay, .fv__play-btn").on("click", function(){
		//	$(".fv__overlay, .fv__play-btn").addClass("is-hidden");
		//});

	},

	share: function(){

		$(".icon-twitter").on("click", function(){

			var tweet = ""; //Tweet text
			var url = ""; //Interactive URL

			var twitter_url = "https://twitter.com/intent/tweet?text="+tweet+"&url="+url+"&tw_p=tweetbutton";
			window.open(twitter_url, 'mywin','left=200,top=200,width=500,height=300,toolbar=1,resizable=0'); return false;

		});

		$(".icon-facebook").on("click", function(){

			var picture = ""; //Picture URL
			var title = ""; //Post title
			var description = ""; //Post description
			var url = ""; //Interactive URL

	    	var facebook_url = "https://www.facebook.com/dialog/feed?display=popup&app_id=310302989040998&link="+url+"&picture="+picture+"&name="+title+"&description="+description+"&redirect_uri=http://www.facebook.com";    		
			window.open(facebook_url, 'mywin','left=200,top=200,width=500,height=300,toolbar=1,resizable=0'); return false;

		});

	}
	
}


$(document).ready(function(){

	app.init();
	console.log("connected");

});
