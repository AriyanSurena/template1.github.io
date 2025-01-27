"use strict";

var myImage = document.getElementById('headerLogo');
var lightImageSrc = './media/blackLogo.png'; // منبع تصویر حالت روشن  

var darkImageSrc = './media/whiteLogo.png'; // منبع تصویر حالت تاریک  

var mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

function updateImage() {
  if (mediaQuery.matches) {
    // حالت تاریک فعال است  
    myImage.src = darkImageSrc;
  } else {
    // حالت تاریک غیر فعال است  
    myImage.src = lightImageSrc;
  }
} // برای تابع اولیه  


updateImage(); // رصد تغییرات در حالت تاریک  

mediaQuery.addEventListener('change', updateImage);