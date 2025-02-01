 document.addEventListener("DOMContentLoaded", function () {
    // Debugging Swiper Navigation Buttons
    console.log(document.querySelector(".swiper-button-next")); // Should not be null
    console.log(document.querySelector(".swiper-button-prev")); // Should not be null

    // Initialize Swiper
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
        }
    });

    // Contact Form Validation
    document.getElementById("estimateForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form submission
        let firstName = document.getElementById("firstName").value.trim();
        let email = document.getElementById("email").value.trim();
        let phone = document.getElementById("phone").value.trim();
        let message = document.getElementById("message").value.trim();

        if (firstName === "") {
            alert("First name is required.");
            return;
        }
        if (email === "" || !/^\S+@\S+\.\S+$/.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }
        if (phone !== "" && !/^\d{10}$/.test(phone)) {
            alert("Please enter a valid 10-digit phone number.");
            return;
        }
        if (message === "") {
            alert("Message is required.");
            return;
        }

        alert("Form submitted successfully!");
        this.submit(); // Submit the form if everything is valid
    });
});
