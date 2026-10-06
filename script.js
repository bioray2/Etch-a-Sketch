    let size = 16;

    // takes an input from the user and makes a grid
    function setSize(){
        const sizeButton = document.querySelector("#sizeButton");
        sizeButton.addEventListener("click", () => {
            size = prompt("Enter the dimensions of one side of the grid between 2 - 100: Ex 100 x 100 => 100");

            if(size > 100){
                size = 100;
            }

            loadGame();
        })
    }

    function loadGame(){

        const grid = [];
        const board = document.querySelector("#board");

        board.innerHTML = "";

        // Makes a 2d array with nested loops to fill a 16 by 16 grid with divs
        for(let row = 0; row < size; row++){
            grid[row] = [];

            for(let col = 0; col < size; col++){
                const div = document.createElement("div");
                div.classList.add("myDiv");

                let oneSide = (608 / size);

                div.style.width = `${oneSide}px`;
                div.style.height = `${oneSide}px`;

                grid[row][col] = div;

                board.appendChild(div);
            }
        }
    }

    setSize();
    loadGame();