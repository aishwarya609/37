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
    question.hide();
    background("yellow");
    fill(0);
    textSize(30);
    text("Result of the Quiz", 340,50);
    Contestants .getPlayerInfo();
    if(allContestants !== undefined){
      debugger;
      var display_Answer = 230;
      fill("Blue");
      textSize (20);
      text("*Note: Contestant who answered correct are highlighted in green color!",130,230);

      for(var plr in allContestants ){
        debugger;
        var correctAns = "2";
        if(correctAns === allContestants[plr].answer)
        fill ("Green");
        else
             fill ("Red");
             display_Answer+=30;
             textSize(20);
             text (allcontestants[plr].name +":" + allContestants[plr].answer,250,display_Answer);
                     
      }

    }
  }

}
