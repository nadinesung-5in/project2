//variables
const counter = document.getElementById("counter");
const number = document.getElementById("counter-button");
const number2 = document.getElementById("counter-button2");
const number3 = document.getElementById("counter-button3");
const number4 = document.getElementById("counter-button4");
const number5 = document.getElementById("counter-button5");
const number6 = document.getElementById("counter-button6");
const number7 = document.getElementById("counter-button7");
const number8 = document.getElementById("counter-button8");
const number9 = document.getElementById("counter-button9");
const number10 = document.getElementById("counter-button10");
const number11 = document.getElementById("counter-button11");
const number12 = document.getElementById("counter-button12");
let count = 0;

//function & listeners
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