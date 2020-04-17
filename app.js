const cards = Array.from(document.getElementsByClassName('card'));
let allowedTurns = 2;
let cardValueTurnOne, cardValueTurnTwo;
let firstTurn = false;

cards.forEach(card => {
    card.addEventListener('click', checkTurn);
})

function checkTurn() {

    if(allowedTurns == 2 && this.classList.contains('clickable')) {
        this.classList.remove('clickable');
        this.classList.add('visible');
        cardValueTurnOne = this;
        allowedTurns--;
        console.log(allowedTurns, cardValueTurnOne);
    } else
    if(allowedTurns == 1 && this.classList.contains('clickable')) {
        this.classList.remove('clickable');
        this.classList.add('visible');
        cardValueTurnTwo = this;
        console.log(allowedTurns, cardValueTurnTwo,'Dit was de laatste');
        allowedTurns--;
       
        
            if(cardValueTurnOne.textContent === cardValueTurnTwo.textContent) {
                setTimeout(() => {
                    allowedTurns = 2;
                }, 1500);
            } else {
                setTimeout(() => {
                    cardValueTurnTwo.classList.remove('visible');
                    cardValueTurnOne.classList.remove('visible');
                    allowedTurns = 2;
                }, 1500);
                cardValueTurnOne.classList.add('clickable');
                cardValueTurnTwo.classList.add('clickable');
                
            }
        }
    }

document.getElementById("card").addEventListener("click", (function () {
    var parent = $(".memory-game");
    var divs = parent.children();
    while (divs.length) {
        parent.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[0]);
    }
}) );