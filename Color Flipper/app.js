const colors = ["green", "red", "blue", "yellow"];
const btn = document.getElementById("button");
const color = document.querySelector(".color");

//Event Listeners
btn.addEventListener("click", function () {
    //Get random number from 0-3
    const randomNumber = generateRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
})

//fucntions
function generateRandomNumber(){
    return Math.floor(Math.random() * colors.length);
}