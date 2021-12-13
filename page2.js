question_number1=localStorage.getItem("question_number1");
question_number2=localStorage.getItem("question_number2");

player1_score=0;
player2_score=0;

question_turn="player1"
answer_turn="player2"

document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;

document.getElementById("player_question").innerHTML="Question Turn - " + player1_name;
document.getElementById("player_answer").innerHTML="Answer Turn - " + player2_name;


function send(){
    get_word=document.getElementById("word").value;

    question_number1="<h4>"+number1+"X"+number2+"</h4>";
    input_box="<br>Answer : <input type='text' id='input_check_box'>";
    check_button="<br><br><button class='btn btn-info' onclick='check()'>Check</button";
    row=player_question+input_box+check_button;
    document.getElementById("output").innerHTML=row1;
    document.getElementById("word").value="";

}

function check(){
    get_answer=document.getElementById("input_check_box").value;
    if(get_answer==actual_answer){
        if(answer_turn=="player1"){
            update_player1_score=player1_score+1;
            document.gerElementById("player1_score").innerHTML=update_player1_score;
        }
        else{
            update_player2_score=player2_score+1;
            document.getElementById("player2_score").innerHTML=update_player2_score;
        }
    }
        if(question_turn=="player1"){
            question_turn="player2"
            document.getElementById("player_question").innerHTML="Question Turn - "+player2_name;
        }
        else{
            question_turn="player1"
            document.getElementById("player_question").innerHTML="Question Turn - "+player1_name
        }
    }



