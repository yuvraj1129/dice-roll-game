function rollDice() {
  var firstPlayer = Math.floor(Math.random() * 6) + 1;
  var firstplayerdice = "dice" + firstPlayer + ".png";
  var secondPlayer = Math.floor(Math.random() * 6) + 1;
  var secondplayerdice = "dice" + secondPlayer + ".png";

  var diceimage1 = "images/" + firstplayerdice;
  var diceimage2 = "images/" + secondplayerdice;
  var image1 = document.querySelectorAll(".img")[0];
  var image2 = document.querySelectorAll(".img")[1];
  image1.setAttribute("src", diceimage1);
  image2.setAttribute("src", diceimage2);
  if (firstPlayer > secondPlayer) {
    document.querySelector("h1").textContent = "Player 1 Wins!";
  } else if (firstPlayer === secondPlayer) {
    document.querySelector("h1").textContent = "Match tie!";
    image1.setAttribute("src", diceimage1);
    image2.setAttribute("src", diceimage2);
  } else {
    document.querySelector("h1").textContent = "Player 2 Wins!";
    image1.setAttribute("src", diceimage1);
    image2.setAttribute("src", diceimage2);
  }
}
// Call once on page load
rollDice();
// Listen for space key press
document.addEventListener("keydown", function (event) {
  if (event.code === "Space") {
    rollDice();
  }
});
// Button click rolls dice
document.getElementById("rollBtn").addEventListener("click", rollDice);
