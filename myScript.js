let  container = document.querySelector("#container");

for (let i =0; i < 16; i++) {
let lineDiv = document.createElement("div");
    for (let j =0; j < 16; j++) {
    let square = document.createElement("div")
    square.classList.add("square")
    square.addEventListener("mouseover", function() {
        square.classList.add('hoverSquare')
    })
    lineDiv.appendChild(square)
    }
lineDiv.classList.add("line")
container.appendChild(lineDiv)
}
