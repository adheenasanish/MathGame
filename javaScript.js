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
        hide("gameOver");
        
     
        document.getElementById("startreset").innerHTML = "Reset Game";  
        
        startTimer();        
        generateQAndA();
    }
}

function startTimer(){
    calculation = setInterval(function(){
        timeremaining -= 1;
        document.getElementById("timeremainingvalue").innerHTML = timeremaining;
        if(timeremaining == 0){// game over
            stopCountdown();
            
            hide("timeremaining");
            hide("correct");
            hide("wrong");
            play = false;
            document.getElementById("startreset").innerHTML = "Start Game";
        }
    }, 1000);    
}

function generateQAndA(){
    var x = 1+ Math.round(9*Math.random());
    var y = 1+ Math.round(9*Math.random());
    correctAnswer = x*y;
    document.getElementById("question").innerHTML = x + "x" + y;
    var correctPos = 1+ Math.round(3*Math.random());
    document.getElementById("box"+correctPos).innerHTML = correctAnswer;
    

    
    var answers = [correctAnswer];
    
    for(i=1; i<5; i++){
        if(i != correctPos) {
            var wrongAnswer;
            do{
                wrongAnswer = (1+ Math.round(9*Math.random()))*(1+ Math.round(9*Math.random())); 
            }while(answers.indexOf(wrongAnswer)>-1)
            document.getElementById("box"+i).innerHTML = wrongAnswer;
            answers.push(wrongAnswer);
        }
    }
}

function stopCountdown(){
    clearInterval(calculation);   
}
