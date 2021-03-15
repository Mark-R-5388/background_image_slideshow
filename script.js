let imageArray = [
  './images/image-0.jpeg',
  './images/image-1.jpeg',
  './images/image-2.jpeg',
  './images/image-3.jpeg',
  './images/image-4.jpeg',
];

const btn = document.querySelectorAll('.btn');
const container = document.getElementById('container');
console.log(btn);
console.log(container);

let counter = 0;

btn.forEach(function (button) {
  button.addEventListener('click', function (e) {
    if (button.classList.contains('left-btn')) {
      counter--;
      console.log(counter);
      if (counter < 0) {
        counter = imageArray.length - 1;
      }
      container.style.backgroundImage = `url('./images/image-${counter}.jpeg')`;
    }
    if (button.classList.contains('right-btn')) {
      counter++;
      console.log(counter);
      if (counter > imageArray.length - 1) {
        counter = 0;
      }
      container.style.backgroundImage = `url('./images/image-${counter}.jpeg')`;
    }
  });
});
