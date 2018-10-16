let grantHealth = 10;
let userHealth = 40;
let userWins = 0;
let play = prompt("Would you like to play?");
if (play === "yes") {
    let userName = prompt("Enter your name");
}

{
    while (play) {
        userHealth -= Math.floor(Math.random() * 2) + 1;
        grantHealth -= Math.floor(Math.random() * 2) + 1;
        console.log(`Grant has ${grantHealth} left`);
        console.log(`userName has ${userHealth} left`);


        if (grantHealth <= 0) {
            userWins = +1;
            grantHealth = 10;

        }
        if (userHealth <= 0) {
            console.log("You lose.");
            break;
        }
        if (userWins === 3) {
            console.log("You win.");
            break;
        }
    }





}

