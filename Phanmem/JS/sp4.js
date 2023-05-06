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

//function show cart add success
function showMessAddCart() {
  // console.log("show mess");
  // show message
  let mess_addCart = document.getElementById('addcart--success');
  let all = document.getElementById('background');
  all.style.opacity = 0.6;
  mess_addCart.style.display = 'flex';
  let show = document.getElementById('addcart--success');
  show.classList.add('animationShow');
  // auto close after 4.5s
  const timeout = setTimeout(close, 2800);
  //close by mouse

  let close_let = document.getElementsByClassName('addcart__icon_exit');
  close_let[0].addEventListener('click', function () {
      // console.log("close by mouse");
      // chang attribute
      let mess_addCart = document.getElementById('addcart--success');
      let all = document.getElementById('background');
      all.style.opacity = 1.6;
      mess_addCart.style.display = 'none';
      // clearTimeout auto close toast
      clearTimeout(timeout);
      // console.log("close by mouse");
  });
}

let btn_addCart = document.getElementsByClassName('btn info_Product__Btn--shopping');
Array.from(btn_addCart).forEach(function (element) {
  element.addEventListener('click', showMessAddCart);
});


// close mess showed
function close() {
  // console.log("close by auto");
  // chang attribute
  let mess_addCart = document.getElementById('addcart--success');
  let all = document.getElementById('background');
  all.style.opacity = 1;
  mess_addCart.style.display = 'none';
  // clearTimeout auto close toast
}
