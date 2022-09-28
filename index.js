const rightArrow = document.querySelector(".right-arrow");
const leftArrow = document.querySelector(".left-arrow");
let slidePosition = 0;

const createSlides = (numOfSlides) => {
  const slideShowContainer = document.querySelector(".slideshow-container");
  for (let i = 0; i < numOfSlides; i++) {
    const slide = document.createElement("img");
    slide.classList.add("slide");
    slide.xPos = i * 1000;
    slide.src = `pic-${i}.png`;
    slide.style.transform = `translateX(${slide.xPos}px)`;
    slideShowContainer.append(slide);
  }
};

const fillCircles = () => {
  const circles = document.querySelectorAll(".counter-circle");

  circles.forEach((item, index) => {
    if (index === slidePosition) {
      item.style.backgroundColor = "#0033FF";
    } else {
      item.style.backgroundColor = "white";
    }
  });
};

rightArrow.addEventListener("click", () => {
  if (slidePosition === 3) {
    return;
  }
  slidePosition++;
  fillCircles();
  const slides = document.querySelectorAll(".slide");
  slides.forEach((item) => {
    item.xPos -= 1000;
    item.style.transform = `translateX(${item.xPos}px)`;
  });
});

leftArrow.addEventListener("click", () => {
  if (slidePosition === 0) {
    return;
  }
  slidePosition--;
  fillCircles();
  const slides = document.querySelectorAll(".slide");
  slides.forEach((item) => {
    item.xPos += 1000;
    item.style.transform = `translateX(${item.xPos}px)`;
  });
});

createSlides(4);
fillCircles();
