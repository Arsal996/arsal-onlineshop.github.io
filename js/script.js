let navbar = document.querySelector('.navbar');

document.getElementById('menu-bar').onclick = () => {
    navbar.classList.toggle('active');
}

document.getElementById('close').onclick = () => {
    navbar.classList.remove('active');
}

window.onscroll = () => {

    navbar.classList.remove('active');

    if (window.scrollY > 100) {
        document.querySelector('header').classList.add("active");
    }
    else {
        document.querySelector('header').classList.remove("active");
    }
}

let themeChange = document.getElementById('theme-icon');

themeChange.onclick = () => {
    themeChange.classList.toggle('fa-moon');
    if (themeChange.classList.contains('fa-moon')) {
        document.querySelector('body').classList.add('active');
    }
    else {
        document.querySelector('body').classList.remove('active');
    }
}

document.querySelectorAll('.small-img-1').forEach(images =>{
    images.onclick = ()=> {
        document.querySelectorAll('.big-img-1').src = images.getAttribute('src');
    }
});

// time countdown for deal

let countDate = new Date('nov, 2022 00:00:00').getTime();

function countDown(){
     let now = new Date().getTime();
     gap = now - countDate;

     let seconds = 1000;
     let minutes = seconds * 60;
     let hours = minutes * 60;
     let days = hours * 24;

     let d = Math.floor(gap / (days));
     let h = Math.floor((gap % (days)) / (hours));
     let m = Math.floor((gap % (hours)) / (minutes));
     let s = Math.floor((gap % (minutes)) / (seconds));

     document.getElementById('days').innerText = d;
     document.getElementById('hours').innerText = h;
     document.getElementById('minutes').innerText = m;
     document.getElementById('seconds').innerText = s;
}

setInterval(function(){
    countDown()
},1000);



// slider js

var swiper = new Swiper(".product-slider", {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
    loopFillGroupWithBlank: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      breakpoints:{
        0: {
            slidesPerView: 1,
        },
        550: {
            slidesPerView: 1,
        },
        650: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        }
      },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

//   review slider 

var swiper = new Swiper(".review-slider", {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
    loopFillGroupWithBlank: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      breakpoints:{
        0: {
            slidesPerView: 1,
        },
        550: {
            slidesPerView: 1,
        },
        650: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        }
      },
  });