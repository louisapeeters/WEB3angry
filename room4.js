const NUM_CHARACTERS = 100;
const CONTAINER = document.getElementById("container");
const CHARACTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
const SPECIAL_CHAR = "2";

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createCharacter(isSpecial = false) {
    const char = document.createElement("div");
    char.className = "character";
    char.textContent = isSpecial ? SPECIAL_CHAR : CHARACTERS[randomInt(0, CHARACTERS.length - 1)];
    if (isSpecial) char.classList.add("special");

    char.style.left = `${randomInt(0, window.innerWidth)}px`;
    char.style.top = `${randomInt(0, window.innerHeight)}px`;

    char.speedX = (Math.random() - 0.5) * 4; // Speed range: -2 to 2
    char.speedY = (Math.random() - 0.5) * 4; // Speed range: -2 to 2

    CONTAINER.appendChild(char);
    return char;
}

const characters = Array.from({ length: NUM_CHARACTERS }, (_, index) =>
    createCharacter(index === 0) // Only the first character is the special one
);

function animate() {
    characters.forEach((char) => {
        const rect = char.getBoundingClientRect();

        let newX = rect.left + char.speedX;
        let newY = rect.top + char.speedY;

        if (newX <= 0 || newX + rect.width >= window.innerWidth) {
            char.speedX *= -1; // Reverse horizontal direction
            newX = Math.max(0, Math.min(newX, window.innerWidth - rect.width));
        }

        if (newY <= 0 || newY + rect.height >= window.innerHeight) {
            char.speedY *= -1; // Reverse vertical direction
            newY = Math.max(0, Math.min(newY, window.innerHeight - rect.height));
        }

        char.style.left = `${newX}px`;
        char.style.top = `${newY}px`;
    });

    requestAnimationFrame(animate);
}

// Start animation
animate();
