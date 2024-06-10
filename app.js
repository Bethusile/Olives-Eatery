const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.links');
    const navLinks = document.querySelectorAll('.links li');

    burger.addEventListener('click', () => {
        //Toggle menu nav
        nav.classList.toggle('nav-active');
        //burger animation
        burger.classList.toggle('toggle');

        //Animate links
        navLinks.forEach((link, index) => {
            if (link.style.animation){
                link.style.animation = '';
            }
            else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }        
        });
    });   
}

//Toggle menu nav
navSlide();

//Slide show of gallery

const images = [
    'images/birthdays.jpg',
    'images/baby shower1.jpg',
    'images/baby shower chair.jpg',
    'images/front1.jpg',
    'images/kids bday.jpg',
    'images/wine1.jpg',
    'images/wine tasting.jpg',
    'images/menu front.jpg',
    'images/menu back.jpg',
    // more image paths
];

let currentIndex = 0;

function showImage(index) {
    const slideImage = document.getElementById('current-slide');
    currentIndex = index;
    slideImage.src = images[currentIndex];
}

function changeSlide(step) {
    currentIndex += step;
    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    } else if (currentIndex >= images.length) {
        currentIndex = 0;
    }
    showImage(currentIndex);
}

// Initialize the slideshow with the first image
showImage(currentIndex);

// Booking
document.addEventListener("DOMContentLoaded", function() {
    const bookingType = document.getElementById("bookingType");
    const eventType = document.getElementById("eventType");
    const bookingForm = document.getElementById("bookingForm");
    const acknowledgmentMessage = document.getElementById("acknowledgmentMessage");
    const alertHeading = acknowledgmentMessage.querySelector('h4');
    const alertMessage = acknowledgmentMessage.querySelector('p');

    bookingType.addEventListener("change", function() {
        if (this.value === "event") {
            eventType.style.display = "block";
            eventType.required = true;
        } else {
            eventType.style.display = "none";
            eventType.required = false;
        }
    });

    bookingForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;
        const seats = parseInt(document.getElementById("seats").value);
        const date = new Date(document.getElementById("date").value);
        const time = document.getElementById("time").value;
        const bookingType = document.getElementById("bookingType").value;
        const eventType = document.getElementById("eventType").value;

        const currentDate = new Date();
        const todayCutOffTime = new Date();
        todayCutOffTime.setHours(12, 0, 0, 0);

        let reservationMessage = "";

        // Check if the date is historic or after today's cutoff
        if (date < currentDate || (date.getTime() === currentDate.getTime() && currentDate > todayCutOffTime)) {
            reservationMessage = "Please select a valid date and time.";
            acknowledgmentMessage.classList.remove('alert-success');
            acknowledgmentMessage.classList.add('alert-danger');
        } else {
            // Check if the number of seats exceeds the maximum limit
            if (seats > 40) {
                reservationMessage = "Booking failed. Maximum seats exceeded.";
                acknowledgmentMessage.classList.remove('alert-success');
                acknowledgmentMessage.classList.add('alert-danger');
            } else {
                reservationMessage = "Reservation successful!";
                acknowledgmentMessage.classList.remove('alert-danger');
                acknowledgmentMessage.classList.add('alert-success');
                // Hide form after successful submission
                bookingForm.style.display = "none";
            }
        }

        // Display acknowledgment message
        acknowledgmentMessage.style.display = "block";
        alertHeading.textContent = reservationMessage.includes("successful") ? "Success!" : "Error!";
        alertMessage.textContent = reservationMessage;
    });
});
