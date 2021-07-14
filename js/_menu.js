// function buttonclick(){
//     var menuList = document.getElementById("menu");
//     if (menuList.className == "menuOff"){
//         menuList.className = "menuOn";
//     }
//     else{
//         menuList.className = "menuOff";
//     }
// }

// console.log("js is still working")


// // var nav = document.getElementById('access_nav'),
// //     body = document.body;

// // nav.addEventListener('click', function(e) {
// //     body.className = body.className? '' : 'with_nav';
// //     e.preventDefault();
// // });

// const menu = document.querySelector('menu');
// const nav_menu = document.getElementById("nav_menu");

// nav_menu.addEventListener('click', () => {
//     if(menu.style.display == 'none'){
//         menu.style.display = 'block'
//     } else{
//         menu.style.display = 'none'
//     }
// });

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



// const nav = document.getElementById('nav-items')

// for(var i=0;i < nav.childElementCount;i++){
//   document.childNodes.forEach()

/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
} 