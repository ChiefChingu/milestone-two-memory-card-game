let allowedTurns = 2;
let cardValueTurnOne, cardValueTurnTwo;
let numberOfMoves = 0;
let matchesMade = 0;
let endScore;

let allCards = Array.from(document.getElementsByClassName('card')); //put all card classes into an array
var mobileScreenCards = allCards.slice(0, -4); //adjust number of cards for mobile screens

//determine screen size and set number of cards accordingly
var x = window.matchMedia("(max-width: 700px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes

function myFunction(x) {

    if (x.matches) { // If media query matches, use mobile screen cards
      
      gameCards = mobileScreenCards;

    } else {

      gameCards = allCards; // If not mobile screen, use all cards available

    }
  }

cards = gameCards;

//determine # of matches
let totalMatches = Math.floor(cards.length/2);
console.log(totalMatches);



//add event listener to all cards
cards.forEach(card => {
    card.addEventListener('click', checkTurn);
})

//turn card logic
function checkTurn() {
    //check if card is first card
    if(allowedTurns == 2 && this.classList.contains('clickable')) {

        //If first card: make card visible, prevent second click, store value in variable and decrease allowedTurns
        this.classList.remove('clickable');
        this.classList.add('visible');
        cardValueTurnOne = this;
        allowedTurns--;
        checkIfQuestion();
        
        //moved this to function
        //Check if card is the question card (pair of cards has question and answer), show question
        // if(cardValueTurnOne.dataset.type === 'q') {

        //     setTimeout(() => {
        //         cardValueTurnOne.children[1].className = 'show-context';
        //     }, 900);
            
        // }

    } else

    //check if card is second card
    if(allowedTurns == 1 && this.classList.contains('clickable')) {
        
        //If second card: make card visible, prevent second click, store value in variable and decrease allowedTurns
        this.classList.remove('clickable');
        this.classList.add('visible');
        cardValueTurnTwo = this;
        allowedTurns--;
        
       
            //evaluate cards and check for match
            if(cardValueTurnOne.dataset.cardvalue === cardValueTurnTwo.dataset.cardvalue) {

                    matchesMade++;
                    numberOfMoves++;
                    
                    allowedTurns = 2;

                //If match, leave cards as is (visible, not clickable) and reset allowedTurns

                setTimeout(() => {

                    cardValueTurnOne.children[1].className = 'show-context';                  
                    cardValueTurnTwo.children[1].className = 'show-context';
                    updateCounter();
 
                }, 800);
                
                //If all matches made: end of game
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

//check end game
function checkGameFinished() {
    if(matchesMade === totalMatches) {
        
        window.location.href = "game-over.html";
    }
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

/* Code for button shuffle - maybe when using layover
<button id="card">shuffle</button>
document.getElementById("card").addEventListener("click", (function () {
    var parent = $(".memory-game");
    var divs = parent.children();
    while (divs.length) {
        parent.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[0]);
    }
}) ); */

function checkIfQuestion() {
    if(cardValueTurnOne.dataset.type === 'q') {

        setTimeout(() => {
            cardValueTurnOne.children[1].className = 'show-context';
        }, 900);
    }
}