const playBtn = document.getElementById('play');
const gameBoard = document.getElementById('game-board')
const display = document.getElementById('display')

let currentPlayerTurn = "X"

gameBoard.addEventListener('click', (e) => {
    e.preventDefault()
})

playBtn.addEventListener('click', () => {
    playBtn.setAttribute('style', 'display: none')
    display.innerHTML = `${currentPlayerTurn} it's your turn!`
})

