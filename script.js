const button = document.getElementById("openButton");

const intro = document.getElementById("intro");

const gift = document.getElementById("gift");

const giftImage = document.getElementById("giftImage");



button.addEventListener("click", () => {


    intro.style.display = "none";


    gift.classList.remove("hidden");


});




giftImage.addEventListener("click", () => {


    giftImage.classList.add("opened");


    setTimeout(() => {


        giftImage.src = "images/gift-open.png";


    }, 400);


});
