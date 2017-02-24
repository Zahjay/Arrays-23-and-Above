// Array objects

var bubbles = [];//Array. System will chose place if leave this is left blank.


function setup() {
  createCanvas(600, 400);
  for (var i = 0; i < 150; i++) { //Since the index var = 0 the index if less than 150.
    bubbles[i] = {//As it loops it is going through all index vaules not just specifc ones.
      x: (0, width),//cahnged width to 90
      fill: (36, 7, 4),
      y: random(0, height),//random starting value gives it random height at which it starts.
      display: function() {
        stroke(2, 12, random (95));//random alters the the way the outline of the shape is seen by going through it's range.
        fill(random(55), 0, 0); //this random alters the color inside of  the ellipse and gives a cool visual effect.
        ellipse(random (this.x), this.y, random(300), 12);//random width for this.x  and random 300 makes it move back and forth an up and down . 
      },
      move: function() {
        this.x = this.x + random(-1, 1)//this.x is defining the statement. It is saying move fuction this x equals itself + the range of (-1, 1). it will move randomly along this range 
        this.y = this.y + random(-60, 60);//states same thing as this. x once you randomly selcets vaule betweeen -60 and 60// used instead of  form -1 and-1  
      }
    }
  }

}

console.log(bubbles);//come back to only shaowed brackets

function draw() {
  background(65, 120, 25);
  for (var i = 0; i < bubbles.length; i++) {// Goes through all the numbers from 0 through entire array to move and display bubble objects. 
    bubbles[i].move();
    bubbles[i].display();//displays index value in this case it wouid start with var i then switch with the loop.
  }
}
