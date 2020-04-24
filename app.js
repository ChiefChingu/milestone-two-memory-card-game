let allowedTurns = 2;
let cardValueTurnOne, cardValueTurnTwo;
let numberOfMoves = 0;
let matchesMade = 0;
let endScore;
let level;

let allCards = Array.from(document.getElementsByClassName('card')); //put all card classes into an array
let mobileScreenCards = allCards.slice(0, -4); //adjust number of cards for mobile screens

//determine screen size and set number of cards accordingly
//this is now redundant, since the user can only select beginner, easy and medium on mobile.

// var x = window.matchMedia("(max-width: 700px)");
// myFunction(x); // Call listener function at run time
// x.addListener(myFunction); // Attach listener function on state changes

// function myFunction(x) {

//     if (x.matches) { // If media query matches, use mobile screen cards
      
//       gameCards = mobileScreenCards;

//     } else {

//       gameCards = allCards; // If not mobile screen, use all cards available

//     }
// }

cards = allCards;

//add level selector here: 
//mobile has two options: easy (2x3) and medium (3x4). Also explanation that hard and epic are only possible on large screens.
//desktop has four options: easy, medium, hard (4x4) and epic (5x5)
const beginner = 4;
const easy = 2;
const medium = 8;
const hard = 12;
let userChoice;
let totalMatches;

//event delegation by https://javascript.info/event-delegation
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
        // setTimer(); to do: add timer with times per level
      }
    };
}

new Menu(menu);

function determineCards() {
    for(let i = 0; i < userChoice; i++) {

        allCards[i].classList.remove('not-in-game');
        
    }
    totalMatches = userChoice/2;

}

//add event listener to all cards
cards.forEach(card => {
    card.addEventListener('click', turnLogic);
})

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
        // console.log(cardValueTurnOne.firstElementChild.children[1].className); //check the targeting of the right class
        
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


//check end game and launch next challenge
function checkGameFinished() {

    if(matchesMade === totalMatches) {
        matchesMade = 0;
        userChoice = userChoice + 2;
        resetBoard();
        determineCards();
    
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
    
    shuffle();
    
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