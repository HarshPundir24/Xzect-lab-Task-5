//navbar
document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const offcanvasMenu = document.getElementById('offcanvas-menu');
    const closeButton = document.getElementById('close');
    const toogles = document.querySelectorAll('[data-toggle="submenu"]');

    mobileMenuToggle.addEventListener('click', () => {
        offcanvasMenu.style.display = 'block';
    });

    closeButton.addEventListener('click', () => {
        offcanvasMenu.style.display = 'none';
    });

    toogles.forEach(toggle => {
        toggle.addEventListener('click', function(event) {
            event.preventDefault();
            const submenu = this.nextElementSibling;
            if (submenu.classList.contains('hidden')) {
                submenu.classList.remove('hidden');
                submenu.classList.add('block');
            } else {
                submenu.classList.remove('block');
                submenu.classList.add('hidden');
            }
        });
    }); 
});

document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar');
    const serviceLinks = document.querySelectorAll('.service-link');
    serviceLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const icon = link.querySelector('.icon');
            icon.classList.toggle('rotate-90');
        });
    });

    function checkScroll() {
        if (window.scrollY > 100) { 
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }

    window.addEventListener('scroll', checkScroll);
    checkScroll(); 
});


// Review slider code
document.addEventListener('DOMContentLoaded', function () {
    
    let currentIndex = 0;
    const reviews = document.querySelectorAll('.review');
    const totalReviews = reviews.length;

    function showReview(index2) {
        reviews.forEach((review, i) => {
            review.classList.toggle('active', i === index2);
        });
    }
    document.querySelector('.prev').addEventListener('click', function () {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : totalReviews - 1;
        showReview(currentIndex);
    });
    document.querySelector('.next').addEventListener('click', function () {
        currentIndex = (currentIndex < totalReviews - 1) ? currentIndex + 1 : 0;
        showReview(currentIndex);
    });
    showReview(currentIndex);
});

//swiper slider
document.addEventListener('DOMContentLoaded', function () { 
    
    //hero slider
    var swiper = new Swiper('.hero-slider .swiper-container', {
        slidesPerView: 1, 
        loop: true,  
        navigation: {
            nextEl: '.hero-slider_arrows__nextbtn',
            prevEl: '.hero-slider_arrows__prevbtn',
        },
    });

     //top quality services
     var swiper1 = new Swiper('.service-section .swiper-container', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop:true,
        navigation: {
            nextEl: '.service-section_arrows__nextbtn',
            prevEl: '.service-section_arrows__prevbtn',
        },
        breakpoints: {
            640: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 40,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 50,
            },
        },
    }); 

    //brandsection
    var swiper3 = new Swiper('.brandsection .swiper-container', {
        slidesPerView: 2,
        spaceBetween: 30,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 30,
            },
          },
    });

    //blog post
    var swiper4 = new Swiper('.postsection .swiper', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop:true,
        navigation: {
            nextEl: '.bn',
            prevEl: '.bv',
        },
        breakpoints: {
            640: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
        },
    });
});
    
// JS for Counting
    document.addEventListener('DOMContentLoaded', () => {
        function isElementInViewport(el) {  
            const rect = el.getBoundingClientRect();
            console.log('Viewport Check:', el, rect);
            return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
        }
        function formatNumberWithCommas(number) {
            return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
        function countUp(el) {
            const countTo = parseInt(el.getAttribute('data-count').replace(/,/g, ''), 10);
            console.log('Counting to:', countTo);
            const duration = 1000; 
            const frameRate = 1000 / 60; 
            const totalFrames = Math.round(duration / frameRate);
            let frame = 0;
            const count = () => {
                frame++;
                const progress = frame / totalFrames;
                const currentCount = Math.round(countTo * progress);
                el.textContent = formatNumberWithCommas(currentCount);
                if (frame < totalFrames) {
                    requestAnimationFrame(count);
                } else {
                    el.textContent = formatNumberWithCommas(countTo) + "+";
                }
            };
            count();
        }
        function handleScroll() {
            const counters = document.querySelectorAll('.counterup__number');
            counters.forEach(counter => {
                if (isElementInViewport(counter) && !counter.classList.contains('counted')) {
                    countUp(counter);
                    counter.classList.add('counted');
                }
            });
        }
        window.addEventListener('scroll', handleScroll);
        handleScroll();
    });
      
//JS for back to top
    document.addEventListener('scroll', function() {
        const backToTopButton = document.getElementById('back-to-top');
        if (window.scrollY > 200) {  
            backToTopButton.style.opacity = 1;
            backToTopButton.style.transform = 'scale(1)';
        } else {
            backToTopButton.style.opacity = 0;
            backToTopButton.style.transform = 'scale(0.8)';
        }
    });
    document.getElementById('back-to-top').addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
      