document.addEventListener("DOMContentLoaded", function () {

    const contactForm = document.getElementById("contactForm");
    const successMessage = document.getElementById("success");

    if (contactForm) {

        contactForm.addEventListener("submit", function (e) {

            e.preventDefault();

            successMessage.style.display = "block";

            contactForm.reset();

            setTimeout(function () {
                successMessage.style.display = "none";
            }, 3000);

        });

    }

    const themeToggle = document.getElementById("themeToggle");

    if (themeToggle) {

        themeToggle.addEventListener("click", function () {

            document.body.classList.toggle("dark-mode");

            if (document.body.classList.contains("dark-mode")) {

                themeToggle.textContent = "☀️";

            } else {

                themeToggle.textContent = "🌙";

            }

        });

    }

});