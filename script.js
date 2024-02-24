const gameBoard = document.getElementById('game-board')
const display = document.getElementById('display')

let currentPlayerTurn = "X"



gameBoard.addEventListener('click', (e) => {
    e.preventDefault()
    console.log(e.target.innerHTML)
    if(e.target.innerHTML === ""){
        e.target.innerHTML = currentPlayerTurn
        currentPlayerTurn === "X" ? currentPlayerTurn = "O" : currentPlayerTurn = "X"
        display.innerHTML = `${currentPlayerTurn} it's your turn!`   
    } else {
        display.innerHTML = "Please pick a empty box!!!"
        return
    }
    
})



