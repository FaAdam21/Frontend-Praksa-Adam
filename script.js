// Dark Light mode 
var darkMode = document.getElementById('dark-change');
        darkMode.addEventListener('click', function(){
            document.body.classList.toggle('night');
            darkMode.classList.toggle('active');
            document.querySelector('.nav1', '.nav2', '.container-5', '.column-white', '.oprema-text', '.ct-6-text', '.ct-5-text').classList.toggle('night');
})


// AOS effects
AOS.init();

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

    
    
    