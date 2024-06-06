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

let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("slide");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex-1].style.display = "block";  
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}