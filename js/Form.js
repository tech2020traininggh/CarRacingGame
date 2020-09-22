class Form {

  constructor() {
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.greeting = createElement('h2');
    this.title = createElement('h2');
    //c39 code
    this.reset = createButton("Reset");
  }
/*
hide() function  will be called when the game state changes and when we want to hide the form.

*/

  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();
  }

  /* "this" refers to the object which is calling the function. We want 'this' inside mousePressed function to refer
to the form object. However, button element is calling the function mousePressed() and 'this' refers to the button element here.

This is not what we want. For 'this' to continue to refer to the form object, we use arrow functions.

Arrow functions bind the function to the original object which calls it. Here mousePressed is called inside the display
 function which is called by the form object. ()=> Arrow function ensures that 'this' remains bound to the form object.

*/

  display(){
    this.title.html("Car Racing Game");
    this.title.position(displayWidth/2 - 50, 0);

    this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
    this.button.position(displayWidth/2 + 30, displayHeight/2);
   //c39 code------start------------
    this.reset.position(displayWidth-100, 20);
    //-----------end--------

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Hello " + player.name)
      this.greeting.position(displayWidth/2 - 70, displayHeight/4);
    });

    //c39 code---------start----------
      this.reset.mousePressed(()=>{
      player.updateCount(0);
      game.update(0);
     }
    );
    //c39 code -------- end -------------

  }
}
