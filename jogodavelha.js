const board = document.getElementById("board");
const casinhas = board.getElementsByTagName("div");
const boxVencedor = document.getElementById("vencedor");
const resetButton = document.getElementById("resetButton");

let jogadas = 0;

for (let i = 0; i < casinhas.length; i++) {
  casinhas[i].addEventListener('click', casinhaclick);
}

resetButton.addEventListener('click', resetGame);

function casinhaclick() {
  if (this.innerHTML == "" && boxVencedor.innerHTML == "") {
    if (jogadas % 2 == 0) {
      this.innerHTML = "X";
    } else {
      this.innerHTML = "O";
    }
    jogadas += 1;
  }
  if (jogadas >= 5) {
    verificaGanhador();
  }
}

function verificaGanhador() {
  // Validando na horizontal
  if (checkWinner(0, 1, 2) || checkWinner(3, 4, 5) || checkWinner(6, 7, 8) ||
      checkWinner(0, 3, 6) || checkWinner(1, 4, 7) || checkWinner(2, 5, 8) ||
      checkWinner(0, 4, 8) || checkWinner(2, 4, 6)) {
    boxVencedor.innerHTML = "Parabéns! O '" + casinhas[winIndex[0]].innerHTML + "' Venceu!";
  }
}

let winIndex = [];

function checkWinner(a, b, c) {
  if (casinhas[a].innerHTML !== "" && casinhas[a].innerHTML === casinhas[b].innerHTML && casinhas[a].innerHTML === casinhas[c].innerHTML) {
    winIndex = [a, b, c];
    return true;
  }
  return false;
}

function resetGame() {
  for (let i = 0; i < casinhas.length; i++) {
    casinhas[i].innerHTML = "";
  }
  boxVencedor.innerHTML = "";
  jogadas = 0;
}