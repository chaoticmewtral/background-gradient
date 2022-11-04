const canvas = document.getElementById('canvas');
const canvasHeight = canvas.offsetHeight;
const canvasWidth = canvas.offsetWidth;



canvas.addEventListener('click', function getPosition(e) {
    const xCoord = (100 * ((e.clientX - canvas.offsetLeft) / canvasWidth)) + '%';
    const yCoord = (100 * ((e.clientY - canvas.offsetTop) / canvasHeight)) + '%';

    console.log(xCoord, yCoord);
});

