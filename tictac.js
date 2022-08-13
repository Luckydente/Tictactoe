




function myfunc() {
 
    // Sets up the DOM's boxes and get sthem ready for input.
    var box1, box2, box3, box4, box5, box6, box7, box8, box9;
    b1 = document.getElementById("box1").value;
    b2 = document.getElementById("box2").value;
    b3 = document.getElementById("box3").value;
    b4 = document.getElementById("box4").value;
    b5 = document.getElementById("box5").value;
    b6 = document.getElementById("box6").value;
    b7 = document.getElementById("box7").value;
    b8 = document.getElementById("box8").value;
    b9 = document.getElementById("box9").value;

  
    // These if statements check to see if player X won by checking every single combination of boxes that would lead them to winning. 
    if ((b1 == 'x' || b1 == 'X') && (b2 == 'x' ||
        b2 == 'X') && (b3 == 'x' || b3 == 'X')) {
        document.getElementById('turncount')
            .innerHTML = "Player X won";
        document.getElementById("box4").disabled = true;
        document.getElementById("box5").disabled = true;
        document.getElementById("box6").disabled = true;
        document.getElementById("box7").disabled = true;
        document.getElementById("box8").disabled = true;
        document.getElementById("box9").disabled = true;
        $('#passX').show()
    }
    else if ((b1 == 'x' || b1 == 'X') && (b4 == 'x' ||
        b4 == 'X') && (b7 == 'x' || b7 == 'X')) {
        document.getElementById('turncount')
            .innerHTML = "Player X won";
        document.getElementById("box2").disabled = true;
        document.getElementById("box3").disabled = true;
        document.getElementById("box5").disabled = true;
        document.getElementById("box6").disabled = true;
        document.getElementById("box8").disabled = true;
        document.getElementById("box9").disabled = true;
 
        $('#passX').show()
    }
    else if ((b7 == 'x' || b7 == 'X') && (b8 == 'x' ||
        b8 == 'X') && (b9 == 'x' || b9 == 'X')) {
        document.getElementById('turncount')
            .innerHTML = "Player X won";
        document.getElementById("box1").disabled = true;
        document.getElementById("box2").disabled = true;
        document.getElementById("box3").disabled = true;
        document.getElementById("box4").disabled = true;
        document.getElementById("box5").disabled = true;
        document.getElementById("box6").disabled = true;
        $('#passX').show()
    }
    else if ((b3 == 'x' || b3 == 'X') && (b6 == 'x' ||
        b6 == 'X') && (b9 == 'x' || b9 == 'X')) {
        document.getElementById('turncount')
            .innerHTML = "Player X won";
        document.getElementById("box1").disabled = true;
        document.getElementById("box2").disabled = true;
        document.getElementById("box4").disabled = true;
        document.getElementById("box5").disabled = true;
        document.getElementById("box7").disabled = true;
        document.getElementById("box8").disabled = true;
        $('#passX').show()
    }
    else if ((b1 == 'x' || b1 == 'X') && (b5 == 'x' ||
        b5 == 'X') && (b9 == 'x' || b9 == 'X')) {
        document.getElementById('turncount')
            .innerHTML = "Player X won";
        document.getElementById("box2").disabled = true;
        document.getElementById("box3").disabled = true;
        document.getElementById("box4").disabled = true;
        document.getElementById("box6").disabled = true;
        document.getElementById("box7").disabled = true;
        document.getElementById("box8").disabled = true;
        $('#passX').show()
    }
    else if ((b3 == 'x' || b3 == 'X') && (b5 == 'x' ||
        b5 == 'X') && (b7 == 'x' || b7 == 'X')) {
        document.getElementById('turncount')
            .innerHTML = "Player X won";
        document.getElementById("box1").disabled = true;
        document.getElementById("box2").disabled = true;
        document.getElementById("box4").disabled = true;
        document.getElementById("box6").disabled = true;
        document.getElementById("box8").disabled = true;
        document.getElementById("box9").disabled = true;
        $('#passX').show()
    }
    else if ((b2 == 'x' || b2 == 'X') && (b5 == 'x' ||
        b5 == 'X') && (b8 == 'x' || b8 == 'X')) {
        document.getElementById('turncount')
            .innerHTML = "Player X won";
        document.getElementById("box1").disabled = true;
        document.getElementById("box3").disabled = true;
        document.getElementById("box4").disabled = true;
        document.getElementById("box6").disabled = true;
        document.getElementById("box7").disabled = true;
        document.getElementById("box9").disabled = true;
        $('#passX').show()
    }
    else if ((b4 == 'x' || b4 == 'X') && (b5 == 'x' ||
        b5 == 'X') && (b6 == 'x' || b6 == 'X')) {
        document.getElementById('turncount')
            .innerHTML = "Player X won";
        document.getElementById("box1").disabled = true;
        document.getElementById("box2").disabled = true;
        document.getElementById("box3").disabled = true;
        document.getElementById("box7").disabled = true;
        document.getElementById("box8").disabled = true;
        document.getElementById("box9").disabled = true;
        $('#passX').show()
    }
 
  //These if statments will check if player 0 has won by checking what boxes are enabled and which of any of the combinations of tic tac toe wins with.
    else if ((b1 == '0' || b1 == '0') && (b2 == '0' ||
        b2 == '0') && (b3 == '0' || b3 == '0')) {
        document.getElementById('turncount')
            .innerHTML = "Player 0 won";
        document.getElementById("box4").disabled = true;
        document.getElementById("box5").disabled = true;
        document.getElementById("box6").disabled = true;
        document.getElementById("box7").disabled = true;
        document.getElementById("box8").disabled = true;
        document.getElementById("box9").disabled = true;
        $('#pass0').show()
    }
    else if ((b1 == '0' || b1 == '0') && (b4 == '0' ||
        b4 == '0') && (b7 == '0' || b7 == '0')) {
        document.getElementById('turncount')
            .innerHTML = "Player 0 won";
        document.getElementById("box2").disabled = true;
        document.getElementById("box3").disabled = true;
        document.getElementById("box5").disabled = true;
        document.getElementById("box6").disabled = true;
        document.getElementById("box8").disabled = true;
        document.getElementById("box9").disabled = true;
        $('#pass0').show()
    }
        
    
    else if ((b7 == '0' || b7 == '0') && (b8 == '0' ||
        b8 == '0') && (b9 == '0' || b9 == '0')) {
        document.getElementById('turncount')
            .innerHTML = "Player 0 won";
        document.getElementById("box1").disabled = true;
        document.getElementById("box2").disabled = true;
        document.getElementById("box3").disabled = true;
        document.getElementById("box4").disabled = true;
        document.getElementById("box5").disabled = true;
        document.getElementById("box6").disabled = true;
        $('#pass0').show()
    }
    else if ((b3 == '0' || b3 == '0') && (b6 == '0' ||
        b6 == '0') && (b9 == '0' || b9 == '0')) {
        document.getElementById('turncount')
            .innerHTML = "Player 0 won";
        document.getElementById("box1").disabled = true;
        document.getElementById("box2").disabled = true;
        document.getElementById("box4").disabled = true;
        document.getElementById("box5").disabled = true;
        document.getElementById("box7").disabled = true;
        document.getElementById("box8").disabled = true;
        $('#pass0').show()
    }
    else if ((b1 == '0' || b1 == '0') && (b5 == '0' ||
        b5 == '0') && (b9 == '0' || b9 == '0')) {
        document.getElementById('turncount')
            .innerHTML = "Player 0 won";
        document.getElementById("box2").disabled = true;
        document.getElementById("box3").disabled = true;
        document.getElementById("box4").disabled = true;
        document.getElementById("box6").disabled = true;
        document.getElementById("box7").disabled = true;
        document.getElementById("box8").disabled = true;
        $('#pass0').show()
    }
    else if ((b3 == '0' || b3 == '0') && (b5 == '0' ||
        b5 == '0') && (b7 == '0' || b7 == '0')) {
        document.getElementById('turncount')
            .innerHTML = "Player 0 won";
        document.getElementById("box1").disabled = true;
        document.getElementById("box2").disabled = true;
        document.getElementById("box4").disabled = true;
        document.getElementById("box6").disabled = true;
        document.getElementById("box8").disabled = true;
        document.getElementById("box9").disabled = true;
        $('#pass0').show()
    }
    else if ((b2 == '0' || b2 == '0') && (b5 == '0' ||
        b5 == '0') && (b8 == '0' || b8 == '0')) {
        document.getElementById('turncount')
            .innerHTML = "Player 0 won";
        document.getElementById("box1").disabled = true;
        document.getElementById("box3").disabled = true;
        document.getElementById("box4").disabled = true;
        document.getElementById("box6").disabled = true;
        document.getElementById("box7").disabled = true;
        document.getElementById("box9").disabled = true;
        $('#pass0').show()
    }
    else if ((b4 == '0' || b4 == '0') && (b5 == '0' ||
        b5 == '0') && (b6 == '0' || b6 == '0')) {
        document.getElementById('turncount')
            .innerHTML = "Player 0 won";
        document.getElementById("box1").disabled = true;
        document.getElementById("box2").disabled = true;
        document.getElementById("box3").disabled = true;
        document.getElementById("box7").disabled = true;
        document.getElementById("box8").disabled = true;
        document.getElementById("box9").disabled = true;
        $('#pass0').show()
    }
 
    // Checking of Player 0 finish
    // Here, Checking about Tie
    else if ((b1 == 'X' || b1 == '0') && (b2 == 'X'
        || b2 == '0') && (b3 == 'X' || b3 == '0') &&
        (b4 == 'X' || b4 == '0') && (b5 == 'X' ||
        b5 == '0') && (b6 == 'X' || b6 == '0') &&
        (b7 == 'X' || b7 == '0') && (b8 == 'X' ||
        b8 == '0') && (b9 == 'X' || b9 == '0')) {
            document.getElementById('turncount')
                .innerHTML = "Match Tie";
                $('#passtie').show()
    }
    else {
 
        // Here, Printing Result
        if (flag == 1) {
            document.getElementById('turncount')
                .innerHTML = "Player X Turn";
        }
        else {
            document.getElementById('turncount')
                .innerHTML = "Player 0 Turn";
        }
    }
}
 
