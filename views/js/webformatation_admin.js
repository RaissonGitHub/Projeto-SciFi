document.addEventListener('DOMContentLoaded', function () {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const adminToggler = document.querySelector('.admin-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    const adminNavbar = document.querySelector('.admin-navbar');

    navbarToggler.addEventListener('click', function () {
        navbarCollapse.classList.toggle('show');
    });

    const closeBtn1 = document.createElement('button');
    closeBtn1.classList.add('close-btn');
    closeBtn1.innerHTML = '&times;';
    closeBtn1.addEventListener('click', function () {
        navbarCollapse.classList.remove('show');
    });

    navbarCollapse.appendChild(closeBtn1);

    const closeBtn2 = document.createElement('button');
    closeBtn2.classList.add('close-btn');
    closeBtn2.innerHTML = '&times;';
    closeBtn2.addEventListener('click', function () {
        adminNavbar.style.display = 'none';
    });

    adminNavbar.appendChild(closeBtn2);
});

const adminToggler = document.querySelector('.admin-toggler');
const adminNavbar = document.querySelector('.admin-navbar');

if (window.matchMedia("(max-width: 768px)").matches) {
    adminToggler.addEventListener('click', function () {
        adminNavbar.style.display = 'block';
    });
}