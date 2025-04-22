
const colorPicker = document.getElementById('colorPicker');
const uploadInput = document.getElementById('upload');
const canvas = document.getElementById('preview');
const ctx = canvas.getContext('2d');
const downloadBtn = document.getElementById('downloadBtn');

let baseColor = '#ffffff';
let image = new Image();

function drawShirt() {
    ctx.fillStyle = baseColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    if (image.src) {
        ctx.drawImage(image, 150, 150, 200, 200);
    }
}

colorPicker.addEventListener('input', (e) => {
    baseColor = e.target.value;
    drawShirt();
});

uploadInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (event) => {
        image.src = event.target.result;
        image.onload = drawShirt;
    };
    reader.readAsDataURL(file);
});

downloadBtn.addEventListener('click', () => {
    const link = document.createElement('a');
    link.download = 'tsigns_design.png';
    link.href = canvas.toDataURL();
    link.click();
});

drawShirt();
