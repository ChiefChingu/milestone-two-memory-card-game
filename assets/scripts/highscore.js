let lastGame = localStorage.getItem("lastGameLocal");
let bestScoreInt = parseInt(localStorage.getItem("storedBestScore"), 10);

if(localStorage.getItem("game A") === null) {
    
    localStorage.setItem("game A", "done"); //Make game A not being null.
    localStorage.setItem("storedBestScore",lastGame); //Only score = best score.
    document.getElementById("highscore").innerHTML = lastGame; //Display best score.

} else if(parseInt(lastGame,10) < bestScoreInt) { //Check if score is better than storedBestScore: must be integers. If so:
        
        localStorage.setItem("storedBestScore", lastGame); //storedBestScore is now the lastGame score.
        alert('New highscore!');      
        document.getElementById("highscore").innerHTML = localStorage.getItem("storedBestScore"); //Display new best score.
        
    } else if(parseInt(lastGame,10) === bestScoreInt) { //Same score as best score
        alert('Almost! Try again!');
        document.getElementById("highscore").innerHTML = bestScoreInt; //Display old highscore.
    }
    
    
    else {
        alert('Too bad. Try again!');
        document.getElementById("highscore").innerHTML = bestScoreInt; //Display old highscore.
        
    }




document.getElementById("lastscore").innerHTML = lastGame;

/* 
// Logging 3 games
if(localStorage.getItem("game A") === null) {
    localStorage.setItem("game A", lastGame);
    console.log(localStorage.getItem("game A"));
} else if(localStorage.getItem("game B") === null) {
    localStorage.setItem("game B", lastGame);
    console.log(localStorage.getItem("game B"));
} else {
    localStorage.setItem("game C", lastGame);
    console.log(localStorage.getItem("game C"));
}

//create button with resetGames

function resetGames() {
    localStorage.removeItem("game A");
    localStorage.removeItem("game B");
    localStorage.removeItem("game C");
}

 */
// console.log('game A', localStorage.getItem("game A"));
// console.log('game B', localStorage.getItem("game B"));
// console.log('game C', localStorage.getItem("game C"));


/* Clear all local storage values */
function resetLocalStorage() {
    localStorage.clear();
}

// resetLocalStorage();

