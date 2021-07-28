const calendarGrid = document.querySelector('.grid');
let width = 7;
let height = 5;
let squares = []

let countDays = 1

function createGrid() {
    for(let i = 0; i < (width*width); i++) {
        const square = document.createElement('div')
        square.classList.add('calendarSquare')

        const daysNumbers = document.createElement('p')
        daysNumbers.classList.add('editDays')

        if(i < 30) {
            daysNumbers.textContent = i + 1;
        } else if(i >= 30 && countDays < 6) {
            daysNumbers.textContent = countDays;
            countDays++
        }

        square.appendChild(daysNumbers)
        calendarGrid.appendChild(square)

        

        squares.push(square)
    }

    for(let i = 0; i < (width*height); i++) {
        squares[i].classList.add('colorSquare');
        // const daysNumber = document.querySelector('.calendarSquare');
        // daysNumber.textContent = i + 1;
    }
}

createGrid();

// function createGrid() {
//     //create 100 of these elements with a for loop
//     for (let i=0; i < width*width; i++) {
//         //create element
//        const square = document.createElement('div')
//        //add styling to the element
//        square.classList.add('square')
//        //put the element into our grid
//        grid.appendChild(square)
//        //push it into a new squares array    
//        squares.push(square)
//        }
//    }
//    createGrid()