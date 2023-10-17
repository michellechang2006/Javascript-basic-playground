let value = 0;
const btns = document.querySelectorAll('.btn');
const valueEl = document.getElementById('value');

btns.forEach(function (btn) {
    btn.addEventListener('click', function (event) {
        const style = event.currentTarget.classList
        if (style.contains('decrease')) {
            value--;
        } else if (style.contains('increase')) {
            value++;
        } else {
            value = 0;
        }
        if (value > 0) {
            valueEl.style.color = 'green';
        } else if (value < 0) {
            valueEl.style.color = 'red';
        } else {
            valueEl.style.color = 'var(--primary-color)';
        }
        valueEl.textContent = value;

        console.log(btns)
        console.log(btn)
        console.log(style)
        console.log(event)
        
    });
});