const hamburger = document.querySelector(".hamburger");
const mnavlinks = document.querySelector(".mnavlinks");

hamburger.addEventListener("click", () => {
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