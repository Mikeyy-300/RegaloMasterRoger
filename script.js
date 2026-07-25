const button = document.getElementById("openButton");
const intro = document.getElementById("intro");
const gift = document.getElementById("gift");
const giftImage = document.getElementById("giftImage");
const paypalScreen = document.getElementById("paypalScreen");
const photoRain = document.getElementById("photoRain");

button.addEventListener("click", () => {
    intro.style.display = "none";
    gift.classList.remove("hidden");
});

giftImage.addEventListener("click", () => {
    giftImage.classList.add("opened");

    setTimeout(() => {
        giftImage.src = "images/gift-open.png";
    }, 400);

    setTimeout(() => {
        gift.style.display = "none";
        paypalScreen.classList.remove("hidden");
        createPhotoRain();
    }, 1500);
});

function createPhotoRain() {
    for (let i = 0; i < 40; i++) {
        const img = document.createElement("img");
        const number = Math.floor(Math.random() * 10);

        // Assicurati che i file siano tutti minuscoli: 0.png, 1.png ... 9.png
        img.src = `images/${number}.png`;

        img.classList.add("falling-photo");
        img.style.left = Math.random() * 100 + "vw";
        img.style.animationDuration = (6 + Math.random() * 8) + "s";
        img.style.animationDelay = (-Math.random() * 10) + "s";
        img.style.width = (50 + Math.random() * 60) + "px";

        photoRain.appendChild(img);
    }
}
