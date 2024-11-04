let hue = 0;
const message = document.querySelector('.message');

const updateBackgroundColor = () => {
    document.body.style.backgroundColor = `hsl(${hue}, 100%, 50%)`;

    if (hue <= 230 && hue >= 210) {
        message.classList.remove('hidden');
    } else {
        message.classList.add('hidden');
    }
    hue = (hue + 1) % 361;
    requestAnimationFrame(updateBackgroundColor);
}

updateBackgroundColor();