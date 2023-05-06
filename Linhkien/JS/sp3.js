let slideIndex = 1;
showSlides(slideIndex);

function showSlides(n) {
  const slides = document.getElementsByClassName("slide");
  const thumbnails = document.getElementsByClassName("thumbnail");

  if (n > slides.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = slides.length;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (let i = 0; i < thumbnails.length; i++) {
    thumbnails[i].classList.remove("active");
  }

  slides[slideIndex - 1].style.display = "block";
  thumbnails[slideIndex - 1].classList.add("active");
  slideIndex++;
  setTimeout(() => {
    showSlides(slideIndex);
  }, 4000);
}

const thumbnailList = document.querySelectorAll(".thumbnail");
thumbnailList.forEach((thumbnail, index) => {
  thumbnail.addEventListener("click", () => {
    slideIndex = index + 1;
    showSlides(slideIndex);
  });
});