// The DOM

const colorEl = document.querySelector('.color');
const btn = document.getElementById('btn');

btn.addEventListener('click', function () {
    let hslColor = '';
    let hsl = [];
    for (let i = 0; i < 3; i++) {
        hsl.push(getOthers());
    }
    console.log(hsl)
    hslColor = `hsl(${getHue()},${hsl[0]}%,${hsl[1]}%)`
    document.body.style.backgroundColor = hslColor;
    colorEl.textContent = hslColor;
    console.log(hslColor);
})

function getHue() {
    return Math.floor(Math.random() * 360);
}

function getOthers() {
    return Math.floor(Math.random() * 100);
}