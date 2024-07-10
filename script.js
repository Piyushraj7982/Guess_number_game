document.getElementById("startBtn").addEventListener("click", startGame);
document.getElementById("guessBtn").addEventListener("click", makeGuess);
document.getElementById("quitBtn").addEventListener("click", quitGame);

let randomNum;
let maxNum;

function startGame() {
    maxNum = parseInt(document.getElementById("maxNum").value);
    if (isNaN(maxNum) || maxNum <= 0) {
        alert("Please enter a valid number greater than 0");
        return;
    }
    randomNum = Math.floor(Math.random() * maxNum) + 1;
    document.getElementById("guessSection").style.display = "block";
    document.getElementById("hint").textContent = "";
    document.getElementById("guessInput").value = "";
}

function makeGuess() {
    let guess = parseInt(document.getElementById("guessInput").value);
    if (isNaN(guess)) {
        alert("Please enter a valid number");
        return;
    }

    if (guess === randomNum) {
        document.getElementById("result").textContent = `You are right! 🎉🎉🎉🎉🎉 Your random number is ${randomNum}`;
        document.getElementById("guessSection").style.display = "none";
    } else if (guess < randomNum) {
        document.getElementById("hint").textContent = "Hint: your guess was too small. Please try again...🧠🧠";
    } else {
        document.getElementById("hint").textContent = "Hint: your guess was too large. Please try again...🧠🧠";
    }
}

function quitGame() {
    document.getElementById("result").textContent = "Quited game....💗❤️";
    document.getElementById("guessSection").style.display = "none";
}
