var wins = 0;
var ties = 0;
var losses = 0;

var options = ["ROCK", "PAPER", "SCISSORS"];

var playGame = function () {
    var userChoice = window.prompt("enter Rock, Paper, or Scissors");

    if (!userChoice) {
        return
    }

    userChoice = userChoice.toUpperCase();

    var index = Math.floor(Math.random() * options.length);
    var computerChoice = options[index];

    window.alert("The computer chose " + computerChoice);

    if (userChoice == computerChoice) {
        ties++;
        window.alert("It Was A Tie")

    } else if (
    (userChoice === "ROCK" && computerChoice === "SCISSORS") ||
    (userChoice === "PAPER" && computerChoice === "ROCK") ||
    (userChoice === "SCISSORS" && computerChoice === "PAPER")

) {
wins++;
window.alert("You Win!");
}
};

playGame();