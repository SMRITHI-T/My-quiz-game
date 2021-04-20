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
    this.question.hide();
    this.option1.hide();
    this.option2.hide();
    this.option3.hide();
    this.option4.hide();
    this.title.hide();
    this.input1.hide();
    this.input2.hide();
    this.button.hide();


    //write code to change the background color here
background("turquoise blue")
    //write code to show a heading for showing the result of Quiz
textSize(35);
    text("RESULTS",400,100);
    //call getContestantInfo( ) here
if(allContestants!==undefined){

}

    //write condition to check if contestantInfor is not undefined

    //write code to add a note here
    fill(pink);
    textSize(15);
    text("*NOTE: Contestants who answered correct are highlighted in green colour")
    //write code to highlight contest who answered correctly
    for(var player in allContestants){
var correctAns="2";
if(correctAns===allContestants[player].answer)
fill("green")
    }else{
    fill("red");
  }

}

//static getPlayerInfo(){
  //var playerInfoR=database.ref('players')
//playerInfoR.on('value',(data)=>{
  //allPlayers=data.val()
