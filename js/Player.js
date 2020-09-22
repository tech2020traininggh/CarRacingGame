class Player {
  constructor(){
    this.index = null;
    this.distance = 0;
    this.name = null;
    //----------C40 code-----------
   this.rank= null;
  }

  /*  ref() is used to refer to the location of the database value we are working with.
      .on() creates a listener which keeps listening to the changes in the database.
Everytime a change in the database values of playerCount (reference) happens, the playerCount gets 

readPosition function is called.

  */

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      distance:this.distance
    });
  }

  static getPlayerInfo(){
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
    })
  }

//C40 Code------Start-----------
getCarsAtEnd() {
  database.ref('CarsAtEnd').on("value",(data)=>{
    this.rank = data.val();
  })
}
// :Static functions are functions which are common to all objects created using the class.

static updateCarsAtEnd(rank) {
  database.ref('/').update({
    CarsAtEnd:rank
  })
}
//------------------------C40 code end--------------

}
