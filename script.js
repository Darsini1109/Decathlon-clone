
function startCountdown(duration) {
  const timerElement = document.getElementById('timer');
  let remaining = duration;

  function updateTimer() {
    const hours = String(Math.floor(remaining / 3600)).padStart(2, '0');
    const minutes = String(Math.floor((remaining % 3600) / 60)).padStart(2, '0');
    const seconds = String(remaining % 60).padStart(2, '0');
    timerElement.textContent = `${hours} : ${minutes} : ${seconds}`;
    if (remaining > 0) remaining--;
  }

  updateTimer();
  setInterval(updateTimer, 1000);
}

startCountdown(3600); 


let heroSlides = document.querySelectorAll('.hero-slide');
let heroCurrent = 0;

const showHeroSlide = (index) => {
  heroSlides.forEach(slide => slide.classList.remove('active'));
  heroSlides[index].classList.add('active');
};

const leftNav = document.querySelector('.nav.left');
const rightNav = document.querySelector('.nav.right');

if (leftNav && rightNav) {
  leftNav.addEventListener('click', () => {
    heroCurrent = (heroCurrent - 1 + heroSlides.length) % heroSlides.length;
    showHeroSlide(heroCurrent);
  });

  rightNav.addEventListener('click', () => {
    heroCurrent = (heroCurrent + 1) % heroSlides.length;
    showHeroSlide(heroCurrent);
  });

  setInterval(() => {
    heroCurrent = (heroCurrent + 1) % heroSlides.length;
    showHeroSlide(heroCurrent);
  }, 5000);
}


let slideIndex = 0;
const slides = document.getElementsByClassName("slide");

function showSlides(index) {
  if (index >= slides.length) slideIndex = 0;
  if (index < 0) slideIndex = slides.length - 1;

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex].style.display = "block";
}

function plusSlides(n) {
  slideIndex += n;
  showSlides(slideIndex);
}


showSlides(slideIndex);


setInterval(() => {
  slideIndex++;
  showSlides(slideIndex);
}, 2000);


document.addEventListener('DOMContentLoaded', () => {
    const sportsCarousel = document.getElementById('sportsCarousel');
    const leftArrow = document.querySelector('.left-arrow');
    const rightArrow = document.querySelector('.right-arrow');

    const scrollCarousel = (direction) => {
        const scrollAmount = sportsCarousel.clientWidth * 0.8;

        if (direction === 'left') {
            sportsCarousel.scrollBy({
                left: -scrollAmount,
                behavior: 'smooth'
            });
        } else {
            sportsCarousel.scrollBy({
                left: scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    leftArrow.addEventListener('click', () => scrollCarousel('left'));
    rightArrow.addEventListener('click', () => scrollCarousel('right'));

    const checkScrollEnd = () => {
        if (sportsCarousel.scrollLeft === 0) {
            leftArrow.style.display = 'none';
        } else {
            leftArrow.style.display = 'flex';
        }

        if (sportsCarousel.scrollLeft + sportsCarousel.clientWidth >= sportsCarousel.scrollWidth - 1) {
            rightArrow.style.display = 'none';
        } else {
            rightArrow.style.display = 'flex';
        }
    };

    checkScrollEnd();

    sportsCarousel.addEventListener('scroll', checkScrollEnd);

    window.addEventListener('resize', checkScrollEnd);
});










/*sports category section */


document.addEventListener('DOMContentLoaded', () => {
 
    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');

  
    addToCartButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const productCard = event.target.closest('.product-card');
            const productName = productCard.querySelector('.product-name').textContent;
            const productPrice = productCard.querySelector('.product-price').textContent;

            
            console.log(`Product "${productName}" (Price: ${productPrice}) added to cart.`);

            
            button.textContent = 'Added!';
            button.style.backgroundColor = '#28a745'; 
            button.style.pointerEvents = 'none'; 

           
            setTimeout(() => {
                button.textContent = 'ADD TO CART';
                button.style.backgroundColor = '#3a47c2';
                button.style.pointerEvents = 'auto'; 
            }, 2000);
        });
    });

  /*product section */ 
    const likeButtons = document.querySelectorAll('.like-button');

 
    likeButtons.forEach(button => {
        button.addEventListener('click', () => {
           
            button.classList.toggle('liked');

       
            if (button.classList.contains('liked')) {
                console.log('Product liked!');
            } else {
                console.log('Product unliked!');
            }
        });
    });
});




