//javascript.js
var play = false;
var score;
var calculation;
var timeremaining;
var correctAnswer;

document.getElementById("startreset").onclick = function(){    
    if(play == true){
        
        location.reload(); 
        
    }else{     
        
        play = true;        
        score = 0;
        document.getElementById("scorevalue").innerHTML = score;       
        show("timeremaining");
        timeremaining = 60;
        document.getElementById("timeremainingvalue").innerHTML = timeremaining;        
        hide("gameOver");    
        document.getElementById("startreset").innerHTML = "Reset Game";       
        startTimer();        
        generateQA();
    }
    
}



for(i=1; i<5; i++){
    document.getElementById("box"+i).onclick = function(){

    if(play == true){
        if(this.innerHTML == correctAnswer){           
         
            score++;
            document.getElementById("scorevalue").innerHTML = score;
          
            hide("wrongAns");
            show("correctAns");
            setTimeout(function(){
                hide("correctAns");   
            }, 1000);
            
      
            generateQA();
        }else{
  
            hide("correctAns");
            show("wrongAns");
            setTimeout(function(){
                hide("wrongAns");   
            }, 1000);
        }
    }
}   
}

function startTimer(){
    calculation = setInterval(function(){
        timeremaining -= 1;
        document.getElementById("timeremainingvalue").innerHTML = timeremaining;
        if(timeremaining == 0){
            stopCountdown();
            show("gameOver");
         document.getElementById("gameOver").innerHTML = "<p>Game over!</p><p>Your score is : " + score + "</p>";   
            hide("timeremaining");
            hide("correctAns");
            hide("wrongAns");
            play = false;
            document.getElementById("startreset").innerHTML = "Start Game";
        }
    }, 1000);    
}

function hide(Id){
    document.getElementById(Id).style.display = "none";   
}


function stopCountdown(){
    clearInterval(calculation);   
}





function show(Id){
    document.getElementById(Id).style.display = "block";   
}



function generateQA(){
    var x = 1+ Math.round(9*Math.random());
    var y = 1+ Math.round(9*Math.random());
    correctAnswer = x*y;
    document.getElementById("question").innerHTML = x + "x" + y;
    var correctPosition = 1+ Math.round(3*Math.random());
    document.getElementById("box"+correctPosition).innerHTML = correctAnswer; 
    

    
    var answers = [correctAnswer];
    
    for(i=1; i<5; i++){
        if(i != correctPosition) {
            var wrongAnswer;
            do{
                wrongAnswer = (1+ Math.round(9*Math.random()))*(1+ Math.round(9*Math.random())); //a wrong answer
            }while(answers.indexOf(wrongAnswer)>-1)
            document.getElementById("box"+i).innerHTML = wrongAnswer;
            answers.push(wrongAnswer);
        }
    }
}