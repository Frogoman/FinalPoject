/* ---- Scroll ---- */
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
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
var vid = document.getElementById("inabakumori");
vid.volume = 0.05;


/* ---- AA ---- */




