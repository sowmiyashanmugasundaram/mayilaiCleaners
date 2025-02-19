document.addEventListener("DOMContentLoaded", function () {
    // Initialize Swiper Slider
    const swiper = new Swiper('.mySwiper', {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            640: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            },
        },
    });

    // Debugging Swiper Navigation Buttons
    const nextButton = document.querySelector(".swiper-button-next");
    const prevButton = document.querySelector(".swiper-button-prev");
    console.log("Next Button:", nextButton); // Should not be null
    console.log("Previous Button:", prevButton); // Should not be null

    // Contact Form Validation
    const estimateForm = document.getElementById("estimateForm");
    estimateForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form submission

        const firstName = document.getElementById("firstName").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const message = document.getElementById("message").value.trim();

        // Validation checks
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
        estimateForm.submit(); // Submit the form if everything is valid
    });
});
