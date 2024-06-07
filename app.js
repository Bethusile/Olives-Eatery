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
    'images/front1.jpg',
    'images/baby shower1.jpg',
    'images/baby shower chair.jpg',
    'images/birthdays.jpg',
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
        const seats = document.getElementById("seats").value;
        const date = document.getElementById("date").value;
        const time = document.getElementById("time").value;
        const bookingType = document.getElementById("bookingType").value;
        const eventType = document.getElementById("eventType").value;

        const bookingDetails = {
            name: name,
            email: email,
            phone: phone,
            seats: seats,
            date: date,
            time: time,
            bookingType: bookingType,
            eventType: eventType
        };

        // Display acknowledgment message
        acknowledgmentMessage.style.display = "block";
        acknowledgmentMessage.innerHTML = `
            <p>Thank you for your booking, ${bookingDetails.name}!</p>
            <p>Booking Type: ${bookingDetails.bookingType}</p>
            <p>Number of Seats: ${bookingDetails.seats}</p>
            <p>Date: ${bookingDetails.date}</p>
            <p>Time: ${bookingDetails.time}</p>
        `;
        if (bookingDetails.bookingType === "event") {
            acknowledgmentMessage.innerHTML += `<p>Event Type: ${bookingDetails.eventType}</p>`;
        }
        acknowledgmentMessage.innerHTML += `<p>We have sent a confirmation to your email: ${bookingDetails.email}</p>`;
        
        // Hide form after submission
        bookingForm.style.display = "none";
    });
});
