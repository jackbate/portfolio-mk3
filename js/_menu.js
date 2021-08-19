
$('animistion').animsition({
  inOverlay: "true",
  inClass: "overlay-slide-in-bottom",
  inDuration: "1000",
  outClass:"overlay-slide-out-bottom",
  outDuration: "800",
  linkElement: "header a"
})

$(document).ready(function() {
    $(".animsition-overlay").animsition({
      inClass: 'overlay-slide-in-bottom',
      outClass: 'overlay-slide-out-bottom',
      inDuration: 1500,
      outDuration: 800,
      linkElement: '.animsition-link',
      // e.g. linkElement: 'a:not([target="_blank"]):not([href^="#"])'
      loading: true,
      loadingParentElement: 'body', //animsition wrapper element
      loadingClass: 'animsition-loading',
      loadingInner: '', // e.g '<img src="loading.svg" />'
      timeout: false,
      timeoutCountdown: 5000,
      onLoadEvent: true,
      browser: [ 'animation-duration', '-webkit-animation-duration'],
      // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
      // The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
      overlay : true,
      overlayClass : 'animsition-overlay-slide',
      overlayParentElement : 'body',
      transition: function(url){ window.location.href = url; }
    });
  });


// This function  allows the program to recognise the class 'menu-display' and change the value accordingly
function toggleSlideMenu(x){
 if(x.classList.contains('menu-display')){
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
 }
 else{
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
 }
}
