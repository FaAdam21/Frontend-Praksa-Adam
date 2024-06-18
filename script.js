// Dark Light mode
var darkMode = document.getElementById('dark-change');

// Check localStorage for dark mode setting
if (localStorage.getItem('darkMode') === 'enabled') {
    enableDarkMode();
}

darkMode.addEventListener('click', function() {
    document.body.classList.toggle('night');
    darkMode.classList.toggle('active');
    document.querySelectorAll('.nav1, .nav2, .container-5, .column-white, .oprema-text, .ct-6-text, .ct-5-text, .popup-content').forEach(element => {
        element.classList.toggle('night');
    });

    // Save the setting to localStorage
    if (document.body.classList.contains('night')) {
        localStorage.setItem('darkMode', 'enabled');
    } else {
        localStorage.setItem('darkMode', 'disabled');
    }
});

function enableDarkMode() {
    document.body.classList.add('night');
    darkMode.classList.add('active');
    document.querySelectorAll('.nav1, .nav2, .container-5, .column-white, .oprema-text, .ct-6-text, .ct-5-text, .popup-content').forEach(element => {
        element.classList.add('night');
    });
}

function disableDarkMode() {
    document.body.classList.remove('night');
    darkMode.classList.remove('active');
    document.querySelectorAll('.nav1, .nav2, .container-5, .column-white, .oprema-text, .ct-6-text, .ct-5-text, .popup-content').forEach(element => {
        element.classList.remove('night');
    });
}



// AOS effects
AOS.init();

/*
const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
*/



    const popup = document.getElementById('popup');
    const closeBtn = document.getElementById('closeBtn');
    const subscribeBtn = document.getElementById('subscribeBtn');

    let startTime = null;
    let scrolled = false;
    let interval = null;

    function showPopup() {
        popup.style.display = 'flex';
        document.body.style.overflow = 'hidden';
        clearInterval(interval);
    }

    function hidePopup() {
        popup.style.display = 'none';
        document.body.style.overflow = 'auto';
    }

    closeBtn.addEventListener('click', hidePopup);
    subscribeBtn.addEventListener('click', hidePopup);

    window.addEventListener('scroll', () => {
        if (!startTime) {
            startTime = new Date().getTime();
        }
        scrolled = true;
        if (!interval) {
            interval = setInterval(() => {
                if (scrolled) {
                    const currentTime = new Date().getTime();
                    const elapsedTime = currentTime - startTime;
                    if (elapsedTime >= 3000) {  // 3 seconds of scroll time
                        showPopup();
                    }
                }
            }, 100);  // Check every 100ms
        }
    });



/*
    document.addEventListener('DOMContentLoaded', function() {
        var swiper = new Swiper('.slider-container', {
            slidesPerView: 2, // Show 5 slides at a time
            spaceBetween: 10, // Adjust space between slides
            loop: true, // Enable looping
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            }
        });
    });
*/

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1, // Show 5 slides at a time
    spaceBetween: 30,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },

    breakpoints: {  
        '968': {
          slidesPerView: 4,
          spaceBetween: 30,
        },
      },

  });


 
// Hamburger menu functionality
document.getElementById('menu-icon').addEventListener('click', function() {
document.querySelector('.nav1-list').classList.toggle('show');
});






// Hamburger menu functionality
document.getElementById('menu-icon2').addEventListener('click', function() {
    document.querySelector('.nav2-list').classList.toggle('show');
});



