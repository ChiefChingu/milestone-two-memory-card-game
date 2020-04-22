## Introduction
This is the second milestone project of the fullstack software development course of Code Institute. I selected the memory card game assignment: flip cards and find the matching pairs. My take on this game is to create a game with matching pairs that are not identical, but related...

You can play the game [here].(https://chiefchingu.github.io/milestone-two-memory-card-game/)

## UX
This project is designed with the mobile user in mind. The [wireframes](#) reflect this: mobile first and desktop second. Also, the code is written from the mobile perspective: the mobile viewport is the baseline. Media queries are used to handle the desktop viewport.

I decided to create a very minimalistic design to ensure that all the focus goes to the game itself. This means a very minimal navigation at the bottom of each page, a combined contact and about page and of course the game page.

### User Stories
As a user I want to:

1. See an inviting game that makes me curious and want to play!
2. Understand what to do to start the game.
3. Click any card as first card and card should turn.
4. Click any card as second card and card should turn.
5. Get extra help about what matches to look for.
6. See if there is a match when two cards are turned.
7. See the cards flip back when there is no match.
8. See cards not flip back when there is a match.
9. See the number of turns I made so far.
10. Get confirmation when the game is finished.
11. Quit the game whenever I want.
12. Get more information about the cards that are used.
13. Contact the maker of the game in case I have questions, suggestions or compliments.
14. Have fun!

## Features
### Existing features
#### Home
- Explanatory image: explain what a user can expect by showing an example image.
- Call to action: stimulate the user to take action. In this case start the game.
- Navigation: minimal navigation to the about and contact page.

#### Game page
- Game tiles: clickable, turn on click.
- Card context: pairs do not have identical images, so a context is provided in a text label that appears after 1 second.
- Game logic: in case there is a match, the cards animate and remain visible.
- Moves counter: after each move (two cards turned) the counter updates.
- Quit option: if user wants to quit, there is a link back to the homepage.
- Navigation: minimal navigation to about and contact page and of course back to homepage.
- Confirmation when game is finished: user goes to the game over page.

#### Game over page
- Congratulations header.
- Explanation of images: where to find the originals.
- Call to action: stimulate the user to take action. In this case restart the game.
- Navigation: minimal navigation to about and contact page and of course back to homepage.

#### About and contact page
- Explanation of website.
- Contact option.

### Features left to implement
- Introduce levels: start with two cards at level 1. Then 3 cards at level 4, etc.
- Personal high score: keep track of your games and try to beat your scores.
- High score board: show all time statistics.

## Technologies Used

## Testing
For a detailed overview: see [TEST.md](https://github.com/ChiefChingu/milestone-two-memory-card-game/blob/master/TEST.md).

## Deployment

## Credits