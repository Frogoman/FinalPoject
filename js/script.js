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

/* ---- Modify Twitter Timleine Styles ---- */
$('.twitter-feed').delegate('#twitter-widget-0', 'DOMSubtreeModified propertychange', function () {
    customizeTweetMedia();
});

var customizeTweetMedia = function () {
    // CSS Overrides  
	$('.twitter-feed').find('.twitter-timeline').contents().find('div.timeline-Header').css('display', 'none');
	$('.twitter-feed').find('.twitter-timeline').contents().find('footer').css('display', 'none');
	$('.twitter-feed').find('.twitter-timeline').contents().find('div.timeline-Body').css('border-width', '0px');

    $('.twitter-feed').find('.twitter-timeline').contents().find('body').css('background-color', '#0e0e10');

    $('.twitter-feed').find('.twitter-timeline').contents().find('ol.timeline-Tweetlist').css('background-color', '#0e0e10');

    $('.twitter-feed').find('.twitter-timeline').contents().find('p.timeline-tweet-text').css('font-family', 'Jura');
    $('.twitter-feed').find('.twitter-timeline').contents().find('p.timeline-tweet-text').css('font-size', '15px');

    $('.twitter-feed').find('.twitter-timeline').contents().find('div.timeline-Tweet').css('background-color', 'transparent');

    $('.twitter-feed').find('.twitter-timeline').contents().find('div.timeline-LoadMore').css('background-color', '#111');
    $('.twitter-feed').find('.twitter-timeline').contents().find('div.timeline-LoadMore').css('background-color', '#111');
    $('.twitter-feed').find('.twitter-timeline').contents().find('button.timeline-LoadMore-prompt').css('background-color', '#111');

    $('.twitter-feed').find('.twitter-timeline').contents().find('li.timeline-TweetList-tweet').css('background-color', '#111');
    $('.twitter-feed').find('.twitter-timeline').contents().find('li.timeline-TweetList-tweet').css('border-width', '5px');
    $('.twitter-feed').find('.twitter-timeline').contents().find('li.timeline-TweetList-tweet').css('border-radius', '20px');
    $('.twitter-feed').find('.twitter-timeline').contents().find('li.timeline-TweetList-tweet').css('border-color', '#353535');
    $('.twitter-feed').find('.twitter-timeline').contents().find('li.timeline-TweetList-tweet').css('border-width', '5px');
    
	
    // Call the function on dynamic updates in addition to page load
    $('.twitter-feed').find('.twitter-timeline').contents().find('.timeline-TweetList').bind('DOMSubtreeModified propertychange', function () {
        customizeTweetMedia(this);
    });
}