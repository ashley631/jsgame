"use strict";

let grantHealth = 20;
let userHealth = 15;
let userName = "Player 1";

const startGame = () => {
    const wantToPlay = prompt("Would you like to start a match against the Almighty Grant??");

    if (wantToPlay === "yes") {
        userName = prompt("Enter your name");
        
        return startTurn();
    }
    else {
        console.log("Should have said 'yes'! Come back again!");
    }

    return 0;
}

const startTurn = () => {
    let fightCommand = prompt("Would you like to attack or quit?");

    if (fightCommand === "attack") {
        doDamageToPlayers();
        displayCurrentHealth();

        if (grantHealth <= 0) {
            return 1;
        } else if (userHealth <= 0) {
            return 0;
        }

        startTurn()
    } else if (fightCommand === "quit") {
        console.log("Game Over. Bye!");
    }

    return null;
}

const doDamageToPlayers = () => {
    setTimeout(2000);
    userHealth -= Math.floor(Math.random() * 5) + 1;
    grantHealth -= Math.floor(Math.random() * 5) + 1;
}

const displayCurrentHealth = () => {
    console.log(`Grant has ${grantHealth} left`);
    console.log(`${userName} has ${userHealth} left`);
}

if (startGame()) {
    console.log("YOU BEAT THE ALMIGHT GRANT!");
} else {
    console.log("YOU LOSE!");
}