// Order button alert
function orderNow() {
    alert("Redirecting to the order page!");
}

// Newsletter subscription
function subscribeNewsletter() {
    const email = document.getElementById("email").value;
    const msg = document.getElementById("subscribe-msg");
    if(email) {
        msg.textContent = `Thank you for subscribing, ${email}!`;
        msg.style.color = "#3A6EA5";
        document.getElementById("email").value = "";
    } else {
        msg.textContent = "Please enter a valid email.";
        msg.style.color = "red";
    }
}

// Testimonial Slider
let testimonials = document.querySelectorAll('.testimonial');
let currentIndex = 0;

function showNextTestimonial() {
    testimonials[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % testimonials.length;
    testimonials[currentIndex].classList.add('active');
}

setInterval(showNextTestimonial, 4000);
