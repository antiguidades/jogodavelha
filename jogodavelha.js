let currentPlayer = 'x';
const cells = document.querySelectorAll('.cell');

cells.forEach(cell => {
    cell.addEventListener('click', () => {
        if (!cell.classList.contains('x') && !cell.classList.contains('o')) {
            cell.classList.add(currentPlayer);

            if (checkWin()) {
                alert(`Jogador ${currentPlayer.toUpperCase()} venceu!`);
                resetGame();
            } else if ([...cells].every(cell => cell.classList.contains('x') || cell.classList.contains('o'))) {
                alert('Empate!');
                resetGame();
            }

            currentPlayer = currentPlayer === 'x' ? 'o' : 'x';
        }
    });
});

function checkWin() {
    const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Linhas horizontais
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Linhas verticais
        [0, 4, 8], [2, 4, 6] // Diagonais
    ];

    return winningCombinations.some(combination => {
        const [a, b, c] = combination;
        return cells[a].classList.contains(currentPlayer) &&
               cells[b].classList.contains(currentPlayer) &&
               cells[c].classList.contains(currentPlayer);
    });
}

function resetGame() {
    cells.forEach(cell => cell.classList.remove('x', 'o'));
}
