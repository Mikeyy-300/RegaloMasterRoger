const button = document.getElementById("openButton");

const intro = document.getElementById("intro");

const gift = document.getElementById("gift");


button.addEventListener("click",()=>{

    intro.style.display="none";

    gift.classList.remove("hidden");

});
