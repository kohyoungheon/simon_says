$(document).ready(function() {
  let level = 0;
  let order = [];
  let userOrder = [];  // To hold the user's input sequence
  let colors = ["yellow", "red", "green", "blue"];

  function startGame() {
    level = 0;
    nextLevel();
  }
  function flashColor(color) {
    $("#" + color)
      .animate({ opacity: 0.1 }, 300)
      .animate({ opacity: 1 }, 300);
  }


  function nextLevel() {
    level++;
    $("#level-display").text(level);
    order = Array.from({length: level}, () => colors[Math.floor(Math.random() * colors.length)]);
    for (let i = 0; i < order.length; i++) {
      setTimeout(() => flashColor(order[i]), i * 1000);
    }
    userOrder = [];  // Reset the user's input sequence for the new level
  }

  function checkOrder() {
    for (let i = 0; i < userOrder.length; i++) {
      if (userOrder[i] !== order[i]) {
        // The user's input does not match the sequence
        return false;
      }
    }
    // If we get here, everything matched so far
    if (userOrder.length === order.length) {
      // The user completed this level
      setTimeout(nextLevel, 1000);  // Start the next level after a delay
    }
    return true;
  }

  // Handle a user click on a color
  $(".quarter").click(function() {
    let color = this.id;
    userOrder.push(color);
    flashColor(color);  // Provide some feedback on the user's click
    if (!checkOrder()) {
      // The user's input was wrong
      // Game over, or you could give them another chance, etc.
      alert("Game Over!");
      // Optionally, restart the game
      startGame();
    }
  });

  $("#start-game").click(startGame);
});

