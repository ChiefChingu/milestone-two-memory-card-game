# Testing
Back to the [README](https://github.com/ChiefChingu/milestone-two-memory-card-game/blob/master/README.md).

First I tested the project with the validators for css and markup. Then I manually tested all user stories and features (if relevant). All results are displayed below. The last section goes into more detail of the issues I encountered.

## W3C CSS Validation Service
Upon recommendation by Code Institute, I used the autoprefix tool to add vendor prefixes. This unfortunately led to errors and warnings in the CSS while using the validator of jigsaw.w3.org. However, when using the validator of css-validator.org there were no errors and warnings. To be sure I also sent a request to Student Care about the issue of autoprefixer and validation.

No errors or warnings: [style.css](http://www.css-validator.org/validator?uri=https%3A%2F%2Fchiefchingu.github.io%2Fmilestone-two-memory-card-game%2F&profile=css21&usermedium=all&warning=1&lang=en).

Errors and warnings due to autoprefix: [style.css](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fchiefchingu.github.io%2Fmilestone-two-memory-card-game%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=nl).

## W3C Markup Validation Service
No errors or warnings to show:
- [index.html](https://validator.w3.org/nu/?doc=https%3A%2F%2Fchiefchingu.github.io%2Fmilestone-two-memory-card-game%2F).
- [game.html](https://validator.w3.org/nu/?doc=https%3A%2F%2Fchiefchingu.github.io%2Fmilestone-two-memory-card-game%2Fgame.html).
- [game-over.html](https://validator.w3.org/nu/?doc=https%3A%2F%2Fchiefchingu.github.io%2Fmilestone-two-memory-card-game%2Fgame-over.html).
- [game-over-challenge-mode.html](https://validator.w3.org/nu/?doc=https%3A%2F%2Fchiefchingu.github.io%2Fmilestone-two-memory-card-game%2Fgame-over-challenge-mode.html).
- [about.html](https://validator.w3.org/nu/?doc=https%3A%2F%2Fchiefchingu.github.io%2Fmilestone-two-memory-card-game%2Fabout.html).
- [contact.html](https://validator.w3.org/nu/?doc=https%3A%2F%2Fchiefchingu.github.io%2Fmilestone-two-memory-card-game%2Fcontact.html).

First time use lead to the following errors.

### index.html
Possible misuse of 'aria-label'. 
I moved the aria-label from the body tag to the header tag and this solved the error.

Attribute 'alt' is not allowed on element 'input'. 
I added this upon reading about alt text. It was advised to add a description to the form button.

*You should also remember to add alt text to form buttons. Otherwise, screen readers might pass over them and some visitors won’t be able to interact with your website.* [Source](https://ahrefs.com/blog/alt-text/)

I removed the alt text from the forms to solve this error.

### game.html
Duplicate attribute 'id'
I changed the code from ```id="game-header__game-data" id="game-header__game-data-chill"``` to ```id="game-header__game-data"```

### JSHint
#### MobileMenu.js
- Undefined variable: ```emailjs``` (lines 35 and 54). This is out of my control, I use the EmailJS code as per instruction. 
- Unexpected use of '|' (line 53). Again out of my control, I use the EmailJS code as per instruction.
- After warnings about 'only available in ES6' I searched for a solution. I add /*jshint esversion: 6 */ at the top of every JS file. This fixed the warnings.
- Do not use 'new' for side effects: fixed by storing the new object in a ```var```. This however led to a notification that there is an unused variable...

### Highscore.js
No warnings.

### App.js
- Do not use 'new' for side effects (line 322).
- One undefined variable: ```menu``` (line 322).

Unfortunately, I could not fix these warnings. The code is from the event delegation [snippet](https://javascript.info/event-delegation). 

## User stories
Each user story is tested thoroughly. All steps are taken in the main browsers at 3 different viewports: mobile (including tablet) and desktop.

Note that in this project the assumption is that there is only one type of user (one role).

### 1. See an inviting game that makes me curious and want to play!
- Go to [https://chiefchingu.github.io/milestone-two-memory-card-game/](https://chiefchingu.github.io/milestone-two-memory-card-game/).
- Homepage shows a catchy oneliner that triggers curiousity: try not to laugh.
- Explanatory image shows a funny scene, enticing you to get to know more.
- Click on the button 'game on' to start the game.

### 2. Choose how to play.
- Header shows 'Select mode', indicating that you need to select a mode.
- There are two options to choose from.
- Depending on your preference you can do a relaxed, non-competitive mode (chill) or a challenging mode (challenge).

### 3. Be able to play at my leisure.
- Click the Chill mode.
- A modal opens with three options for a difficulty:
    - Click easy: game starts with 4 cards. Go back to the game mode selection.
    - Click medium: game starts with 8 cards. Go back to the game mode selection.
    - Click hard: game starts with 12 cards. Go back to the game mode selection.

### 4. Be able to play 'competitive' and beat my own scores.
- Click the Challenge mode.
- The game starts with 4 cards.
- Number of moves = 0  indicates that you can track the actions.

Note: if first challenge game or high score is reset to 0, you do not see the best score information in the header.

### 5. Click any card as first card and card should turn.
- Click any card as first card.
- Card turns and a picture is showing.
- Card stays flipped.

### 6. Get extra help about what matches to look for.
- Matching pairs consist of a question and answer card. In case the question card is turned: you see the question displayed on the card.
- The question is only displayed on the first flipped card (if on the second card, the card will flip back when no match and then there is not enough time to read the text.)

### 7. Click any card as second card and card should turn.
- Click the first card that is turned again: nothing happens.You need to click any other card.
- Click any card as second card.
- Card turns as intended and picture is showing.

### 8. See if there is a match when two cards are turned.
- Two cards are turned, it has to be checked if there is a match.
- If a match: you see an animation that tilts the cards shortly.
- Click the first and second card again: nothing happens.

Note: Safari browsers bug out. The two cards animate (tilt) as expected, but then the second card that was turned disappears. After many tries of fixing (on iPhone only, so trial and error, no console checking), finally decided to disable animation for Safari browsers. Full details at section [Issues and solutions](#add-animation-on-match).

### 9. See cards flip back when there is no match.
- When no match, see that both cards flip back.
- Click a new card as first card.

### 10. See the number of moves I made so far.
- After a match or NO match: you see the counter for number of moves increment with +1 move.

### 11. In challenge mode: see my best score.
- If no best score available (meaning: first time challenge mode or best score is reset): there is no best score, you only see the number of moves in the header.
- If best score is available: you see the best score in the header of the game page (next to the moves counter).

### 12. Get confirmation when the game is finished.
- When all pairs are found, you see a game over page.
- Depending on the selected game mode, you see:

#### Chill mode
- You see a congratulations header text.
- You see an explanation of where the pictures come from.
- You see a button to start a new game.

#### Challenge mode
- You see a congratulations header text.
- You see a game evaluation message for:
    - new highscore,
    - draw,
    - no new highscore.
- You see your best score.
- You see your last score.
- You see a button to start a new game.
- You see a link to reset your highscore.

### 13. Reset best score to start fresh.
- You see a link to reset your highscore.
- Click on the link.
- You go back to the game mode selection page.
- Start a new challenge game.
- You see no best score, only a moves counter.

### 14. Get more information about the cards that are used.
- Click on the About link in the menu.
- If on mobile: open the mobile menu via the hamburger icon and click on the About link.
- Read the explanation about the owner of the images.
- Click the link to the owner's site.
- The link opens in a new tab.

### 15. Contact the maker of the game in case I have questions, suggestions or compliments.
- Click on the Contact link in the menu.
- You see a contact page with a form.
- If on mobile: open the mobile menu via the hamburger icon. You see the contact form in the overlay.
- Fill out the form and submit.
- You see a thank you message.
- Try to send the message without:
  - a name,
  - an email (leave empty),
  - a valid email (make an error on purpose),
  - a message.
- For all instances: you see a warning that you need to provide the correct and/or complete information.

### 16. Have fun!
- This one is difficult to test. The people who played the game so far, could not finish it without laughing!

## Features
Most of the features are covered by the test of user stories. For completeness, the total summary is given below.

|Area | Feature | Test passed|Remarks
|------| -------|:---------:|--------
|Home|explanatory image|OK|
||call to action|OK|
||navigation on desktop|OK|
||navigation on mobile|OK|
||on mobile: modal has contact form|OK|
|Game page|game modes|OK|
||chill mode: select level|OK|
||challenge mode: start level|OK|
||game tiles|OK|
||card context|OK|
||game logic|OK|Safari animation bugged, see user story #8|
||moves counter|OK|
||best score|OK|Only challenge mode|
||end game confirmation|OK|
||navigation on desktop|OK|
||navigation on mobile|OK|
||on mobile: modal has contact form|OK|
|Game over page|congratulations header|OK|
||explanation of images|OK|Only chill mode|
||best score|OK|Only challenge mode|
||last score|OK|Only challenge mode|
||evaluation messages|OK|Only challenge mode|
||reset highscore|OK|Only challenge mode|
||call to action|OK|
||navigation on desktop|OK|
||navigation on mobile|OK|
||on mobile: modal has contact form|OK|
|About page|explanation of website|OK|
||link to source images|OK|
||navigation on desktop|OK|
||navigation on mobile|OK|
||on mobile: modal has contact form|OK|
|Contact page|contact form|OK|Only desktop|
||navigation on desktop|OK|

## Aria-label
One special remark on the testing of the ```aria-label```: I tried to test it with the following programs.

- [Axe Accessibility](https://www.deque.com/axe/): did not detect the ```aria-label```.
- [NV Access](https://www.nvaccess.org): did not read the label. There is a plugin for aria, but I could not install this: out of date.

## Issues and solutions
### Determine viewport and adjust number of cards.
I tried to limit the number of cards on mobile for better UX (no scroll). First used ```display:none``` for the cards I wanted to hide. This worked, but it did not update the total number of possible matches. This was still based on all cards in the array. So, you could not win since the last matches were now from cards that are not displayed.

I then tried to do it from within JS. I found how to do a media query in javascript via [W3Schools](https://www.w3schools.com/howto/howto_js_media_queries.asp). If a mobile device, then I sliced the array and removed the last two cards. This works. Now I just need to remove the last two cards, marked ```.desktop``` from the html flow. This is done with the normal media query in CSS.

After my mentor call I decided to add levels of difficulty (like easy, medium, hard). This in turn lead to introducing game modes. These game modes made the Javascript media query redundant: I now control this via CSS (mobile users get less options to chose from).

### Flip cards and matching logic
At first I created the variable allowedTurns to control that only two cards can be clicked and turned. This worked, but it did not prevent users from clicking the same card twice. When doing this, the ```allowedTurns``` did increment, resulting in one card turned and not being able to click a second one. 

That is why I added a second check, a class: ```clickable```. At the start of the game all cards have this class. When a card is clicked and turned, this class is removed. So, you can no longer click one card twice. Then, when the cards are evaluated for a match the class ```clickable``` can be added again (if there was no match).

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

This worked perfect: you cannot click the same card twice. Big caveat though: this setup made it very difficult to evaluate if there was a match. So, I decided to separate turn one and turn two. No problems here when there was a match: the right classes were applied already (```clickable``` removed ```visible``` added). I only needed to reset the ```allowedTurns```. In case there was no match, I ran into problems again. I could target the last card turned and add classes. However, I could no longer target the first card that was turned.

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
When there is a match of cards I want to show this visually by nudging the matched pair. For some reason the cards first show the back-face, nudge and then show the ```front-face``` again. I tried targeting different elements of the card: 
```cardValueTurnOne.firstElementChild.children[1].classList.add('animation');``` results in adding the animation to the ```front-face```. The picture disappears for the duration of the animation and then appears again.

I tried removing the ```back-face```, but then I end up with a white space. When I added the animation to both the parent (```<div class="card"```) and the ```front-face``` the animation worked! However, putting the ```back-face``` back, caused the same problems as before. But, now I could at least see the animation work as intended.

Next step is to disable the ```back-face``` on a match before the animation happens. End result:
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

Then I found out that the animation did not work on Firefox... After many tries, I finally found the issue: the class ```front-face``` was set on the ```img```. I moved it up to the parent element ```<picture>``` and this solved the problem. Of course, I needed to change the DOM selecting too.

```javascript
cardValueTurnOne.firstElementChild.classList.add('animation');
cardValueTurnTwo.firstElementChild.classList.add('animation');
```

Unfortunately, tests on Safari were not successful: the animation works, but then the card disappears completely. I tried many different things: switch order of animation, set background colors to transparent, set ```animation fill-mode```. Nothing worked. The fact that I only have an iPhone to test is not helping. I cannot see in the console what exactly happens. Finally, I decided to disable the animation for Safari users.

I found a script to detect the Safari browser and made the animation dependent:

```javascript
function animateCards() {

    if(!safariAgent) {

        cardValueTurnOne.classList.add('animation');
        cardValueTurnTwo.classList.add('animation');
        cardValueTurnOne.firstElementChild.classList.add('animation');
        cardValueTurnTwo.firstElementChild.classList.add('animation');
        cardValueTurnOne.lastElementChild.className = 'back-face-hidden';
        cardValueTurnTwo.lastElementChild.className = 'back-face-hidden';

    }  
}
```

### Messed up header when mobile users change orientation of their device
I used vh to set the height of the header. This works as long as device is used in portrait orientation. Of course this no longer works correctly when you tilt your device: the viewport height will be much smaller, which resulted in shrinking headers and text overflow. Fixed this by setting the height to auto and applied padding to the elements inside it. However, the header is too high now. Fixed this by setting the media query to 800px (was 700px, so larger mobiles like iPhone X and Galaxy S10 triggered this viewport when in landscape: 740px long screens).

### Scroll necessary when resolution is 1920 x 1080
When starting the game on screens with 1920 x 1080 resolution, the game is not displayed correctly. You need to scroll, which is annoying when playing the game. Solved this by adding an extra media query for this screen size: adjusted padding, font-size and margins to get the game fully on screen.

### Keep highscores
For the challenge mode I wanted to keep highscores. Or better: best score, since the lower your moves count is, the better your score is. I read about ```localStorage``` and wanted to use this to track your score.

It gave some serious headaches to compare new scores with the saved ```localStorage``` best score. I wanted the best score only when there was a best score. So, when you play for the first time, there is no best score. Only your last score. Also, since I started the code with declaring the variables at each page refresh, the saved values were overwritten. When I finally found out that you can declare ```localStorage``` without first declaring the variable I could make this functionality work flawlessly. The code is in the file [Highscore.js](https://github.com/ChiefChingu/milestone-two-memory-card-game/blob/master/assets/scripts/highscore.js).

### Animation bug
After the first challenge (four cards) the second challenge loads. Upon loading you can see some cards animate while not being turned. It appears that the four cards from the first level do this. Also, when flipping these cards and forming a match they disappear for a second and come back. No more animation here. The eight cards from this level now bug as well in the next level with 12 cards.

It seemed that I accidentally forgot to adjust the removal of the animation when the board is reset for the next level (script tries to remove the animation from the ```img``` tag, which no longer has a class). Also, instead of targeting the ```card``` I accidentally targeted the ```this``` value.

