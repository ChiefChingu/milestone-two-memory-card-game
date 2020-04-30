let lastGame = localStorage.getItem("lastGameLocal");

// if(localStorage.getItem("game A") === null) {
//     localStorage.setItem("game A", "A done");
//     console.log(localStorage.getItem("game A"));
// } else if(localStorage.getItem("game B") === null) {
//     localStorage.setItem("game B", "B done");
//     console.log(localStorage.getItem("game B"));
// } else /* (localStorage.getItem("game C") === null) */ {
//     localStorage.setItem("game C", "C done");
//     console.log(localStorage.getItem("game C"));
// }

// This does not work
if(localStorage.getItem("game A") === null) {
    localStorage.setItem("game A", lastGame);
    console.log(localStorage.getItem("game A"));
} else if(localStorage.getItem("game B") === null) {
    localStorage.setItem("game B", lastGame);
    console.log(localStorage.getItem("game B"));
} else /* (localStorage.getItem("game C") === null) */ {
    localStorage.setItem("game C", lastGame);
    console.log(localStorage.getItem("game C"));
}


console.log('game A', localStorage.getItem("game A"));
console.log('game B', localStorage.getItem("game B"));
console.log('game C', localStorage.getItem("game C"));

/*  else if (localStorage.getItem("game B") === "B") {
    console.log('match B');
    localStorage.setItem("game B", "Done");
    console.log(localStorage.getItem("game B"));
} else if (localStorage.getItem("game C") === "C") {
    console.log('match C');
    localStorage.setItem("game A", "A");
    localStorage.setItem("game B", "B");
    localStorage.setItem("game C", "C");
} */

/* Clear all local storage values */
function resetLocalStorage() {
    localStorage.clear();
}

// resetLocalStorage();

