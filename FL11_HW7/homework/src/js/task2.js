let getAtempts = 4;
let useAtempts = 3;
let multi = 2;
let maxChanging = 4;
let prizeChanging = 2;
let start = confirm("Do you want to play a game?");
if (!start) {
    alert("You did not become a millionaire, but can")
} else {
    while(start) {
        let maximum = 8;
        let prize = 0;
        let highPrize = 100;
        let further = true;
        while (further) {
            let random = Math.floor(Math.random() * (maximum + 1));
            let a = false;
            for (let i = 1; ; i++) {
                let number = +prompt(`Choose a roulette pocket number from 0 to ${max}
                                    Attempts left: ${atempt-i}
                                    Total prize: ${prize}
                                    Possible prize on current attempt: ${Math.floor(maxPrize / Math.pow(multi, i-1))}`);
                if (number === random) {
                    prize += Math.floor(highPrize / Math.pow(multi, i - 1));
                    break;
                } else {
                    if (i === useAtempts) {
                        t = true;
                        break;
                    }
                }
            }
            if (t) {
                break;
            }
            cont = confirm(`Congratulation, you won! Your prize is: ${prize}. Do you want to continue?`);
            if (further) {
                maximum += maxChanging;
                maximumPrize *= prizeChanging;
            } else {
                break;
            }
        }
        alert(`Thank you for your participation. Your prize is: ${prize}`);
        start = confirm('Do you want to play again?');
    }
}
