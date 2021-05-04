class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //write code here to hide question elements
   question.hide();

    


    //write code to change the background color here
background("turquoise blue")
    //write code to show a heading for showing the result of Quiz
textSize(35);
    text("RESULTS",300,200);
    //call getContestantInfo( ) here
    Contestant.getPlayerInfo();


    //write condition to check if contestantInfor is not undefined
    if(allContestants!==undefined){
      var answers=250;
      fill("pink");
      textSize(15);
      text("*NOTE: Contestants who answered correct are highlighted in green colour",100,380);
      for(var player in allContestants){
        var correctAns="2";
        if(correctAns===allContestants[player].answer){
        fill("green")
            }else{
            fill("red");
          }
          answers=answers+50;
          textSize(30);
          text(allContestants[player].name+":"+allContestants[player].answer,250,answers)
            }
      }
    //write code to add a note here
  
    //write code to highlight contest who answered correctly
 
}
}
