const counter = document.getElementById("counter");
const number = document.getElementById("counter-button");
const number2 = document.getElementById("counter-button2");
const number3 = document.getElementById("counter-button3");


let count = 0;


number.addEventListener("click", () => {
    count++;
    counter.textContent = "🩷" + count;
    console.log("like+1");
});

number2.addEventListener("click",() => {
    count--;
    counter.textContent = "🩷" + count;
    console.log("like-1");
})

number3.addEventListener("click",() => {
    count = 0;
    counter.textContent = "🩷" + count;
    console.log("C");
})