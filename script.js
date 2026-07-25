const button = document.getElementById("openButton");

const intro = document.getElementById("intro");

const gift = document.getElementById("gift");

const giftBox = document.getElementById("giftBox");


button.addEventListener("click", () => {

    intro.style.display = "none";

    gift.classList.remove("hidden");

});


giftBox.addEventListener("click", () => {

    giftBox.classList.add("opened");

});
