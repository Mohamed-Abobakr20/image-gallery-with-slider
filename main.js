const images = Array.from(document.querySelectorAll(".item img"));
let index = 0;

// open the slider
for (let i = 0; i < images.length; i++) {
    images[i].addEventListener("click", (e) => {
        document.querySelector(".layer").style.display = "flex";
        document.querySelector(".slider").style.backgroundImage = `url(${e.target.src})`;
        index = images.indexOf(e.target);
    })
}

// next button in slider
function next() {
    index++;
    if (index === images.length) {
        index = 0;
    }
    document.querySelector(".slider").style.backgroundImage = `url(${images[index].src})`;
}

document.querySelector("#next").addEventListener("click", next)


// prev button in slider
function prev() {
    index--;
    if (index === -1) {
        index = images.length - 1;
    }
    document.querySelector(".slider").style.backgroundImage = `url(${images[index].src})`;
}

document.querySelector("#prev").addEventListener("click", prev)


// close the slider
function closeSlider() {
    document.querySelector(".layer").style.display = "none";
}

document.querySelector("#close").addEventListener("click", closeSlider)


// controlling slider using keyboard (right , left and escape)
document.body.addEventListener("keydown", (e) => {
    if (e.code === "ArrowRight") {
        next();
    } else if (e.code === "ArrowLeft") {
        prev();
    } else if (e.code === "Escape") {
        closeSlider();
    }
})