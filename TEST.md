# Testing
Back to the [README](https://github.com/ChiefChingu/milestone-two-memory-card-game/blob/master/README.md).

First I tested the project with the validators for css and markup. Then I manually tested all user stories and features (if relevant). All results are displayed below. The last section goes into more detail of the issues I encountered.

## W3C CSS Validation Service
No errors or warnings to show: [style.css](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fchiefchingu.github.io%2Fmilestone-two-memory-card-game%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=nl).

## W3C Markup Validation Service
No errors or warnings to show:
- [index.html](https://validator.w3.org/nu/?doc=https%3A%2F%2Fchiefchingu.github.io%2Fmilestone-two-memory-card-game%2F).
- [game.html](https://validator.w3.org/nu/?doc=https%3A%2F%2Fchiefchingu.github.io%2Fmilestone-two-memory-card-game%2Fgame.html).
- [game-over.html](https://validator.w3.org/nu/?doc=https%3A%2F%2Fchiefchingu.github.io%2Fmilestone-two-memory-card-game%2Fgame-over.html).
- [contact.html](https://validator.w3.org/nu/?doc=https%3A%2F%2Fchiefchingu.github.io%2Fmilestone-two-memory-card-game%2Fcontact.html).

## User stories
Each user story is tested thoroughly. All steps are taken in the main browsers at 3 different viewports: mobile (including tablet) and desktop.

### 1. See an inviting game that makes me curious and want to play!
- Homepage shows a catchy oneliner that triggers curiousity: try not to laugh.
- Explanatory image shows a funny scene, enticing the user to get to know more.

### 2. Understand what to do to start the game.
- Call to action is very colorful and has much contrast: user is challenged to click.
- Game page is without clutter with just cards and a moves counter: users will automatically click a card.

##### Behind the scenes:
- All cards are collected in an array and get an event listener. A function is called upon click to flip the card. (code line: )
- When user is on a mobile device (screen size under 700px): the array is spliced and the last 4 cards are removed. All remaining cards are put in the game array.
- When user is on a laptop/desktp: the initial array is put in the game array.
- The total number of matches is calculated and stored in ```totalMatches``` to determine when the game finishes.
- Upon loading the page, the game array is shuffled via the function ```shuffle```.

### 3. Click any card as first card and card should turn.
- Cards turn as intended, front-face of the card is displayed.

##### Behind the scenes:
- Variable ```allowedTurns``` is set to 2. Each click decreases this value by 1.
- Upon click the visible class is applied, which flips the card and shows the front-face.
- Upon click the class clickable is removed, so the same card cannot be clicked twice when turned.

### 4. Get extra help about what matches to look for.
- Matching pairs consist of a question and answer card. In case the question card is turned: the question is displayed on the card.
- The question is only displayed on the first flipped card (if on the second card, the card will flip back when no match and then there is not enough time to read the text.)

##### Behind the scenes:
- Data attributes are used to distinguish question and answer cards.
- Questions get ```data-type = q```.
- When ```allowedTurns``` is 2 it means this is the first card. Then the next statement is triggered.
- If ```data-type = q``` then the ```class = context``` is made visible, which shows the question on the card. This is done via function ```checkIfQuestion```.

### 5. Click any card as second card and card should turn.
- Cards turn as intended, front-face of the card is displayed.
- First card that is turned cannot be clicked again.
- Second card that is turned cannot be clicked again.

##### Behind the scenes:
- When ```allowedTurns``` is 1 it means one more card can be clicked.
- Upon click the visible class is applied, which flips the card and shows the front-face.
- Upon click the class clickable is removed, so the same card cannot be clicked twice when turned.
- Because ```allowedTurns``` is 1 it means this is the second card. The matching logic is triggered.

### 6. See if there is a match when two cards are turned.
- When two cards are turned, it has to be checked if there is a match.
- If a match: animation that tilts the cards shortly.
- If no match: cards flip back.

##### Behind the scenes:
- All cards have a data attribute for match making: ```data-cardvalue```.
- All matching pairs have an identical ```data-cardvalue```.
- If statement checks for a match.

### 7. See cards not flip back when there is a match.
- When there is a match, the cards tilt slightly to indicate a match.
- The context of both cards is displayed: the question and the answer.
- The counter for number of moves updates with +1 move.
- Both cards cannot be clicked again.
- New cards can be clicked and turned.

##### Behind the scenes:
- If these ```data-cardvalue``` match, a function ```animateCards``` for the tilt animation is triggered.
- Also, both the question and answer context are made visible.
- A variable to track the number of matches ```matchesMade``` is incremented by 1.
- A variable to track the number of moves ```numberOfMoves``` is incremented by 1 via a function ```updateCounter```.
- The ```allowedTurns``` is reset to 2.
- The clickable class remains removed.
- The visible class remains added.

### 8. See the cards flip back when there is no match.
- When no match, both cards flip back.
- The counter for number of moves updates with +1 move.
- New cards can be clicked.

##### Behind the scenes:
- When no match on ```data-cardvalue``` the cards flip back by removing the visible class.
- Also, the context is removed from the question card.
- To check if the game is finished with this match the function ```checkGameFinished``` is called. The ```matchesMade``` is compared to the ```totalMatches```.
- The ```allowedTurns``` is reset to 2.
- The cards become clickable again: class clickable is added.
- Number of moves ```numberOfMoves``` is incremented by 1 via a function ```updateCounter```.

### 9. Get confirmation when the game is finished.
- When all pair are found, user sees a game over page.

##### Behind the scenes:
- ```checkGameFinished``` evaluates an if statement. If ```totalMatches = matchesMade``` the game over page is triggered. 

### 10. See the number of turns I made so far.
- In the header you can see the number of turns so far.
- After two cards are turned: when there is a match of pairs, the counter updates.
- After two cards are turned: when there is no match of pairs, the counter updates.

##### Behind the scenes:
- ```updateCounter``` runs whenever two cards are turned.

### 11. Quit the game whenever I want.
- User can click the stop game link whenever they want. The game over page is triggered.
- User can navigate back to home or to the contact & about page.

### 12. Get more information about the cards that are used.
- The game over screen explains who created the images to give full credit.
- A link to the owner's site shows all of his work. The link opens in a new tab.

### 13. Contact the maker of the game in case I have questions, suggestions or compliments.
- The contact & about page invites visitors to contact me via the provided email address.

### 14. Have fun!
- This one is difficult to test. The people who played the game so far, could not finish it without laughing!

## Features
The features are basically covered by the usre stories. Repeating them here seems superfluous, so a summary is given here.

|Area | Feature | Test passed|Remarks
|------| -------|:---------:|--------
|Home|explanatory image|OK|
||call to action|OK|
||navigation|OK|
|Game page|game tiles|OK|
||Card context|OK|
||game logic|OK|
||moves counter|OK|
||quit option|OK|
||navigation|OK|
||end game confirmation|OK|
|Game over page|congratulations header|OK|
||explanation of images|OK|
||call to action|OK|
||navigation|OK|
|Contact & about page|explanation of website|OK|
||contact option|OK|

## Issues and solutions
### Determine viewport and adjust number of cards.
I tried to limit the number of cards on mobile for better UX (no scroll). First used ```display:none``` for the cards I wanted to hide. This worked, but it did not update the total number of possible matches. This was still based on all cards in the array. So, you could not win since the last matches were now from cards that are not displayed.

I then tried to do it from within JS. I found how to do a media query in javascript via [W3Schools](https://www.w3schools.com/howto/howto_js_media_queries.asp). If a mobile device, then I sliced the array and removed the last two cards. This works. Now I just need to remove the last two cards, marked ```.desktop``` from the html flow. This is done with the normal media query in CSS.

### Flip cards and matching logic
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

This worked perfect: you cannot click the same card twice. Big caveat though: this setup made it very difficult to evaluate if there was a match. So, I decided to separate turn one and turn two. No problems here when there was a match: the right classes were applied already (clickable removed visible added). I only needed to reset the allowedTurns. In case there was no match, I ran into problems again. I could target the last card turned and add classes. However, I could no longer target the first card that was turned. 
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

### Add context information on turned card
Tried to add click on each card to add some context. But the same toggle function is shared across cards, so it did not work. I tried to get the right context by creating a new variable: ``` cardPlusSignOne = $(this).find('button'); ``` I now can target the specific button on the right card, but cannot tie the function to it.

Then I thought that it is perhaps better to create an array of all buttons and add an event listener to it. So, the button click is for the right card. This worked and I could ```console.log(this)``` for card-specific button test text: I tested it with four different button texts. So, it logs:

- click 1 first card: ```<button class='toggle'>+</button>```
- click 2 first card: ```<button class='toggle'>++</button>```
- click 3 first card: ```<button class='toggle'>+++</button>```
- click 4 first card: ```<button class='toggle'>++++</button>```

But, when I want to manipulate the CSS of that specific card I run into problems. The first card works as intended, however, the cards after that first one give troubles: the CSS of the first click (first card turned) is still targeted when I invoke the function to change the CSS. For now, I let go this idea.

I then decided to show text on the flipped card when there is a match. Still, the problem remained of targeting the right cards while using classes. It crossed my mind to use IDs but then I would probably have to write a rule for each ID to target them, which did not feel right. So, I decided to research navigating the ```this``` keyword in more detail. I finally retrieved the right class of each individual card by using a very simple syntax: ```this.children[1]``` and then could manipulate the class.

Being able to target the right individual card I wondered why I could not use this to get the slider working. I tried the slider again, but ran into the same issue, so left it behind for good. I now slide in the context without a button click.

### Add animation on match
When there is a match of cards I want to show this visually by nudging the matched pair. For some reason the cards first show the back-face, nudge and then show the front-face again. I tried targeting different elements of the card: 
```cardValueTurnOne.firstElementChild.children[1].classList.add('animation');``` results in adding the animation to the front-face. The picture disappears for the duration of the animation and then appears again.

I tried removing the back-face, but then I end up with a white space. When I added the animation to both the parent (div class card) and the front-face the animation worked! However, putting the back-face back, caused the same problems as before. But, now I could at least see the animation work as intended.

Next step is to disable the back-face on a match before the animation happens. End result:
```javascript
function animateCards() {

    cardValueTurnOne.lastElementChild.className = '.back-face-hidden';
    cardValueTurnTwo.lastElementChild.className = '.back-face-hidden';
    cardValueTurnOne.classList.add('animation');
    cardValueTurnTwo.classList.add('animation');
    cardValueTurnOne.firstElementChild.children[1].classList.add('animation');
    cardValueTurnTwo.firstElementChild.children[1].classList.add('animation');
    
}
```
### Messed up header when mobile users change orientation of their device
I used vh to set the height of the header. This works as long as device is used in portrait orientation. Of course this no longer works correctly when you tilt your device: the viewport height will be much smaller, which resulted in shrinking headers and text overflow. Fixed this by setting the height to auto and applied padding to the elements inside it. However, the header is too high now. Fixed this by setting the media query to 800px (was 700px, so larger mobiles like iPhone X and Galaxy S10 triggered this viewport when in landscape: 740px long screens).

### Scroll necessary when resolution is 1920 x 1080
When starting the game on screens with 1920 x 1080 resolution, the game is not displayed correctly. You need to scroll, which is annoying when playing the game. Solved this by adding an extra media query for this screen size: adjusted padding, font-size and margins to get the game fully on screen.
