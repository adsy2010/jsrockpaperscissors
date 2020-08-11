/**
 * @author Adam
 * @created 20:50
 *
 */

const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";
const SELECTIONS = [ROCK, PAPER, SCISSORS];

const WON = "WIN";
const DRAW = "DRAW";
const LOST = "LOSE";

let wins = 0;
let draws = 0;
let losses = 0;

function play(move)
{
    let computerPlays = computerSelect();
    let result = "";
    switch(move){
        case ROCK:
            result = (computerPlays === PAPER) ? LOST : (computerPlays === SCISSORS) ? WON : DRAW;
            break;
        case PAPER:
            result = (computerPlays === PAPER) ? DRAW : (computerPlays === SCISSORS) ? WON : LOST;
            break;
        case SCISSORS:
            result = (computerPlays === PAPER) ? WON : (computerPlays === SCISSORS) ? DRAW : LOST;
            break;
    }
    let line = `${getTime()} --- You played ${move}. Computer played ${computerPlays}. Result: ${result} <br>`;
    document.getElementById('results').insertAdjacentHTML('afterbegin', line);
    score(result);
}

function score(result) {
    document.getElementById('wins').innerText = (wins += (result === WON)).toString();
    document.getElementById('draws').innerText = (draws += (result === DRAW)).toString();
    document.getElementById('losses').innerText = (losses += (result === LOST)).toString();
    document.getElementById('winRate').innerText = winRate().toString() + "%";
}

function computerSelect() {
    return SELECTIONS[Math.floor(Math.random() * SELECTIONS.length)];
}

function winRate()
{
    if(wins > 0)
    {
        return Math.floor(wins / (draws + losses + wins) * 100);
    }
    else return 0;
}

function getTime() {
    let today = new Date();
    return today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
}

score(); //populates the score with 0