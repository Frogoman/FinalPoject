/* ---- Includes ---- */



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


/* ---- Log Height ---- */
function LogHeight(){
	var body = document.body
	var html = document.documentElement;

	var height = Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight );
	console.log(height);
}


