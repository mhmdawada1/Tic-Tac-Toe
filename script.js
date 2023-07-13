var score_one = 0;
var score_two = 0;
var current_player;
var other_player;

const retrieveName1 = () => {
    current_player = document.getElementById("name1").value;
    other_player = document.getElementById("name2").value;
}
document.addEventListener("DOMContentLoaded", function() {
    var form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
      event.retrieveName1();
    });
  });
var symbol = "X";
var boxes = ["N","N","N","N","N","N","N","N","N"] //N as in no character in the cell
var win_comb = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]];

document.addEventListener("DOMContentLoaded", function() {
    retrieveName1();
    var cells = document.getElementsByTagName("td");
  
    for (var i = 0; i < cells.length; i++) {
      cells[i].addEventListener("click", function() {
        makeMove(this.id.charAt(4));
      });
    }
  });

function makeMove(box) {
    if (boxes[box] == "N") {
        document.getElementById("cell" + box).innerHTML = symbol;
        boxes[box] = symbol;
    }
    else { alert("Sorry, Box Already been played");
}
    if (checkWin(symbol) == true) {
        document.getElementById("result").innerText = "player " + symbol + " wins!";
        updateScore(symbol);
        closeTable();

        if (score_one == 3 || score_two == 3){
            document.getElementById("result").innerText += ", Game Over!";
            closeTable();
            setTimeout(restart,5000);
        } else {
            setTimeout(restart,5000);
        }

    } else if (checkDraw() == true) {
        document.getElementById("result").innerText = "It's a draw ya shabeb!";
        setTimeout(restart,1000);
    } else { symbol = symbol == "X" ? "O" : "X"; }
    }

function checkWin(symbol) {
    for (var i = 0; i < win_comb.length; i++) {
        var combination = win_comb[i];
        var won = true;

        for (var j = 0; j < combination.length; j++) {
            if (boxes[combination[j]] !== symbol) {
                won = false;
                break;
            }
        }
    if (won) {
        return true;
        break;
    }
}
return won;
}

function checkDraw() {
    if (boxes.indexOf("N") == -1) {
        return true;
    }
    else { 
        return false;
    }
}
function updateScore(symbol) {
    if (symbol === "X") {
      score_one++;
      document.getElementById("scoreX").innerText = score_one;
    } else if (symbol === "O") {
      score_two++;
      document.getElementById("scoreO").innerText = score_two;
    }
  }

function closeTable() {
    var cells = document.getElementsByTagName("td");
    for (var i = 0; i < cells.length; i++) {
        cells[i].removeEventListener("click",makeMove);
    }
}

function restart() {
    symbol = "X";
    cells = document.getElementsByTagName("td");
    boxes = ["N","N","N","N","N","N","N","N","N"];
    document.getElementById("result").innerText = "";
    for (var i = 0; i < cells.length; i++) {
        cells[i].innerText = "";
        cells[i].removeEventListener("click", function() {
          makeMove(this.id.charAt(4));
        });
      }
      if (score_one === 3 || score_two === 3) {
        score_one = 0;
        score_two = 0;
        document.getElementById("scoreX").innerText = score_one;
        document.getElementById("scoreO").innerText = score_two;
}

}

