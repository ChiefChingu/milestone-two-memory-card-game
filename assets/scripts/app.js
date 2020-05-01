/* Game mode selection variables: 
    - Chill mode: pick your level.
    - Challenge mode: start at easy and automatically progress through the levels.
*/

const beginner = 4; //Chill mode levels.
const easy = 2;
const medium = 8;
const hard = 12;
let userChoice;

let challengeMode = true; //Challenge mode.

/* Game mechanic variables:
    Setting rules and limitations.  
*/

let allowedTurns = 2;
let numberOfMoves = 0;
let matchesMade = 0;
let totalMatches;
let cards = Array.from(document.getElementsByClassName('card')); //Put all card classes into an array.
let allMatchesInGame = 5; /* cards.length/2; */ //End game for challenge mode.
let cardValueTurnOne, cardValueTurnTwo; //Variables for match evaluation.

/* Add event listeners:
    - Game cards.
    - Game mode selection.
*/

//Add event listener to all cards.
cards.forEach(card => { 
    card.addEventListener('click', turnLogic);
})

//Chill mode.
class Menu {
    constructor(elem) {
      this._elem = elem;
      elem.onclick = this.onClick.bind(this);
    }

    easy() {
      userChoice = easy;
    }
   
    medium() {
      userChoice = medium;
    }

    hard() {
      userChoice = hard;
    }

    onClick(event) {
      let action = event.target.dataset.action;
      if (action) {
        this[action]();
        totalMatches = userChoice/2;
        determineCards();
        startChillModal.style.display = "none";
        startChillBtn.style.display = "none";
        challengeMode = false;
        gameSelector.style.display = "none";
        // setTimer(); To do: add timer with times per level.
      }
    };
}

// new Menu(menu);

//Select challenge mode.
document.getElementById('challenge').addEventListener('click', startChallengeMode);

function startChallengeMode() {
    challengeMode = true;
    userChoice = 4;
    determineCards();
    gameSelector.style.display = "none";
}

//Make selected number of cards visible.
function determineCards() {
    for(let i = 0; i < userChoice; i++) {

        cards[i].classList.remove('not-in-game');
        
    }

    totalMatches = userChoice/2;
    console.log('totalMatches this round', totalMatches);
    shuffle();
}

/* Main game logic:
    - Turn cards.
    - Evaluate match.
*/

function turnLogic() {
    //Check if card is first card.
    if(allowedTurns == 2 && this.classList.contains('clickable')) {

        /* If first card: make card visible, prevent second click, 
        store value in variable and decrease allowedTurns. */
        this.classList.remove('clickable');
        this.classList.add('visible');
        cardValueTurnOne = this;
        allowedTurns--;
        checkIfQuestion();
        
    } else

    //Check if card is second card.
    if(allowedTurns == 1 && this.classList.contains('clickable')) {
        
        /* If second card: make card visible, prevent second click, 
        store value in variable and decrease allowedTurns. */
        this.classList.remove('clickable');
        this.classList.add('visible');
        cardValueTurnTwo = this;
        allowedTurns--;
        
            /* Evaluate cards and check for match.
            If match, leave cards as is (visible, not clickable) and reset allowedTurns. */
            if(cardValueTurnOne.dataset.cardvalue === cardValueTurnTwo.dataset.cardvalue) {

                    matchesMade++;
                    numberOfMoves++;
                    allowedTurns = 2;
                    animateCards();
        
                setTimeout(() => {
                    
                    updateCounter();
                    
                }, 800);

                setTimeout(()=>{
                    
                    cardValueTurnOne.children[1].className = 'show-context';                  
                    cardValueTurnTwo.children[1].className = 'show-context';

                }, 900)

                setTimeout(()=> {

                    checkGameFinished();

                }, 2500);             

            } else {
                
                //If no match, make cards invisible and clickable again.
                setTimeout(() => {

                    cardValueTurnTwo.classList.remove('visible');
                    cardValueTurnOne.classList.remove('visible');
                    allowedTurns = 2;
                    updateCounter();
                    cardValueTurnOne.children[1].className = 'context';

                }, 1500);

                cardValueTurnOne.classList.add('clickable');
                cardValueTurnTwo.classList.add('clickable');
                numberOfMoves++;
                
            }
        }
    }


//Animate cards on match.
function animateCards() {

    cardValueTurnOne.lastElementChild.className = '.back-face-hidden animation';
    cardValueTurnTwo.lastElementChild.className = '.back-face-hidden animation';
    cardValueTurnOne.classList.add('animation');
    cardValueTurnTwo.classList.add('animation');
    cardValueTurnOne.firstElementChild.children[1].classList.add('animation');
    cardValueTurnTwo.firstElementChild.children[1].classList.add('animation');
    
}

//Check end game and if challenge launch next challenge.
function checkGameFinished() {
        
        if(matchesMade === totalMatches) {
            if(challengeMode) {

                if(matchesMade === allMatchesInGame) {
                     
                    localStorage.setItem("lastGameLocal", numberOfMoves);
                    window.location.href = "game-over-challenge-mode.html";

                } else {

                    matchesMade = 0;
                    userChoice = userChoice + 2; //Add more cards for next level.
                    resetBoard();
                    determineCards();

                }

            } else {
                
                window.location.href = "game-over.html";
    
            }
        }
    

        
    
}

function resetBoard() {

    cards.forEach(card => {
        
        card.classList.remove('visible');
        card.classList.add('clickable');
        card.classList.remove('animation');
        card.firstElementChild.children[1].classList.remove('animation');
        card.lastElementChild.className = 'back-face';
        
    });    
}

//Update moves counter.
function updateCounter() {

    document.getElementById("moves").innerHTML = numberOfMoves;

}

//Shuffle cards randomly.
function shuffle(){

    var parent = $(".memory-game");
    var divs = parent.children();
    while (divs.length) {

        parent.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[0]);

    }
}

//Only show context if card is question card.
function checkIfQuestion() {

    if(cardValueTurnOne.dataset.type === 'q') {

        setTimeout(() => {

            cardValueTurnOne.children[1].className = 'show-context';
            
        }, 900);
    }
}

// Modal from W3Schools.
var startChillModal = document.getElementById("startChillModal");
var startChillBtn = document.getElementById("chill");
var startChillSpan = document.getElementsByClassName("close")[0];
var gameSelector = document.getElementById('game-mode-selection');

// When the user clicks on the button, open the modal
startChillBtn.onclick = function() {
  startChillModal.style.display = "block";
  new Menu(menu);
}

// When the user clicks on <span> (x), close the modal
startChillSpan.onclick = function() {
  startChillModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == startChillModal) {
    startChillModal.style.display = "none";
  }
}

