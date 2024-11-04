let clickCount = 0;

document.addEventListener("click", function () {
    clickCount++;

    if (clickCount === 4) {
        document.body.style.backgroundColor = "green";

        clickCount = 0;

        setTimeout(function () {
            document.body.style.backgroundColor = "red";
        }, 2000);
    }
});