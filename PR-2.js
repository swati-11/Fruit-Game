  
  var playing = false;
  var score =0;  
  var trailsleft;

$(function(){
  
  $("#start-reset").click(function(){
    if (playing == true){
                    //click on start-reset button
                    // if playing
                    //yes
                    //reload the page
        
        location.reload();
        
    }
    else{ //no
        
        playing = true;
        $("#score-value").html(score); 
        $("#trails").show();
        trailsleft=3;
                       addhearts();
                        //show trails left
                        //start game to reset game
                        //1. create a random fruit
                        //define a random step
                        //2.move fruit one step down
                        //is the fruit too low?
                        //no?
                        //repeat step-2
                        // 
           
    }
});

    });

function addhearts(){
      for(i =0;i<trailsleft;i++){
          $("#trails").append(" X ");
      }
  } 
     

  //click on start-reset button



// if playing
    //yes
        //reload the page
       