// Function to reset game
function myfunc_2() {
    location.reload();
    document.getElementById('box1').value = '';
    document.getElementById("box2").value = '';
    document.getElementById("box3").value = '';
    document.getElementById("box4").value = '';
    document.getElementById("box5").value = '';
    document.getElementById("box6").value = '';
    document.getElementById("box7").value = '';
    document.getElementById("box8").value = '';
    document.getElementById("box9").value = '';
 
}
 
// These functions check between who's turn it is, and gives it the X or 0 value.
flag = 1;
function myfunc_3() {
    if (flag == 1) {
        document.getElementById("box1").value = "X";
        document.getElementById("box1").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("box1").value = "0";
        document.getElementById("box1").disabled = true;
        flag = 1;
    }
}
 
function myfunc_4() {
    if (flag == 1) {
        document.getElementById("box2").value = "X";
        document.getElementById("box2").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("box2").value = "0";
        document.getElementById("box2").disabled = true;
        flag = 1;
    }
}
 
function myfunc_5() {
    if (flag == 1) {
        document.getElementById("box3").value = "X";
        document.getElementById("box3").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("box3").value = "0";
        document.getElementById("box3").disabled = true;
        flag = 1;
    }
}
 
function myfunc_6() {
    if (flag == 1) {
        document.getElementById("box4").value = "X";
        document.getElementById("box4").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("box4").value = "0";
        document.getElementById("box4").disabled = true;
        flag = 1;
    }
}
 
function myfunc_7() {
    if (flag == 1) {
        document.getElementById("box5").value = "X";
        document.getElementById("box5").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("box5").value = "0";
        document.getElementById("box5").disabled = true;
        flag = 1;
    }
}
 
function myfunc_8() {
    if (flag == 1) {
        document.getElementById("box6").value = "X";
        document.getElementById("box6").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("box6").value = "0";
        document.getElementById("box6").disabled = true;
        flag = 1;
    }
}
 
function myfunc_9() {
    if (flag == 1) {
        document.getElementById("box7").value = "X";
        document.getElementById("box7").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("box7").value = "0";
        document.getElementById("box7").disabled = true;
        flag = 1;
    }
}
 
function myfunc_10() {
    if (flag == 1) {
        document.getElementById("box8").value = "X";
        document.getElementById("box8").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("box8").value = "0";
        document.getElementById("box8").disabled = true;
        flag = 1;
    }
}
 
function myfunc_11() {
    if (flag == 1) {
        document.getElementById("box9").value = "X";
        document.getElementById("box9").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("box9").value = "0";
        document.getElementById("box9").disabled = true;
        flag = 1;
    }
}