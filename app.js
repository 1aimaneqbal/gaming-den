const hamburger = document.querySelector(".hamburger");
const mnavlinks = document.querySelector(".mnavlinks");

hamburger.addEventListener("click", () => {
    mnavlinks.classList.toggle("open");
    console.log("clciked")
});