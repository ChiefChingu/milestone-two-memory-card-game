let allowedTurns = 2;
let cardValueTurnOne, cardValueTurnTwo;
let numberOfMoves = 0;
let matchesMade = 0;
let level = 1;

//collect all cards into an array and determine # of matches
let cards = Array.from(document.getElementsByClassName('card'));
let totalMatches = Math.floor(cards.length/2);

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
                
                //If match, leave cards as is (visible, not clickable) and reset allowedTurns
                setTimeout(() => {
                    allowedTurns = 2;
                    //check if game is finished
                    if(matchesMade === totalMatches) {

                        alert('GG');
                        //trigger game over screen
                    }
                }, 800);

                matchesMade++;
                numberOfMoves++;
                document.getElementById("moves").innerHTML = numberOfMoves;

            } else {
                
                //If no match, make cards invisible and clickable again
                setTimeout(() => {

                    cardValueTurnTwo.classList.remove('visible');
                    cardValueTurnOne.classList.remove('visible');
                    allowedTurns = 2;

                }, 1500);

                cardValueTurnOne.classList.add('clickable');
                cardValueTurnTwo.classList.add('clickable');
                numberOfMoves++;
                console.log(numberOfMoves);
                document.getElementById("moves").innerHTML = numberOfMoves;
            }
        }
    }



//Shuffle cards randomly
function shuffle(){

    var parent = $(".memory-game");
    var divs = parent.children();
    while (divs.length) {

        parent.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[0]);

    }
}

//put number of moves in counter
document.getElementById("moves").innerHTML = numberOfMoves;

/* Code for button shuffle - maybe when using layover
<button id="card">shuffle</button>

document.getElementById("card").addEventListener("click", (function () {
    var parent = $(".memory-game");
    var divs = parent.children();
    while (divs.length) {
        parent.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[0]);
    }
}) ); */