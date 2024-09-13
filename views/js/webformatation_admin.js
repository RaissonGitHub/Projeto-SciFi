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

if (window.matchMedia("(max-width: 998px)").matches) {
    adminToggler.addEventListener('click', function () {
        adminNavbar.style.display = 'block';
    });
}

//Add event

document.addEventListener('DOMContentLoaded', function () {
    const participantsInput = document.getElementById('participants');
    const participantsContainer = document.getElementById('participants-container');
    const deleteButton = document.getElementById('delete-participant');

    participantsInput.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' && participantsInput.value.trim() !== '') {
            const participantName = participantsInput.value.trim();
            const participantId = `participant-${participantName.replace(/\s+/g, '-').toLowerCase()}`;

            if (!document.getElementById(participantId)) {
                const div = document.createElement('div');
                div.className = 'form-check';
                div.innerHTML = `
                    <input class="form-check-input" type="checkbox" value="${participantName}" id="${participantId}">
                    <label class="form-check-label" for="${participantId}">${participantName}</label>
                `;
                participantsContainer.appendChild(div);
                participantsInput.value = '';
            }
            e.preventDefault();
        }
    });

    deleteButton.addEventListener('click', function () {
        const checkboxes = participantsContainer.querySelectorAll('input[type="checkbox"]:checked');
        checkboxes.forEach(checkbox => {
            participantsContainer.removeChild(checkbox.parentElement);
        });
    });
});