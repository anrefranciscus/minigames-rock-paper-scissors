function getPilihanComputer() {
    const comp = Math.floor(Math.random() * 3);
    switch (comp) {
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        case 2:
            return "scissors";
            break;
    }
}

function getHasil(comp, player) {
    if (player === comp) return "draw";
    if (player === "rock") return (comp === "scissors") ? "win" : "lose";
    if (player === "paper") return (comp === "rock") ? "win" : "lose";
    if (player === "scissors") return (comp === "paper") ? "win" : "lose";
}

function getTampil(hasil) {
    const tampil = document.querySelector('.start-status');
    const stats = document.querySelector('.player-win');
    const textStatus = document.querySelector('.text-status');
    switch (hasil) {
        case "win":
            tampil.classList.remove('text-status');
            stats.classList.add('winner-status');
            textStatus.innerHTML = "PLAYER 1 <br> WIN";
            break;
        case "lose":
            tampil.classList.remove('text-status');
            stats.classList.add('winner-status');
            textStatus.innerHTML = "COM WIN";
            break;
        case "draw":
            tampil.classList.remove('text-status');
            stats.classList.add('draw-status');
            textStatus.innerHTML = "DRAW";
            break;
    }
}

function getSelectComputer(pilihanComputer) {
    const bgCompRock = document.querySelector('.computer-rock');
    const bgCompPaper = document.querySelector('.computer-paper');
    const bgCompScissors = document.querySelector('.computer-scissors');

    if (pilihanComputer === "rock") {
        bgCompRock.classList.add('selected-suit');
    } else if (pilihanComputer === "paper") {
        bgCompPaper.classList.add('selected-suit');
    } else {
        bgCompScissors.classList.add('selected-suit');
    }
}

function getSelectPlayer(pilihanPlayer) {
    const bgPlayerRock = document.querySelector('.player-rock');
    const bgPlayerPaper = document.querySelector('.player-paper');
    const bgPlayerScissors = document.querySelector('.player-scissors');

    if (pilihanPlayer === "rock") {
        bgPlayerRock.classList.add('selected-suit');
    } else if (pilihanPlayer === "paper") {
        bgPlayerPaper.classList.add('selected-suit');
    } else {
        bgPlayerScissors.classList.add('selected-suit');
    }
}

const gamePlay = document.querySelectorAll('#suit-image');
gamePlay.forEach(function(choice) {
    choice.addEventListener('click', function() {
        const pilihanComputer = getPilihanComputer();
        const pilihanPlayer = choice.className;
        const hasil = getHasil(pilihanComputer, pilihanPlayer);
        getSelectComputer(pilihanComputer);
        getSelectPlayer(pilihanPlayer);
        getTampil(hasil);
    });

});