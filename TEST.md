Back to [README.md](https://github.com/ChiefChingu/milestone-two-memory-card-game/blob/master/README.md)

At first I created the variable allowedTurns to control that only two cards can be clicked and turned. This worked, but it did not prevent users from clicking the same card twice. When doing this, the allowedTurns did increment, resulting in one card turned and not being able to click a second one. 

That is why I added a second check: a class: clickable. At the start of the game all cards have this class. When a card is clicked and turned, this class is removed. So, you can no longer click one card twice. Then, when the cards are evaluated for a match the class clickable can be added again (if there was no match).

```javascript
function selectCard() {

    if(this.classList.contains('clickable')&&allowedTurns > 0) {

        this.classList.remove('clickable');
        this.classList.add('visible');
        allowedTurns--;
        console.log(allowedTurns);
        cardValueTurnOne = this.innerText;
        console.log(cardValueTurnOne);
        evaluateCards();
    }
}

console.log(cardValueTurnOne);

function evaluateCards() {
    console.log('check match');
```

This worked perfect: you can not click the same card twice. Big caveat though: this setup made it very difficult to evaluate if there was a match. So, I decided to separate turn one and turn two. No problems here when there was a match: the right classes were applied already (clickable removed visible added). I only needed to reset the allowedTurns. In case there was no match, I ran into problems again. I could target the last card turned and add classes. However, I could no longer target the first card that was turned. 
```javascript
function checkTurn() {

    if(allowedTurns == 2 && this.classList.contains('clickable')) {

        this.classList.remove('clickable');
        this.classList.add('visible');
        cardValueTurnOne = this.innerText;
        allowedTurns--;
        console.log(allowedTurns, cardValueTurnOne);

    } else

    if(allowedTurns == 1 && this.classList.contains('clickable')) {

        this.classList.remove('clickable');
        this.classList.add('visible');
        cardValueTurnTwo = this.innerText;
        console.log(allowedTurns, cardValueTurnTwo,'Dit was de laatste');
        allowedTurns--;
       
            if(cardValueTurnOne === cardValueTurnTwo) {

                allowedTurns = 2;

            } else {

                setTimeout(() => {

                    this.classList.remove('visible');
                    }, 
                    1500);
                    
                this.classList.add('clickable');
                allowedTurns = 2;
            }
        }
    }
```





