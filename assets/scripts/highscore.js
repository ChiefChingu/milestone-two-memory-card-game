let lastGame = localStorage.getItem("lastGameLocal");
let bestScoreInt = parseInt(localStorage.getItem("storedBestScore"), 10);

if(localStorage.getItem("game A") === null) {
    
    localStorage.setItem("game A", "done"); //Make game A not being null.
    localStorage.setItem("storedBestScore",lastGame); //Only score = best score.
    document.getElementById("highscore").innerHTML = lastGame; //Display best score.

} else if(parseInt(lastGame,10) < bestScoreInt) { //Check if score is better than storedBestScore: must be integers. If so:
        
        localStorage.setItem("storedBestScore", lastGame); //storedBestScore is now the lastGame score.
        document.getElementById("highscore").innerHTML = localStorage.getItem("storedBestScore"); //Display new best score.
        document.getElementById("new-highscore").innerHTML = "You did it! A new highscore! Woot!!";
        
    } else if(parseInt(lastGame,10) === bestScoreInt) { //Same score as best score
        document.getElementById("draw").innerHTML = "You are as good as your, ehm, self? Try again!";
        document.getElementById("highscore").innerHTML = bestScoreInt; //Display old highscore.
    }
    
    
    else {
        document.getElementById("no-highscore").innerHTML = "What was that?? Let's not record this. Hurry, try again!";
        document.getElementById("highscore").innerHTML = bestScoreInt; //Display old highscore.
        
    }

document.getElementById("lastscore").innerHTML = lastGame;

/* Clear all local storage values */
document.getElementById("reset-score").addEventListener("click", resetLocalStorage);

function resetLocalStorage() {
    localStorage.clear();
    console.log("loser!");
}

//Randomize messages - to do!
//Draw
//Highscore
//No highscore