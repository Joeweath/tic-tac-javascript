const gameBoard = document.getElementById('game-board')
const display = document.getElementById('display')

let currentPlayerTurn = "X";
let playerX = [];
let playerO = [];


gameBoard.addEventListener('click', (e) => {
    e.preventDefault()
    if(e.target.innerHTML === ""){
        e.target.innerHTML = currentPlayerTurn
        e.target.id
        currentPlayerTurn === "X" ? playerX.push(e.target.id) && playerX.sort() : playerO.push(e.target.id) && playerO.sort()
        gameLogic()

        currentPlayerTurn === "X" ? currentPlayerTurn = "O" : currentPlayerTurn = "X"
        display.innerHTML = `${currentPlayerTurn} it's your turn!`

    } else {
        display.innerHTML = "Please pick a empty box!!!"
        return
    }
    
})

const winningCombos = [
    [1, 2, 3],
    [1, 4, 7],
    [1, 5, 9],
    [2, 5, 8],
    [3, 6, 9],
    [3, 5, 7],
    [4, 5, 6],
    [7, 8, 9]
]


const gameLogic = () => {
    const currentPlayerMoves = currentPlayerTurn === "X" ? playerX : playerO;

    for (let i = 0; i < winningCombos.length; i++) {
        let count = 0;
        for (let j = 0; j < winningCombos[i].length; j++) {
            if (currentPlayerMoves.includes(winningCombos[i][j].toString())) {
                count++;
            }
        }
        if (count === 3) {
            display.innerHTML = `${currentPlayerTurn} wins!`;
            // You might want to add some code here to handle the end of the game.
            // For example, disable further clicks on the game board.
            return;
        }
    }

    // If no winning combination found, check for a tie
    if (playerX.length + playerO.length === 9) {
        display.innerHTML = "It's a tie!";
        // You might want to handle the end of the game here as well.
        return;
    }
}

