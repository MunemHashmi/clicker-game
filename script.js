// Declare variables
let timer = 10;
let score = 0;

// Update timer every second
let countdown = setInterval(function() {
  timer--;
  document.getElementById("timer").innerHTML = timer;
  if (timer <= 0) {
    clearInterval(countdown);
    document.getElementById("clicker").disabled = true;
    alert("Time's up! Your score is " + score);
  }
}, 1000);

// Click handler
document.getElementById("clicker").addEventListener("click", function() {
  score++;
  document.getElementById("score").innerHTML = score;
});
