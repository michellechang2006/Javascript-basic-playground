const colors = ['#79AC78', '#FACBEA', 'rgb(63, 114, 175)', '#D2E0FB', 'rgb(255, 204, 112)', '#FFC7C7', '#EF9595', 'rgb(142, 205, 221)'];

// The DOM

const colorEl = document.querySelector(".color");
const btn = document.getElementById('btn');

btn.addEventListener('click', function () {
    const randomNumber = getRandomNumber()
    document.body.style.backgroundColor = colors[randomNumber];
    colorEl.textContent = colors[randomNumber];
});


function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}