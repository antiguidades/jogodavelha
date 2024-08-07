document.addEventListener('DOMContentLoaded', () => {
    const cells = document.querySelectorAll('.cell');
    const message = document.getElementById('message');
    let currentPlayer = 'X';
    let board = Array(9).fill(null);

    function checkWinner() {
        const winConditions = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],  // Horizontais
            [0, 3, 6], [1, 4, 7], [2, 5, 8],  // Verticais
            [0, 4, 8], [2, 4, 6]  // Diagonais
        ];

        return winConditions.some(condition => {
            const [a, b, c] = condition;
            return board[a] && board[a] === board[b] && board[a] === board[c];
        });
    }

    function handleClick(event) {
        const index = event.target.dataset.index;

        if (board[index] || message.textContent) return;

        board[index] = currentPlayer;
        event.target.textContent = currentPlayer;

        if (checkWinner()) {
            message.textContent = `Jogador ${currentPlayer} venceu!`;
        } else if (board.every(cell => cell)) {
            message.textContent = 'Empate!';
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    }

    cells.forEach(cell => cell.addEventListener('click', handleClick));
});
