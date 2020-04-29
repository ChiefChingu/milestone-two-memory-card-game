let message;
let lastGameInt = parseInt(localStorage.getItem("lastgame"), 10); //create int from string
// localStorage.setItem("highScore", "0"); //create highscore local storage, issue: it sets it to 0 every time....
let highScoreInt = parseInt(localStorage.getItem("highScore"),10); //create int from string
let difference;


//set localstorage highscore
localStorage.setItem("highScore", lastGameInt);


if(highScoreInt === 0) {
    localStorage.setItem("highScore", lastGameInt);
    console.log(`Alright, this is your score to beat. Try again!`);
} else {
    if(lastGameInt < highScoreInt) {
        difference = highScoreInt - lastGameInt;
        localStorage.setItem("highScore", lastGameInt);
        console.log(`Well done! You've beaten your highscore with ${difference} moves! Can you do better than this?`);
    } else if (lastGameInt > highScoreInt) {
        console.log(`Come on, you can do better! Try again!`)
    } else if (lastGameInt === highScoreInt) {
        console.log(`So close! Try again!`);
    }
}

console.log(localStorage.getItem("highScore"));
console.log(localStorage.getItem("lastgame"));
console.log(message);
console.log(lastGameInt, highScoreInt);

document.getElementById("lastscore").innerHTML = localStorage.getItem("lastgame");
document.getElementById("highscore").innerHTML = highScoreInt;

function firstGame() {
    if (lastGameInt = NaN) { //it is your first game and you can set the highscore to lastGameInt
        localStorage.setItem("highScore", lastGameInt);
    }

}

console.log(lastGameInt, highScoreInt);


function resetLocalStorage() {
    localStorage.clear();
}

// resetLocalStorage();