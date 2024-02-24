const gameBoard = document.getElementById('game-board')
const display = document.getElementById('display')

let currentPlayerTurn = "X";
let playerX = [];
let playerO = [];


gameBoard.addEventListener('click', (e) => {
    e.preventDefault()
    console.log(e.target.id)
    if(e.target.innerHTML === ""){
        e.target.innerHTML = currentPlayerTurn
        currentPlayerTurn === "X" ? currentPlayerTurn = "O" : currentPlayerTurn = "X"
        display.innerHTML = `${currentPlayerTurn} it's your turn!`   
    } else {
        display.innerHTML = "Please pick a empty box!!!"
        return
    }
    
})

// const winningCombos = [
//     [1, 2, 3],
//     [1, 4, 7],
//     [1, 5, 9],
//     [2, 5, 8],
//     [3, 6, 9],
//     [3, 5, 7]
//     [4, 5, 6]
//     [7, 8, 9]
// ]


const gameLogic = (player) => {
    
}


