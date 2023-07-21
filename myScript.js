let  container = document.querySelector("#container");

for (let i =0; i < 16; i++) {
let lineDiv = document.createElement("div");
    for (let j =0; j < 16; j++) {
    let columnDiv = document.createElement("div")
    columnDiv.classList.add("square")
    lineDiv.appendChild(columnDiv)
    }
lineDiv.classList.add("line")
container.appendChild(lineDiv)
}
