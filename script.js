var score_one = 0;
var score_two = 0;

var current_player = document.getElementById("name1").innerText;
var other_player = document.getElementById("name2").innerText;
var symbol = "X";
var boxes = ["N","N","N","N","N","N","N","N","N"] //N as in no character in the cell
var win_comb = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]];

function makeMove(box) {
    if (boxes[box] == "N") {
        document.getElementById("cell" + box).innerHTML = "X";
        boxes[box] = "X";
    }
    else { alert("Sorry, Box Already been played");
}
    if (checkWin(symbol) == true) {
        document.getElementById("result").innerText = "player " + current_player + " wins!";
        updateScore(symbol);
        closeTable();

        if (score_one == 3){
            document.getElementById("result").innerText += ", Game Over!";
            closeTable();
        } else if (score_two == 3){
            document.getElementById("result").innerText = "Player " + other_player + " wins, Game Over!";
        } else {
            setTimeout(restart,1000);
        }

    } else if (checkDraw() == true) {
        document.getElementById("result").innerText = "It's a draw ya shabeb!";
        setTimeout(restart,1000);
    } else { if (symbol == "X") {
        symbol = "O";
    } else {
        symbol = "X";
    }
 }

}
function checkWin(symbol) {
    for (var i = 0; i < win_comb.length; i++) {
        var combination = win_comb[i];
        var won = true;
        for (var j = 0;i < combination.length; i++) {
            if (boxes[combination[j]] != symbol) {
                won = false;
                break;
            }
        }
        if (won == true) {
            return true;
        } else {return false;}
    }

}