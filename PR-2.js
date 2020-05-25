var playing = false;
var score =0;  
var trailsleft;
var chooseFruit=["apple","banana","watermelon","mango","cherries","orange","grapes","pear","peach"];

$(function(){
  $("#start-reset").click(function(){                  //click on start-reset button
  
      if (playing == true){                            // if playing       //yes
          location.reload();                           //reload the page
         }
   
      else{                                             //no
        playing = true;
        $("#score-value").html(score); 
        trailsleft=3;
        document.getElementById("trails").style.visibility= "visible";                  //show trails left
        addHearts();
                        
        $("#start-reset").html("RESET");                                                //start game to reset game  
          
        $("#fruits").show();                                                            //1. create a random fruit
        showFruits();
                       
                                                                                        //define a random step
                                                                                        //2.move fruit one step down
                                                                                        //is the fruit too low?
                                                                                        //no?
                                                                                        //repeat step-2
                                                                                        // 
            }
    });
});

function addHearts(){
     for(i =0;i<trailsleft;i++){
           $("#trails").append( '<img src="images/heart.png" class="heart">');
         }
  } 

function showFruits(){
    
    $("#fruits").append("<img src='images/"+chooseFruit[Math.round(8*Math.random())]+".png'>");
    $("#fruits").css({'top' : -50, "left" : 300});
    
}