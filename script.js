// ===== Показ/приховування пароля =====
const passwordInput = document.getElementById('password');
const showPasswordCheckbox = document.getElementById('showPassword');

showPasswordCheckbox.addEventListener('change', function () {
    if (this.checked) {
        passwordInput.type = 'text';
    } else {
        passwordInput.type = 'password';
    }
});

// ===== Обробка кнопки Submit =====
const form = document.getElementById('form');
const popup = document.getElementById('popup');
const lettersOutput = document.getElementById('lettersOutput');
const closePopup = document.getElementById('closePopup');

form.addEventListener('submit', function (event) {
    event.preventDefault(); // зупиняємо стандартну відправку форми

    // Отримуємо ім'я
    const name = document.getElementById('name').value.trim();

    // Очищаємо попередній вміст
    lettersOutput.innerHTML = '';

    // Перебираємо кожну літеру і виводимо її
    for (let i = 0; i < name.length; i++) {
        const letter = name[i];

        // Пропускаємо пробіли
        if (letter === ' ') continue;

        // Створюємо блок для літери
        const span = document.createElement('span');
        span.className = 'letter';
        span.textContent = letter.toUpperCase();

        lettersOutput.appendChild(span);
    }

    // Показуємо pop-up
    popup.classList.add('active');
});

// ===== Закриття pop-up =====
closePopup.addEventListener('click', function () {
    popup.classList.remove('active');
});

// Закриття при кліку поза вікном
popup.addEventListener('click', function (event) {
    if (event.target === popup) {
        popup.classList.remove('active');
    }
});
