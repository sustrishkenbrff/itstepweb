const sliderItemNodes = document.getElementsByClassName('slider-item');
let currentIndex = 0;

const clickLeft = () => {
  sliderItemNodes[currentIndex].classList.remove('selected');
  currentIndex = (currentIndex - 1 + sliderItemNodes.length) % sliderItemNodes.length;
  sliderItemNodes[currentIndex].classList.add('selected');
};

const clickRight = () => {
  sliderItemNodes[currentIndex].classList.remove('selected');
  currentIndex = (currentIndex + 1) % sliderItemNodes.length;
  sliderItemNodes[currentIndex].classList.add('selected');
};

document.getElementById('left').addEventListener('click', clickLeft);
document.getElementById('right').addEventListener('click', clickRight);

let intervalId;

document.getElementById('right').addEventListener('mousedown', () => {
  intervalId = setInterval(clickRight, 1500);
});

document.getElementById('right').addEventListener('mouseup', () => {
  clearInterval(intervalId);
});
