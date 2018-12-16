$(document).ready(function(){
    var randNumber = Math.floor(Math.random()*100);
    console.log(randNumber);
    // Showing the winning randNumber
    $('winningNumber').text(randNumber)*102+19;

    //initializing numbers

    var c1 = Math.floor(Math.random()*12+1);
    var c2 = Math.floor(Math.random()*12+1);
    var c3 = Math.floor(Math.random()*12+1);
    var c4 = Math.floor(Math.random()*12+1);

    var totalScore = 0;
    var wins = 0;
    var losses = 0;

    $('#wins').text(wins);
    $('#losses').text(losses);

    //initialize game

    function initialize(){
        randNumber = Math.floor(Math.random()*102+19);
        console.log(randNumber);
        $('#towin').text(randNumber);
        c1 = Math.floor(Math.random()*12+1);
        c2 = Math.floor(Math.random()*12+1);
        c3 = Math.floor(Math.random()*12+1);
        c4 = Math.floor(Math.random()*12+1);
        totalScore=0;
        $('#score').text(totalScore);
    }

    //Display your winnings

    function youWin(){
        alert("Clap for yourself! You just won!");
        wins++;
        $('#wins').text(wins);
        initialize();
    }

    //Display your losses

    function youLose(){
        alert("Well.... this is awkward, but um... you just lost.... EVERYTHING! but you can always try again!");
        losses++;
        $('#losses').text(losses);
        initialize();
    }

    //Crystal Interaction

    $('.red').on ('click', function(){
        totalScore = totalScore + c1;
        console.log("Total Score = " + totalScore);
        $('#score').text(totalScore); 
        //Comparison
            if (totalScore == Random){
              youWin();
            }
            else if ( totalScore > Random){
              youLose();
            }   
      })  
      $('.blue').on ('click', function(){
        totalScore = totalScore + c2;
        console.log("Total Score= " + totalScore);
        $('#score').text(totalScore); 
            if (totalScore == Random){
              youWin();
            }
            else if ( totalScore > Random){
              youLose();
            } 
      })  
      $('.yellow').on ('click', function(){
        totalScore = totalScore + c3;
        console.log("Total score= " + totalScore);
        $('#score').text(totalScore);
    
              if (totalScore == Random){
              youWin();
            }
            else if ( totalScore > Random){
              youLose();
            } 
      })  
      $('.green').on ('click', function(){
        totalScore = totalScore + c4;
        console.log("Total Score= " + totalScore);
        $('#score').text(totalScore); 
          
              if (totalScore == Random){
              youWin();
            }
            else if ( totalScore > Random){
              youLose();
            }
      });   
    }); 