/*women product section */

document.addEventListener('DOMContentLoaded', () => {
    const sliderContent = document.querySelector('.slider-content');
    const leftArrow = document.querySelector('.left-arrow');
    const rightArrow = document.querySelector('.right-arrow');

    const scrollSlider = (direction) => {
        // Calculate the scroll amount based on the visible width of the slider and item size
        const slideItemWidth = document.querySelector('.slide-item').offsetWidth + 20; // Item width + total horizontal margin
        const scrollAmount = sliderContent.offsetWidth; // Scroll by the width of the visible container

        if (direction === 'left') {
            sliderContent.scrollBy({
                left: -scrollAmount, // Scroll back by the visible container width
                behavior: 'smooth'
            });
        } else {
            sliderContent.scrollBy({
                left: scrollAmount, // Scroll forward by the visible container width
                behavior: 'smooth'
            });
        }
    };

    leftArrow.addEventListener('click', () => scrollSlider('left'));
    rightArrow.addEventListener('click', () => scrollSlider('right'));

    let isDown = false;
    let startX;
    let scrollLeft;

    sliderContent.addEventListener('mousedown', (e) => {
        isDown = true;
        sliderContent.classList.add('active');
        startX = e.pageX - sliderContent.offsetLeft;
        scrollLeft = sliderContent.scrollLeft;
    });

    sliderContent.addEventListener('mouseleave', () => {
        isDown = false;
        sliderContent.classList.remove('active');
    });

    sliderContent.addEventListener('mouseup', () => {
        isDown = false;
        sliderContent.classList.remove('active');
    });

    sliderContent.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - sliderContent.offsetLeft;
        const walk = (x - startX) * 2;
        sliderContent.scrollLeft = scrollLeft - walk;
    });
});



/* nature */
document.addEventListener('DOMContentLoaded', () => {
    const sliderContent = document.querySelector('.trek-slider-content');
    const leftArrow = document.querySelector('.trek-left-arrow');
    const rightArrow = document.querySelector('.trek-right-arrow');

    const scrollSlider = (direction) => {
        const slideItemWidth = document.querySelector('.trek-slide-item').offsetWidth + 20; // item width + margin (10px left + 10px right)
        const scrollAmount = sliderContent.offsetWidth; // Scroll by the width of the visible container

        if (direction === 'left') {
            sliderContent.scrollBy({
                left: -scrollAmount,
                behavior: 'smooth'
            });
        } else {
            sliderContent.scrollBy({
                left: scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    if (leftArrow) {
        leftArrow.addEventListener('click', () => scrollSlider('left'));
    }
    if (rightArrow) {
        rightArrow.addEventListener('click', () => scrollSlider('right'));
    }

    let isDown = false;
    let startX;
    let scrollLeft;

    if (sliderContent) {
        sliderContent.addEventListener('mousedown', (e) => {
            isDown = true;
            sliderContent.classList.add('active');
            startX = e.pageX - sliderContent.offsetLeft;
            scrollLeft = sliderContent.scrollLeft;
        });

        sliderContent.addEventListener('mouseleave', () => {
            isDown = false;
            sliderContent.classList.remove('active');
        });
        

        sliderContent.addEventListener('mouseup', () => {
            isDown = false;
            sliderContent.classList.remove('active');
        });

        sliderContent.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - sliderContent.offsetLeft;
            const walk = (x - startX) * 2;
            sliderContent.scrollLeft = scrollLeft - walk;
        });
    }
});





/*cart12*/



document.addEventListener('DOMContentLoaded', function () {
    const carouselWrapper = document.querySelector('.product-carousel-content');
    const leftArrow = document.querySelector('.left-arrow');
    const rightArrow = document.querySelector('.right-arrow');

    if (!carouselWrapper || !leftArrow || !rightArrow) {
        console.error("Carousel elements not found!");
        return;
    }

    const scrollAmount = 300; // Adjust this value as needed

    leftArrow.addEventListener('click', () => {
        carouselWrapper.scrollLeft -= scrollAmount;
    });

    rightArrow.addEventListener('click', () => {
        carouselWrapper.scrollLeft += scrollAmount;
    });
});



/* contact us*/










