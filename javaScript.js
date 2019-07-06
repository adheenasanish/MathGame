var play = false;
var timeremaining;
var score;
var calculation;
var correctAnswer;
document.getElementById("startreset").onclick = function(){
    if(play == true)
    {
        location.reload();
    }
    else
    {
        play = true;
        score = 0;
        document.getElementById("scorevalue").innerHTML = score;
        show("timeremaining");
        timeremaining = 60;
        document.getElementById("timeremainingvalue").innerHTML = timeremaining;



    }
}