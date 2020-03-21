/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

const imageLinks = [
  './assets/carousel/mountains.jpeg',
  './assets/carousel/computer.jpeg',
  './assets/carousel/trees.jpeg',
  './assets/carousel/turntable.jpeg',
];

const createCarousel = (imageLinks, i) => {

  let images = [];

  // Create elements
  const carousel = document.createElement('div');
  const leftButton = document.createElement('div');
  images[0] = document.createElement('img');
  images[1] = document.createElement('img');
  images[2] = document.createElement('img');
  images[3] = document.createElement('img');
  const rightButton = document.createElement('div');
  
  // Create structure
  carousel.append(leftButton, images[0], images[1], images[2], images[3], rightButton);

  // Add styles and set Attributes
  carousel.classList.add('carousel');
  leftButton.classList.add('left-button');
  images[0].setAttribute('src' , imageLinks[0]);
  images[1].setAttribute('src' , imageLinks[1]);
  images[2].setAttribute('src' , imageLinks[2]);
  images[3].setAttribute('src' , imageLinks[3]);
  images[i].setAttribute('style', 'display: block');
  rightButton.classList.add('right-button');

  // Add content
  leftButton.textContent = ` < `;
  rightButton.textContent = ` > `;

  return carousel;
}

const carouselContainer = document.querySelector('.carousel-container');
let i = 0;
carouselContainer.appendChild(createCarousel(imageLinks, i));

const leftBtn = document.querySelector('.left-button');
leftBtn.addEventListener('click', (event) => {
  var imgs = document.querySelectorAll('.carousel img');
  imgs[i].style.display = 'none';
  if (i == 3) {
    i = 0;
  } else {
    i = i + 1;
  };
  imgs[i].style.display = 'block';
});

const rightBtn = document.querySelector('.right-button');
rightBtn.addEventListener('click', (event) => {
  var imgs = document.querySelectorAll('.carousel img');
  imgs[i].style.display = 'none';
  if (i == 0) {
    i = 3;
  } else {
    i = i - 1;
  };
  imgs[i].style.display = 'block';
});


