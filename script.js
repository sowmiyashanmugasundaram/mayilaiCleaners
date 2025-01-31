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
  const contactForm = document.getElementById("estimate-section");
  if (contactForm) {
      contactForm.addEventListener("submit", function (e) {
          e.preventDefault();
        
          const name = document.getElementById("name").value.trim();
          const email = document.getElementById("email").value.trim();
          const message = document.getElementById("message").value.trim();
        
          let hasError = false;
        
          // Clear previous errors
          document.getElementById("nameError").textContent = "";
          document.getElementById("emailError").textContent = "";
          document.getElementById("messageError").textContent = "";
        
          // Name validation
          if (!name) {
              document.getElementById("nameError").textContent = "Name is required.";
              hasError = true;
          }
        
          // Email validation
          const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
          if (!email) {
              document.getElementById("emailError").textContent = "Email is required.";
              hasError = true;
          } else if (!emailPattern.test(email)) {
              document.getElementById("emailError").textContent = "Enter a valid email.";
              hasError = true;
          }
        
          // Message validation
          if (!message) {
              document.getElementById("messageError").textContent = "Message is required.";
              hasError = true;
          }
        
          // If no errors, alert user and clear form
          if (!hasError) {
              alert("Form submitted successfully!");
              contactForm.reset();
          }
      });
  } else {
      console.warn("Contact form not found!");
  }
});
