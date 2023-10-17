// The DOM
const colorEl = document.querySelector('.color');
const btn = document.getElementById('btn');

btn.addEventListener('click', function () {
    let rgbColor = '';
    let rgb = [];
    for (let i = 0; i < 3; i++) {
        rgb.push(getRandomNumber())
    }
    rgbColor = `rgb(${rgb[0]},${rgb[1]},${rgb[2]})`
    console.log(rgbColor)
    document.body.style.backgroundColor = rgbColor;
    colorEl.textContent = rgbColor;
})

function getRandomNumber() {
    return Math.floor(Math.random() * 255);
}