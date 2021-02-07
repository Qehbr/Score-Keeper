
//p1 p2 objects
const p1 = {
    score : 0,
    button: document.querySelector("#p1Button"),
    display: document.querySelector("#p1Display")
}
const p2 = {
    score : 0,
    button: document.querySelector("#p2Button"),
    display: document.querySelector("#p2Display")
}

//utilities
const reset = document.querySelector("#reset");
const winningScoreSelect = document.querySelector("#playTo");
let isGameOver = false;
let winningScore = 3;



//button and select clicking events
p1Button.addEventListener("click", () => updateScore(p1,p2))
p2Button.addEventListener("click", () => updateScore(p2,p1))
reset.addEventListener("click", resetScore);
winningScoreSelect.addEventListener("change", () => {
    winningScore = parseInt(winningScoreSelect.value);
    resetScore();
})

//functions//
//score updating function
function updateScore(player, opponent){
    if (!isGameOver) {
        if (player.score != winningScore) {
            player.display.textContent = ++player.score;
            if (player.score == winningScore) {
                isGameOver = true;
                player.display.classList.add("has-text-success");
                opponent.display.classList.add("has-text-danger");
                player.button.disabled = opponent.button.disabled = true;
            }
        }

    }
}

//function to reset score
function resetScore() {
    isGameOver = false;
    p1.display.textContent = p1.score = p2.display.textContent = p2.score = 0;
    p1.display.classList.remove("has-text-success", "has-text-danger");
    p2.display.classList.remove("has-text-success", "has-text-danger");
    p1.button.disabled = p2.button.disabled = false;
}