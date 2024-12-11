function loadPartial(file, elementId) {
    fetch(file)
        .then(response => response.text())
        .then(data => {
            const element = document.getElementById(elementId);
            if (element) {
                element.innerHTML = data;
            } else {
                console.error(`Element with ID "${elementId}" not found`);
            }
        })
        .catch(error => console.error("Error loading partial:", error));
}

document.addEventListener("DOMContentLoaded", () => {
    // Загружаем частичные файлы
    loadPartial('partials/header.html', 'header');
    loadPartial('partials/navbar.html', 'navbar');
    loadPartial('partials/footer.html', 'footer');

    // Обработчик для бургер-меню
    const burgerMenu = document.getElementById("burger-menu");
    if (burgerMenu) {
        burgerMenu.addEventListener("click", function() {
            var sidebar = document.getElementById("navbar");
            sidebar.classList.toggle("open"); // Открываем/закрываем меню
        });
    } else {
        console.error('Element with id "burger-menu" not found');
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const servicesLink = document.getElementById("services-link");
    const servicesMenu = document.getElementById("services-menu");

    if (servicesLink && servicesMenu) {
        servicesLink.addEventListener("mouseenter", function() {
            servicesMenu.style.display = 'block'; // Показываем выпадающее меню
        });

        servicesLink.addEventListener("mouseleave", function() {
            servicesMenu.style.display = 'none'; // Прячем выпадающее меню
        });
    }
});



function toggleSidebar() {
    const navbar = document.getElementById('navbar');
    navbar.classList.toggle('open');
  }

  // Функция для закрытия бокового меню
  function closeSidebar() {
    const navbar = document.getElementById('navbar');
    navbar.classList.remove('open');
  }