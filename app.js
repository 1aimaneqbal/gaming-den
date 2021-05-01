const hamburger = document.querySelector(".hamburger");
const closeham = document.querySelector(".closeham");
const mnavlinks = document.querySelector(".mnavlinks");

hamburger.addEventListener("click", () => {
    mnavlinks.classList.toggle("open");
});
closeham.addEventListener("click", () => {
    mnavlinks.classList.toggle("open");
});

const cursorRef = document.querySelector(".cursor"); 
const cursorRef2 = document.querySelector(".cursor2"); 

document.addEventListener("mousemove", (e) =>{
    cursorRef.setAttribute("style", `top: ${e.pageY - 10}px; left: ${e.pageX - 10}px;`);
    cursorRef2.setAttribute("style", `top: ${e.pageY - 10}px; left: ${e.pageX - 10}px;`);
})
document.addEventListener("click", () => {
    cursorRef2.classList.add("expand");
    setTimeout(() => {
        cursorRef2.classList.remove("expand");
    }, 500);
});
var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2,
        slideShadows: true,
    },
    loop: true,
});
const closeexcps = document.querySelector(".close-exc-ps");
const psgamesection = document.querySelector(".psgamesection");

const openpsexc = () => {
    psgamesection.classList.toggle("psgamesectionopen");
}

closeexcps.addEventListener("click", () =>{
    psgamesection.classList.toggle("psgamesectionopen");
})
const closeexcxbox = document.querySelector(".close-exc-xbox");
const xboxgamesection = document.querySelector(".xboxgamesection");

const openxboxexc = () => {
    xboxgamesection.classList.toggle("xboxgamesectionopen");
}

closeexcxbox.addEventListener("click", () =>{
    xboxgamesection.classList.toggle("xboxgamesectionopen");
})

const buyNow = () => {
    alert("Sorry, this is currently out of stock.");
}
