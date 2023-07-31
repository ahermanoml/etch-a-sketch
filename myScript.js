let button = document.querySelector('#reset')
let  container = document.createElement('div');
container.classList.add('container');
document.body.appendChild(container);


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


button.addEventListener("click", function () {
    let userNumber = prompt('Choose the size of the grid');
    if (userNumber < 100) {
        container.remove();
        container = document.createElement('div');
        container.classList.add("container")
        document.body.appendChild(container)
        for (let i =0; i < userNumber; i++) {
            let lineDiv = document.createElement("div");
                for (let j =0; j < userNumber; j++) {
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
    } else if (userNumber > 99) {
        alert('Numbers bigger than 100 are not accepted');
    } else {
        alert ('Invalid Input');
    }

    
});



