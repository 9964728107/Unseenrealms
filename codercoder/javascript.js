const btnhamberger =document.querySelector('#btnHamburger');
const header= document.querySelector('.header');
const overlay= document.querySelector('.overlay');
const fadeElms= document.querySelector('.header__menu_mbl');
const body= document.querySelector('body')

 

btnhamberger.addEventListener('click',
function(){    //closing the menu
    console.log('open hamburger');
    if(btnhamberger.classList.contains('open')){
       btnhamberger.classList.remove('open');
       overlay.classList.remove('overlay__open');
       overlay.classList.add('overlay__default')
       overlay.classList.remove('fade-in');
       overlay.classList.add('fade-out');
       fadeElms.classList.remove('header__menu_mbl_open')
      fadeElms.classList.add('fade-out')
       fadeElms.classList.remove('fade-in')
       /*fadeElms.classList.remove('header__menu_mbl')*/
       body.classList.remove('no_scroll')
       

       
       
    }
    else{   //opening the menu
        btnhamberger.classList.add('open');
        overlay.classList.add('overlay__open');
        overlay.classList.add('fade-in');
        overlay.classList.remove('fade-out');
        overlay.classList.remove('overlay__default')

       /* fadeElms.classList.remove('header__menu_mbl')*/
        


       
        fadeElms.classList.add('header__menu_mbl_open')
       fadeElms.classList.add('fade-in')
       fadeElms.classList.remove('fade-out')
       body.classList.add('no_scroll')
        

       
    }

   
});

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}




function myMap() {
  var mapProp = {
      center:new google.maps.LatLng(51.508742,-0.120850),
      zoom:5,
  };
  var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
  }