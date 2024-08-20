document.addEventListener('DOMContentLoaded', function () {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');

    navbarToggler.addEventListener('click', function () {
        navbarCollapse.classList.toggle('show');
    });

    const closeBtn = document.createElement('button');
    closeBtn.classList.add('close-btn');
    closeBtn.innerHTML = '&times;';
    closeBtn.addEventListener('click', function () {
        navbarCollapse.classList.remove('show');
    });

    navbarCollapse.appendChild(closeBtn);
});

// Carousel Functionality (if needed)
document.addEventListener('DOMContentLoaded', function () {
    const indicators = document.querySelectorAll('.carousel-indicator');
    let activeIndex = 0;

    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            indicators[activeIndex].classList.remove('active');
            activeIndex = index;
            indicators[activeIndex].classList.add('active');
            // Logic to change images goes here
        });
    });
});
