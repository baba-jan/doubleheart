const image = document.querySelector("#img");
const countIncre = document.querySelector("#incr");
const like = document.querySelector("#like");
let count = 0;
image.addEventListener("dblclick", () => {
    count++;
    countIncre.textContent = count;
    like.classList.add("active");
    setTimeout(() => {
        like.classList.remove("active");
    }, 1000);
});