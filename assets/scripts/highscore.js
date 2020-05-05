let lastGame = localStorage.getItem("lastGameLocal");
let bestScoreInt = parseInt(localStorage.getItem("storedBestScore"), 10);

if(localStorage.getItem("game A") === null) {
    
    localStorage.setItem("game A", "done"); //Make game A not being null.
    localStorage.setItem("storedBestScore",lastGame); //Only score = best score.
    document.getElementById("highscore").innerHTML = lastGame; //Display best score.

} else if(parseInt(lastGame,10) < bestScoreInt) { //Check if score is better than storedBestScore: must be integers. If so:
        
        localStorage.setItem("storedBestScore", lastGame); //storedBestScore is now the lastGame score.
        console.log('New highscore!');      
        document.getElementById("highscore").innerHTML = localStorage.getItem("storedBestScore"); //Display new best score.
        
    } else if(parseInt(lastGame,10) === bestScoreInt) { //Same score as best score
        console.log('Almost! Try again!');
        document.getElementById("highscore").innerHTML = bestScoreInt; //Display old highscore.
    }
    
    
    else {
        console.log('Too bad. Try again!');
        document.getElementById("highscore").innerHTML = bestScoreInt; //Display old highscore.
        
    }




document.getElementById("lastscore").innerHTML = lastGame;

/* Clear all local storage values */
document.getElementById("reset-score").addEventListener("click", resetLocalStorage);

function resetLocalStorage() {
    localStorage.clear();
    console.log("loser!");
}

// resetLocalStorage();

