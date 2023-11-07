function send() {
    number1 = document.getElementById("number1").value;
    number1 = document.getElementById("number2").value;
    actual_answer = parseInt(number1) * parseInt(number2);
    question_number = "<h4>" + number + "X"+ number2 +"</h4>";
    input_box = "<br> Answer : <input type='text'id='input_cheak_box'>";
    cheak_button = "<br><br><button class'btn btn-info' onclick ='cheak()'>Cheak </button>";
    row = question_number + input_box + cheak_button ;
    document.getElementById("Output").innerHTML = row;
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
}
question_turn = "player1";
answer_turn = "player2";

function cheak() {
    get_answer = document.getElementById("input_cheak_box").value;
    if (answer_turn == "player1")
    {
        player_score =         +1; 
        document.getElementById("player1_score").innerHTML = "player1_score";
    }
    else 
    {
        player2_score = player2_score +1;
        document.getElementById("player1_score").innerHTML = player2_score_score;
    }
    if(question_turn == "player1")
    {
        question_turn = " ";
        document.getElementById("player_question").innerHTML = "Question Turn - " + player2_name ;
    }
    else
    {
        question_turn = "player1";
        document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name;
    }

    if (question_turn == "player1")
    {
        answer_turn = "player2";
        document.getElementById("player2_name").innerHTML =  "question Turn - " + player2_name;   
     }
     else
     {
        question_turn = "player1";
         document.getElementById("player_question").innerHTML = "question Turn - " + player2_name ;
     }
}