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

function play(move)
{
    let computerPlays = computerSelect();
    let result = 0;
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
    document.getElementById('results').innerHTML += 'You played '+move+'. Computer played '+computerPlays+'. Result:' + result+ "<br>";
    return result;
}

function computerSelect() {
    return SELECTIONS[Math.floor(Math.random() * SELECTIONS.length)];
}