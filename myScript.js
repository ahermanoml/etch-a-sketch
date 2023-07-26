let button = document.querySelector('#reset')
let  container = document.querySelector("#container");

function drawGrid () {
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
}

drawGrid();

let newContainer;

button.addEventListener("click", function () {
    let userNumber = prompt('Choose the size of the grid');
    if (userNumber == 10) {
        container.remove();
        newContainer = document.createElement('div');
        document.body.appendChild(newContainer)
        newContainer.class = 'newContainer';
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
            newContainer.appendChild(lineDiv)
            }
    }
});





/*function createGrid () {
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
        newContainer.appendChild(lineDiv)
        }
}*/


