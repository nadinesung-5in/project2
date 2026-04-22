const counter = document.getElementById("counter");
const number = document.getElementById("counter-button");

let count = 0;

number.addEventListener("click", () => {
    count++;
    counter.textContent = "🩷" + count;
    console.log("like+1");
});