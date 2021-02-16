const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("button");
const color = document.querySelector(".color");

//Event listener
btn.addEventListener("click", function(){
    let = hexColor = "#";
    //Loop hex array
    for(let i = 0; i < 6; i++){
        hexColor += hex[generateRandomNumber()];
    }

    document.body.style.backgroundColor = hexColor;
    color.textContent = hexColor;
})

//functions
function generateRandomNumber(){
    return Math.floor(Math.random() * hex.length);
}