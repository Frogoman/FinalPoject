/* ---- Imports ---- */



/* ---- Scroll ---- */
window.onscroll = function() {ScrollFunction()};

function ScrollFunction() {
  	if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    	document.getElementById("logo").style.width = "40px";
    	document.getElementById("logo").style.margin = "5px";
    	document.getElementById("logo_li").style.width = "50px";
  	} else {
		document.getElementById("logo").style.width = "100px";
	  	document.getElementById("logo").style.margin = "10px";
		document.getElementById("logo_li").style.width = "120px";
  	}
}



/* ---- Video Volume ---- */
	// var vid = document.getElementById("inabakumori");
	// vid.volume = 0.05;



/* ---- Form Validation ---- */
document.addEventListener('DOMContentLoaded', (function () {  
	var forms = document.querySelectorAll('.needs-validation')
  
	Array.prototype.slice.call(forms)
	  	.forEach(function (form) {
			form.addEventListener('submit', function (event) {
				if (!form.checkValidity()) {
					event.preventDefault()
					event.stopPropagation()
				}
				form.classList.add('was-validated')
				
			}, false)
		})

	$('#inputPhone').keyup(function() {
		if (isNaN( parseInt(document.getElementById("inputPhone").value) ) ) {
			document.getElementById("labelPhone").innerHTML = "Input a number";
		} else {
			document.getElementById("labelPhone").innerHTML = "Invalid Input";
		}
	})
})())



/* ---- Email Hidding ---- */
function AddMail(dir,nam) {
	document.write('<li><span class="reverse">' + dir + "@" + nam + '</span></li>');
}



/* ---- Log Height ---- */
function LogHeight(){
	var body = document.body
	var html = document.documentElement;

	var height = Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight );
	console.log(height);
}



/* ---- Change Carousel Image ---- */
/* -- Anny -- */
var anny = $('img[name="anny_pic"]');
for (var i = 0; i < anny.length; i++){
    anny[i].addEventListener("click", function(event) {
		$('#annyCarousel').carousel(anny.index(this));
	});
}
/* -- Neonbeat -- */
var neonbeat = $('img[name="neonbeat_pic"]');
for (var i = 0; i < neonbeat.length; i++){
    neonbeat[i].addEventListener("click", function(event) {
		$('#neonbeatCarousel').carousel(neonbeat.index(this));
	});
}
/* -- Meemo -- */
var meemo = $('img[name="meemo_pic"]');
for (var i = 0; i < meemo.length; i++){
    meemo[i].addEventListener("click", function(event) {
		$('#meemoCarousel').carousel(meemo.index(this));
	});
}
/* -- Deaver -- */
var deaver = $('img[name="deaver_pic"]');
for (var i = 0; i < deaver.length; i++){
    deaver[i].addEventListener("click", function(event) {
		$('#deaverCarousel').carousel(deaver.index(this));
	});
}



/* ---- Modify Twitter Timeline Style ---- */
$('.twitter-feed').delegate('#twitter-widget-0', 'DOMSubtreeModified propertychange', function () {
    customizeTweetMedia();
});

var customizeTweetMedia = function () {
    // Scroll-bar style
	var scroll_bar = '<style type="text/css">' + `
    ::-webkit-scrollbar {
		width: 16px;
	}
	 
	::-webkit-scrollbar-track {
		background-color: #17161e00;
	}
	 
	::-webkit-scrollbar-thumb {
		border: 4px solid transparent;
		border-radius: 50px;
		background-color: rgb(107, 107, 107);
		background-clip: content-box;
	}
	
	::-webkit-scrollbar-thumb:hover {
		background-color: rgb(148, 148, 148);
	}
	` + '</style>';

	// Get the twitter timeline frame
	var twitter_timeline = $('.twitter-feed').find('.twitter-timeline').contents()

	// Set custom scroll-bar
	twitter_timeline.find('head').append(scroll_bar);

	// Get rid of extra stuff
	twitter_timeline.find('div.timeline-Header').css('display', 'none');
	twitter_timeline.find('footer').css('display', 'none');
	twitter_timeline.find('div.timeline-Body').css('border-width', '0px');

	// Set body background
    twitter_timeline.find('body').css('background-color', '#0e0e10');

	// Set font and font-size
    twitter_timeline.find('body').css('font-family', 'Jura');
    twitter_timeline.find('p.timeline-tweet-text').css('font-family', 'Jura');
    twitter_timeline.find('p.timeline-tweet-text').css('font-size', '20px');
	
	// Set backgrounds for the div and ol to seem transparent
    twitter_timeline.find('ol.timeline-Tweetlist').css('background-color', '#0e0e10');
    twitter_timeline.find('div.timeline-Tweet').css('background-color', 'transparent');

	// Set background and border for the "Load More" section
    twitter_timeline.find('div.timeline-Viewport').css('background-color', '#0e0e10');
    twitter_timeline.find('div.timeline-LoadMore').css('background-color', '#111');
    twitter_timeline.find('div.timeline-LoadMore').css('border-radius', '20px');
    twitter_timeline.find('button.timeline-LoadMore-prompt').css('background-color', '#111');
    twitter_timeline.find('button.timeline-LoadMore-prompt').css('margin-top', '20px');

	// Set background and border for tweets/retweets
    twitter_timeline.find('li.timeline-TweetList-tweet').css('background-color', '#111');
    twitter_timeline.find('li.timeline-TweetList-tweet').css('border-width', '5px');
    twitter_timeline.find('li.timeline-TweetList-tweet').css('border-radius', '20px');
    twitter_timeline.find('li.timeline-TweetList-tweet').css('border-color', '#353535');
    twitter_timeline.find('li.timeline-TweetList-tweet').css('border-width', '5px');
    	
    // Call the function on dynamic updates in addition to page load
    twitter_timeline.find('.timeline-TweetList').bind('DOMSubtreeModified propertychange', function () {
        customizeTweetMedia(this);
    });
}
