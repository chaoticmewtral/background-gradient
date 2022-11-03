const canvas = document.getElementById('canvas');
const canvasHeight = canvas.offsetHeight;
const canvasWidth = canvas.offsetWidth;

const square = document.getElementById('square');

canvas.addEventListener('click', function getPosition(e) {
    console.log(e.clientX, e.clientY);
    const xCoord = (100 * ((e.clientX - canvas.offsetLeft) / canvasWidth)) + '%';
    const yCoord = (100 * ((e.clientY - canvas.offsetTop) / canvasHeight)) + '%';

    square.style.position = 'relative';
    square.style.top = yCoord;
    square.style.left = xCoord;
});