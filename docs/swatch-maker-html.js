const img = new Image(180, 180);
img.src = "smalltest.png";
img.onload = () => {ctx.drawImage(img, 0, 0)}

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

function getSwatch() {
    var imgData = ctx.getImageData(0, 0, 150, 300);
    console.log(imgData);
}
