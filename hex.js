const colorArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F", "G", "H"];
const getBtn = document.querySelector("#btn")
const getspan = document.querySelector("#Random");

getBtn.addEventListener("click", () => {
    let hexColor = "#"
    for (let i = 0; i < 6; i++) {
        hexColor += colorArray[randomNumber()]
    }
    document.body.style.backgroundColor = hexColor;
    getspan.textContent = hexColor;


})

function randomNumber() {
    return Math.floor(Math.random() * colorArray.length)
}