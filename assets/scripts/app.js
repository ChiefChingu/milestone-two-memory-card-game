let allowedTurns = 2;
let cardValueTurnOne, cardValueTurnTwo;
let numberOfMoves = 0;
let matchesMade = 0;
let challengeMode = true;
let userChoice;
let totalMatches;

//put all card classes into an array
let cards = Array.from(document.getElementsByClassName('card')); 

//add event listener to all cards
cards.forEach(card => { 
    card.addEventListener('click', turnLogic);
})

//select game mode
// challengeMode = false; //input from game mode modal

//If leisure mode: level selector 
const beginner = 4;
const easy = 2;
const medium = 8;
const hard = 12;

//event delegation by https://javascript.info/event-delegation
//select level difficulty
class Menu {
    constructor(elem) {
      this._elem = elem;
      elem.onclick = this.onClick.bind(this); // (*)
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
        modal.style.display = "none";
        btn.style.display = "none";
        challengeMode = false;
        gameSelector.style.display = "none";
        // setTimer(); to do: add timer with times per level
      }
    };
}

new Menu(menu);

//select challenge mode
document.getElementById('challenge').addEventListener('click', startChallengeMode);

function startChallengeMode() {
    challengeMode = true;
    userChoice = 2;
    determineCards();
    gameSelector.style.display = "none";
}

console.log(totalMatches);

function determineCards() {
    for(let i = 0; i < userChoice; i++) {

        cards[i].classList.remove('not-in-game');
        
    }

    totalMatches = userChoice/2;
    shuffle();
}



//turn card logic
function turnLogic() {
    //check if card is first card
    if(allowedTurns == 2 && this.classList.contains('clickable')) {

        //If first card: make card visible, prevent second click, store value in variable and decrease allowedTurns
        this.classList.remove('clickable');
        this.classList.add('visible');
        cardValueTurnOne = this;
        allowedTurns--;
        checkIfQuestion();
        
    } else

    //check if card is second card
    if(allowedTurns == 1 && this.classList.contains('clickable')) {
        
        //If second card: make card visible, prevent second click, store value in variable and decrease allowedTurns
        this.classList.remove('clickable');
        this.classList.add('visible');
        cardValueTurnTwo = this;
        allowedTurns--;
        
            //evaluate cards and check for match
            //If match, leave cards as is (visible, not clickable) and reset allowedTurns
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
                
                //If no match, make cards invisible and clickable again
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

//animate cards on match
function animateCards() {

    cardValueTurnOne.lastElementChild.className = '.back-face-hidden';
    cardValueTurnTwo.lastElementChild.className = '.back-face-hidden';
    cardValueTurnOne.classList.add('animation');
    cardValueTurnTwo.classList.add('animation');
    cardValueTurnOne.firstElementChild.children[1].classList.add('animation');
    cardValueTurnTwo.firstElementChild.children[1].classList.add('animation');
    
}


//check end game and if challenge launch next challenge
function checkGameFinished() {

    if(matchesMade === totalMatches) {
        if(challengeMode) {
            matchesMade = 0;
            userChoice = userChoice + 2; //add more cards for next level
            resetBoard();
            determineCards();
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

//update moves counter
function updateCounter() {

    document.getElementById("moves").innerHTML = numberOfMoves;

}

//Shuffle cards randomly
function shuffle(){

    var parent = $(".memory-game");
    var divs = parent.children();
    while (divs.length) {

        parent.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[0]);

    }
}

function checkIfQuestion() {

    if(cardValueTurnOne.dataset.type === 'q') {

        setTimeout(() => {

            cardValueTurnOne.children[1].className = 'show-context';
            
        }, 900);
    }
}


var modal = document.getElementById("myModal");
var btn = document.getElementById("chill");
var span = document.getElementsByClassName("close")[0];
var gameSelector = document.getElementById('game-mode-selection');

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}