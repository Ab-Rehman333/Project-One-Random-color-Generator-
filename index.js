// color array 
const colorArray = ["red", "green", "blue", "rgba(133,122,200)", "#f15025"]
const getBtn = document.querySelector("#btn")
const getspan = document.querySelector("#Random");

getBtn.addEventListener("click",()=>{

    let ourColorIndex = randomNumber();
    document.body.style.backgroundColor = colorArray[ourColorIndex]
    getspan.textContent = colorArray[ourColorIndex]


})

function randomNumber() {
    return Math.floor(Math.random() * colorArray.length)
}